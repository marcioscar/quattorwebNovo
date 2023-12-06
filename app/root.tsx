import styles from "./globals.css";
import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";
import Nav from "./components/Nav";
import { getSession } from "./session.server";
import { getAluno } from "./utils/aluno.server";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Quattor Academia",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (!session.get("aluno")?.id) {
    return null;
  }
  const alunoa = await getAluno(session.get("aluno")?.id);
  const aluno = alunoa[0];
  return json(aluno);
};

export default function App() {
  const aluno = useLoaderData();

  return (
    <html lang="pt">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Nav aluno={aluno} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
