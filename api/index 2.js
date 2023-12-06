var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});

// app/globals.css
var globals_default = "/build/_assets/globals-NQ64LA7O.css";

// app/root.tsx
var import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/components/Nav.tsx
var import_react2 = require("react"), import_react3 = require("@remix-run/react"), import_io = require("react-icons/io"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Index(aluno) {
  var _a, _b, _c, _d, _e;
  let [navbar, setNavbar] = (0, import_react2.useState)(!1), activeClassName = "text-orange-500", NoaActiveClassName = "text-orange-white";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: " w-full px-2 mx-auto  bg-stone-200 print:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "justify-between  mx-auto lg:max-w-7xl md:items-center md:flex md:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between py-3 md:py-5 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.NavLink, { to: "/", className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "img",
        {
          src: "/logo_preto.svg",
          className: "mr-2 h-7 md:h-10",
          alt: "Quattor Logo"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Nav.tsx",
          lineNumber: 16,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Nav.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      ((_a = aluno.aluno) == null ? void 0 : _a.idMember) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-1 md:ml-14", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "img",
            {
              src: aluno.aluno.photoUrl ? aluno.aluno.photoUrl : "/user.png",
              alt: "avatar",
              className: "h-9 w-9 mr-2 md:w-12 md:h-12 rounded-full shadow-md "
            },
            void 0,
            !1,
            {
              fileName: "app/components/Nav.tsx",
              lineNumber: 25,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: aluno.aluno.firstName.substring(0, 9) }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 32,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Nav.tsx",
          lineNumber: 24,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.NavLink, { to: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_io.IoIosLogOut, { className: " ml-4 w-6 h-6" }, void 0, !1, {
          fileName: "app/components/Nav.tsx",
          lineNumber: 35,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/Nav.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Nav.tsx",
        lineNumber: 23,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "button",
        {
          className: "p-1 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border",
          onClick: () => setNavbar(!navbar),
          children: navbar ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_io.IoMdClose, { className: "w-8 h-8" }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 45,
            columnNumber: 19
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_io.IoMdMenu, { className: "w-8 h-8" }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 47,
            columnNumber: 19
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Nav.tsx",
          lineNumber: 41,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Nav.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "div",
      {
        className: `flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.NavLink,
            {
              onClick: () => setNavbar(!navbar),
              to: "/",
              className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
              children: "HOME"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Nav.tsx",
              lineNumber: 60,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 59,
            columnNumber: 15
          }, this),
          ((_b = aluno.aluno) == null ? void 0 : _b.idMember) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.NavLink,
            {
              to: "/aluno",
              prefetch: "render",
              onClick: () => setNavbar(!navbar),
              className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
              children: "TREINOS"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Nav.tsx",
              lineNumber: 71,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 70,
            columnNumber: 17
          }, this),
          ((_c = aluno.aluno) == null ? void 0 : _c.idMember) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.NavLink,
            {
              to: "/especial",
              prefetch: "render",
              onClick: () => setNavbar(!navbar),
              className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
              children: "ESPECIAIS"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Nav.tsx",
              lineNumber: 84,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.NavLink,
            {
              to: "/login",
              prefetch: "render",
              onClick: () => setNavbar(!navbar),
              className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
              children: "ALUNO"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Nav.tsx",
              lineNumber: 97,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 96,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: " md:hidden font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.NavLink,
            {
              to: "/spinning",
              onClick: () => setNavbar(!navbar),
              className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
              children: "SPINNING"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Nav.tsx",
              lineNumber: 108,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, this),
          ((_d = aluno.aluno) == null ? void 0 : _d.idMember) === 4 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.NavLink,
            {
              to: "/aluno/planejamento",
              onClick: () => setNavbar(!navbar),
              className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
              children: "PLANEJAMENTO"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Nav.tsx",
              lineNumber: 120,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 119,
            columnNumber: 17
          }, this),
          ((_e = aluno.aluno) == null ? void 0 : _e.idMember) === 17841 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              import_react3.NavLink,
              {
                to: "/cadastro",
                onClick: () => setNavbar(!navbar),
                className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
                children: "CADASTRO"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Nav.tsx",
                lineNumber: 133,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Nav.tsx",
              lineNumber: 132,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              import_react3.NavLink,
              {
                to: "/cadaulas",
                onClick: () => setNavbar(!navbar),
                className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
                children: "AULAS"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Nav.tsx",
                lineNumber: 143,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Nav.tsx",
              lineNumber: 142,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              import_react3.NavLink,
              {
                to: "/treinos",
                onClick: () => setNavbar(!navbar),
                className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
                children: "LISTA"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Nav.tsx",
                lineNumber: 153,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Nav.tsx",
              lineNumber: 152,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              import_react3.NavLink,
              {
                to: "/bancotreino",
                onClick: () => setNavbar(!navbar),
                className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
                children: "MONTAGEM"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Nav.tsx",
                lineNumber: 163,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Nav.tsx",
              lineNumber: 162,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "font-semibold text-gray-600 hover:text-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              import_react3.NavLink,
              {
                to: "/aluno/grupo",
                onClick: () => setNavbar(!navbar),
                className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
                children: "GRUPOS"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Nav.tsx",
                lineNumber: 173,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Nav.tsx",
              lineNumber: 172,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 131,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Nav.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Nav.tsx",
        lineNumber: 54,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Nav.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Nav.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/session.server.ts
var import_node = require("@remix-run/node"), SESSION_SECRET = process.env.SESSION_SECRET, { getSession, commitSession, destroySession } = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    maxAge: 6e4,
    path: "/",
    sameSite: "lax",
    secrets: [SESSION_SECRET],
    secure: !1
  }
});

// app/utils/aluno.server.ts
var import_date_fns = require("date-fns");

// app/utils/prisma.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/utils/aluno.server.ts
var import_web_fetch = __toESM(require("@remix-run/web-fetch")), import_uuid = require("uuid"), EVO_AUTH = process.env.NEXT_PUBLIC_EVO_AUTH, getAluno = async (matricula) => (await (0, import_web_fetch.default)(
  `https://evo-integracao.w12app.com.br/api/v1/members/basic?idMember=${matricula}&take=1&skip=0`,
  {
    method: "GET",
    headers: {
      Authorization: "Basic " + btoa(EVO_AUTH)
    }
  }
)).json();
var getAlunoGym = async (matricula) => {
  if (!matricula)
    return null;
  try {
    return (await (0, import_web_fetch.default)(
      `https://evo-integracao.w12app.com.br/api/v1/members?take=50&skip=0&idsMembers=${matricula}&onlyPersonal=false&showActivityData=false`,
      {
        method: "GET",
        headers: {
          Authorization: "Basic " + btoa(EVO_AUTH)
        }
      }
    )).json();
  } catch (error) {
    throw error;
  }
}, getAlunoNome = async (nome) => {
  if (!nome)
    return null;
  try {
    return (await (0, import_web_fetch.default)(
      `https://evo-integracao.w12app.com.br/api/v1/members?name=${nome}&status=1&take=50&skip=0&onlyPersonal=false`,
      {
        method: "GET",
        headers: {
          Authorization: "Basic " + btoa(EVO_AUTH)
        }
      }
    )).json();
  } catch (error) {
    throw error;
  }
}, getTreinos = async (semana) => prisma.treinos.findMany({
  where: {
    semana
  }
});
var updateHistorico = async (historico) => prisma.historico.upsert({
  where: {
    aluno: parseInt(historico.aluno)
  },
  update: {
    treinos: {
      push: {
        treino: historico.treino,
        data: new Date(),
        semana: (0, import_date_fns.getWeek)(new Date())
      }
    }
  },
  create: {
    aluno: parseInt(historico.aluno),
    treinos: {
      treino: historico.treino,
      data: new Date(),
      semana: (0, import_date_fns.getWeek)(new Date())
    }
  }
}), cadGrupo = async (grupo) => {
  let id = grupo.id ? grupo.id : "000000000000000000000000", inicio = new Date(grupo.inicio), fim = new Date(grupo.fim);
  return console.log(...oo_oo("2256466998_0", grupo)), prisma.grupo.upsert({
    where: {
      id
    },
    update: {
      nome: grupo.grupo,
      numero: Number(grupo.numero),
      inicio,
      fim
    },
    create: {
      nome: grupo.grupo,
      numero: Number(grupo.numero),
      inicio,
      fim
    }
  });
}, delGrupo = async (grupo) => prisma.grupo.delete({ where: { id: grupo.id } }), updateGrupo = async (aluno) => prisma.grupo.update({
  where: {
    id: aluno.grupo
  },
  data: {
    alunos: {
      push: {
        nome: aluno.nome,
        idMember: Number(aluno.idMember),
        photo: aluno.photo
      }
    }
  }
}), getGrupo = async (grupo) => prisma.grupo.findUnique({
  where: {
    id: grupo
  }
}), getGrupos = async () => prisma.grupo.findMany(), deleteAluno = async (aluno) => prisma.grupo.update({
  where: {
    id: aluno.id
  },
  data: {
    alunos: {
      deleteMany: {
        where: {
          idMember: Number(aluno.idMember)
        }
      }
    }
  }
}), updatePlanejamento = async (historico, dias) => {
  let treino = historico.treinolivre ? historico.treinolivre.toUpperCase() : historico.treino.toUpperCase();
  return prisma.historico.upsert({
    where: {
      aluno: parseInt(historico.aluno)
    },
    update: {
      planejados: {
        push: {
          treinoP: treino,
          dia: dias,
          id: (0, import_uuid.v4)(),
          feito: !1
        }
      }
    },
    create: {
      aluno: parseInt(historico.aluno),
      planejados: {
        treinoP: treino,
        dia: dias,
        id: (0, import_uuid.v4)(),
        feito: !1
      }
    }
  });
};
var updatePlanejamentoTreino = async (treino, dias) => prisma.historico.update({
  where: {
    aluno: parseInt(treino.aluno)
  },
  data: {
    planejados: {
      updateMany: {
        where: {
          id: treino.id
        },
        data: {
          dia: dias
        }
      }
    }
  }
}), updateFicha = async (ficha) => prisma.historico.upsert({
  where: {
    aluno: parseInt(ficha.aluno)
  },
  update: {
    historico: ficha.historico,
    nivel: ficha.nivel,
    patologias: ficha.patologias
  },
  create: {
    aluno: parseInt(ficha.aluno),
    historico: ficha.historico,
    nivel: ficha.nivel,
    patologias: ficha.patologias
  }
}), getHistoricoSemana = async () => prisma.historico.findMany(), getHistorico = async (historico) => historico ? prisma.historico.findUnique({
  where: {
    aluno: parseInt(historico)
  }
}) : null, deleteTreinoPlanejado = async (treino) => prisma.historico.update({
  where: {
    aluno: parseInt(treino.aluno)
  },
  data: {
    planejados: {
      deleteMany: {
        where: {
          id: treino.id
        }
      }
    }
  }
}), deleteTreinoPlanejadoDia = async (treino) => prisma.historico.update({
  where: {
    aluno: parseInt(treino.aluno)
  },
  data: {
    planejados: {
      updateMany: {
        where: {
          treinoP: treino.treino
        },
        data: { dia: "" }
      }
    }
  }
});
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x4d24(_0x1eeef1,_0xf15947){var _0x3fefdd=_0x3fef();return _0x4d24=function(_0x4d24c9,_0x546d5e){_0x4d24c9=_0x4d24c9-0x1b4;var _0x2aca2d=_0x3fefdd[_0x4d24c9];return _0x2aca2d;},_0x4d24(_0x1eeef1,_0xf15947);}var _0x438282=_0x4d24;(function(_0x2b5b27,_0x5684ed){var _0x19a2cf=_0x4d24,_0x423c08=_0x2b5b27();while(!![]){try{var _0x8e13=parseInt(_0x19a2cf(0x1fc))/0x1+parseInt(_0x19a2cf(0x261))/0x2*(-parseInt(_0x19a2cf(0x21c))/0x3)+parseInt(_0x19a2cf(0x211))/0x4*(-parseInt(_0x19a2cf(0x290))/0x5)+-parseInt(_0x19a2cf(0x1d3))/0x6*(-parseInt(_0x19a2cf(0x269))/0x7)+-parseInt(_0x19a2cf(0x263))/0x8+-parseInt(_0x19a2cf(0x26e))/0x9*(parseInt(_0x19a2cf(0x24e))/0xa)+-parseInt(_0x19a2cf(0x24f))/0xb*(-parseInt(_0x19a2cf(0x234))/0xc);if(_0x8e13===_0x5684ed)break;else _0x423c08['push'](_0x423c08['shift']());}catch(_0x4b083b){_0x423c08['push'](_0x423c08['shift']());}}}(_0x3fef,0xea743));var j=Object[_0x438282(0x219)],X=Object[_0x438282(0x1cb)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x438282(0x1ce)],te=Object[_0x438282(0x276)],ne=Object['prototype'][_0x438282(0x1fe)],re=(_0x23e827,_0x52ec00,_0xb165d2,_0x16b002)=>{var _0xe0898e=_0x438282;if(_0x52ec00&&typeof _0x52ec00==_0xe0898e(0x213)||typeof _0x52ec00==_0xe0898e(0x253)){for(let _0x22bec2 of ee(_0x52ec00))!ne['call'](_0x23e827,_0x22bec2)&&_0x22bec2!==_0xb165d2&&X(_0x23e827,_0x22bec2,{'get':()=>_0x52ec00[_0x22bec2],'enumerable':!(_0x16b002=G(_0x52ec00,_0x22bec2))||_0x16b002[_0xe0898e(0x203)]});}return _0x23e827;},K=(_0x2797ee,_0x57ae12,_0x322b74)=>(_0x322b74=_0x2797ee!=null?j(te(_0x2797ee)):{},re(_0x57ae12||!_0x2797ee||!_0x2797ee[_0x438282(0x278)]?X(_0x322b74,'default',{'value':_0x2797ee,'enumerable':!0x0}):_0x322b74,_0x2797ee)),q=class{constructor(_0x3109a7,_0x34b71a,_0x50a674,_0x52c9e6,_0x54e2c9){var _0x37d0ed=_0x438282;this['global']=_0x3109a7,this[_0x37d0ed(0x1e3)]=_0x34b71a,this[_0x37d0ed(0x226)]=_0x50a674,this['nodeModules']=_0x52c9e6,this['dockerizedApp']=_0x54e2c9,this[_0x37d0ed(0x1c9)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x37d0ed(0x20a)]=!0x1,this[_0x37d0ed(0x217)]=!0x1,this[_0x37d0ed(0x1e2)]=!this[_0x37d0ed(0x1d5)][_0x37d0ed(0x26d)]?.['versions']?.[_0x37d0ed(0x1e8)],this[_0x37d0ed(0x274)]=null,this[_0x37d0ed(0x1dd)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x37d0ed(0x1e4)]='https://tinyurl.com/37x8b79t',this[_0x37d0ed(0x1c6)]=(this['_inBrowser']?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x37d0ed(0x1d6))+this[_0x37d0ed(0x1e4)];}async['getWebSocketClass'](){var _0x1b39e7=_0x438282;if(this[_0x1b39e7(0x274)])return this['_WebSocketClass'];let _0x253aee;if(this['_inBrowser'])_0x253aee=this['global'][_0x1b39e7(0x1ec)];else{if(this[_0x1b39e7(0x1d5)]['process']?.[_0x1b39e7(0x262)])_0x253aee=this[_0x1b39e7(0x1d5)][_0x1b39e7(0x26d)]?.[_0x1b39e7(0x262)];else try{let _0x20c494=await import(_0x1b39e7(0x200));_0x253aee=(await import((await import(_0x1b39e7(0x282)))['pathToFileURL'](_0x20c494[_0x1b39e7(0x22e)](this[_0x1b39e7(0x1f6)],'ws/index.js'))[_0x1b39e7(0x1ee)]()))[_0x1b39e7(0x254)];}catch{try{_0x253aee=require(require(_0x1b39e7(0x200))['join'](this[_0x1b39e7(0x1f6)],'ws'));}catch{throw new Error(_0x1b39e7(0x1c0));}}}return this[_0x1b39e7(0x274)]=_0x253aee,_0x253aee;}[_0x438282(0x236)](){var _0x1a3cd5=_0x438282;this[_0x1a3cd5(0x217)]||this['_connected']||this[_0x1a3cd5(0x1dd)]>=this['_maxConnectAttemptCount']||(this[_0x1a3cd5(0x25d)]=!0x1,this[_0x1a3cd5(0x217)]=!0x0,this[_0x1a3cd5(0x1dd)]++,this[_0x1a3cd5(0x1c5)]=new Promise((_0x330344,_0x325b83)=>{var _0x16ec33=_0x1a3cd5;this[_0x16ec33(0x255)]()[_0x16ec33(0x1b8)](_0x41728c=>{var _0x460362=_0x16ec33;let _0x5dff9f=new _0x41728c(_0x460362(0x25c)+(!this[_0x460362(0x1e2)]&&this['dockerizedApp']?_0x460362(0x24a):this[_0x460362(0x1e3)])+':'+this['port']);_0x5dff9f['onerror']=()=>{var _0x2e215b=_0x460362;this[_0x2e215b(0x1c9)]=!0x1,this['_disposeWebsocket'](_0x5dff9f),this['_attemptToReconnectShortly'](),_0x325b83(new Error(_0x2e215b(0x28d)));},_0x5dff9f[_0x460362(0x291)]=()=>{var _0x1fc15f=_0x460362;this['_inBrowser']||_0x5dff9f[_0x1fc15f(0x292)]&&_0x5dff9f['_socket'][_0x1fc15f(0x1f4)]&&_0x5dff9f[_0x1fc15f(0x292)][_0x1fc15f(0x1f4)](),_0x330344(_0x5dff9f);},_0x5dff9f[_0x460362(0x231)]=()=>{var _0x23998c=_0x460362;this[_0x23998c(0x25d)]=!0x0,this[_0x23998c(0x1f5)](_0x5dff9f),this[_0x23998c(0x1fa)]();},_0x5dff9f[_0x460362(0x294)]=_0x772e48=>{var _0x183ce5=_0x460362;try{_0x772e48&&_0x772e48[_0x183ce5(0x214)]&&this[_0x183ce5(0x1e2)]&&JSON[_0x183ce5(0x283)](_0x772e48[_0x183ce5(0x214)])[_0x183ce5(0x1cc)]===_0x183ce5(0x257)&&this[_0x183ce5(0x1d5)][_0x183ce5(0x287)]['reload']();}catch{}};})[_0x16ec33(0x1b8)](_0x3dcc0a=>(this[_0x16ec33(0x20a)]=!0x0,this['_connecting']=!0x1,this[_0x16ec33(0x25d)]=!0x1,this[_0x16ec33(0x1c9)]=!0x0,this[_0x16ec33(0x1dd)]=0x0,_0x3dcc0a))[_0x16ec33(0x243)](_0x4af10c=>(this['_connected']=!0x1,this[_0x16ec33(0x217)]=!0x1,console[_0x16ec33(0x205)](_0x16ec33(0x246)+this[_0x16ec33(0x1e4)]),_0x325b83(new Error(_0x16ec33(0x28c)+(_0x4af10c&&_0x4af10c[_0x16ec33(0x1d0)])))));}));}[_0x438282(0x1f5)](_0x2ab108){var _0x55920e=_0x438282;this[_0x55920e(0x20a)]=!0x1,this[_0x55920e(0x217)]=!0x1;try{_0x2ab108[_0x55920e(0x231)]=null,_0x2ab108['onerror']=null,_0x2ab108['onopen']=null;}catch{}try{_0x2ab108[_0x55920e(0x28a)]<0x2&&_0x2ab108['close']();}catch{}}['_attemptToReconnectShortly'](){var _0x2ec468=_0x438282;clearTimeout(this[_0x2ec468(0x1f1)]),!(this[_0x2ec468(0x1dd)]>=this[_0x2ec468(0x1d2)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x123209=_0x2ec468;this['_connected']||this['_connecting']||(this['_connectToHostNow'](),this[_0x123209(0x1c5)]?.[_0x123209(0x243)](()=>this[_0x123209(0x1fa)]()));},0x1f4),this[_0x2ec468(0x1f1)][_0x2ec468(0x1f4)]&&this['_reconnectTimeout'][_0x2ec468(0x1f4)]());}async[_0x438282(0x272)](_0x25a3f8){var _0x4002f6=_0x438282;try{if(!this[_0x4002f6(0x1c9)])return;this['_allowedToConnectOnSend']&&this[_0x4002f6(0x236)](),(await this['_ws'])[_0x4002f6(0x272)](JSON[_0x4002f6(0x27b)](_0x25a3f8));}catch(_0x246bd9){console[_0x4002f6(0x205)](this[_0x4002f6(0x1c6)]+':\\x20'+(_0x246bd9&&_0x246bd9[_0x4002f6(0x1d0)])),this['_allowedToSend']=!0x1,this[_0x4002f6(0x1fa)]();}}};function J(_0x228194,_0x12b182,_0x5ce5fb,_0x2a75ff,_0x1a7bb2,_0x55ce8a){var _0x1d2a68=_0x438282;let _0x5573db=_0x5ce5fb[_0x1d2a68(0x232)](',')[_0x1d2a68(0x25b)](_0x276f12=>{var _0x25b36b=_0x1d2a68;try{_0x228194[_0x25b36b(0x247)]||((_0x1a7bb2===_0x25b36b(0x1b9)||_0x1a7bb2===_0x25b36b(0x1da)||_0x1a7bb2===_0x25b36b(0x1c1))&&(_0x1a7bb2+=_0x228194['process']?.[_0x25b36b(0x259)]?.[_0x25b36b(0x1e8)]?'\\x20server':'\\x20browser'),_0x228194['_console_ninja_session']={'id':+new Date(),'tool':_0x1a7bb2});let _0x1122dc=new q(_0x228194,_0x12b182,_0x276f12,_0x2a75ff,_0x55ce8a);return _0x1122dc['send'][_0x25b36b(0x288)](_0x1122dc);}catch(_0x233595){return console[_0x25b36b(0x205)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x233595&&_0x233595[_0x25b36b(0x1d0)]),()=>{};}});return _0x5ca097=>_0x5573db['forEach'](_0x32d1bc=>_0x32d1bc(_0x5ca097));}function W(_0x400c65){var _0x7cee1a=_0x438282;let _0x381510=function(_0x49f5f5,_0x4919cb){return _0x4919cb-_0x49f5f5;},_0x30ff51;if(_0x400c65['performance'])_0x30ff51=function(){var _0x5b6463=_0x4d24;return _0x400c65[_0x5b6463(0x289)][_0x5b6463(0x275)]();};else{if(_0x400c65[_0x7cee1a(0x26d)]&&_0x400c65['process'][_0x7cee1a(0x1bf)])_0x30ff51=function(){var _0x36e550=_0x7cee1a;return _0x400c65[_0x36e550(0x26d)][_0x36e550(0x1bf)]();},_0x381510=function(_0x2b8cac,_0x1dd5cd){return 0x3e8*(_0x1dd5cd[0x0]-_0x2b8cac[0x0])+(_0x1dd5cd[0x1]-_0x2b8cac[0x1])/0xf4240;};else try{let {performance:_0x5598aa}=require('perf_hooks');_0x30ff51=function(){var _0x679e47=_0x7cee1a;return _0x5598aa[_0x679e47(0x275)]();};}catch{_0x30ff51=function(){return+new Date();};}}return{'elapsed':_0x381510,'timeStamp':_0x30ff51,'now':()=>Date['now']()};}function Y(_0x451847,_0x4b953b,_0x452e74){var _0x3459f9=_0x438282;if(_0x451847[_0x3459f9(0x27c)]!==void 0x0)return _0x451847[_0x3459f9(0x27c)];let _0x14dc60=_0x451847['process']?.['versions']?.[_0x3459f9(0x1e8)];return _0x14dc60&&_0x452e74==='nuxt'?_0x451847[_0x3459f9(0x27c)]=!0x1:_0x451847[_0x3459f9(0x27c)]=_0x14dc60||!_0x4b953b||_0x451847[_0x3459f9(0x287)]?.['hostname']&&_0x4b953b[_0x3459f9(0x224)](_0x451847['location'][_0x3459f9(0x28f)]),_0x451847['_consoleNinjaAllowedToStart'];}function Q(_0x47d960,_0x3c7f88,_0x5601af,_0x4415ac){var _0x51aae4=_0x438282;_0x47d960=_0x47d960,_0x3c7f88=_0x3c7f88,_0x5601af=_0x5601af,_0x4415ac=_0x4415ac;let _0x48b950=W(_0x47d960),_0x5454c5=_0x48b950['elapsed'],_0x1c80ec=_0x48b950[_0x51aae4(0x210)];class _0xc692a3{constructor(){var _0x479153=_0x51aae4;this[_0x479153(0x251)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x479153(0x265)]=/^(0|[1-9][0-9]*)$/,this[_0x479153(0x242)]=/'([^\\\\']|\\\\')*'/,this[_0x479153(0x215)]=_0x47d960[_0x479153(0x1b5)],this[_0x479153(0x250)]=_0x47d960[_0x479153(0x1e6)],this[_0x479153(0x23e)]=Object['getOwnPropertyDescriptor'],this['_getOwnPropertyNames']=Object[_0x479153(0x1ce)],this[_0x479153(0x20b)]=_0x47d960[_0x479153(0x1fb)],this['_regExpToString']=RegExp[_0x479153(0x1d9)][_0x479153(0x1ee)],this[_0x479153(0x1fd)]=Date[_0x479153(0x1d9)][_0x479153(0x1ee)];}[_0x51aae4(0x239)](_0x57471b,_0x4a9396,_0x2990f0,_0x34d09c){var _0x3995af=_0x51aae4,_0x507257=this,_0x3b58e6=_0x2990f0[_0x3995af(0x279)];function _0xa46520(_0x34ed3c,_0x5326c6,_0xbf1724){var _0x38b851=_0x3995af;_0x5326c6['type']=_0x38b851(0x25f),_0x5326c6[_0x38b851(0x22f)]=_0x34ed3c[_0x38b851(0x1d0)],_0x5f189c=_0xbf1724[_0x38b851(0x1e8)][_0x38b851(0x285)],_0xbf1724[_0x38b851(0x1e8)][_0x38b851(0x285)]=_0x5326c6,_0x507257[_0x38b851(0x229)](_0x5326c6,_0xbf1724);}try{_0x2990f0[_0x3995af(0x1d4)]++,_0x2990f0[_0x3995af(0x279)]&&_0x2990f0['autoExpandPreviousObjects']['push'](_0x4a9396);var _0x13de0c,_0x453b9a,_0x3e3e31,_0x3d9257,_0x322156=[],_0x3393c4=[],_0x439173,_0x348688=this[_0x3995af(0x1ed)](_0x4a9396),_0x16bdae=_0x348688==='array',_0x48bd6f=!0x1,_0x2bcc00=_0x348688===_0x3995af(0x253),_0x40ef76=this[_0x3995af(0x225)](_0x348688),_0x535a2a=this['_isPrimitiveWrapperType'](_0x348688),_0x30973f=_0x40ef76||_0x535a2a,_0x23e67b={},_0xfd53ae=0x0,_0x1043d2=!0x1,_0x5f189c,_0xf05db6=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x2990f0[_0x3995af(0x222)]){if(_0x16bdae){if(_0x453b9a=_0x4a9396[_0x3995af(0x23f)],_0x453b9a>_0x2990f0[_0x3995af(0x1bb)]){for(_0x3e3e31=0x0,_0x3d9257=_0x2990f0[_0x3995af(0x1bb)],_0x13de0c=_0x3e3e31;_0x13de0c<_0x3d9257;_0x13de0c++)_0x3393c4[_0x3995af(0x212)](_0x507257['_addProperty'](_0x322156,_0x4a9396,_0x348688,_0x13de0c,_0x2990f0));_0x57471b[_0x3995af(0x1ba)]=!0x0;}else{for(_0x3e3e31=0x0,_0x3d9257=_0x453b9a,_0x13de0c=_0x3e3e31;_0x13de0c<_0x3d9257;_0x13de0c++)_0x3393c4[_0x3995af(0x212)](_0x507257[_0x3995af(0x1de)](_0x322156,_0x4a9396,_0x348688,_0x13de0c,_0x2990f0));}_0x2990f0[_0x3995af(0x23c)]+=_0x3393c4['length'];}if(!(_0x348688===_0x3995af(0x206)||_0x348688===_0x3995af(0x1b5))&&!_0x40ef76&&_0x348688!==_0x3995af(0x21b)&&_0x348688!==_0x3995af(0x20d)&&_0x348688!=='bigint'){var _0x2c8229=_0x34d09c[_0x3995af(0x235)]||_0x2990f0['props'];if(this['_isSet'](_0x4a9396)?(_0x13de0c=0x0,_0x4a9396[_0x3995af(0x27d)](function(_0x24dfd0){var _0x3a0529=_0x3995af;if(_0xfd53ae++,_0x2990f0[_0x3a0529(0x23c)]++,_0xfd53ae>_0x2c8229){_0x1043d2=!0x0;return;}if(!_0x2990f0[_0x3a0529(0x27a)]&&_0x2990f0['autoExpand']&&_0x2990f0[_0x3a0529(0x23c)]>_0x2990f0[_0x3a0529(0x286)]){_0x1043d2=!0x0;return;}_0x3393c4['push'](_0x507257[_0x3a0529(0x1de)](_0x322156,_0x4a9396,_0x3a0529(0x1ca),_0x13de0c++,_0x2990f0,function(_0xd668d7){return function(){return _0xd668d7;};}(_0x24dfd0)));})):this['_isMap'](_0x4a9396)&&_0x4a9396[_0x3995af(0x27d)](function(_0x9c4313,_0x1eeee2){var _0x51fe0d=_0x3995af;if(_0xfd53ae++,_0x2990f0[_0x51fe0d(0x23c)]++,_0xfd53ae>_0x2c8229){_0x1043d2=!0x0;return;}if(!_0x2990f0['isExpressionToEvaluate']&&_0x2990f0[_0x51fe0d(0x279)]&&_0x2990f0['autoExpandPropertyCount']>_0x2990f0[_0x51fe0d(0x286)]){_0x1043d2=!0x0;return;}var _0x113e97=_0x1eeee2[_0x51fe0d(0x1ee)]();_0x113e97[_0x51fe0d(0x23f)]>0x64&&(_0x113e97=_0x113e97[_0x51fe0d(0x21e)](0x0,0x64)+_0x51fe0d(0x284)),_0x3393c4[_0x51fe0d(0x212)](_0x507257[_0x51fe0d(0x1de)](_0x322156,_0x4a9396,_0x51fe0d(0x1b7),_0x113e97,_0x2990f0,function(_0x20178b){return function(){return _0x20178b;};}(_0x9c4313)));}),!_0x48bd6f){try{for(_0x439173 in _0x4a9396)if(!(_0x16bdae&&_0xf05db6[_0x3995af(0x26b)](_0x439173))&&!this[_0x3995af(0x277)](_0x4a9396,_0x439173,_0x2990f0)){if(_0xfd53ae++,_0x2990f0[_0x3995af(0x23c)]++,_0xfd53ae>_0x2c8229){_0x1043d2=!0x0;break;}if(!_0x2990f0[_0x3995af(0x27a)]&&_0x2990f0[_0x3995af(0x279)]&&_0x2990f0[_0x3995af(0x23c)]>_0x2990f0[_0x3995af(0x286)]){_0x1043d2=!0x0;break;}_0x3393c4[_0x3995af(0x212)](_0x507257[_0x3995af(0x1f7)](_0x322156,_0x23e67b,_0x4a9396,_0x348688,_0x439173,_0x2990f0));}}catch{}if(_0x23e67b['_p_length']=!0x0,_0x2bcc00&&(_0x23e67b['_p_name']=!0x0),!_0x1043d2){var _0x2c7457=[][_0x3995af(0x266)](this['_getOwnPropertyNames'](_0x4a9396))[_0x3995af(0x266)](this[_0x3995af(0x28b)](_0x4a9396));for(_0x13de0c=0x0,_0x453b9a=_0x2c7457['length'];_0x13de0c<_0x453b9a;_0x13de0c++)if(_0x439173=_0x2c7457[_0x13de0c],!(_0x16bdae&&_0xf05db6['test'](_0x439173['toString']()))&&!this[_0x3995af(0x277)](_0x4a9396,_0x439173,_0x2990f0)&&!_0x23e67b[_0x3995af(0x1be)+_0x439173[_0x3995af(0x1ee)]()]){if(_0xfd53ae++,_0x2990f0[_0x3995af(0x23c)]++,_0xfd53ae>_0x2c8229){_0x1043d2=!0x0;break;}if(!_0x2990f0['isExpressionToEvaluate']&&_0x2990f0['autoExpand']&&_0x2990f0[_0x3995af(0x23c)]>_0x2990f0[_0x3995af(0x286)]){_0x1043d2=!0x0;break;}_0x3393c4[_0x3995af(0x212)](_0x507257['_addObjectProperty'](_0x322156,_0x23e67b,_0x4a9396,_0x348688,_0x439173,_0x2990f0));}}}}}if(_0x57471b['type']=_0x348688,_0x30973f?(_0x57471b[_0x3995af(0x270)]=_0x4a9396[_0x3995af(0x1b4)](),this['_capIfString'](_0x348688,_0x57471b,_0x2990f0,_0x34d09c)):_0x348688===_0x3995af(0x208)?_0x57471b[_0x3995af(0x270)]=this[_0x3995af(0x1fd)][_0x3995af(0x281)](_0x4a9396):_0x348688===_0x3995af(0x1f3)?_0x57471b['value']=_0x4a9396['toString']():_0x348688===_0x3995af(0x237)?_0x57471b['value']=this[_0x3995af(0x22b)][_0x3995af(0x281)](_0x4a9396):_0x348688==='symbol'&&this[_0x3995af(0x20b)]?_0x57471b[_0x3995af(0x270)]=this[_0x3995af(0x20b)][_0x3995af(0x1d9)][_0x3995af(0x1ee)][_0x3995af(0x281)](_0x4a9396):!_0x2990f0[_0x3995af(0x222)]&&!(_0x348688===_0x3995af(0x206)||_0x348688===_0x3995af(0x1b5))&&(delete _0x57471b[_0x3995af(0x270)],_0x57471b[_0x3995af(0x1b6)]=!0x0),_0x1043d2&&(_0x57471b[_0x3995af(0x1bc)]=!0x0),_0x5f189c=_0x2990f0['node']['current'],_0x2990f0[_0x3995af(0x1e8)][_0x3995af(0x285)]=_0x57471b,this['_treeNodePropertiesBeforeFullValue'](_0x57471b,_0x2990f0),_0x3393c4[_0x3995af(0x23f)]){for(_0x13de0c=0x0,_0x453b9a=_0x3393c4[_0x3995af(0x23f)];_0x13de0c<_0x453b9a;_0x13de0c++)_0x3393c4[_0x13de0c](_0x13de0c);}_0x322156[_0x3995af(0x23f)]&&(_0x57471b['props']=_0x322156);}catch(_0x4d3528){_0xa46520(_0x4d3528,_0x57471b,_0x2990f0);}return this[_0x3995af(0x209)](_0x4a9396,_0x57471b),this[_0x3995af(0x227)](_0x57471b,_0x2990f0),_0x2990f0[_0x3995af(0x1e8)][_0x3995af(0x285)]=_0x5f189c,_0x2990f0['level']--,_0x2990f0[_0x3995af(0x279)]=_0x3b58e6,_0x2990f0[_0x3995af(0x279)]&&_0x2990f0['autoExpandPreviousObjects'][_0x3995af(0x297)](),_0x57471b;}[_0x51aae4(0x28b)](_0x6adba){var _0x2393e6=_0x51aae4;return Object[_0x2393e6(0x22c)]?Object[_0x2393e6(0x22c)](_0x6adba):[];}[_0x51aae4(0x1ef)](_0xb13f3d){var _0x409162=_0x51aae4;return!!(_0xb13f3d&&_0x47d960[_0x409162(0x1ca)]&&this[_0x409162(0x223)](_0xb13f3d)===_0x409162(0x21f)&&_0xb13f3d[_0x409162(0x27d)]);}['_blacklistedProperty'](_0x1a1779,_0x501292,_0x29e2a5){var _0x175cef=_0x51aae4;return _0x29e2a5[_0x175cef(0x21d)]?typeof _0x1a1779[_0x501292]==_0x175cef(0x253):!0x1;}[_0x51aae4(0x1ed)](_0x4cdb60){var _0x388439=_0x51aae4,_0x566a0c='';return _0x566a0c=typeof _0x4cdb60,_0x566a0c===_0x388439(0x213)?this['_objectToString'](_0x4cdb60)===_0x388439(0x1dc)?_0x566a0c='array':this[_0x388439(0x223)](_0x4cdb60)===_0x388439(0x202)?_0x566a0c='date':this[_0x388439(0x223)](_0x4cdb60)===_0x388439(0x24d)?_0x566a0c=_0x388439(0x1f3):_0x4cdb60===null?_0x566a0c='null':_0x4cdb60[_0x388439(0x20f)]&&(_0x566a0c=_0x4cdb60[_0x388439(0x20f)][_0x388439(0x25a)]||_0x566a0c):_0x566a0c===_0x388439(0x1b5)&&this[_0x388439(0x250)]&&_0x4cdb60 instanceof this[_0x388439(0x250)]&&(_0x566a0c=_0x388439(0x1e6)),_0x566a0c;}['_objectToString'](_0x12a36e){var _0x280626=_0x51aae4;return Object[_0x280626(0x1d9)][_0x280626(0x1ee)][_0x280626(0x281)](_0x12a36e);}['_isPrimitiveType'](_0x4dd78e){var _0x30f507=_0x51aae4;return _0x4dd78e===_0x30f507(0x1f8)||_0x4dd78e===_0x30f507(0x241)||_0x4dd78e===_0x30f507(0x1e5);}[_0x51aae4(0x264)](_0x3f7bc8){var _0x4fadad=_0x51aae4;return _0x3f7bc8==='Boolean'||_0x3f7bc8===_0x4fadad(0x21b)||_0x3f7bc8===_0x4fadad(0x23a);}[_0x51aae4(0x1de)](_0x1408ed,_0x8e8dd9,_0x5882e6,_0x43725c,_0x5a8e0b,_0x3c655e){var _0x3881c6=this;return function(_0x22f694){var _0x1281ee=_0x4d24,_0x796d02=_0x5a8e0b['node'][_0x1281ee(0x285)],_0x1581db=_0x5a8e0b[_0x1281ee(0x1e8)]['index'],_0x472ccc=_0x5a8e0b[_0x1281ee(0x1e8)][_0x1281ee(0x296)];_0x5a8e0b[_0x1281ee(0x1e8)][_0x1281ee(0x296)]=_0x796d02,_0x5a8e0b['node'][_0x1281ee(0x1ff)]=typeof _0x43725c==_0x1281ee(0x1e5)?_0x43725c:_0x22f694,_0x1408ed[_0x1281ee(0x212)](_0x3881c6['_property'](_0x8e8dd9,_0x5882e6,_0x43725c,_0x5a8e0b,_0x3c655e)),_0x5a8e0b[_0x1281ee(0x1e8)]['parent']=_0x472ccc,_0x5a8e0b['node'][_0x1281ee(0x1ff)]=_0x1581db;};}['_addObjectProperty'](_0x4d1d59,_0x4e3ee3,_0xc1926d,_0x583497,_0x23e3b7,_0x366bab,_0x578dfa){var _0x43c57a=_0x51aae4,_0x516743=this;return _0x4e3ee3[_0x43c57a(0x1be)+_0x23e3b7[_0x43c57a(0x1ee)]()]=!0x0,function(_0x51c0b8){var _0x22cf08=_0x43c57a,_0x42eec5=_0x366bab[_0x22cf08(0x1e8)]['current'],_0x237acd=_0x366bab[_0x22cf08(0x1e8)][_0x22cf08(0x1ff)],_0xf2c09=_0x366bab['node']['parent'];_0x366bab['node']['parent']=_0x42eec5,_0x366bab[_0x22cf08(0x1e8)][_0x22cf08(0x1ff)]=_0x51c0b8,_0x4d1d59[_0x22cf08(0x212)](_0x516743['_property'](_0xc1926d,_0x583497,_0x23e3b7,_0x366bab,_0x578dfa)),_0x366bab[_0x22cf08(0x1e8)][_0x22cf08(0x296)]=_0xf2c09,_0x366bab[_0x22cf08(0x1e8)][_0x22cf08(0x1ff)]=_0x237acd;};}[_0x51aae4(0x26c)](_0x37a575,_0x49085f,_0x5d231c,_0x187a39,_0x152229){var _0x553b52=_0x51aae4,_0x2e6cd7=this;_0x152229||(_0x152229=function(_0x395faa,_0x34adff){return _0x395faa[_0x34adff];});var _0x4b41a6=_0x5d231c['toString'](),_0x5bdf24=_0x187a39[_0x553b52(0x271)]||{},_0x1d7982=_0x187a39[_0x553b52(0x222)],_0x25f62c=_0x187a39[_0x553b52(0x27a)];try{var _0x207856=this['_isMap'](_0x37a575),_0x16cab6=_0x4b41a6;_0x207856&&_0x16cab6[0x0]==='\\x27'&&(_0x16cab6=_0x16cab6[_0x553b52(0x1cd)](0x1,_0x16cab6[_0x553b52(0x23f)]-0x2));var _0x2b595b=_0x187a39['expressionsToEvaluate']=_0x5bdf24['_p_'+_0x16cab6];_0x2b595b&&(_0x187a39['depth']=_0x187a39[_0x553b52(0x222)]+0x1),_0x187a39[_0x553b52(0x27a)]=!!_0x2b595b;var _0x2a23d3=typeof _0x5d231c=='symbol',_0x30a31b={'name':_0x2a23d3||_0x207856?_0x4b41a6:this['_propertyName'](_0x4b41a6)};if(_0x2a23d3&&(_0x30a31b['symbol']=!0x0),!(_0x49085f===_0x553b52(0x244)||_0x49085f===_0x553b52(0x295))){var _0x2fc78c=this[_0x553b52(0x23e)](_0x37a575,_0x5d231c);if(_0x2fc78c&&(_0x2fc78c[_0x553b52(0x22d)]&&(_0x30a31b[_0x553b52(0x298)]=!0x0),_0x2fc78c[_0x553b52(0x1e1)]&&!_0x2b595b&&!_0x187a39[_0x553b52(0x1bd)]))return _0x30a31b[_0x553b52(0x1e7)]=!0x0,this[_0x553b52(0x207)](_0x30a31b,_0x187a39),_0x30a31b;}var _0x18a672;try{_0x18a672=_0x152229(_0x37a575,_0x5d231c);}catch(_0x551470){return _0x30a31b={'name':_0x4b41a6,'type':_0x553b52(0x25f),'error':_0x551470[_0x553b52(0x1d0)]},this[_0x553b52(0x207)](_0x30a31b,_0x187a39),_0x30a31b;}var _0x375afe=this[_0x553b52(0x1ed)](_0x18a672),_0x65dc08=this[_0x553b52(0x225)](_0x375afe);if(_0x30a31b[_0x553b52(0x248)]=_0x375afe,_0x65dc08)this[_0x553b52(0x207)](_0x30a31b,_0x187a39,_0x18a672,function(){var _0x4c3409=_0x553b52;_0x30a31b[_0x4c3409(0x270)]=_0x18a672[_0x4c3409(0x1b4)](),!_0x2b595b&&_0x2e6cd7['_capIfString'](_0x375afe,_0x30a31b,_0x187a39,{});});else{var _0xfc3fca=_0x187a39[_0x553b52(0x279)]&&_0x187a39['level']<_0x187a39[_0x553b52(0x29b)]&&_0x187a39[_0x553b52(0x24c)][_0x553b52(0x216)](_0x18a672)<0x0&&_0x375afe!==_0x553b52(0x253)&&_0x187a39[_0x553b52(0x23c)]<_0x187a39['autoExpandLimit'];_0xfc3fca||_0x187a39['level']<_0x1d7982||_0x2b595b?(this[_0x553b52(0x239)](_0x30a31b,_0x18a672,_0x187a39,_0x2b595b||{}),this[_0x553b52(0x209)](_0x18a672,_0x30a31b)):this[_0x553b52(0x207)](_0x30a31b,_0x187a39,_0x18a672,function(){var _0x2ab07a=_0x553b52;_0x375afe===_0x2ab07a(0x206)||_0x375afe===_0x2ab07a(0x1b5)||(delete _0x30a31b[_0x2ab07a(0x270)],_0x30a31b[_0x2ab07a(0x1b6)]=!0x0);});}return _0x30a31b;}finally{_0x187a39[_0x553b52(0x271)]=_0x5bdf24,_0x187a39[_0x553b52(0x222)]=_0x1d7982,_0x187a39[_0x553b52(0x27a)]=_0x25f62c;}}['_capIfString'](_0x53dd7c,_0x1b3ea4,_0x491216,_0x4c2903){var _0x44104a=_0x51aae4,_0x480eee=_0x4c2903['strLength']||_0x491216['strLength'];if((_0x53dd7c==='string'||_0x53dd7c===_0x44104a(0x21b))&&_0x1b3ea4[_0x44104a(0x270)]){let _0x246eaa=_0x1b3ea4['value'][_0x44104a(0x23f)];_0x491216[_0x44104a(0x29a)]+=_0x246eaa,_0x491216[_0x44104a(0x29a)]>_0x491216[_0x44104a(0x25e)]?(_0x1b3ea4['capped']='',delete _0x1b3ea4[_0x44104a(0x270)]):_0x246eaa>_0x480eee&&(_0x1b3ea4[_0x44104a(0x1b6)]=_0x1b3ea4['value'][_0x44104a(0x1cd)](0x0,_0x480eee),delete _0x1b3ea4[_0x44104a(0x270)]);}}['_isMap'](_0x1271b3){var _0x121e09=_0x51aae4;return!!(_0x1271b3&&_0x47d960[_0x121e09(0x1b7)]&&this[_0x121e09(0x223)](_0x1271b3)===_0x121e09(0x249)&&_0x1271b3[_0x121e09(0x27d)]);}['_propertyName'](_0x463ce7){var _0x33b700=_0x51aae4;if(_0x463ce7[_0x33b700(0x26f)](/^\\d+$/))return _0x463ce7;var _0x40e686;try{_0x40e686=JSON['stringify'](''+_0x463ce7);}catch{_0x40e686='\\x22'+this[_0x33b700(0x223)](_0x463ce7)+'\\x22';}return _0x40e686['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x40e686=_0x40e686['substr'](0x1,_0x40e686['length']-0x2):_0x40e686=_0x40e686['replace'](/'/g,'\\x5c\\x27')[_0x33b700(0x238)](/\\\\"/g,'\\x22')[_0x33b700(0x238)](/(^"|"$)/g,'\\x27'),_0x40e686;}[_0x51aae4(0x207)](_0x466e70,_0x5f1501,_0x4fc60a,_0x4fad2c){var _0x3871f9=_0x51aae4;this['_treeNodePropertiesBeforeFullValue'](_0x466e70,_0x5f1501),_0x4fad2c&&_0x4fad2c(),this[_0x3871f9(0x209)](_0x4fc60a,_0x466e70),this[_0x3871f9(0x227)](_0x466e70,_0x5f1501);}[_0x51aae4(0x229)](_0xa14bc4,_0x244522){var _0x24f631=_0x51aae4;this[_0x24f631(0x27f)](_0xa14bc4,_0x244522),this[_0x24f631(0x1f9)](_0xa14bc4,_0x244522),this[_0x24f631(0x218)](_0xa14bc4,_0x244522),this[_0x24f631(0x267)](_0xa14bc4,_0x244522);}[_0x51aae4(0x27f)](_0x574fea,_0x561fe9){}[_0x51aae4(0x1f9)](_0x8f8f59,_0x1dcac6){}[_0x51aae4(0x20c)](_0x13def9,_0x511419){}['_isUndefined'](_0xa4d6b5){var _0x48aba8=_0x51aae4;return _0xa4d6b5===this[_0x48aba8(0x215)];}[_0x51aae4(0x227)](_0x459431,_0x1c4011){var _0x3e5623=_0x51aae4;this[_0x3e5623(0x20c)](_0x459431,_0x1c4011),this[_0x3e5623(0x1e9)](_0x459431),_0x1c4011[_0x3e5623(0x1c8)]&&this[_0x3e5623(0x1c3)](_0x459431),this[_0x3e5623(0x1db)](_0x459431,_0x1c4011),this[_0x3e5623(0x27e)](_0x459431,_0x1c4011),this[_0x3e5623(0x22a)](_0x459431);}[_0x51aae4(0x209)](_0x37adca,_0x3b272d){var _0x49c3ad=_0x51aae4;let _0x2f3b69;try{_0x47d960['console']&&(_0x2f3b69=_0x47d960['console']['error'],_0x47d960[_0x49c3ad(0x1c4)][_0x49c3ad(0x22f)]=function(){}),_0x37adca&&typeof _0x37adca['length']==_0x49c3ad(0x1e5)&&(_0x3b272d['length']=_0x37adca[_0x49c3ad(0x23f)]);}catch{}finally{_0x2f3b69&&(_0x47d960[_0x49c3ad(0x1c4)][_0x49c3ad(0x22f)]=_0x2f3b69);}if(_0x3b272d[_0x49c3ad(0x248)]==='number'||_0x3b272d[_0x49c3ad(0x248)]===_0x49c3ad(0x23a)){if(isNaN(_0x3b272d[_0x49c3ad(0x270)]))_0x3b272d[_0x49c3ad(0x204)]=!0x0,delete _0x3b272d[_0x49c3ad(0x270)];else switch(_0x3b272d[_0x49c3ad(0x270)]){case Number[_0x49c3ad(0x1e0)]:_0x3b272d[_0x49c3ad(0x24b)]=!0x0,delete _0x3b272d[_0x49c3ad(0x270)];break;case Number['NEGATIVE_INFINITY']:_0x3b272d[_0x49c3ad(0x201)]=!0x0,delete _0x3b272d['value'];break;case 0x0:this[_0x49c3ad(0x26a)](_0x3b272d[_0x49c3ad(0x270)])&&(_0x3b272d['negativeZero']=!0x0);break;}}else _0x3b272d[_0x49c3ad(0x248)]===_0x49c3ad(0x253)&&typeof _0x37adca['name']==_0x49c3ad(0x241)&&_0x37adca[_0x49c3ad(0x25a)]&&_0x3b272d[_0x49c3ad(0x25a)]&&_0x37adca['name']!==_0x3b272d['name']&&(_0x3b272d[_0x49c3ad(0x280)]=_0x37adca['name']);}[_0x51aae4(0x26a)](_0x5823dc){return 0x1/_0x5823dc===Number['NEGATIVE_INFINITY'];}[_0x51aae4(0x1c3)](_0x4f14fc){var _0x34b346=_0x51aae4;!_0x4f14fc[_0x34b346(0x235)]||!_0x4f14fc[_0x34b346(0x235)][_0x34b346(0x23f)]||_0x4f14fc[_0x34b346(0x248)]==='array'||_0x4f14fc[_0x34b346(0x248)]===_0x34b346(0x1b7)||_0x4f14fc[_0x34b346(0x248)]===_0x34b346(0x1ca)||_0x4f14fc[_0x34b346(0x235)][_0x34b346(0x1f0)](function(_0x21d513,_0x1aca99){var _0x10bcf7=_0x34b346,_0x3eb18c=_0x21d513[_0x10bcf7(0x25a)][_0x10bcf7(0x1f2)](),_0x3b64f5=_0x1aca99[_0x10bcf7(0x25a)]['toLowerCase']();return _0x3eb18c<_0x3b64f5?-0x1:_0x3eb18c>_0x3b64f5?0x1:0x0;});}[_0x51aae4(0x1db)](_0x472fd6,_0x507653){var _0x4d3e82=_0x51aae4;if(!(_0x507653[_0x4d3e82(0x21d)]||!_0x472fd6[_0x4d3e82(0x235)]||!_0x472fd6[_0x4d3e82(0x235)][_0x4d3e82(0x23f)])){for(var _0x4ec0fa=[],_0xcfdc29=[],_0x15b014=0x0,_0x16cbad=_0x472fd6[_0x4d3e82(0x235)]['length'];_0x15b014<_0x16cbad;_0x15b014++){var _0xdf635e=_0x472fd6[_0x4d3e82(0x235)][_0x15b014];_0xdf635e['type']===_0x4d3e82(0x253)?_0x4ec0fa[_0x4d3e82(0x212)](_0xdf635e):_0xcfdc29[_0x4d3e82(0x212)](_0xdf635e);}if(!(!_0xcfdc29[_0x4d3e82(0x23f)]||_0x4ec0fa[_0x4d3e82(0x23f)]<=0x1)){_0x472fd6[_0x4d3e82(0x235)]=_0xcfdc29;var _0x442527={'functionsNode':!0x0,'props':_0x4ec0fa};this['_setNodeId'](_0x442527,_0x507653),this[_0x4d3e82(0x20c)](_0x442527,_0x507653),this['_setNodeExpandableState'](_0x442527),this[_0x4d3e82(0x267)](_0x442527,_0x507653),_0x442527['id']+='\\x20f',_0x472fd6['props']['unshift'](_0x442527);}}}[_0x51aae4(0x27e)](_0x587c2f,_0xb2ffee){}[_0x51aae4(0x1e9)](_0x5888ac){}[_0x51aae4(0x1eb)](_0x38cb6d){var _0x4a2e5f=_0x51aae4;return Array[_0x4a2e5f(0x21a)](_0x38cb6d)||typeof _0x38cb6d==_0x4a2e5f(0x213)&&this[_0x4a2e5f(0x223)](_0x38cb6d)===_0x4a2e5f(0x1dc);}[_0x51aae4(0x267)](_0x454780,_0x19f736){}[_0x51aae4(0x22a)](_0x2f5140){var _0x1a543b=_0x51aae4;delete _0x2f5140[_0x1a543b(0x221)],delete _0x2f5140[_0x1a543b(0x23d)],delete _0x2f5140[_0x1a543b(0x1c7)];}[_0x51aae4(0x218)](_0x494d42,_0x33ed0c){}}let _0x126961=new _0xc692a3(),_0x5586bf={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x533936={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x185555(_0x4dd1b9,_0x3906a7,_0x402dde,_0x691525,_0x3b2d7e,_0x4d4e9f){var _0x5c3e49=_0x51aae4;let _0xc691c0,_0x1e8e96;try{_0x1e8e96=_0x1c80ec(),_0xc691c0=_0x5601af[_0x3906a7],!_0xc691c0||_0x1e8e96-_0xc691c0['ts']>0x1f4&&_0xc691c0[_0x5c3e49(0x245)]&&_0xc691c0[_0x5c3e49(0x1d8)]/_0xc691c0[_0x5c3e49(0x245)]<0x64?(_0x5601af[_0x3906a7]=_0xc691c0={'count':0x0,'time':0x0,'ts':_0x1e8e96},_0x5601af[_0x5c3e49(0x230)]={}):_0x1e8e96-_0x5601af[_0x5c3e49(0x230)]['ts']>0x32&&_0x5601af['hits'][_0x5c3e49(0x245)]&&_0x5601af[_0x5c3e49(0x230)][_0x5c3e49(0x1d8)]/_0x5601af['hits'][_0x5c3e49(0x245)]<0x64&&(_0x5601af[_0x5c3e49(0x230)]={});let _0x70b3cb=[],_0x219da2=_0xc691c0[_0x5c3e49(0x220)]||_0x5601af['hits'][_0x5c3e49(0x220)]?_0x533936:_0x5586bf,_0x1c54ac=_0x1c899a=>{var _0x30bfe0=_0x5c3e49;let _0x28f6e0={};return _0x28f6e0[_0x30bfe0(0x235)]=_0x1c899a[_0x30bfe0(0x235)],_0x28f6e0[_0x30bfe0(0x1bb)]=_0x1c899a[_0x30bfe0(0x1bb)],_0x28f6e0[_0x30bfe0(0x1c2)]=_0x1c899a[_0x30bfe0(0x1c2)],_0x28f6e0['totalStrLength']=_0x1c899a['totalStrLength'],_0x28f6e0[_0x30bfe0(0x286)]=_0x1c899a[_0x30bfe0(0x286)],_0x28f6e0[_0x30bfe0(0x29b)]=_0x1c899a['autoExpandMaxDepth'],_0x28f6e0[_0x30bfe0(0x1c8)]=!0x1,_0x28f6e0['noFunctions']=!_0x3c7f88,_0x28f6e0['depth']=0x1,_0x28f6e0[_0x30bfe0(0x1d4)]=0x0,_0x28f6e0['expId']=_0x30bfe0(0x293),_0x28f6e0[_0x30bfe0(0x1d1)]='root_exp',_0x28f6e0[_0x30bfe0(0x279)]=!0x0,_0x28f6e0['autoExpandPreviousObjects']=[],_0x28f6e0[_0x30bfe0(0x23c)]=0x0,_0x28f6e0[_0x30bfe0(0x1bd)]=!0x0,_0x28f6e0[_0x30bfe0(0x29a)]=0x0,_0x28f6e0[_0x30bfe0(0x1e8)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x28f6e0;};for(var _0x47ef3f=0x0;_0x47ef3f<_0x3b2d7e[_0x5c3e49(0x23f)];_0x47ef3f++)_0x70b3cb[_0x5c3e49(0x212)](_0x126961[_0x5c3e49(0x239)]({'timeNode':_0x4dd1b9===_0x5c3e49(0x1d8)||void 0x0},_0x3b2d7e[_0x47ef3f],_0x1c54ac(_0x219da2),{}));if(_0x4dd1b9===_0x5c3e49(0x252)){let _0x5d9196=Error[_0x5c3e49(0x20e)];try{Error[_0x5c3e49(0x20e)]=0x1/0x0,_0x70b3cb['push'](_0x126961['serialize']({'stackNode':!0x0},new Error()[_0x5c3e49(0x23b)],_0x1c54ac(_0x219da2),{'strLength':0x1/0x0}));}finally{Error[_0x5c3e49(0x20e)]=_0x5d9196;}}return{'method':_0x5c3e49(0x256),'version':_0x4415ac,'args':[{'ts':_0x402dde,'session':_0x691525,'args':_0x70b3cb,'id':_0x3906a7,'context':_0x4d4e9f}]};}catch(_0x2799c0){return{'method':_0x5c3e49(0x256),'version':_0x4415ac,'args':[{'ts':_0x402dde,'session':_0x691525,'args':[{'type':_0x5c3e49(0x25f),'error':_0x2799c0&&_0x2799c0['message']}],'id':_0x3906a7,'context':_0x4d4e9f}]};}finally{try{if(_0xc691c0&&_0x1e8e96){let _0x4e0fa0=_0x1c80ec();_0xc691c0['count']++,_0xc691c0[_0x5c3e49(0x1d8)]+=_0x5454c5(_0x1e8e96,_0x4e0fa0),_0xc691c0['ts']=_0x4e0fa0,_0x5601af[_0x5c3e49(0x230)][_0x5c3e49(0x245)]++,_0x5601af[_0x5c3e49(0x230)][_0x5c3e49(0x1d8)]+=_0x5454c5(_0x1e8e96,_0x4e0fa0),_0x5601af['hits']['ts']=_0x4e0fa0,(_0xc691c0['count']>0x32||_0xc691c0['time']>0x64)&&(_0xc691c0[_0x5c3e49(0x220)]=!0x0),(_0x5601af[_0x5c3e49(0x230)][_0x5c3e49(0x245)]>0x3e8||_0x5601af[_0x5c3e49(0x230)]['time']>0x12c)&&(_0x5601af[_0x5c3e49(0x230)]['reduceLimits']=!0x0);}}catch{}}}return _0x185555;}((_0x575b60,_0x127395,_0x1af3aa,_0x3c797c,_0x38d7c7,_0x93064b,_0x3f89fb,_0x26d56d,_0x2f8c9b,_0x1bea64)=>{var _0x3d998c=_0x438282;if(_0x575b60[_0x3d998c(0x260)])return _0x575b60['_console_ninja'];if(!Y(_0x575b60,_0x26d56d,_0x38d7c7))return _0x575b60[_0x3d998c(0x260)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x575b60[_0x3d998c(0x260)];let _0x5daf87=W(_0x575b60),_0x5ae4d3=_0x5daf87['elapsed'],_0x428f23=_0x5daf87[_0x3d998c(0x210)],_0x4420a1=_0x5daf87[_0x3d998c(0x275)],_0x5bfdb9={'hits':{},'ts':{}},_0x10ee1e=Q(_0x575b60,_0x2f8c9b,_0x5bfdb9,_0x93064b),_0x526587=_0x498c2e=>{_0x5bfdb9['ts'][_0x498c2e]=_0x428f23();},_0x842581=(_0x18dc32,_0x2f73a5)=>{var _0x465ad2=_0x3d998c;let _0x31c9c7=_0x5bfdb9['ts'][_0x2f73a5];if(delete _0x5bfdb9['ts'][_0x2f73a5],_0x31c9c7){let _0x27518d=_0x5ae4d3(_0x31c9c7,_0x428f23());_0x582191(_0x10ee1e(_0x465ad2(0x1d8),_0x18dc32,_0x4420a1(),_0x4eb954,[_0x27518d],_0x2f73a5));}},_0x4e5ab6=_0x37b253=>_0x14dd8e=>{var _0x2bb83b=_0x3d998c;try{_0x526587(_0x14dd8e),_0x37b253(_0x14dd8e);}finally{_0x575b60[_0x2bb83b(0x1c4)][_0x2bb83b(0x1d8)]=_0x37b253;}},_0x51e0f4=_0x4db519=>_0x2400ae=>{var _0x2d96cf=_0x3d998c;try{let [_0x2b9e82,_0x2fe789]=_0x2400ae['split'](_0x2d96cf(0x273));_0x842581(_0x2fe789,_0x2b9e82),_0x4db519(_0x2b9e82);}finally{_0x575b60['console'][_0x2d96cf(0x1ea)]=_0x4db519;}};_0x575b60[_0x3d998c(0x260)]={'consoleLog':(_0x454cc5,_0x191a93)=>{var _0x46a209=_0x3d998c;_0x575b60[_0x46a209(0x1c4)][_0x46a209(0x256)][_0x46a209(0x25a)]!=='disabledLog'&&_0x582191(_0x10ee1e(_0x46a209(0x256),_0x454cc5,_0x4420a1(),_0x4eb954,_0x191a93));},'consoleTrace':(_0x64feee,_0x5b1099)=>{var _0x963014=_0x3d998c;_0x575b60[_0x963014(0x1c4)][_0x963014(0x256)]['name']!==_0x963014(0x299)&&_0x582191(_0x10ee1e(_0x963014(0x252),_0x64feee,_0x4420a1(),_0x4eb954,_0x5b1099));},'consoleTime':()=>{var _0x14ba63=_0x3d998c;_0x575b60[_0x14ba63(0x1c4)][_0x14ba63(0x1d8)]=_0x4e5ab6(_0x575b60[_0x14ba63(0x1c4)][_0x14ba63(0x1d8)]);},'consoleTimeEnd':()=>{var _0x4f2ede=_0x3d998c;_0x575b60[_0x4f2ede(0x1c4)]['timeEnd']=_0x51e0f4(_0x575b60[_0x4f2ede(0x1c4)][_0x4f2ede(0x1ea)]);},'autoLog':(_0x3dd72f,_0x47b02b)=>{var _0x48e51d=_0x3d998c;_0x582191(_0x10ee1e(_0x48e51d(0x256),_0x47b02b,_0x4420a1(),_0x4eb954,[_0x3dd72f]));},'autoLogMany':(_0x348836,_0x511d66)=>{var _0x26c38a=_0x3d998c;_0x582191(_0x10ee1e(_0x26c38a(0x256),_0x348836,_0x4420a1(),_0x4eb954,_0x511d66));},'autoTrace':(_0x4e5b2e,_0x99ff03)=>{var _0x257c66=_0x3d998c;_0x582191(_0x10ee1e(_0x257c66(0x252),_0x99ff03,_0x4420a1(),_0x4eb954,[_0x4e5b2e]));},'autoTraceMany':(_0x4b519e,_0x357444)=>{var _0x27e275=_0x3d998c;_0x582191(_0x10ee1e(_0x27e275(0x252),_0x4b519e,_0x4420a1(),_0x4eb954,_0x357444));},'autoTime':(_0x18001c,_0x14ae9e,_0x192755)=>{_0x526587(_0x192755);},'autoTimeEnd':(_0x229242,_0x1b6d26,_0x4f0695)=>{_0x842581(_0x1b6d26,_0x4f0695);},'coverage':_0x4dec71=>{var _0x332507=_0x3d998c;_0x582191({'method':_0x332507(0x1df),'version':_0x93064b,'args':[{'id':_0x4dec71}]});}};let _0x582191=J(_0x575b60,_0x127395,_0x1af3aa,_0x3c797c,_0x38d7c7,_0x1bea64),_0x4eb954=_0x575b60[_0x3d998c(0x247)];return _0x575b60[_0x3d998c(0x260)];})(globalThis,_0x438282(0x240),_0x438282(0x258),_0x438282(0x233),_0x438282(0x228),'1.0.0',_0x438282(0x1d7),_0x438282(0x268),_0x438282(0x1cf),_0x438282(0x28e));function _0x3fef(){var _0x5da782=['logger\\x20websocket\\x20error','','hostname','5MwdXRE','onopen','_socket','root_exp_id','onmessage','Error','parent','pop','setter','disabledTrace','allStrLength','autoExpandMaxDepth','valueOf','undefined','capped','Map','then','next.js','cappedElements','elements','cappedProps','resolveGetters','_p_','hrtime','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','astro','strLength','_sortProps','console','_ws','_sendErrorMessage','_hasMapOnItsPath','sortProps','_allowedToSend','Set','defineProperty','method','substr','getOwnPropertyNames','1','message','rootExpression','_maxConnectAttemptCount','75966dMQqWN','level','global','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','1696361310046','time','prototype','remix','_addFunctionsNode','[object\\x20Array]','_connectAttemptCount','_addProperty','coverage','POSITIVE_INFINITY','get','_inBrowser','host','_webSocketErrorDocsLink','number','HTMLAllCollection','getter','node','_setNodeExpandableState','timeEnd','_isArray','WebSocket','_type','toString','_isSet','sort','_reconnectTimeout','toLowerCase','bigint','unref','_disposeWebsocket','nodeModules','_addObjectProperty','boolean','_setNodeQueryPath','_attemptToReconnectShortly','Symbol','1262461SWpekW','_dateToString','hasOwnProperty','index','path','negativeInfinity','[object\\x20Date]','enumerable','nan','warn','null','_processTreeNodeResult','date','_additionalMetadata','_connected','_Symbol','_setNodeLabel','Buffer','stackTraceLimit','constructor','timeStamp','6606508aUvyXA','push','object','data','_undefined','indexOf','_connecting','_setNodeExpressionPath','create','isArray','String','384GYByLE','noFunctions','slice','[object\\x20Set]','reduceLimits','_hasSymbolPropertyOnItsPath','depth','_objectToString','includes','_isPrimitiveType','port','_treeNodePropertiesAfterFullValue','remix','_treeNodePropertiesBeforeFullValue','_cleanNode','_regExpToString','getOwnPropertySymbols','set','join','error','hits','onclose','split',"/Users/marciocarneiro/.vscode/extensions/wallabyjs.console-ninja-0.0.228/node_modules",'45844116NUkrJy','props','_connectToHostNow','RegExp','replace','serialize','Number','stack','autoExpandPropertyCount','_hasSetOnItsPath','_getOwnPropertyDescriptor','length','127.0.0.1','string','_quotedRegExp','catch','array','count','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_console_ninja_session','type','[object\\x20Map]','gateway.docker.internal','positiveInfinity','autoExpandPreviousObjects','[object\\x20BigInt]','70FEqbsq','11EvqbgY','_HTMLAllCollection','_keyStrRegExp','trace','function','default','getWebSocketClass','log','reload','64163','versions','name','map','ws://','_allowedToConnectOnSend','totalStrLength','unknown','_console_ninja','15594mUeKWH','_WebSocket','11196264ZecJpY','_isPrimitiveWrapperType','_numberRegExp','concat','_setNodePermissions',["localhost","127.0.0.1","example.cypress.io","MacBook-Pro-de-MARCIO.local","192.168.1.10"],'959QMymZX','_isNegativeZero','test','_property','process','2324394fQIAwR','match','value','expressionsToEvaluate','send',':logPointId:','_WebSocketClass','now','getPrototypeOf','_blacklistedProperty','__es'+'Module','autoExpand','isExpressionToEvaluate','stringify','_consoleNinjaAllowedToStart','forEach','_addLoadNode','_setNodeId','funcName','call','url','parse','...','current','autoExpandLimit','location','bind','performance','readyState','_getOwnPropertySymbols','failed\\x20to\\x20connect\\x20to\\x20host:\\x20'];_0x3fef=function(){return _0x5da782;};return _0x3fef();}`);
  } catch {
  }
}
function oo_oo(i, ...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: globals_default }], meta = () => ({
  charset: "utf-8",
  title: "Quattor Academia",
  viewport: "width=device-width,initial-scale=1"
}), loader = async ({ request }) => {
  var _a, _b;
  let session = await getSession(request.headers.get("Cookie"));
  if (!((_a = session.get("aluno")) != null && _a.id))
    return null;
  let aluno = (await getAluno((_b = session.get("aluno")) == null ? void 0 : _b.id))[0];
  return (0, import_node2.json)(aluno);
};
function App() {
  let aluno = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "pt", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Index, { aluno }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

// app/routes/aluno/planejamento/$idaluno.tsx
var idaluno_exports = {};
__export(idaluno_exports, {
  action: () => action,
  default: () => Idaluno,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_lodash = __toESM(require("lodash")), import_ai = require("react-icons/ai");

// app/components/ui/avatar.tsx
var React = __toESM(require("react")), AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"));

// app/lib/utils.ts
var import_clsx = require("clsx"), import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// app/components/ui/avatar.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Avatar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/avatar.tsx",
    lineNumber: 10,
    columnNumber: 3
  },
  this
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square  h-full w-full", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/avatar.tsx",
    lineNumber: 25,
    columnNumber: 3
  },
  this
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/avatar.tsx",
    lineNumber: 37,
    columnNumber: 3
  },
  this
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// app/components/ui/card.tsx
var React2 = __toESM(require("react"));
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), Card = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  this
));
Card.displayName = "Card";
var CardHeader = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-3", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 24,
    columnNumber: 3
  },
  this
));
CardHeader.displayName = "CardHeader";
var CardTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "h3",
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 36,
    columnNumber: 3
  },
  this
));
CardTitle.displayName = "CardTitle";
var CardDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 51,
    columnNumber: 3
  },
  this
));
CardDescription.displayName = "CardDescription";
var CardContent = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, !1, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 63,
  columnNumber: 3
}, this));
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "div",
  {
    ref,
    className: cn(" flex items-center p-6 pt-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 71,
    columnNumber: 3
  },
  this
));
CardFooter.displayName = "CardFooter";

// app/components/ui/select.tsx
var React3 = __toESM(require("react")), import_react_icons = require("@radix-ui/react-icons"), SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value, SelectTrigger = React3.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SelectPrimitive.Icon, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_icons.CaretSortIcon, { className: "h-4 w-4 opacity-50" }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 26,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 17,
    columnNumber: 3
  },
  this
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectContent = React3.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      SelectPrimitive.Viewport,
      {
        className: cn(
          "p-1",
          position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 49,
        columnNumber: 7
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 38,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 37,
  columnNumber: 3
}, this));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 67,
    columnNumber: 3
  },
  this
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React3.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_icons.CheckIcon, { className: "h-4 w-4" }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 88,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 87,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SelectPrimitive.ItemText, { children }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 92,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 79,
    columnNumber: 3
  },
  this
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 101,
    columnNumber: 3
  },
  this
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// app/routes/aluno/planejamento/$idaluno.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader2 = async ({ request, params }) => {
  let aluno = (await getAluno(Number(params.idaluno)))[0], historico = await getHistorico(Number(params.idaluno));
  return (0, import_node3.json)({ aluno, historico });
}, action = async ({ request }) => {
  let form = await request.formData(), values = Object.fromEntries(form), _action = form.get("_action");
  return _action === "delete" && await deleteTreinoPlanejadoDia(values), _action === "salvar" && await updateFicha(values), (0, import_node3.redirect)(".");
};
function Idaluno() {
  let { aluno, historico } = (0, import_react5.useLoaderData)(), transition = (0, import_react5.useTransition)(), PlaneTreino = import_lodash.default.mapValues(historico == null ? void 0 : historico.planejados, function(o) {
    return { treino: o.treinoP, dia: o.dia, id: o.id };
  }), plano = import_lodash.default.map(PlaneTreino, (treino) => treino), grupotreino = import_lodash.default.map(
    import_lodash.default.groupBy(PlaneTreino, "data"),
    (data, idx, dt, feito) => ({ data: idx, treino: data, dt, feito })
  ), ultimos = import_lodash.default.takeRight(grupotreino, 7);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
      fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "input",
        {
          hidden: !0,
          type: "number",
          name: "aluno",
          readOnly: !0,
          defaultValue: aluno.idMember
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
          lineNumber: 115,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Card, { className: "w-full md:w-11/12 mt-2 mx-auto  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardContent, { className: "grid grid-cols-1 gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid grid-cols-1 items-center justify-between ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center space-x-2 mt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Avatar, { className: "w-20 h-20", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(AvatarImage, { src: aluno.photo ? aluno.photo : "/user.png" }, void 0, !1, {
                fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                lineNumber: 127,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(AvatarFallback, { children: "Foto" }, void 0, !1, {
                fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                lineNumber: 128,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
              lineNumber: 126,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: " font-medium  text-lg leading-none", children: aluno.firstName }, void 0, !1, {
                fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                lineNumber: 131,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-sm text-stone-400 text-muted-foreground", children: import_lodash.default.filter(aluno.memberships, {
                membershipStatus: "active"
              }).map((n) => n.name) }, void 0, !1, {
                fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                lineNumber: 134,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: [
                "Matr\xEDcula - ",
                aluno.idMember
              ] }, void 0, !0, {
                fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                lineNumber: 139,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
              lineNumber: 130,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "div",
            {
              className: (historico == null ? void 0 : historico.nivel) === "iniciante" ? " bg-red-600 text-white rounded-md font-medium flex justify-self-end" : (historico == null ? void 0 : historico.nivel) === "intermediario" ? "bg-orange-500 text-white rounded-md font-medium flex justify-self-end" : "bg-green-500 text-white rounded-md font-medium flex justify-self-end",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Select, { name: "nivel", defaultValue: historico == null ? void 0 : historico.nivel, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SelectValue, { placeholder: "N\xEDvel do Aluno" }, void 0, !1, {
                  fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                  lineNumber: 153,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                  lineNumber: 152,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SelectContent, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SelectItem, { value: "iniciante", children: "Iniciante" }, void 0, !1, {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 156,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SelectItem, { value: "intermediario", children: "Intermedi\xE1rio" }, void 0, !1, {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 157,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SelectItem, { value: "avancado", children: "Avan\xE7ado" }, void 0, !1, {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 158,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                  lineNumber: 155,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                lineNumber: 151,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
              lineNumber: 143,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
          lineNumber: 124,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid grid-cols-1  ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "font-medium text-stone-500", children: "Hist\xF3rico" }, void 0, !1, {
              fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
              lineNumber: 174,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "textarea",
              {
                className: " block p-1 w-full text-gray-900 bg-stone-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                name: "historico",
                defaultValue: historico == null ? void 0 : historico.historico,
                rows: 4
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                lineNumber: 175,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 173,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 172,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "font-medium text-stone-500", children: "Patologias" }, void 0, !1, {
              fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
              lineNumber: 185,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "textarea",
              {
                className: " block p-1 w-full   text-gray-900 bg-stone-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                name: "patologias",
                defaultValue: historico == null ? void 0 : historico.patologias,
                rows: 4
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                lineNumber: 186,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 184,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
          lineNumber: 171,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "button",
          {
            name: "_action",
            value: "salvar",
            className: "bg-stone-300  text-black py-2 px-1 rounded-md",
            children: transition.state === "submitting" ? "Atualizando..." : "Atualizar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 195,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
        lineNumber: 123,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: ultimos && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "   text-stone-600 rounded-md font-semibold  text-center text-lg m-4", children: "Treinos Planejados" }, void 0, !1, {
        fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
        lineNumber: 211,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-stone-600 text-center place-content-center gap-2 container mx-auto grid grid-cols-2 md:gap-2 md:grid-cols-4 lg:grid-cols-7 lg:container-2xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardTitle, { children: "Segunda" }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 217,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardDescription, { children: plano.filter((o) => {
            var _a;
            return (_a = o.dia) == null ? void 0 : _a.includes("segunda");
          }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react5.Form,
            {
              method: "post",
              className: "flex  place-content-between items-center",
              children: [
                s.treino,
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    value: s.treino,
                    hidden: !0,
                    name: "treino",
                    readOnly: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 227,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    hidden: !0,
                    type: "number",
                    name: "aluno",
                    readOnly: !0,
                    defaultValue: aluno.idMember
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 234,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    hidden: !0,
                    name: "dia",
                    defaultValue: "segunda"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 241,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Link, { to: s.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_ai.AiFillEdit, { className: "w-5 h-5  text-teal-500" }, void 0, !1, {
                  fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                  lineNumber: 248,
                  columnNumber: 33
                }, this) }, void 0, !1, {
                  fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                  lineNumber: 247,
                  columnNumber: 31
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
              lineNumber: 223,
              columnNumber: 29
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 222,
            columnNumber: 27
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 218,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
          lineNumber: 216,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
          lineNumber: 215,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardTitle, { children: "Ter\xE7a" }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 258,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardDescription, { children: plano.filter((o) => {
            var _a;
            return (_a = o.dia) == null ? void 0 : _a.includes("terca");
          }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react5.Form,
            {
              method: "post",
              className: "flex  place-content-between items-center",
              children: [
                s.treino,
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    value: s.treino,
                    hidden: !0,
                    name: "treino",
                    readOnly: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 268,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    hidden: !0,
                    type: "number",
                    name: "aluno",
                    readOnly: !0,
                    defaultValue: aluno.idMember
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 275,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    hidden: !0,
                    name: "dia",
                    defaultValue: "terca"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 282,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Link, { to: s.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_ai.AiFillEdit, { className: "w-5 h-5  text-teal-500" }, void 0, !1, {
                  fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                  lineNumber: 289,
                  columnNumber: 33
                }, this) }, void 0, !1, {
                  fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                  lineNumber: 288,
                  columnNumber: 31
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
              lineNumber: 264,
              columnNumber: 29
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 263,
            columnNumber: 27
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 259,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
          lineNumber: 257,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
          lineNumber: 256,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardTitle, { children: "Quarta" }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 299,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardDescription, { children: plano.filter((o) => {
            var _a;
            return (_a = o.dia) == null ? void 0 : _a.includes("quarta");
          }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react5.Form,
            {
              method: "post",
              className: "flex  place-content-between items-center",
              children: [
                s.treino,
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    value: s.treino,
                    hidden: !0,
                    name: "treino",
                    readOnly: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 309,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    hidden: !0,
                    type: "number",
                    name: "aluno",
                    readOnly: !0,
                    defaultValue: aluno.idMember
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 316,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    hidden: !0,
                    name: "dia",
                    defaultValue: "quarta"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 323,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Link, { to: s.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_ai.AiFillEdit, { className: "w-5 h-5  text-teal-500" }, void 0, !1, {
                  fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                  lineNumber: 330,
                  columnNumber: 33
                }, this) }, void 0, !1, {
                  fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                  lineNumber: 329,
                  columnNumber: 31
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
              lineNumber: 305,
              columnNumber: 29
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 304,
            columnNumber: 27
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 300,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
          lineNumber: 298,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
          lineNumber: 297,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardTitle, { children: "Quinta" }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 340,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardDescription, { children: plano.filter((o) => {
            var _a;
            return (_a = o.dia) == null ? void 0 : _a.includes("quinta");
          }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react5.Form,
            {
              method: "post",
              className: "flex  place-content-between items-center",
              children: [
                s.treino,
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    value: s.treino,
                    hidden: !0,
                    name: "treino",
                    readOnly: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 350,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    hidden: !0,
                    type: "number",
                    name: "aluno",
                    readOnly: !0,
                    defaultValue: aluno.idMember
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 357,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    hidden: !0,
                    name: "dia",
                    defaultValue: "quinta"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 364,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Link, { to: s.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_ai.AiFillEdit, { className: "w-5 h-5  text-teal-500" }, void 0, !1, {
                  fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                  lineNumber: 371,
                  columnNumber: 33
                }, this) }, void 0, !1, {
                  fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                  lineNumber: 370,
                  columnNumber: 31
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
              lineNumber: 346,
              columnNumber: 29
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 345,
            columnNumber: 27
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 341,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
          lineNumber: 339,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
          lineNumber: 338,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardTitle, { children: "Sexta" }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 381,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardDescription, { children: plano.filter((o) => {
            var _a;
            return (_a = o.dia) == null ? void 0 : _a.includes("sexta");
          }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react5.Form,
            {
              method: "post",
              className: "flex  place-content-between items-center",
              children: [
                s.treino,
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    value: s.treino,
                    hidden: !0,
                    name: "treino",
                    readOnly: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 391,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    hidden: !0,
                    type: "number",
                    name: "aluno",
                    readOnly: !0,
                    defaultValue: aluno.idMember
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 398,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    hidden: !0,
                    name: "dia",
                    defaultValue: "sexta"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 405,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Link, { to: s.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_ai.AiFillEdit, { className: "w-5 h-5  text-teal-500" }, void 0, !1, {
                  fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                  lineNumber: 412,
                  columnNumber: 33
                }, this) }, void 0, !1, {
                  fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                  lineNumber: 411,
                  columnNumber: 31
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
              lineNumber: 387,
              columnNumber: 29
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 386,
            columnNumber: 27
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 382,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
          lineNumber: 380,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
          lineNumber: 379,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardTitle, { children: "S\xE1bado" }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 422,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardDescription, { className: " ", children: plano.filter((o) => {
            var _a;
            return (_a = o.dia) == null ? void 0 : _a.includes("sabado");
          }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react5.Form,
            {
              method: "post",
              className: "flex  place-content-between items-center",
              children: [
                s.treino,
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    value: s.treino,
                    hidden: !0,
                    name: "treino",
                    readOnly: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 432,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    hidden: !0,
                    type: "number",
                    name: "aluno",
                    readOnly: !0,
                    defaultValue: aluno.idMember
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 439,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    hidden: !0,
                    name: "dia",
                    defaultValue: "sabado"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 446,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  import_react5.Link,
                  {
                    to: s.id,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_ai.AiFillEdit, { className: "w-5 h-5  text-teal-500" }, void 0, !1, {
                      fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                      lineNumber: 455,
                      columnNumber: 33
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 452,
                    columnNumber: 31
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
              lineNumber: 428,
              columnNumber: 29
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 427,
            columnNumber: 27
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 423,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
          lineNumber: 421,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
          lineNumber: 420,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardTitle, { children: "Domingo" }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 465,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardDescription, { children: plano.filter((o) => {
            var _a;
            return (_a = o.dia) == null ? void 0 : _a.includes("domingo");
          }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react5.Form,
            {
              method: "post",
              className: "flex  place-content-between items-center",
              children: [
                s.treino,
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    value: s.treino,
                    hidden: !0,
                    name: "treino",
                    readOnly: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 475,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    hidden: !0,
                    type: "number",
                    name: "aluno",
                    readOnly: !0,
                    defaultValue: aluno.idMember
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 482,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    hidden: !0,
                    name: "dia",
                    defaultValue: "domingo"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 489,
                    columnNumber: 31
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  import_react5.Link,
                  {
                    to: s.id,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_ai.AiFillEdit, { className: "w-5 h-5  text-teal-500" }, void 0, !1, {
                      fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                      lineNumber: 498,
                      columnNumber: 33
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
                    lineNumber: 495,
                    columnNumber: 31
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
              lineNumber: 471,
              columnNumber: 29
            },
            this
          ) }, index, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 470,
            columnNumber: 27
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
            lineNumber: 466,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
          lineNumber: 464,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
          lineNumber: 463,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
        lineNumber: 214,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
      lineNumber: 210,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
      lineNumber: 208,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
      lineNumber: 207,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_react5.Link,
      {
        className: "bg-green-400 mt-3 w-1/2 container md:w-1/4 rounded-lg text-center block mb-24 p-2",
        to: "novo",
        children: "Novo Treino"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
        lineNumber: 568,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/aluno/planejamento/$idaluno.tsx",
    lineNumber: 112,
    columnNumber: 5
  }, this);
}

// app/routes/aluno/planejamento/$idaluno/$editar.tsx
var editar_exports = {};
__export(editar_exports, {
  action: () => action2,
  default: () => Editar,
  loader: () => loader3
});

// app/components/Modal.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Modal({ children, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "div",
    {
      className: "justify-center bg-white/80  items-center flex overflow-x-hidden overflow-y-auto fixed  inset-0 z-50 outline-none focus:outline-none",
      onClick: onClose,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "dialog",
        {
          className: "relative  min-h-[350px]  mx-auto  ",
          open: !0,
          onClick: (event) => event.stopPropagation(),
          children
        },
        void 0,
        !1,
        {
          fileName: "app/components/Modal.tsx",
          lineNumber: 7,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Modal.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}
var Modal_default = Modal;

// app/components/ui/button.tsx
var React4 = __toESM(require("react")), import_react_slot = require("@radix-ui/react-slot"), import_class_variance_authority = require("class-variance-authority");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary"
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = React4.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    asChild ? import_react_slot.Slot : "button",
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/button.tsx",
      lineNumber: 45,
      columnNumber: 7
    },
    this
  )
);
Button.displayName = "Button";

// app/routes/aluno/planejamento/$idaluno/$editar.tsx
var import_node4 = require("@remix-run/node"), import_react6 = require("@remix-run/react"), import_lodash2 = __toESM(require("lodash")), import_fa = require("react-icons/fa");

// app/utils/treinos.server.ts
var import_uuid2 = require("uuid"), getExercicios = async (id) => prisma.treinos.findUnique({
  where: {
    id
  }
}), getTreinos2 = async (semana) => prisma.treinos.findMany({
  where: {
    semana
  }
}), deleteExercicio = async (id, execid) => prisma.treinos.update({
  where: {
    id
  },
  data: {
    exercicios: {
      deleteMany: {
        where: {
          execid
        }
      }
    }
  }
}), updateCadastroTreino = async (id, nome, repeticoes, carga, obs, execid, video) => prisma.treinos.update({
  where: {
    id
  },
  data: {
    exercicios: {
      updateMany: {
        where: {
          execid
        },
        data: {
          nome,
          carga,
          obs,
          Repeticoes: repeticoes,
          video
        }
      }
    }
  }
}), updateTreino = async (treino) => {
  let existe = await prisma.treinos.findFirst({
    where: {
      grupo: treino.grupo,
      semana: +treino.semana
    },
    select: {
      id: !0
    }
  }), idTreino = existe ? Object.values(existe).toString() : "000000000000000000000000";
  return prisma.treinos.upsert({
    where: {
      id: idTreino
    },
    update: {
      exercicios: {
        push: {
          nome: treino.nome,
          Repeticoes: treino.repeticoes,
          carga: treino.carga,
          obs: treino.obs,
          video: treino.video,
          execid: (0, import_uuid2.v4)()
        }
      }
    },
    create: {
      grupo: treino.grupo,
      semana: +treino.semana,
      exercicios: {
        nome: treino.nome,
        Repeticoes: treino.repeticoes,
        carga: treino.carga,
        obs: treino.obs,
        video: treino.video,
        execid: (0, import_uuid2.v4)()
      }
    }
  });
};
var treinos = {
  grupos: [
    {
      value: "ABDOME",
      label: "Abdome"
    },
    {
      value: "BICEPS",
      label: "Biceps"
    },
    {
      value: "COSTAS",
      label: "Costas"
    },
    {
      value: "GLUTEOS",
      label: "Gluteos"
    },
    {
      value: "MEMBROS INFERIORES GERAL",
      label: "Membros Inferiores Geral"
    },
    {
      value: "MEMBROS SUPERIORES GERAL",
      label: "Membros Superiores Geral"
    },
    {
      value: "MEMBROS SUPERIORES 1",
      label: "Membros Superiores 1"
    },
    {
      value: "MEMBROS SUPERIORES 2",
      label: "Membros Superiores 2"
    },
    {
      value: "OMBROS",
      label: "Ombros"
    },
    {
      value: "PANTURRILHA",
      label: "Panturrilha"
    },
    {
      value: "PEITORAL",
      label: "Peitoral"
    },
    {
      value: "POSTERIORES DE COXAS",
      label: "Posteriores de Coxas"
    },
    {
      value: "QUADS",
      label: "Quads"
    },
    {
      value: "TRICEPS",
      label: "Triceps"
    }
  ]
};

// app/components/ui/checkbox.tsx
var React5 = __toESM(require("react")), CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox")), import_react_icons2 = require("@radix-ui/react-icons");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), Checkbox = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react_icons2.CheckIcon, { className: "h-4 w-4" }, void 0, !1, {
          fileName: "app/components/ui/checkbox.tsx",
          lineNumber: 22,
          columnNumber: 7
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/checkbox.tsx",
        lineNumber: 19,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/checkbox.tsx",
    lineNumber: 11,
    columnNumber: 3
  },
  this
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// app/routes/aluno/planejamento/$idaluno/$editar.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), loader3 = async ({ request, params }) => {
  let aluno = params.idaluno, id = params.editar, historico = await getHistorico(Number(aluno));
  return { gruposo: treinos, historico, id, aluno };
}, action2 = async ({ request }) => {
  let form = await request.formData(), values = Object.fromEntries(form), dias = [];
  values.segunda && dias.push("segunda"), values.terca && dias.push("terca"), values.quarta && dias.push("quarta"), values.quinta && dias.push("quinta"), values.sexta && dias.push("sexta"), values.sabado && dias.push("sabado"), values.domingo && dias.push("domingo");
  let _action = form.get("_action");
  return _action === "salvar" && await updatePlanejamentoTreino(values, dias), _action === "apagar" && await deleteTreinoPlanejado(values), (0, import_node4.redirect)("..");
};
function Editar() {
  let { gruposo, id, historico, aluno } = (0, import_react6.useLoaderData)(), gruposobj = import_lodash2.default.map(gruposo, (grupo) => grupo), grupos = import_lodash2.default.flatten(gruposobj), PlaneTreino = import_lodash2.default.mapValues(historico == null ? void 0 : historico.planejados, function(o) {
    return { treino: o.treinoP, dia: o.dia, id: o.id };
  }), treinoP = import_lodash2.default.map(PlaneTreino, (treino) => treino).filter((t) => {
    var _a;
    return (_a = t.id) == null ? void 0 : _a.includes(id);
  });
  console.log(treinoP.filter((o) => {
    var _a;
    return (_a = o.dia) == null ? void 0 : _a.includes("terca");
  }));
  let navigate = (0, import_react6.useNavigate)();
  function closeHandler() {
    navigate(-1);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Modal_default, { onClose: closeHandler, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react6.Form, { method: "post", className: "font-semibold  ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "text", id: "id", name: "id", hidden: !0, readOnly: !0, value: id }, void 0, !1, {
        fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "input",
        {
          type: "text",
          id: "aluno",
          name: "aluno",
          readOnly: !0,
          hidden: !0,
          value: aluno
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
          lineNumber: 91,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: " text-center mb-4", children: "Edi\xE7ao do treino" }, void 0, !1, {
        fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "text-center mb-5", children: treinoP.map((t) => t.treino) }, void 0, !1, {
        fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "grid grid-cols-3 md:flex items-center ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "md:flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            Checkbox,
            {
              id: "segunda",
              name: "segunda",
              className: "mr-1",
              defaultChecked: treinoP.filter((o) => {
                var _a;
                return (_a = o.dia) == null ? void 0 : _a.includes("segunda");
              }).length > 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
              lineNumber: 104,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "label",
            {
              htmlFor: "segunda",
              className: "text-sm  mr-7  text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              children: "Segunda"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
              lineNumber: 112,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "md:flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            Checkbox,
            {
              id: "terca",
              name: "terca",
              className: "mr-1",
              defaultChecked: treinoP.filter((o) => {
                var _a;
                return (_a = o.dia) == null ? void 0 : _a.includes("terca");
              }).length > 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
              lineNumber: 119,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "label",
            {
              htmlFor: "terca",
              className: "text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              children: "Ter\xE7a"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
              lineNumber: 127,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
          lineNumber: 118,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "md:flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            Checkbox,
            {
              id: "quarta",
              name: "quarta",
              className: "mr-1",
              defaultChecked: treinoP.filter((o) => {
                var _a;
                return (_a = o.dia) == null ? void 0 : _a.includes("quarta");
              }).length > 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
              lineNumber: 134,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "label",
            {
              htmlFor: "quarta",
              className: "text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              children: "Quarta"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
              lineNumber: 142,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "md:flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            Checkbox,
            {
              id: "quinta",
              name: "quinta",
              className: "mr-1",
              defaultChecked: treinoP.filter((o) => {
                var _a;
                return (_a = o.dia) == null ? void 0 : _a.includes("quinta");
              }).length > 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
              lineNumber: 149,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "label",
            {
              htmlFor: "quinta",
              className: "text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              children: "Quinta"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
              lineNumber: 157,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
          lineNumber: 148,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "md:flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            Checkbox,
            {
              id: "sexta",
              name: "sexta",
              className: "mr-1",
              defaultChecked: treinoP.filter((o) => {
                var _a;
                return (_a = o.dia) == null ? void 0 : _a.includes("sexta");
              }).length > 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
              lineNumber: 164,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "label",
            {
              htmlFor: "sexta",
              className: "text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              children: "Sexta"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
              lineNumber: 172,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "md:flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            Checkbox,
            {
              id: "sabado",
              name: "sabado",
              className: "mr-1",
              defaultChecked: treinoP.filter((o) => {
                var _a;
                return (_a = o.dia) == null ? void 0 : _a.includes("sabado");
              }).length > 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
              lineNumber: 179,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "label",
            {
              htmlFor: "sabado",
              className: "text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              children: "S\xE1bado"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
              lineNumber: 187,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
          lineNumber: 178,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "md:flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            Checkbox,
            {
              id: "domingo",
              name: "domingo",
              className: "mr-1",
              defaultChecked: treinoP.filter((o) => {
                var _a;
                return (_a = o.dia) == null ? void 0 : _a.includes("domingo");
              }).length > 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
              lineNumber: 194,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "label",
            {
              htmlFor: "domingo",
              className: "text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              children: "Domingo"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
              lineNumber: 202,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
          lineNumber: 193,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex mt-4 space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          Button,
          {
            variant: "secondary",
            className: "bg-stone-300  w-full text-black ",
            name: "_action",
            value: "salvar",
            children: "Salvar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
            lineNumber: 210,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          Button,
          {
            variant: "secondary",
            className: "bg-red-600 text-white  w-full ",
            name: "_action",
            value: "apagar",
            children: "Apagar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
            lineNumber: 217,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
        lineNumber: 209,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: " flex place-content-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react6.Link, { to: "..", className: "m-4 text-xl ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_fa.FaWindowClose, { className: " font-semibold text-3xl text-stone-600 " }, void 0, !1, {
      fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
      lineNumber: 228,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
      lineNumber: 227,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
      lineNumber: 226,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno/planejamento/$idaluno/$editar.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}

// app/routes/aluno/planejamento/$idaluno/novo.tsx
var novo_exports = {};
__export(novo_exports, {
  action: () => action3,
  default: () => Novo,
  loader: () => loader4
});
var import_react7 = require("@remix-run/react"), import_fa2 = require("react-icons/fa");

// app/components/ui/popover.tsx
var React6 = __toESM(require("react")), PopoverPrimitive = __toESM(require("@radix-ui/react-popover"));
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), Popover = PopoverPrimitive.Root, PopoverTrigger = PopoverPrimitive.Trigger, PopoverContent = React6.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(PopoverPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/popover.tsx",
    lineNumber: 15,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/popover.tsx",
  lineNumber: 14,
  columnNumber: 3
}, this));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// app/routes/aluno/planejamento/$idaluno/novo.tsx
var import_react8 = require("react");
var import_node5 = require("@remix-run/node");
var import_lucide_react = require("lucide-react");

// app/components/ui/command.tsx
var React7 = __toESM(require("react")), import_react_icons3 = require("@radix-ui/react-icons"), import_cmdk = require("cmdk");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), Command = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
  import_cmdk.Command,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 13,
    columnNumber: 3
  },
  this
));
Command.displayName = import_cmdk.Command.displayName;
var CommandInput = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react_icons3.MagnifyingGlassIcon, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }, void 0, !1, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    import_cmdk.Command.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/command.tsx",
      lineNumber: 44,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 42,
  columnNumber: 3
}, this));
CommandInput.displayName = import_cmdk.Command.Input.displayName;
var CommandList = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
  import_cmdk.Command.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 61,
    columnNumber: 3
  },
  this
));
CommandList.displayName = import_cmdk.Command.List.displayName;
var CommandEmpty = React7.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
  import_cmdk.Command.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 74,
    columnNumber: 3
  },
  this
));
CommandEmpty.displayName = import_cmdk.Command.Empty.displayName;
var CommandGroup = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
  import_cmdk.Command.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 87,
    columnNumber: 3
  },
  this
));
CommandGroup.displayName = import_cmdk.Command.Group.displayName;
var CommandSeparator = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
  import_cmdk.Command.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 103,
    columnNumber: 3
  },
  this
));
CommandSeparator.displayName = import_cmdk.Command.Separator.displayName;
var CommandItem = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
  import_cmdk.Command.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 115,
    columnNumber: 3
  },
  this
));
CommandItem.displayName = import_cmdk.Command.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
  "span",
  {
    className: cn(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 132,
    columnNumber: 5
  },
  this
);
CommandShortcut.displayName = "CommandShortcut";

// app/components/ui/input.tsx
var React8 = __toESM(require("react"));
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), Input = React8.forwardRef(
  ({ className, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "input",
    {
      type,
      className: cn(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/input.tsx",
      lineNumber: 11,
      columnNumber: 7
    },
    this
  )
);
Input.displayName = "Input";

// app/routes/aluno/planejamento/$idaluno/novo.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), loader4 = async ({ request, params }) => treinos, action3 = async ({ request }) => {
  let form = await request.formData(), values = Object.fromEntries(form);
  var dias = [];
  values.segunda && dias.push("segunda"), values.terca && dias.push("terca"), values.quarta && dias.push("quarta"), values.quinta && dias.push("quinta"), values.sexta && dias.push("sexta"), values.sabado && dias.push("sabado"), values.domingo && dias.push("domingo");
  let planejado = await updatePlanejamento(values, dias);
  return (0, import_node5.redirect)("..");
};
function Novo() {
  var _a;
  let { grupos } = (0, import_react7.useLoaderData)(), { aluno } = (0, import_react7.useRouteLoaderData)("routes/aluno/planejamento/$idaluno"), [open, setOpen] = (0, import_react8.useState)(!1), [treino, setTreino] = (0, import_react8.useState)(""), navigate = (0, import_react7.useNavigate)();
  function closeHandler() {
    navigate(-1);
  }
  let [date, setDate] = (0, import_react8.useState)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Modal_default, { onClose: closeHandler, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      import_react7.Form,
      {
        method: "post",
        className: "font-semibold grid space-x-2 space-y-4 grid-cols-1 md:grid-cols-2 ",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: " md:col-span-2 text-center mb-4", children: [
            "Planejamento de treino - ",
            aluno.firstName,
            " "
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
            lineNumber: 87,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Popover, { open, onOpenChange: setOpen, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              Button,
              {
                variant: "outline",
                role: "combobox",
                "aria-expanded": open,
                className: " text-stone-500 justify-between",
                children: [
                  treino.toUpperCase() ? (_a = grupos.find(
                    (grupo) => grupo.value.toUpperCase() == treino.toUpperCase()
                  )) == null ? void 0 : _a.label : "Selecione o Treino..",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_lucide_react.ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }, void 0, !1, {
                    fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                    lineNumber: 103,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                lineNumber: 92,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
              lineNumber: 91,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(PopoverContent, { className: "w-[300px] p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Command, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CommandInput, { placeholder: "Procurar Treino..." }, void 0, !1, {
                fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                lineNumber: 108,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CommandEmpty, { children: "Treino n\xE3o encontrado" }, void 0, !1, {
                fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                lineNumber: 109,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CommandGroup, { children: grupos.map((grupo) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                CommandItem,
                {
                  onSelect: (currentValue) => {
                    setTreino(
                      currentValue == treino.toUpperCase() ? "" : currentValue.toUpperCase()
                    ), setOpen(!1);
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                      import_lucide_react.Check,
                      {
                        className: cn(
                          "mr-2 h-4 w-4",
                          treino.toUpperCase() == grupo.value.toUpperCase() ? "opacity-100" : "opacity-0"
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                        lineNumber: 122,
                        columnNumber: 21
                      },
                      this
                    ),
                    grupo.label
                  ]
                },
                grupo.value,
                !0,
                {
                  fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                  lineNumber: 112,
                  columnNumber: 19
                },
                this
              )) }, void 0, !1, {
                fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                lineNumber: 110,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
              lineNumber: 107,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
              lineNumber: 106,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
            lineNumber: 90,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: " text-left", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { hidden: !0, value: aluno.idMember, id: "aluno", name: "aluno" }, void 0, !1, {
              fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
              lineNumber: 139,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { hidden: !0, value: treino, name: "treino", id: "treino" }, void 0, !1, {
              fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
              lineNumber: 140,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              Input,
              {
                className: "md:col-span-2",
                type: "text",
                id: "treinolivre",
                name: "treinolivre",
                placeholder: "Treino Livre"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                lineNumber: 141,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
            lineNumber: 137,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "grid grid-cols-3 md:flex items-center ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "md:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Checkbox, { id: "segunda", name: "segunda", className: "mr-1" }, void 0, !1, {
                fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                lineNumber: 176,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                "label",
                {
                  htmlFor: "segunda",
                  className: "text-sm  mr-7  text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                  children: "Segunda"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                  lineNumber: 177,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
              lineNumber: 175,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "md:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Checkbox, { id: "terca", name: "terca", className: "mr-1" }, void 0, !1, {
                fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                lineNumber: 184,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                "label",
                {
                  htmlFor: "terca",
                  className: "text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                  children: "Ter\xE7a"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                  lineNumber: 185,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
              lineNumber: 183,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "md:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Checkbox, { id: "quarta", name: "quarta", className: "mr-1" }, void 0, !1, {
                fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                lineNumber: 192,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                "label",
                {
                  htmlFor: "quarta",
                  className: "text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                  children: "Quarta"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                  lineNumber: 193,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
              lineNumber: 191,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "md:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Checkbox, { id: "quinta", name: "quinta", className: "mr-1" }, void 0, !1, {
                fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                lineNumber: 200,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                "label",
                {
                  htmlFor: "quinta",
                  className: "text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                  children: "Quinta"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                  lineNumber: 201,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
              lineNumber: 199,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "md:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Checkbox, { id: "sexta", name: "sexta", className: "mr-1" }, void 0, !1, {
                fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                lineNumber: 208,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                "label",
                {
                  htmlFor: "sexta",
                  className: "text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                  children: "Sexta"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                  lineNumber: 209,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
              lineNumber: 207,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "md:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Checkbox, { id: "sabado", name: "sabado", className: "mr-1" }, void 0, !1, {
                fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                lineNumber: 216,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                "label",
                {
                  htmlFor: "sabado",
                  className: "text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                  children: "S\xE1bado"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                  lineNumber: 217,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
              lineNumber: 215,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "md:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Checkbox, { id: "domingo", name: "domingo", className: "mr-1" }, void 0, !1, {
                fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                lineNumber: 224,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                "label",
                {
                  htmlFor: "domingo",
                  className: "text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                  children: "Domingo"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
                  lineNumber: 225,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
              lineNumber: 223,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
            lineNumber: 174,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            Button,
            {
              variant: "secondary",
              className: "bg-stone-400 md:col-span-2 text-black ",
              children: "Salvar"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
              lineNumber: 233,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
        lineNumber: 84,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: " flex place-content-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react7.Link, { to: "..", className: "m-4 text-xl ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_fa2.FaWindowClose, { className: " font-semibold text-3xl text-stone-600 " }, void 0, !1, {
      fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
      lineNumber: 241,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
      lineNumber: 240,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
      lineNumber: 239,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno/planejamento/$idaluno/novo.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

// app/routes/aluno/planejamento/index.tsx
var planejamento_exports = {};
__export(planejamento_exports, {
  default: () => Planejamento,
  loader: () => loader5
});
var import_node6 = require("@remix-run/node");
var import_react9 = require("@remix-run/react");

// app/components/ui/table.tsx
var React9 = __toESM(require("react"));
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), Table = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 10,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 9,
  columnNumber: 3
}, this));
Table.displayName = "Table";
var TableHeader = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }, void 0, !1, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 23,
  columnNumber: 3
}, this));
TableHeader.displayName = "TableHeader";
var TableBody = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 31,
    columnNumber: 3
  },
  this
));
TableBody.displayName = "TableBody";
var TableFooter = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
  "tfoot",
  {
    ref,
    className: cn("bg-primary font-medium text-primary-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 43,
    columnNumber: 3
  },
  this
));
TableFooter.displayName = "TableFooter";
var TableRow = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 55,
    columnNumber: 3
  },
  this
));
TableRow.displayName = "TableRow";
var TableHead = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
  "th",
  {
    ref,
    className: cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 70,
    columnNumber: 3
  },
  this
));
TableHead.displayName = "TableHead";
var TableCell = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 85,
    columnNumber: 3
  },
  this
));
TableCell.displayName = "TableCell";
var TableCaption = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 97,
    columnNumber: 3
  },
  this
));
TableCaption.displayName = "TableCaption";

// app/routes/aluno/planejamento/index.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), loader5 = async ({ request, params }) => {
  let par = new URL(request.url).searchParams.get("aluno"), alunos = await getAlunoNome(par);
  return (0, import_node6.json)({ alunos });
};
function Planejamento() {
  var _a;
  let nome = (0, import_react9.useFetcher)(), alunos = (_a = nome.data) == null ? void 0 : _a.alunos;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: " container mx-auto p-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(nome.Form, { method: "get", action: ".", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex w-full max-w-sm items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Input, { name: "aluno", type: "search", placeholder: "Pesquisar Aluno" }, void 0, !1, {
          fileName: "app/routes/aluno/planejamento/index.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Button, { name: "", className: " bg-stone-400", type: "submit", children: "Pesquisar" }, void 0, !1, {
          fileName: "app/routes/aluno/planejamento/index.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno/planejamento/index.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/aluno/planejamento/index.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Table, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TableCaption, { children: "Alunos " }, void 0, !1, {
          fileName: "app/routes/aluno/planejamento/index.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TableRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TableHead, { className: "w-[100px]", children: "Matr\xEDcula" }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/index.tsx",
            lineNumber: 44,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TableHead, { children: "Nome" }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/index.tsx",
            lineNumber: 45,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/planejamento/index.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno/planejamento/index.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TableBody, { children: alunos == null ? void 0 : alunos.map((aluno) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TableRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TableCell, { className: "font-medium", children: aluno.idMember }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/index.tsx",
            lineNumber: 51,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react9.Link, { to: `/aluno/planejamento/${aluno.idMember}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TableCell, { children: aluno.lastName === null ? aluno.firstName : aluno.firstName + " " + aluno.lastName }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/index.tsx",
            lineNumber: 53,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento/index.tsx",
            lineNumber: 52,
            columnNumber: 17
          }, this)
        ] }, aluno.idMember, !0, {
          fileName: "app/routes/aluno/planejamento/index.tsx",
          lineNumber: 50,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/aluno/planejamento/index.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno/planejamento/index.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno/planejamento/index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react9.Outlet, {}, void 0, !1, {
      fileName: "app/routes/aluno/planejamento/index.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno/planejamento/index.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/aluno/$treino/$maquina.tsx
var maquina_exports = {};
__export(maquina_exports, {
  default: () => Maquina,
  loader: () => loader6
});
var import_react10 = require("@remix-run/react"), import_fa3 = require("react-icons/fa"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), loader6 = async ({ request, params }) => params.maquina;
function Maquina() {
  let maquina = (0, import_react10.useLoaderData)(), navigate = (0, import_react10.useNavigate)();
  function closeHandler() {
    navigate(-1);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Modal_default, { onClose: closeHandler, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      "img",
      {
        src: `/${maquina}`,
        className: " shadow-lg w-96 h-96  mx-auto",
        alt: "Video"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/aluno/$treino/$maquina.tsx",
        lineNumber: 19,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react10.Link, { to: "..", className: "m-4 text-xl ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_fa3.FaWindowClose, {}, void 0, !1, {
      fileName: "app/routes/aluno/$treino/$maquina.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno/$treino/$maquina.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno/$treino/$maquina.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/aluno/planejamento_bak.tsx
var planejamento_bak_exports = {};
__export(planejamento_bak_exports, {
  default: () => Planejamento2,
  loader: () => loader7
});
var import_node7 = require("@remix-run/node"), import_fa4 = require("react-icons/fa");
var import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), loader7 = async ({ request, params }) => {
  let par = new URL(request.url).searchParams.get("aluno"), alunos = await getAlunoNome(par);
  return (0, import_node7.json)({ alunos });
};
function Planejamento2() {
  var _a;
  let nome = (0, import_react11.useFetcher)(), alunos = (_a = nome.data) == null ? void 0 : _a.alunos;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: " container mx-auto p-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(nome.Form, { method: "get", action: ".", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex w-full max-w-sm items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Input, { name: "aluno", type: "search", placeholder: "Pesquisar Aluno" }, void 0, !1, {
          fileName: "app/routes/aluno/planejamento_bak.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Button, { name: "", className: " bg-stone-400", type: "submit", children: "Pesquisar" }, void 0, !1, {
          fileName: "app/routes/aluno/planejamento_bak.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno/planejamento_bak.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/aluno/planejamento_bak.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Table, { className: "w-1/2 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TableCaption, { children: "Alunos " }, void 0, !1, {
          fileName: "app/routes/aluno/planejamento_bak.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TableRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TableHead, { className: "w-[100px]", children: "Matr\xEDcula" }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento_bak.tsx",
            lineNumber: 46,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TableHead, { children: "Nome" }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento_bak.tsx",
            lineNumber: 47,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TableHead, {}, void 0, !1, {
            fileName: "app/routes/aluno/planejamento_bak.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/planejamento_bak.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno/planejamento_bak.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TableBody, { children: alunos == null ? void 0 : alunos.map((aluno) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TableRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TableCell, { className: "font-medium", children: aluno.idMember }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento_bak.tsx",
            lineNumber: 54,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TableCell, { children: aluno.firstName + " " + aluno.lastName }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento_bak.tsx",
            lineNumber: 55,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            import_react11.Link,
            {
              to: `/aluno/planejamento/${aluno.idMember}`,
              className: "text-green-600 text-lg ",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_fa4.FaUserCheck, { className: "text-lg" }, void 0, !1, {
                fileName: "app/routes/aluno/planejamento_bak.tsx",
                lineNumber: 60,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno/planejamento_bak.tsx",
              lineNumber: 57,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/aluno/planejamento_bak.tsx",
            lineNumber: 56,
            columnNumber: 17
          }, this)
        ] }, aluno.idMember, !0, {
          fileName: "app/routes/aluno/planejamento_bak.tsx",
          lineNumber: 53,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/aluno/planejamento_bak.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno/planejamento_bak.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno/planejamento_bak.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react11.Outlet, {}, void 0, !1, {
      fileName: "app/routes/aluno/planejamento_bak.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno/planejamento_bak.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/routes/aluno/spinning_bak.tsx
var spinning_bak_exports = {};
__export(spinning_bak_exports, {
  CatchBoundary: () => CatchBoundary,
  action: () => action4,
  default: () => Index2
});
var import_node8 = require("@remix-run/node"), import_node9 = require("@remix-run/node"), import_react12 = require("@remix-run/react");
var import_react_hot_toast = __toESM(require("react-hot-toast")), import_react13 = require("react"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), action4 = async ({ request }) => {
  let matricula = (await request.formData()).get("matricula"), aluno = await getAluno(matricula);
  if (!aluno.idMember)
    throw (0, import_node8.json)(
      { message: "Aluno n\xE3o Encontrado" },
      { status: 401, statusText: Math.floor(Math.random() * 15).toString() }
    );
  if (aluno.membershipStatus === "Inactive")
    throw (0, import_node8.json)(
      { message: "Aluno Inativo" },
      { status: 401, statusText: Math.floor(Math.random() * 15).toString() }
    );
  return (0, import_node9.redirect)(`/aluno/${aluno.idMember}`);
};
function Index2() {
  let transition = (0, import_react12.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "h-screen w-full bg-stone-100 font-Roboto ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "bg-gradient-to-r from-[rgb(253,0,0)] to-[#ffa927]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "text-gray-600 body-font bg-no-repeat min-h-screen bg-contain bg-center bg-[url('/bola50.svg')]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "h-full mt-24 items-center flex flex-col gap-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react12.Form, { method: "post", className: "rounded-2xl bg-black p-6 w-96", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { htmlFor: "matricula", className: "text-white font-semibold ", children: "N\xFAmero de Matricula" }, void 0, !1, {
      fileName: "app/routes/aluno/spinning_bak.tsx",
      lineNumber: 43,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      "input",
      {
        className: "w-full p-2 rounded-xl my-2",
        type: "number",
        name: "matricula",
        required: !0
      },
      void 0,
      !1,
      {
        fileName: "app/routes/aluno/spinning_bak.tsx",
        lineNumber: 46,
        columnNumber: 15
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      "button",
      {
        disabled: transition.state === "submitting" || transition.state === "loading",
        type: "submit",
        name: "Entrar",
        className: "" + transition.state == "loading" ? "rounded-xl mt-2  bg-blue-600 px-3 py-2 text-white font-semibold" : "rounded-xl mt-2  bg-orange-600 px-3 py-2 text-white font-semibold hover:bg-orange-400 hover:-translate-y-1",
        children: transition.state === "submitting" ? "Localizando..." : transition.state === "loading" ? "Carregando Treino" : "Entrar"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/aluno/spinning_bak.tsx",
        lineNumber: 53,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/aluno/spinning_bak.tsx",
      lineNumber: 52,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno/spinning_bak.tsx",
    lineNumber: 42,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/aluno/spinning_bak.tsx",
    lineNumber: 41,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/aluno/spinning_bak.tsx",
    lineNumber: 40,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/aluno/spinning_bak.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/aluno/spinning_bak.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  var _a;
  let transition = (0, import_react12.useTransition)(), caughtResponse = (0, import_react12.useCatch)(), message = (_a = caughtResponse.data) == null ? void 0 : _a.message, random = caughtResponse.statusText;
  return (0, import_react13.useEffect)(() => {
    (() => import_react_hot_toast.default.error(/* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: message }, void 0, !1, {
      fileName: "app/routes/aluno/spinning_bak.tsx",
      lineNumber: 87,
      columnNumber: 38
    }, this)))();
  }, [random, message]), /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "h-screen w-full bg-stone-100 font-Roboto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      import_react_hot_toast.Toaster,
      {
        toastOptions: {
          className: "",
          style: {
            padding: "12px",
            color: "#ffffff",
            background: "#f78e34"
          }
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/aluno/spinning_bak.tsx",
        lineNumber: 94,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Nav, {}, void 0, !1, {
      fileName: "app/routes/aluno/spinning_bak.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "h-full mt-24 items-center flex flex-col gap-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react12.Form, { method: "post", className: "rounded-2xl bg-stone-200 p-6 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "label",
        {
          htmlFor: "matricula",
          className: "text-stone-600 font-semibold ",
          children: "N\xFAmero de Matricula"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno/spinning_bak.tsx",
          lineNumber: 108,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "input",
        {
          className: "w-full p-2 rounded-xl my-2",
          type: "number",
          name: "matricula",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno/spinning_bak.tsx",
          lineNumber: 113,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "button",
        {
          disabled: transition.state === "submitting" || transition.state === "loading",
          type: "submit",
          name: "Entrar",
          className: "" + transition.state == "loading" ? "rounded-xl mt-2  bg-blue-600 px-3 py-2 text-white font-semibold" : "rounded-xl mt-2  bg-green-600 px-3 py-2 text-white font-semibold hover:bg-orange-400 hover:-translate-y-1",
          children: transition.state === "submitting" ? "Localizando..." : transition.state === "loading" ? "Carregando Treino" : "Entrar"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno/spinning_bak.tsx",
          lineNumber: 144,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/aluno/spinning_bak.tsx",
        lineNumber: 143,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno/spinning_bak.tsx",
      lineNumber: 107,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno/spinning_bak.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno/spinning_bak.tsx",
    lineNumber: 93,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/aluno/spinning_bak.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

// app/routes/spinning/index_old.tsx
var index_old_exports = {};
__export(index_old_exports, {
  action: () => action5,
  default: () => Index3
});
var import_node10 = require("@remix-run/node"), import_react15 = require("@remix-run/react");

// app/components/Navbar.tsx
var import_react14 = require("@remix-run/react"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function Navbar2() {
  let activeClassName = "text-orange-500", NoaActiveClassName = "text-orange-white";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("nav", { className: "bg-black text-white border-gray-200 px-2  sm:px-4 py-2.5  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "container flex flex-wrap justify-between items-center mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react14.NavLink, { to: "/", className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      "img",
      {
        src: "/logo_branco.svg",
        className: "mr-3 h-8 md:h-10",
        alt: "Quattor Logo"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 10,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex space-x-4 font-light", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        import_react14.NavLink,
        {
          to: "/",
          className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
          children: "HOME"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 17,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        import_react14.NavLink,
        {
          to: "/aluno",
          className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
          children: "TREINOS"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 24,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        import_react14.NavLink,
        {
          to: "/spinning",
          className: ({ isActive }) => isActive ? activeClassName : NoaActiveClassName,
          children: "SPINNING"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 31,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/spinning/index_old.tsx
var import_lodash3 = __toESM(require("lodash")), import_im = require("react-icons/im");
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), action5 = async ({ request }) => {
  let matricula = (await request.formData()).get("matricula"), motivo = "", aluno = await getAluno(matricula), plano = import_lodash3.default.filter(aluno.memberships, { membershipStatus: "active" }).map(
    (n) => n.name
  ), spinning = plano.filter(
    (s) => s.includes("FITNESS") || s.includes("SPINNING") || s.includes("TOTAL")
  ).length;
  if (!aluno.idMember)
    return motivo = "aluno nao encontrado", {
      message: "Aluno n\xE3o encontrado"
    };
  aluno.membershipStatus === "Inactive" && (motivo = "Inativo");
  let session = await getSession(request.headers.get("Cookie"));
  return session.set("aluno", {
    id: aluno.idMember,
    plano: plano.toString(),
    status: aluno.membershipStatus,
    motivo
  }), (0, import_node10.redirect)(`/spinning/${aluno.idMember}`, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};
function Index3() {
  let transition = (0, import_react15.useTransition)(), data = (0, import_react15.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "h-screen w-full bg-stone-100 font-Roboto ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "bg-orange-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "text-gray-600 body-font bg-no-repeat min-h-screen bg-contain bg-bottom bg-[url('/spinning2.png')]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Navbar2, {}, void 0, !1, {
      fileName: "app/routes/spinning/index_old.tsx",
      lineNumber: 71,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "h-full  mt-24 items-center flex flex-col gap-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        import_react15.Form,
        {
          method: "post",
          className: "rounded-2xl bg-white bg-opacity-25  p-6 md:w-1/2 lg:w1/4 w-10/12",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { htmlFor: "matricula", className: " font-semibold mb-9 ", children: "N\xFAmero de Matricula" }, void 0, !1, {
              fileName: "app/routes/spinning/index_old.tsx",
              lineNumber: 76,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "relative  my-4 flex w-full flex-wrap items-stretch mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "z-10 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded-xl text-base items-center justify-center w-8 pl-3 py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_im.ImEnter, {}, void 0, !1, {
                fileName: "app/routes/spinning/index_old.tsx",
                lineNumber: 81,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/spinning/index_old.tsx",
                lineNumber: 80,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
                "input",
                {
                  type: "number",
                  name: "matricula",
                  required: !0,
                  autoFocus: !0,
                  placeholder: "Pegue seu n\xFAmero na recep\xE7\xE3o",
                  className: "px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white  rounded-xl text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/spinning/index_old.tsx",
                  lineNumber: 83,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/spinning/index_old.tsx",
              lineNumber: 79,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
              "button",
              {
                disabled: transition.state === "submitting" || transition.state === "loading",
                type: "submit",
                name: "Entrar",
                className: "" + transition.state == "loading" ? "rounded-xl mt-2  bg-blue-600 px-3 py-2 text-white font-semibold" : "rounded-xl mt-2  bg-green-400 px-3 py-2  font-semibold hover:bg-orange-400 hover:-translate-y-1",
                children: transition.state === "submitting" ? "Localizando..." : transition.state === "loading" ? "Carregando Aulas" : "Entrar"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/spinning/index_old.tsx",
                lineNumber: 94,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/spinning/index_old.tsx",
              lineNumber: 93,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/spinning/index_old.tsx",
          lineNumber: 73,
          columnNumber: 13
        },
        this
      ),
      (data == null ? void 0 : data.message) && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "  text-center text-md text-white font-medium px-4 py-3 bg-red-600 rounded-lg", children: data.message }, void 0, !1, {
        fileName: "app/routes/spinning/index_old.tsx",
        lineNumber: 115,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/spinning/index_old.tsx",
      lineNumber: 72,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/spinning/index_old.tsx",
    lineNumber: 70,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/spinning/index_old.tsx",
    lineNumber: 69,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/spinning/index_old.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}

// app/routes/aluno/baktreino.tsx
var baktreino_exports = {};
__export(baktreino_exports, {
  action: () => action6,
  default: () => Treino,
  loader: () => loader8
});
var import_node11 = require("@remix-run/node"), import_node12 = require("@remix-run/node"), import_react16 = require("@remix-run/react");
var import_date_fns2 = require("date-fns"), import_format = __toESM(require("date-fns/format")), import_pt_BR = __toESM(require("date-fns/locale/pt-BR")), import_react17 = require("react"), import_lodash4 = __toESM(require("lodash")), import_fa5 = require("react-icons/fa"), import_fi = require("react-icons/fi"), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), loader8 = async ({ request, params }) => {
  let aluno = await getAluno(Number(params.treino)), treinosGrupo = await getTreinos((0, import_date_fns2.getWeek)(new Date())), historicoTreinos = await getHistorico(Number(params.treino));
  return (0, import_node12.json)({ aluno, treinosGrupo, historicoTreinos });
}, action6 = async ({ request }) => {
  let form = await request.formData(), values = Object.fromEntries(form);
  return await updateHistorico(values), (0, import_node11.redirect)(`/aluno/${values.aluno}`);
};
function Treino() {
  let { aluno, treinosGrupo, historicoTreinos } = (0, import_react16.useLoaderData)(), [grupo, setGrupo] = (0, import_react17.useState)(), [tipoTreinoGrupo, SetTipoTreinoGRupo] = (0, import_react17.useState)(
    treinosGrupo.filter((el) => el.grupo.includes("2X"))
  ), [treino, setTreino] = (0, import_react17.useState)(), [checked, setChecked] = (0, import_react17.useState)([]), transition = (0, import_react16.useTransition)(), ultimosTreinos = import_lodash4.default.takeRight(historicoTreinos == null ? void 0 : historicoTreinos.treinos, 6), handleGrupo = (event) => {
    setGrupo(event.target.value);
    for (var inputs = document.querySelectorAll("[id=done]"), i = 0; i < inputs.length; i++)
      inputs[i].checked = !1;
  }, handleTipoTreino = (event) => {
    switch (event.target.value) {
      case "2X":
        SetTipoTreinoGRupo(
          treinosGrupo.filter((el) => el.grupo.includes("2X"))
        );
        break;
      case "3X":
        SetTipoTreinoGRupo(
          treinosGrupo.filter((el) => el.grupo.includes("3X"))
        );
        break;
      case "4X":
        SetTipoTreinoGRupo(
          treinosGrupo.filter((el) => el.grupo.includes("4X"))
        );
        break;
      case "5X":
        SetTipoTreinoGRupo(
          treinosGrupo.filter((el) => el.grupo.includes("5X"))
        );
        break;
      case "6X":
        SetTipoTreinoGRupo(
          treinosGrupo.filter((el) => el.grupo.includes("6X"))
        );
        break;
      case "grupo":
        SetTipoTreinoGRupo(
          treinosGrupo.filter((el) => !el.grupo.includes("TREINO"))
        );
        break;
    }
  }, handleCheck = (event) => {
    var updatedList = [...checked];
    event.target.checked ? updatedList = [...checked, event.target.value] : updatedList.splice(checked.indexOf(event.target.value), 1), setChecked(updatedList);
  };
  var isChecked = (item) => checked.includes(item) ? "bg-green-300 mb-2  font-light  p-2 rounded-lg  shadow-md" : "bg-stone-100 mb-2  font-light  p-2 rounded-lg  ", isCheckedTitle = (item) => checked.includes(item) ? "text-decoration-line: line-through" : "text font-medium text-green-600";
  (0, import_react17.useEffect)(() => {
    setTreino(
      import_lodash4.default.filter(tipoTreinoGrupo, ["grupo", grupo])
    );
  }, [grupo, tipoTreinoGrupo]);
  let textInput = (0, import_react17.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react16.Outlet, {}, void 0, !1, {
      fileName: "app/routes/aluno/baktreino.tsx",
      lineNumber: 152,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: " px-2 mx-auto ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "img",
          {
            src: aluno.photo,
            className: "rounded-full shadow-lg w-24 h-24 m-4 mx-auto",
            alt: "Avatar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/aluno/baktreino.tsx",
            lineNumber: 156,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h5", { className: "text-xl  leading-tight mb-2", children: [
          aluno.firstName,
          " ",
          aluno.lastName,
          " -",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "font-mono text-gray-400", children: [
            " ",
            aluno.idMember
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/baktreino.tsx",
            lineNumber: 163,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/baktreino.tsx",
          lineNumber: 161,
          columnNumber: 11
        }, this),
        ultimosTreinos && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h2", { className: "  text-blue-600 rounded-md  text-md mt-4", children: "\xDALTIMOS TREINOS" }, void 0, !1, {
            fileName: "app/routes/aluno/baktreino.tsx",
            lineNumber: 167,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "text-gray-500 grid  gap-2 grid-cols-3", children: ultimosTreinos.map((u, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mt-1 mb-4  py-2 px-2 rounded-md my-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "font-semibold text-blue-600", children: u.treino }, void 0, !1, {
              fileName: "app/routes/aluno/baktreino.tsx",
              lineNumber: 174,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: (0, import_format.default)(new Date(u.data), "EEEEEE - dd/MM", {
              locale: import_pt_BR.default
            }) }, void 0, !1, {
              fileName: "app/routes/aluno/baktreino.tsx",
              lineNumber: 177,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/baktreino.tsx",
            lineNumber: 173,
            columnNumber: 21
          }, this) }, index, !1, {
            fileName: "app/routes/aluno/baktreino.tsx",
            lineNumber: 172,
            columnNumber: 19
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno/baktreino.tsx",
            lineNumber: 170,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/baktreino.tsx",
          lineNumber: 166,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno/baktreino.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "w-full max-w-lg mb-2 px-6 py-3 mx-auto border bg-white rounded-lg  ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h1", { className: "font-semibold mb-3", children: "Treinos por Semana" }, void 0, !1, {
          fileName: "app/routes/aluno/baktreino.tsx",
          lineNumber: 191,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex justify-between text-sm text-center item-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              "input",
              {
                name: "semana",
                type: "radio",
                id: "2",
                value: "2X",
                onChange: handleTipoTreino,
                className: "hidden peer"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/baktreino.tsx",
                lineNumber: 194,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              "label",
              {
                htmlFor: "2",
                className: "inline-block cursor-pointer w-12 h-10 p-3  font-medium  text-white rounded-full bg-stone-400 peer-hover:bg-gray-300 peer-hover:text-white peer-checked:bg-orange-600 peer-checked:text-white",
                children: "2"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/baktreino.tsx",
                lineNumber: 202,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/baktreino.tsx",
            lineNumber: 193,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              "input",
              {
                name: "semana",
                type: "radio",
                id: "3",
                value: "3X",
                onChange: handleTipoTreino,
                className: "hidden peer"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/baktreino.tsx",
                lineNumber: 209,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              "label",
              {
                htmlFor: "3",
                className: "inline-block cursor-pointer w-12 h-10 p-3 font-medium text-white rounded-full bg-stone-400 peer-hover:bg-gray-300 peer-hover:text-white peer-checked:bg-orange-600 peer-checked:text-white",
                children: "3"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/baktreino.tsx",
                lineNumber: 217,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/baktreino.tsx",
            lineNumber: 208,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              "input",
              {
                name: "semana",
                type: "radio",
                id: "4",
                value: "4X",
                onChange: handleTipoTreino,
                className: "hidden peer"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/baktreino.tsx",
                lineNumber: 224,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              "label",
              {
                htmlFor: "4",
                className: "inline-block cursor-pointer w-12 h-10 p-3 font-medium text-white rounded-full bg-stone-400 peer-hover:bg-gray-300 peer-hover:text-white peer-checked:bg-orange-600 peer-checked:text-white",
                children: "4"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/baktreino.tsx",
                lineNumber: 232,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/baktreino.tsx",
            lineNumber: 223,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              "input",
              {
                name: "semana",
                type: "radio",
                id: "5",
                value: "5X",
                onChange: handleTipoTreino,
                className: "hidden peer"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/baktreino.tsx",
                lineNumber: 239,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              "label",
              {
                htmlFor: "5",
                className: "inline-block cursor-pointer w-12 h-10 p-3 font-medium text-white rounded-full bg-stone-400 peer-hover:bg-gray-300 peer-hover:text-white peer-checked:bg-orange-600 peer-checked:text-white",
                children: "5"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/baktreino.tsx",
                lineNumber: 247,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/baktreino.tsx",
            lineNumber: 238,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              "input",
              {
                name: "semana",
                type: "radio",
                id: "6",
                value: "6X",
                onChange: handleTipoTreino,
                className: "hidden peer"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/baktreino.tsx",
                lineNumber: 254,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              "label",
              {
                htmlFor: "6",
                className: "inline-block cursor-pointer w-12 h-10 p-3 font-medium text-white rounded-full bg-stone-400 peer-hover:bg-gray-300 peer-hover:text-white peer-checked:bg-orange-600 peer-checked:text-white",
                children: "6"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/baktreino.tsx",
                lineNumber: 262,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/baktreino.tsx",
            lineNumber: 253,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              "input",
              {
                name: "semana",
                type: "radio",
                id: "grupo",
                value: "grupo",
                className: "hidden peer",
                onChange: handleTipoTreino
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/baktreino.tsx",
                lineNumber: 269,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              "label",
              {
                htmlFor: "grupo",
                className: "inline-block cursor-pointer w-16 h-10 p-3 font-medium text-white rounded-full bg-gray-400 peer-hover:bg-gray-300 peer-hover:text-white peer-checked:bg-orange-600 peer-checked:text-white",
                children: "Grupo"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/baktreino.tsx",
                lineNumber: 277,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/baktreino.tsx",
            lineNumber: 268,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/baktreino.tsx",
          lineNumber: 192,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno/baktreino.tsx",
        lineNumber: 190,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: " max-w-lg flex mx-auto ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "select",
        {
          className: "form-select block  justify-center w-full px-3 py-1.5 font-light text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none",
          "aria-label": "Selecione o treino",
          defaultValue: "Selecione o Treino",
          value: grupo,
          onChange: handleGrupo,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("option", { children: "Selecione o Treino" }, void 0, !1, {
              fileName: "app/routes/aluno/baktreino.tsx",
              lineNumber: 328,
              columnNumber: 13
            }, this),
            tipoTreinoGrupo == null ? void 0 : tipoTreinoGrupo.map((grupo2) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("option", { value: grupo2.grupo, children: grupo2.grupo }, grupo2.grupo, !1, {
              fileName: "app/routes/aluno/baktreino.tsx",
              lineNumber: 330,
              columnNumber: 15
            }, this))
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/aluno/baktreino.tsx",
          lineNumber: 321,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/aluno/baktreino.tsx",
        lineNumber: 320,
        columnNumber: 9
      }, this),
      grupo && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react16.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("input", { readOnly: !0, hidden: !0, type: "text", name: "treino", value: grupo }, void 0, !1, {
          fileName: "app/routes/aluno/baktreino.tsx",
          lineNumber: 339,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "input",
          {
            hidden: !0,
            type: "number",
            name: "aluno",
            defaultValue: aluno.idMember
          },
          void 0,
          !1,
          {
            fileName: "app/routes/aluno/baktreino.tsx",
            lineNumber: 340,
            columnNumber: 13
          },
          this
        ),
        grupo !== "Selecione o Treino" && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: " block justify-center mx-auto max-w-xl ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex flex-row  justify-evenly  font-bold text-orange-500 items-center m-2 text-xl", children: [
          grupo,
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("button", { className: "bg-blue-500   inline-flex gap-3 items-center px-3 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-md  hover:shadow-lg hover:bg-green-800", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_fa5.FaCheck, {}, void 0, !1, {
              fileName: "app/routes/aluno/baktreino.tsx",
              lineNumber: 352,
              columnNumber: 21
            }, this),
            transition.state === "submitting" ? "Atualizando..." : "Feito"
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/baktreino.tsx",
            lineNumber: 351,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/baktreino.tsx",
          lineNumber: 349,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno/baktreino.tsx",
          lineNumber: 348,
          columnNumber: 15
        }, this),
        treino == null ? void 0 : treino.map((e, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "div",
          {
            className: " grid  gap-2 sm:grid-cols-2 lg:grid-cols-3  ",
            children: e.exercicios.map((exe, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: isChecked(exe.nome), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex mb-2 flex-row justify-between ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: isCheckedTitle(exe.nome), children: exe.nome }, void 0, !1, {
                  fileName: "app/routes/aluno/baktreino.tsx",
                  lineNumber: 371,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                  "input",
                  {
                    className: " w-6 h-6 accent-green-500 mr-4",
                    value: exe.nome,
                    type: "checkbox",
                    onChange: handleCheck,
                    id: "done",
                    name: "done",
                    ref: textInput
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/aluno/baktreino.tsx",
                    lineNumber: 375,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/aluno/baktreino.tsx",
                lineNumber: 370,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex mb-2 shrink-0 items-center content-around  ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_fa5.FaSyncAlt, { className: "shrink-0 mr-3 " }, void 0, !1, {
                  fileName: "app/routes/aluno/baktreino.tsx",
                  lineNumber: 386,
                  columnNumber: 25
                }, this),
                exe.Repeticoes
              ] }, void 0, !0, {
                fileName: "app/routes/aluno/baktreino.tsx",
                lineNumber: 385,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex  mb-2  items-center content-around lowercase", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_fa5.FaDumbbell, { className: " shrink-0 mr-3" }, void 0, !1, {
                  fileName: "app/routes/aluno/baktreino.tsx",
                  lineNumber: 390,
                  columnNumber: 25
                }, this),
                exe.carga
              ] }, void 0, !0, {
                fileName: "app/routes/aluno/baktreino.tsx",
                lineNumber: 389,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex mb-2  shrink-0 items-center content-around lowercase ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_fa5.FaExclamationCircle, { className: "shrink-0 mr-3" }, void 0, !1, {
                  fileName: "app/routes/aluno/baktreino.tsx",
                  lineNumber: 395,
                  columnNumber: 25
                }, this),
                exe.obs
              ] }, void 0, !0, {
                fileName: "app/routes/aluno/baktreino.tsx",
                lineNumber: 394,
                columnNumber: 23
              }, this),
              exe.video !== "" && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: " flex justify-end  text-l mr-4 text-white ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                import_react16.Link,
                {
                  className: "bg-orange-300 rounded-lg px-6 p-2 ",
                  to: `${exe.video}`,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_fi.FiVideo, {}, void 0, !1, {
                    fileName: "app/routes/aluno/baktreino.tsx",
                    lineNumber: 403,
                    columnNumber: 29
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/aluno/baktreino.tsx",
                  lineNumber: 400,
                  columnNumber: 27
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/aluno/baktreino.tsx",
                lineNumber: 399,
                columnNumber: 25
              }, this)
            ] }, index2, !0, {
              fileName: "app/routes/aluno/baktreino.tsx",
              lineNumber: 369,
              columnNumber: 21
            }, this))
          },
          index,
          !1,
          {
            fileName: "app/routes/aluno/baktreino.tsx",
            lineNumber: 365,
            columnNumber: 17
          },
          this
        ))
      ] }, void 0, !0, {
        fileName: "app/routes/aluno/baktreino.tsx",
        lineNumber: 338,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno/baktreino.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno/baktreino.tsx",
    lineNumber: 151,
    columnNumber: 5
  }, this);
}

// app/routes/aluno/index_bak.tsx
var index_bak_exports = {};
__export(index_bak_exports, {
  CatchBoundary: () => CatchBoundary2,
  action: () => action7,
  default: () => Index4
});
var import_node13 = require("@remix-run/node"), import_node14 = require("@remix-run/node"), import_react18 = require("@remix-run/react");
var import_react_hot_toast2 = __toESM(require("react-hot-toast")), import_react19 = require("react"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), action7 = async ({ request }) => {
  let matricula = (await request.formData()).get("matricula"), aluno = await getAluno(matricula);
  if (!aluno.idMember)
    throw (0, import_node13.json)(
      { message: "Aluno n\xE3o Encontrado" },
      { status: 401, statusText: Math.floor(Math.random() * 15).toString() }
    );
  if (aluno.membershipStatus === "Inactive")
    throw (0, import_node13.json)(
      { message: "Aluno Inativo" },
      { status: 401, statusText: Math.floor(Math.random() * 15).toString() }
    );
  return (0, import_node14.redirect)(`/aluno/${aluno.idMember}`);
};
function Index4() {
  let transition = (0, import_react18.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "h-screen w-full bg-gradient-to-b from-[#e6b980] to-[#eacda3] font-Roboto ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "h-full mt-24 items-center flex flex-col gap-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
    import_react18.Form,
    {
      method: "post",
      className: "rounded-2xl bg-white bg-opacity-30 p-6 md:w-1/2 w-10/12",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("label", { htmlFor: "matricula", className: "text-stone-800 font-semibold ", children: "N\xFAmero de Matricula" }, void 0, !1, {
          fileName: "app/routes/aluno/index_bak.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          "input",
          {
            className: "w-full p-2 rounded-xl my-2 placeholder-slate-300 text-slate-600",
            type: "number",
            name: "matricula",
            placeholder: "Pegue seu n\xFAmero na recep\xE7\xE3o...",
            required: !0,
            autoFocus: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/aluno/index_bak.tsx",
            lineNumber: 46,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          "button",
          {
            disabled: transition.state === "submitting" || transition.state === "loading",
            type: "submit",
            name: "Entrar",
            className: "" + transition.state == "loading" ? "rounded-xl mt-2  bg-blue-600 px-3 py-2 text-white font-semibold" : "rounded-xl mt-2  bg-green-600 px-3 py-2 text-white font-semibold hover:bg-orange-400 hover:-translate-y-1",
            children: transition.state === "submitting" ? "Localizando..." : transition.state === "loading" ? "Carregando Treino" : "Entrar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/aluno/index_bak.tsx",
            lineNumber: 55,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/aluno/index_bak.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/aluno/index_bak.tsx",
      lineNumber: 40,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/aluno/index_bak.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/aluno/index_bak.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
function CatchBoundary2() {
  var _a;
  let transition = (0, import_react18.useTransition)(), caughtResponse = (0, import_react18.useCatch)(), message = (_a = caughtResponse.data) == null ? void 0 : _a.message, random = caughtResponse.statusText;
  return (0, import_react19.useEffect)(() => {
    (() => import_react_hot_toast2.default.error(/* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: message }, void 0, !1, {
      fileName: "app/routes/aluno/index_bak.tsx",
      lineNumber: 87,
      columnNumber: 38
    }, this)))();
  }, [random, message]), /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "h-screen w-full bg-stone-100 font-Roboto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      import_react_hot_toast2.Toaster,
      {
        toastOptions: {
          className: "",
          style: {
            padding: "12px",
            color: "#ffffff",
            background: "#f78e34"
          }
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/aluno/index_bak.tsx",
        lineNumber: 94,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Navbar, {}, void 0, !1, {
      fileName: "app/routes/aluno/index_bak.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "h-full mt-24 items-center flex flex-col gap-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react18.Form, { method: "post", className: "rounded-2xl bg-stone-200 p-6 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        "label",
        {
          htmlFor: "matricula",
          className: "text-stone-600 font-semibold ",
          children: "N\xFAmero de Matricula"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno/index_bak.tsx",
          lineNumber: 108,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        "input",
        {
          className: "w-full p-2 rounded-xl my-2",
          type: "number",
          name: "matricula",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno/index_bak.tsx",
          lineNumber: 113,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        "button",
        {
          disabled: transition.state === "submitting" || transition.state === "loading",
          type: "submit",
          name: "Entrar",
          className: "" + transition.state == "loading" ? "rounded-xl mt-2  bg-blue-600 px-3 py-2 text-white font-semibold" : "rounded-xl mt-2  bg-green-600 px-3 py-2 text-white font-semibold hover:bg-orange-400 hover:-translate-y-1",
          children: transition.state === "submitting" ? "Localizando..." : transition.state === "loading" ? "Carregando Treino" : "Entrar"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno/index_bak.tsx",
          lineNumber: 121,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/aluno/index_bak.tsx",
        lineNumber: 120,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno/index_bak.tsx",
      lineNumber: 107,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno/index_bak.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno/index_bak.tsx",
    lineNumber: 93,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/aluno/index_bak.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

// app/routes/aluno/$maquina.tsx
var maquina_exports2 = {};
__export(maquina_exports2, {
  default: () => Maquina2,
  loader: () => loader9
});
var import_react20 = require("@remix-run/react"), import_fa6 = require("react-icons/fa"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), loader9 = async ({ request, params }) => params.maquina;
function Maquina2() {
  let maquina = (0, import_react20.useLoaderData)(), navigate = (0, import_react20.useNavigate)();
  function closeHandler() {
    navigate("/aluno");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Modal_default, { onClose: closeHandler, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      "img",
      {
        src: `/${maquina}`,
        className: " shadow-lg w-96 h-96  mx-auto",
        alt: "Video"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/aluno/$maquina.tsx",
        lineNumber: 19,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react20.Link, { to: "/aluno", className: "m-4 text-xl ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_fa6.FaWindowClose, {}, void 0, !1, {
      fileName: "app/routes/aluno/$maquina.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno/$maquina.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno/$maquina.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/cadaulas/$aula.tsx
var aula_exports = {};
__export(aula_exports, {
  action: () => action8,
  default: () => aula,
  loader: () => loader10
});
var import_node15 = require("@remix-run/node"), import_node16 = require("@remix-run/node"), import_react21 = require("@remix-run/react"), import_react22 = require("@remix-run/react");

// app/utils/aulas.server.ts
var getAulas = async () => prisma.classes.findMany({
  orderBy: {
    start: "asc"
  }
}), getSpinning = async () => prisma.classes.findMany({
  where: {
    turma: "Spinning"
  },
  orderBy: {
    start: "asc"
  }
}), getAgendamentos = async () => {
  var nova = new Date().toLocaleString("en-ZA", {
    timeZone: "America/Sao_Paulo"
  }).slice(0, 10);
  return prisma.reservas.findMany({
    where: {
      data: new Date(nova)
    }
  });
}, createAgendamento = async (agenda) => {
  var nowDate = new Date(), date = nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate();
  return await prisma.reservas.upsert({
    where: { identificador: agenda.identificador },
    update: {
      alunos: {
        push: {
          nome: agenda.nome,
          idMember: +agenda.idMember,
          photo: agenda.photo
        }
      }
    },
    create: {
      alunos: {
        nome: agenda.nome,
        idMember: +agenda.idMember,
        photo: agenda.photo
      },
      aula: agenda.aula,
      Hora: agenda.hora,
      identificador: agenda.identificador,
      data: new Date(date)
    }
  });
}, deleteAlulaAgendada = async (id, idMember) => prisma.reservas.update({
  where: {
    id
  },
  data: {
    alunos: {
      deleteMany: {
        where: {
          idMember: +idMember
        }
      }
    }
  }
}), getAulasNome = async () => prisma.classes.findMany({
  orderBy: {
    turma: "asc"
  }
}), getAulaId = async (id) => prisma.classes.findUnique({
  where: {
    id
  }
}), createAula = async (values, dias) => {
  var icone = values.classe + ".png";
  return prisma.classes.create({
    data: {
      start: values.inicio,
      finish: values.final,
      classe: values.classe,
      turma: values.turma,
      icon: icone,
      days: dias
    }
  });
}, updateAula = async (values, dias) => prisma.classes.update({
  where: {
    id: values.id
  },
  data: {
    start: values.inicio,
    finish: values.final,
    classe: values.classe,
    turma: values.turma,
    icon: values.icon,
    days: dias
  }
}), deleteAula = async (id) => prisma.classes.delete({
  where: {
    id
  }
});

// app/routes/cadaulas/$aula.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), loader10 = async ({ request, params }) => {
  let id = params.aula, aula2 = await getAulaId(id);
  return (0, import_node16.json)({ aula: aula2 });
}, action8 = async ({ request }) => {
  let form = await request.formData();
  var dias = [];
  let values = Object.fromEntries(form);
  return values.segunda && dias.push(parseInt(values.segunda)), values.terca && dias.push(parseInt(values.terca)), values.quarta && dias.push(parseInt(values.quarta)), values.quinta && dias.push(parseInt(values.quinta)), values.sexta && dias.push(parseInt(values.sexta)), values.sabado && dias.push(parseInt(values.sabado)), form.get("_action") === "save" ? await updateAula(values, dias) : await deleteAula(values.id), (0, import_node15.redirect)("/cadaulas");
};
function aula() {
  let transition = (0, import_react22.useTransition)(), { aula: aula2 } = (0, import_react21.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_jsx_dev_runtime26.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "h-full justify-center items-center flex flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h2", { className: "text-2xl font-extrabold text-slate-700", children: "Alterar Aulas" }, void 0, !1, {
      fileName: "app/routes/cadaulas/$aula.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react22.Form, { method: "post", className: "rounded-2xl bg-stone-100 p-6 w-5/4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("input", { hidden: !0, type: "text", name: "id", defaultValue: aula2 == null ? void 0 : aula2.id }, void 0, !1, {
        fileName: "app/routes/cadaulas/$aula.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        "input",
        {
          hidden: !0,
          type: "text",
          name: "icon",
          defaultValue: aula2.classe + ".png"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cadaulas/$aula.tsx",
          lineNumber: 64,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("label", { htmlFor: "conta", className: "text-blue-600 font-semibold", children: "AUla" }, void 0, !1, {
        fileName: "app/routes/cadaulas/$aula.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        "input",
        {
          type: "text",
          id: "turma",
          name: "turma",
          defaultValue: aula2.turma,
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cadaulas/$aula.tsx",
          lineNumber: 73,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("label", { htmlFor: "valor", className: "text-blue-600 font-semibold", children: "Modalidade" }, void 0, !1, {
        fileName: "app/routes/cadaulas/$aula.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        "select",
        {
          id: "classe",
          name: "classe",
          defaultValue: aula2.classe,
          className: "bg-gray-50 border p-2 my-2 border-gray-300 text-gray-900 mb-6  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("option", { value: "lutas", children: "Lutas" }, void 0, !1, {
              fileName: "app/routes/cadaulas/$aula.tsx",
              lineNumber: 88,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("option", { value: "natacao", children: "Nata\xE7\xE3o" }, void 0, !1, {
              fileName: "app/routes/cadaulas/$aula.tsx",
              lineNumber: 89,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("option", { value: "ginastica", children: "Gin\xE1stica" }, void 0, !1, {
              fileName: "app/routes/cadaulas/$aula.tsx",
              lineNumber: 90,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("option", { value: "danca", children: "Dan\xE7a" }, void 0, !1, {
              fileName: "app/routes/cadaulas/$aula.tsx",
              lineNumber: 91,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("option", { value: "spinning", children: "Spinning" }, void 0, !1, {
              fileName: "app/routes/cadaulas/$aula.tsx",
              lineNumber: 92,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("option", { value: "pilates", children: "Pilates" }, void 0, !1, {
              fileName: "app/routes/cadaulas/$aula.tsx",
              lineNumber: 93,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/cadaulas/$aula.tsx",
          lineNumber: 83,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("label", { htmlFor: "password", className: "text-blue-600 font-semibold", children: "In\xEDcio" }, void 0, !1, {
        fileName: "app/routes/cadaulas/$aula.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        "input",
        {
          type: "text",
          id: "inicio",
          name: "inicio",
          defaultValue: aula2.start,
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cadaulas/$aula.tsx",
          lineNumber: 99,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("label", { htmlFor: "password", className: "text-blue-600 font-semibold", children: "Final" }, void 0, !1, {
        fileName: "app/routes/cadaulas/$aula.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        "input",
        {
          type: "text",
          id: "final",
          name: "final",
          defaultValue: aula2.finish,
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cadaulas/$aula.tsx",
          lineNumber: 109,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "input",
          {
            className: "form-checkbox justify-center h-5 w-5 mr-2 ",
            type: "checkbox",
            name: "segunda",
            defaultChecked: aula2.days.includes(1),
            value: "1"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas/$aula.tsx",
            lineNumber: 123,
            columnNumber: 13
          },
          this
        ),
        "Segunda"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas/$aula.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            defaultChecked: aula2.days.includes(2),
            name: "terca",
            id: "ter\xE7a",
            value: "2"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas/$aula.tsx",
            lineNumber: 133,
            columnNumber: 13
          },
          this
        ),
        "Ter\xE7a"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas/$aula.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            defaultChecked: aula2.days.includes(3),
            name: "quarta",
            id: "quarta",
            value: "3"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas/$aula.tsx",
            lineNumber: 145,
            columnNumber: 13
          },
          this
        ),
        "Quarta"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas/$aula.tsx",
        lineNumber: 144,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            defaultChecked: aula2.days.includes(4),
            name: "quinta",
            value: "4",
            id: "quinta"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas/$aula.tsx",
            lineNumber: 156,
            columnNumber: 13
          },
          this
        ),
        "Quinta"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas/$aula.tsx",
        lineNumber: 155,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            defaultChecked: aula2.days.includes(5),
            name: "sexta",
            value: "5",
            id: "sexta"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas/$aula.tsx",
            lineNumber: 167,
            columnNumber: 13
          },
          this
        ),
        "Sexta"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas/$aula.tsx",
        lineNumber: 166,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            defaultChecked: aula2.days.includes(6),
            name: "sabado",
            id: "sabado",
            value: "6"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas/$aula.tsx",
            lineNumber: 178,
            columnNumber: 13
          },
          this
        ),
        "S\xE1bado"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas/$aula.tsx",
        lineNumber: 177,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "w-full text-center mt-4 space-x-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "rounded-xl mt-2 bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-1",
            name: "_action",
            value: "save",
            children: transition.state === "submitting" ? "Cadastrando..." : "Cadastrar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas/$aula.tsx",
            lineNumber: 190,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "rounded-xl mt-2 bg-red-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-red-700 hover:-translate-y-1",
            name: "_action",
            value: "delete",
            children: transition.state === "submitting" ? "Apagando..." : "Apagar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas/$aula.tsx",
            lineNumber: 199,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas/$aula.tsx",
        lineNumber: 189,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cadaulas/$aula.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cadaulas/$aula.tsx",
    lineNumber: 58,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/cadaulas/$aula.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

// app/routes/cadaulas/index.tsx
var cadaulas_exports = {};
__export(cadaulas_exports, {
  default: () => Cadaulas,
  loader: () => loader11
});
var import_node17 = require("@remix-run/node"), import_react25 = require("@remix-run/react");

// app/components/AulasCadastro.tsx
var import_fa7 = require("react-icons/fa"), import_react23 = require("react"), import_react24 = require("@remix-run/react"), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function AulasCadastro(props) {
  let { aulas } = props, [procuraAula, setProcuraAula] = (0, import_react23.useState)(""), filtrada = aulas.filter(
    (aulas2) => aulas2.turma.toLowerCase().includes(procuraAula.toLowerCase())
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex justify-center flex-wrap mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "p-2 w-full md:w-3/4  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "overflow-x-auto relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "p-2 w-full ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mt-6 mb-2  text-blue-500 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "relative  ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_fa7.FaSearch, {}, void 0, !1, {
        fileName: "app/components/AulasCadastro.tsx",
        lineNumber: 22,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/AulasCadastro.tsx",
        lineNumber: 21,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        "input",
        {
          type: "search",
          id: "search",
          value: procuraAula,
          onChange: (e) => setProcuraAula(e.target.value),
          placeholder: "Procurar Aulas",
          className: "block p-1  pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  "
        },
        void 0,
        !1,
        {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 25,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/AulasCadastro.tsx",
      lineNumber: 20,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/AulasCadastro.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "overflow-x-auto relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("table", { className: "w-full  text-sm text-left text-gray-500 dark:text-gray-400", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("thead", { className: "text-xs  text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("tr", { className: "rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("th", { scope: "col", className: "py-3 px-6 ", children: "Aulas" }, void 0, !1, {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 39,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("th", { scope: "col", className: "py-3 px-6", children: "Inicio" }, void 0, !1, {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 42,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("th", { scope: "col", className: "py-3 px-6", children: "Final" }, void 0, !1, {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 45,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("th", { scope: "col", className: "py-3 ", children: "Dias" }, void 0, !1, {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 48,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("th", { className: "py-3 text-center ", children: "A\xE7\xF5es" }, void 0, !1, {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 51,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/AulasCadastro.tsx",
        lineNumber: 38,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/AulasCadastro.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("tbody", { children: filtrada.map((aula2) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("tr", { className: "bg-white dark:bg-gray-800", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
          "th",
          {
            scope: "row",
            className: "py-4 px-6 flex gap-x-2 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                "img",
                {
                  className: "avatar h-6 w-6 md:h-8 md:w-8 rounded-full ",
                  src: aula2.icon,
                  alt: aula2.turma
                },
                void 0,
                !1,
                {
                  fileName: "app/components/AulasCadastro.tsx",
                  lineNumber: 61,
                  columnNumber: 25
                },
                this
              ),
              aula2.turma
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/AulasCadastro.tsx",
            lineNumber: 57,
            columnNumber: 23
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("td", { className: "py-4 px-6", children: aula2.start }, void 0, !1, {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 68,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("td", { className: "py-4 px-6", children: aula2.finish }, void 0, !1, {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 69,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("td", { className: "py-4 font-mono text-stone-400 ", children: aula2.days.map((m) => m == 1 ? "SEG " : m == 2 ? "TER " : m == 3 ? "QUA  " : m == 4 ? "QUI " : m == 5 ? "SEX " : m == 6 ? "SAB " : "DOM") }, void 0, !1, {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 71,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("td", { className: "py-3 text-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
          import_react24.Link,
          {
            to: `/cadaulas/${aula2.id}`,
            className: "text-blue-600 text-lg ",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_fa7.FaEdit, {}, void 0, !1, {
              fileName: "app/components/AulasCadastro.tsx",
              lineNumber: 100,
              columnNumber: 27
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/AulasCadastro.tsx",
            lineNumber: 96,
            columnNumber: 25
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/AulasCadastro.tsx",
          lineNumber: 95,
          columnNumber: 23
        }, this)
      ] }, aula2.id, !0, {
        fileName: "app/components/AulasCadastro.tsx",
        lineNumber: 56,
        columnNumber: 21
      }, this)) }, void 0, !1, {
        fileName: "app/components/AulasCadastro.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/AulasCadastro.tsx",
      lineNumber: 36,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/AulasCadastro.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AulasCadastro.tsx",
    lineNumber: 18,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/AulasCadastro.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/AulasCadastro.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/AulasCadastro.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/cadaulas/index.tsx
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), loader11 = async ({ request }) => {
  let TodasAulas = await getAulasNome();
  return (0, import_node17.json)({ TodasAulas });
};
function Cadaulas() {
  let { TodasAulas } = (0, import_react25.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: " bg-stone-100 font-Roboto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "mt-2 text-right mr-8 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
      import_react25.NavLink,
      {
        className: " justify-center w-60 px-4 py-2  text-white bg-blue-600 hover:bg-blue-800  rounded-lg text-sm   ",
        to: "/cadaulas/nova",
        children: "Nova"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/cadaulas/index.tsx",
        lineNumber: 18,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/cadaulas/index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(AulasCadastro, { aulas: TodasAulas }, void 0, !1, {
      fileName: "app/routes/cadaulas/index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cadaulas/index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/spinning/index.tsx
var spinning_exports = {};
__export(spinning_exports, {
  action: () => action9,
  default: () => Spinning,
  loader: () => loader12
});
var import_node18 = require("@remix-run/node"), import_node19 = require("@remix-run/node"), import_react26 = require("@remix-run/react");
var import_ai2 = require("react-icons/ai"), import_lodash5 = __toESM(require("lodash")), import_moment = __toESM(require("moment"));
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), loader12 = async ({ request, params }) => {
  var _a, _b;
  let session = await getSession(request.headers.get("Cookie")), plano = (_a = session.get("aluno")) == null ? void 0 : _a.plano;
  if (console.log(session.get("aluno")), console.log((_b = session.get("aluno")) == null ? void 0 : _b.id), !session.has("aluno"))
    return session.set("aluno", {
      red: "/spinning"
    }), (0, import_node18.redirect)("/login", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  if ((plano ? plano.filter(
    (s) => s.includes("FITNESS") || s.includes("SPINNING") || s.includes("TOTAL")
  ).length : 0) === 0) {
    let session2 = await getSession(request.headers.get("Cookie"));
    return session2.set("aluno", {
      motivo: "Spinning n\xE3o est\xE1 incluso em seu plano",
      url: "/spinning"
    }), (0, import_node18.redirect)("/login", {
      headers: {
        "Set-Cookie": await commitSession(session2)
      }
    });
  }
  let aluno = (await getAluno(
    session.get("aluno").id ? session.get("aluno").id : ""
  ))[0], aulas = await getSpinning(), agendamentos = await getAgendamentos();
  return (0, import_node19.json)({ aluno, aulas, agendamentos });
}, action9 = async ({ request }) => {
  let form = await request.formData(), values = Object.fromEntries(form), agendamentos = await getAgendamentos(), aula_agendada = import_lodash5.default.filter(agendamentos, ["Hora", values.hora]), alunos = import_lodash5.default.flatten(aula_agendada.map((dt) => dt.alunos)), existeaAgenda = import_lodash5.default.filter(alunos, ["idMember", +values.idMember]).length, _action = form.get("_action");
  if (_action === "delete")
    return await deleteAlulaAgendada(values.id, values.idMember), null;
  if (_action === "save")
    return existeaAgenda === 0 ? await createAgendamento(values) : {
      message: aula_agendada.map((h) => h.aula).toString() + " Hor\xE1rio: " + aula_agendada.map((h) => h.Hora).toString() + " j\xE1 agendada para aluno: " + values.nome
    };
};
function Spinning() {
  let { aluno, aulas, agendamentos } = (0, import_react26.useLoaderData)(), alunoAgendado = (0, import_react26.useActionData)(), id = aluno.idMember, now = new Date(), agora = (0, import_moment.default)(), hourFilter = aulas.filter(
    (classes) => classes.days.includes(now.getDay())
  ), agendaAluno = agendamentos.filter(
    (e) => e.alunos.some((aluno2) => aluno2.idMember === id)
  ), aula730 = import_lodash5.default.filter(agendamentos, ["Hora", "07:30"]), alunos730 = import_lodash5.default.flatten(aula730.map((dt) => dt.alunos)).length, aula19 = import_lodash5.default.filter(agendamentos, ["Hora", "19:00"]), alunos19 = import_lodash5.default.flatten(aula19.map((dt) => dt.alunos)).length;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_jsx_dev_runtime29.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "px-2 mx-auto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        "img",
        {
          src: aluno.photo !== null ? aluno.photo : "/user.png",
          className: "rounded-full shadow-lg w-24 h-24 m-4 mx-auto",
          alt: "Avatar"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/spinning/index.tsx",
          lineNumber: 132,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h5", { className: "text-xl  leading-tight mb-2", children: [
        aluno.firstName,
        " ",
        aluno.lastName,
        " -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: "font-mono text-gray-400", children: [
          " ",
          aluno.idMember
        ] }, void 0, !0, {
          fileName: "app/routes/spinning/index.tsx",
          lineNumber: 139,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/spinning/index.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/spinning/index.tsx",
      lineNumber: 131,
      columnNumber: 9
    }, this),
    hourFilter.length > 0 && aluno.idMember !== 4 && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "w-full container mx-auto px-8 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex   mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h5", { className: "text-md   font-medium leading-none text-slate-500 ", children: "RESERVAR AULAS" }, void 0, !1, {
        fileName: "app/routes/spinning/index.tsx",
        lineNumber: 146,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/spinning/index.tsx",
        lineNumber: 145,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("ul", { className: "divide-y divide-gray-200 ", children: [
        hourFilter.map((aula2) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { className: "py-3 sm:py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react26.Form, { method: "post", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            "input",
            {
              name: "nome",
              hidden: !0,
              readOnly: !0,
              value: aluno.firstName + " " + aluno.lastName
            },
            void 0,
            !1,
            {
              fileName: "app/routes/spinning/index.tsx",
              lineNumber: 155,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            "input",
            {
              name: "idMember",
              hidden: !0,
              readOnly: !0,
              value: aluno.idMember
            },
            void 0,
            !1,
            {
              fileName: "app/routes/spinning/index.tsx",
              lineNumber: 160,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            "input",
            {
              name: "photo",
              hidden: !0,
              readOnly: !0,
              value: aluno.photo
            },
            void 0,
            !1,
            {
              fileName: "app/routes/spinning/index.tsx",
              lineNumber: 165,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex-shrink-0  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              "button",
              {
                disabled: aula2.start === "07:30" ? import_moment.default.duration(
                  (0, import_moment.default)(aula2.start, "HH:mm:ss").diff(agora)
                ).asHours() > 0.5 || import_moment.default.duration(
                  (0, import_moment.default)(aula2.start, "HH:mm:ss").diff(agora)
                ).asHours() < 0 || +alunos730 > 17 : import_moment.default.duration(
                  (0, import_moment.default)(aula2.start, "HH:mm:ss").diff(agora)
                ).asHours() > 0.5 || import_moment.default.duration(
                  (0, import_moment.default)(aula2.start, "HH:mm:ss").diff(agora)
                ).asHours() < 0 || +alunos19 > 17,
                className: "bg-green-500 rounded-full px-2 pt-2.5 pb-2  disabled:bg-slate-400 disabled:cursor-not-allowed disabled:opacity-40 text-white active:bg-orange-600 font-bold uppercase text-sm  py-1  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                type: "submit",
                name: "_action",
                value: "save",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_ai2.AiFillSchedule, { className: "text-2xl" }, void 0, !1, {
                  fileName: "app/routes/spinning/index.tsx",
                  lineNumber: 207,
                  columnNumber: 29
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/spinning/index.tsx",
                lineNumber: 172,
                columnNumber: 27
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/spinning/index.tsx",
              lineNumber: 171,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex-1 min-w-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: " font-medium text-gray-900 truncate", children: [
                aula2.turma,
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "aula",
                    hidden: !0,
                    readOnly: !0,
                    value: aula2.turma
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/spinning/index.tsx",
                    lineNumber: 214,
                    columnNumber: 29
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "identificador",
                    hidden: !0,
                    readOnly: !0,
                    value: aula2.turma + "|" + aula2.start + "|" + (new Date().getMonth() + 1) + "/" + new Date().getDate()
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/spinning/index.tsx",
                    lineNumber: 221,
                    columnNumber: 29
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/spinning/index.tsx",
                lineNumber: 211,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "text-sm  text-blue-500 truncate ", children: [
                aula2.start,
                " - ",
                aula2.finish,
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "hora",
                    hidden: !0,
                    readOnly: !0,
                    value: aula2.start
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/spinning/index.tsx",
                    lineNumber: 239,
                    columnNumber: 29
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/spinning/index.tsx",
                lineNumber: 237,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/spinning/index.tsx",
              lineNumber: 210,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "items-center text-base font-semibold text-gray-900  w-1/2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "text-center text-blue-400 font-medium text-sm", children: "RESERVADO" }, void 0, !1, {
                fileName: "app/routes/spinning/index.tsx",
                lineNumber: 249,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "w-full bg-gray-200  rounded-full ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                "div",
                {
                  className: "bg-orange-300 rounded-full text-xs font-medium  text-center p-1 leading-none  ",
                  style: aula2.start === "07:30" ? {
                    width: Math.round(alunos730 / 17 * 100) + "%"
                  } : {
                    width: Math.round(alunos19 / 17 * 100) + "%"
                  },
                  children: aula2.start === "07:30" ? Math.round(alunos730 / 17 * 100) + "% " : Math.round(alunos19 / 17 * 100) + "% "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/spinning/index.tsx",
                  lineNumber: 253,
                  columnNumber: 29
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/spinning/index.tsx",
                lineNumber: 252,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/spinning/index.tsx",
              lineNumber: 248,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/spinning/index.tsx",
            lineNumber: 170,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/spinning/index.tsx",
          lineNumber: 154,
          columnNumber: 21
        }, this) }, aula2.id, !1, {
          fileName: "app/routes/spinning/index.tsx",
          lineNumber: 153,
          columnNumber: 19
        }, this)),
        (alunoAgendado == null ? void 0 : alunoAgendado.message) && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "  text-center text-md text-white font-medium px-4 py-3 bg-blue-400 rounded-lg", children: alunoAgendado.message }, void 0, !1, {
          fileName: "app/routes/spinning/index.tsx",
          lineNumber: 279,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/spinning/index.tsx",
        lineNumber: 151,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/spinning/index.tsx",
        lineNumber: 150,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/spinning/index.tsx",
      lineNumber: 144,
      columnNumber: 11
    }, this),
    agendaAluno.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "divide-y flex-row divide-gray-200 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "text-center font-semibold p-2", children: "Aulas Reservada" }, void 0, !1, {
        fileName: "app/routes/spinning/index.tsx",
        lineNumber: 290,
        columnNumber: 15
      }, this),
      agendaAluno.map((aulas2) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        import_react26.Form,
        {
          method: "post",
          className: " text-center mb-2 flex h-10 items-center  justify-between rounded-[26px] shadow  bg-slate-200 py-0 px-[12px] text-[13px] font-semibold  text-slate-800 ",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              "input",
              {
                name: "idMember",
                hidden: !0,
                readOnly: !0,
                value: aluno.idMember
              },
              void 0,
              !1,
              {
                fileName: "app/routes/spinning/index.tsx",
                lineNumber: 296,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("input", { name: "id", hidden: !0, readOnly: !0, value: aulas2.id }, void 0, !1, {
              fileName: "app/routes/spinning/index.tsx",
              lineNumber: 301,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: " text-lg font-semibold", children: aulas2.aula }, void 0, !1, {
              fileName: "app/routes/spinning/index.tsx",
              lineNumber: 302,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "text-lg font-semibold", children: aulas2.Hora }, void 0, !1, {
              fileName: "app/routes/spinning/index.tsx",
              lineNumber: 303,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              "button",
              {
                className: "flex items-center space-x-2 h-3/4  text-white rounded-full bg-red-500 py-2 px-3  ",
                type: "submit",
                name: "_action",
                value: "delete",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: "text-white items-center  font-medium", children: "N\xE3o Vou" }, void 0, !1, {
                    fileName: "app/routes/spinning/index.tsx",
                    lineNumber: 310,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_ai2.AiTwotoneDelete, { className: " text-lg " }, void 0, !1, {
                    fileName: "app/routes/spinning/index.tsx",
                    lineNumber: 313,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/spinning/index.tsx",
                lineNumber: 305,
                columnNumber: 19
              },
              this
            )
          ]
        },
        aulas2.id,
        !0,
        {
          fileName: "app/routes/spinning/index.tsx",
          lineNumber: 292,
          columnNumber: 17
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/routes/spinning/index.tsx",
      lineNumber: 289,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/spinning/index.tsx",
      lineNumber: 288,
      columnNumber: 11
    }, this),
    aluno.idMember === 4 && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "w-full container mx-auto px-8 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "divide-y flex-row divide-gray-200 ", children: agendamentos.map((ag) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "py-3 sm:py-4 flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex mb-2 font-semibold text-lg  space-x-4 justify-center  ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: " uppercase", children: ag.aula }, void 0, !1, {
          fileName: "app/routes/spinning/index.tsx",
          lineNumber: 327,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { children: ag.Hora }, void 0, !1, {
          fileName: "app/routes/spinning/index.tsx",
          lineNumber: 328,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/spinning/index.tsx",
        lineNumber: 326,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: ag.alunos.map((a) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: " text-center mb-2 flex  items-center  justify-between rounded-[26px] shadow  bg-slate-100 py-0 px-[12px] text-[13px] font-semibold  text-slate-800 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          "img",
          {
            className: "my-0 mr-[8px]  shadow-md -ml-[12px] h-14 w-14 object-cover rounded-full",
            src: a.photo !== "" ? a.photo : "/user.png",
            alt: "avatar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/spinning/index.tsx",
            lineNumber: 335,
            columnNumber: 27
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "mr-8", children: a.nome }, void 0, !1, {
          fileName: "app/routes/spinning/index.tsx",
          lineNumber: 340,
          columnNumber: 27
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/spinning/index.tsx",
        lineNumber: 334,
        columnNumber: 25
      }, this) }, a.idMember, !1, {
        fileName: "app/routes/spinning/index.tsx",
        lineNumber: 333,
        columnNumber: 23
      }, this)) }, void 0, !1, {
        fileName: "app/routes/spinning/index.tsx",
        lineNumber: 331,
        columnNumber: 19
      }, this)
    ] }, ag.id, !0, {
      fileName: "app/routes/spinning/index.tsx",
      lineNumber: 325,
      columnNumber: 17
    }, this)) }, void 0, !1, {
      fileName: "app/routes/spinning/index.tsx",
      lineNumber: 323,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/spinning/index.tsx",
      lineNumber: 322,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/spinning/index.tsx",
    lineNumber: 130,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/spinning/index.tsx",
    lineNumber: 129,
    columnNumber: 5
  }, this);
}

// app/routes/cadaulas/nova.tsx
var nova_exports = {};
__export(nova_exports, {
  action: () => action10,
  default: () => Nova
});
var import_node20 = require("@remix-run/node"), import_react27 = require("@remix-run/react");
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), action10 = async ({ request }) => {
  let form = await request.formData();
  var dias = [];
  let values = Object.fromEntries(form);
  return values.segunda && dias.push(parseInt(values.segunda)), values.terca && dias.push(parseInt(values.terca)), values.quarta && dias.push(parseInt(values.quarta)), values.quinta && dias.push(parseInt(values.quinta)), values.sexta && dias.push(parseInt(values.sexta)), values.sabado && dias.push(parseInt(values.sabado)), form.get("_action") === "save" && await createAula(values, dias), (0, import_node20.redirect)("/cadaulas");
};
function Nova() {
  let transition = (0, import_react27.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_jsx_dev_runtime30.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "h-full justify-center items-center flex flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h2", { className: "text-2xl font-extrabold text-slate-700", children: "Cadastrar Aulas" }, void 0, !1, {
      fileName: "app/routes/cadaulas/nova.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react27.Form, { method: "post", className: "rounded-2xl bg-stone-100 p-6 w-5/4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { htmlFor: "conta", className: "text-blue-600 font-semibold", children: "Aula" }, void 0, !1, {
        fileName: "app/routes/cadaulas/nova.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
        "input",
        {
          type: "text",
          id: "turma",
          name: "turma",
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cadaulas/nova.tsx",
          lineNumber: 59,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { htmlFor: "valor", className: "text-blue-600 font-semibold", children: "Modalidade" }, void 0, !1, {
        fileName: "app/routes/cadaulas/nova.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
        "select",
        {
          id: "classe",
          name: "classe",
          className: "bg-gray-50 border p-2 my-2 border-gray-300 text-gray-900 mb-6  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("option", { value: "lutas", children: "Lutas" }, void 0, !1, {
              fileName: "app/routes/cadaulas/nova.tsx",
              lineNumber: 72,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("option", { value: "natacao", children: "Nata\xE7\xE3o" }, void 0, !1, {
              fileName: "app/routes/cadaulas/nova.tsx",
              lineNumber: 73,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("option", { value: "ginastica", children: "Gin\xE1stica" }, void 0, !1, {
              fileName: "app/routes/cadaulas/nova.tsx",
              lineNumber: 74,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("option", { value: "danca", children: "Dan\xE7a" }, void 0, !1, {
              fileName: "app/routes/cadaulas/nova.tsx",
              lineNumber: 75,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("option", { value: "spinning", children: "Spinning" }, void 0, !1, {
              fileName: "app/routes/cadaulas/nova.tsx",
              lineNumber: 76,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("option", { value: "pilates", children: "Pilates" }, void 0, !1, {
              fileName: "app/routes/cadaulas/nova.tsx",
              lineNumber: 77,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/cadaulas/nova.tsx",
          lineNumber: 68,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { htmlFor: "password", className: "text-blue-600 font-semibold", children: "In\xEDcio" }, void 0, !1, {
        fileName: "app/routes/cadaulas/nova.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
        "input",
        {
          type: "text",
          id: "inicio",
          name: "inicio",
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cadaulas/nova.tsx",
          lineNumber: 83,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { htmlFor: "password", className: "text-blue-600 font-semibold", children: "Final" }, void 0, !1, {
        fileName: "app/routes/cadaulas/nova.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
        "input",
        {
          type: "text",
          id: "final",
          name: "final",
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cadaulas/nova.tsx",
          lineNumber: 92,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
          "input",
          {
            className: "form-checkbox justify-center h-5 w-5 mr-2 ",
            type: "checkbox",
            name: "segunda",
            value: "1"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas/nova.tsx",
            lineNumber: 100,
            columnNumber: 13
          },
          this
        ),
        "Segunda"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas/nova.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            name: "terca",
            id: "ter\xE7a",
            value: "2"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas/nova.tsx",
            lineNumber: 109,
            columnNumber: 13
          },
          this
        ),
        "Ter\xE7a"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas/nova.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            name: "quarta",
            id: "quarta",
            value: "3"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas/nova.tsx",
            lineNumber: 119,
            columnNumber: 13
          },
          this
        ),
        "Quarta"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas/nova.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            name: "quinta",
            value: "4",
            id: "quinta"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas/nova.tsx",
            lineNumber: 129,
            columnNumber: 13
          },
          this
        ),
        "Quinta"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas/nova.tsx",
        lineNumber: 128,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            name: "sexta",
            value: "5",
            id: "sexta"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas/nova.tsx",
            lineNumber: 139,
            columnNumber: 13
          },
          this
        ),
        "Sexta"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas/nova.tsx",
        lineNumber: 138,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { className: "font-thin mr-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
          "input",
          {
            className: "form-checkbox h-5 w-5 mr-2 ",
            type: "checkbox",
            name: "sabado",
            id: "sabado",
            value: "6"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadaulas/nova.tsx",
            lineNumber: 149,
            columnNumber: 13
          },
          this
        ),
        "S\xE1bado"
      ] }, void 0, !0, {
        fileName: "app/routes/cadaulas/nova.tsx",
        lineNumber: 148,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "w-full text-center mt-4 space-x-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "rounded-xl mt-2 bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-1",
          name: "_action",
          value: "save",
          children: transition.state === "submitting" ? "Cadastrando..." : "Cadastrar"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/cadaulas/nova.tsx",
          lineNumber: 160,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/cadaulas/nova.tsx",
        lineNumber: 159,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cadaulas/nova.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cadaulas/nova.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/cadaulas/nova.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/spinning/$id.tsx
var id_exports = {};
__export(id_exports, {
  action: () => action11,
  default: () => Spinning2,
  loader: () => loader13
});
var import_node21 = require("@remix-run/node"), import_node22 = require("@remix-run/node"), import_react28 = require("@remix-run/react");
var import_ai3 = require("react-icons/ai"), import_lodash6 = __toESM(require("lodash")), import_moment2 = __toESM(require("moment"));
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), loader13 = async ({ request, params }) => {
  var _a;
  let session = await getSession(request.headers.get("Cookie")), plano = (_a = session.get("aluno")) == null ? void 0 : _a.plano;
  if (!session.has("aluno"))
    return (0, import_node21.redirect)("/login");
  if (plano.filter(
    (s) => s.includes("FITNESS") || s.includes("SPINNING") || s.includes("TOTAL")
  ).length === 0) {
    let session2 = await getSession(request.headers.get("Cookie"));
    return session2.set("aluno", {
      motivo: "Spinning n\xE3o est\xE1 incluso em seu plano"
    }), (0, import_node21.redirect)("/login", {
      headers: {
        "Set-Cookie": await commitSession(session2)
      }
    });
  }
  let aluno = (await getAluno(Number(params.id)))[0], aulas = await getSpinning(), agendamentos = await getAgendamentos();
  return (0, import_node22.json)({ aluno, aulas, agendamentos });
}, action11 = async ({ request }) => {
  let form = await request.formData(), values = Object.fromEntries(form), agendamentos = await getAgendamentos(), aula_agendada = import_lodash6.default.filter(agendamentos, ["Hora", values.hora]), alunos = import_lodash6.default.flatten(aula_agendada.map((dt) => dt.alunos)), existeaAgenda = import_lodash6.default.filter(alunos, ["idMember", +values.idMember]).length, _action = form.get("_action");
  if (_action === "delete")
    return await deleteAlulaAgendada(values.id, values.idMember), null;
  if (_action === "save")
    return existeaAgenda === 0 ? await createAgendamento(values) : {
      message: aula_agendada.map((h) => h.aula).toString() + " Hor\xE1rio: " + aula_agendada.map((h) => h.Hora).toString() + " j\xE1 agendada para aluno: " + values.nome
    };
};
function Spinning2() {
  let { aluno, aulas, agendamentos } = (0, import_react28.useLoaderData)(), alunoAgendado = (0, import_react28.useActionData)(), id = aluno.idMember, now = new Date(), agora = (0, import_moment2.default)(), hourFilter = aulas.filter(
    (classes) => classes.days.includes(now.getDay())
  ), agendaAluno = agendamentos.filter(
    (e) => e.alunos.some((aluno2) => aluno2.idMember === id)
  ), aula730 = import_lodash6.default.filter(agendamentos, ["Hora", "07:30"]), alunos730 = import_lodash6.default.flatten(aula730.map((dt) => dt.alunos)).length, aula19 = import_lodash6.default.filter(agendamentos, ["Hora", "19:00"]), alunos19 = import_lodash6.default.flatten(aula19.map((dt) => dt.alunos)).length;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_jsx_dev_runtime31.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "px-2 mx-auto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
        "img",
        {
          src: aluno.photo !== null ? aluno.photo : "/user.png",
          className: "rounded-full shadow-lg w-24 h-24 m-4 mx-auto",
          alt: "Avatar"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/spinning/$id.tsx",
          lineNumber: 113,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h5", { className: "text-xl  leading-tight mb-2", children: [
        aluno.firstName,
        " ",
        aluno.lastName,
        " -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { className: "font-mono text-gray-400", children: [
          " ",
          aluno.idMember
        ] }, void 0, !0, {
          fileName: "app/routes/spinning/$id.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/spinning/$id.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/spinning/$id.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this),
    hourFilter.length > 0 && aluno.idMember !== 4 && /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "w-full container mx-auto px-8 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex   mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h5", { className: "text-md   font-medium leading-none text-slate-500 ", children: "RESERVAR AULAS" }, void 0, !1, {
        fileName: "app/routes/spinning/$id.tsx",
        lineNumber: 127,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/spinning/$id.tsx",
        lineNumber: 126,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("ul", { className: "divide-y divide-gray-200 ", children: [
        hourFilter.map((aula2) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("li", { className: "py-3 sm:py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react28.Form, { method: "post", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            "input",
            {
              name: "nome",
              hidden: !0,
              readOnly: !0,
              value: aluno.firstName + " " + aluno.lastName
            },
            void 0,
            !1,
            {
              fileName: "app/routes/spinning/$id.tsx",
              lineNumber: 136,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            "input",
            {
              name: "idMember",
              hidden: !0,
              readOnly: !0,
              value: aluno.idMember
            },
            void 0,
            !1,
            {
              fileName: "app/routes/spinning/$id.tsx",
              lineNumber: 141,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            "input",
            {
              name: "photo",
              hidden: !0,
              readOnly: !0,
              value: aluno.photo
            },
            void 0,
            !1,
            {
              fileName: "app/routes/spinning/$id.tsx",
              lineNumber: 146,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex-shrink-0  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
              "button",
              {
                disabled: aula2.start === "07:30" ? import_moment2.default.duration(
                  (0, import_moment2.default)(aula2.start, "HH:mm:ss").diff(agora)
                ).asHours() > 0.5 || import_moment2.default.duration(
                  (0, import_moment2.default)(aula2.start, "HH:mm:ss").diff(agora)
                ).asHours() < 0 || +alunos730 > 17 : import_moment2.default.duration(
                  (0, import_moment2.default)(aula2.start, "HH:mm:ss").diff(agora)
                ).asHours() > 0.5 || import_moment2.default.duration(
                  (0, import_moment2.default)(aula2.start, "HH:mm:ss").diff(agora)
                ).asHours() < 0 || +alunos19 > 17,
                className: "bg-green-500 rounded-full px-2 pt-2.5 pb-2  disabled:bg-slate-400 disabled:cursor-not-allowed disabled:opacity-40 text-white active:bg-orange-600 font-bold uppercase text-sm  py-1  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                type: "submit",
                name: "_action",
                value: "save",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_ai3.AiFillSchedule, { className: "text-2xl" }, void 0, !1, {
                  fileName: "app/routes/spinning/$id.tsx",
                  lineNumber: 188,
                  columnNumber: 29
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/spinning/$id.tsx",
                lineNumber: 153,
                columnNumber: 27
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/spinning/$id.tsx",
              lineNumber: 152,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex-1 min-w-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("p", { className: " font-medium text-gray-900 truncate", children: [
                aula2.turma,
                /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "aula",
                    hidden: !0,
                    readOnly: !0,
                    value: aula2.turma
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/spinning/$id.tsx",
                    lineNumber: 195,
                    columnNumber: 29
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "identificador",
                    hidden: !0,
                    readOnly: !0,
                    value: aula2.turma + "|" + aula2.start + "|" + (new Date().getMonth() + 1) + "/" + new Date().getDate()
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/spinning/$id.tsx",
                    lineNumber: 202,
                    columnNumber: 29
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/spinning/$id.tsx",
                lineNumber: 192,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("p", { className: "text-sm  text-blue-500 truncate ", children: [
                aula2.start,
                " - ",
                aula2.finish,
                /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "hora",
                    hidden: !0,
                    readOnly: !0,
                    value: aula2.start
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/spinning/$id.tsx",
                    lineNumber: 220,
                    columnNumber: 29
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/spinning/$id.tsx",
                lineNumber: 218,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/spinning/$id.tsx",
              lineNumber: 191,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "items-center text-base font-semibold text-gray-900  w-1/2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("p", { className: "text-center text-blue-400 font-medium text-sm", children: "RESERVADO" }, void 0, !1, {
                fileName: "app/routes/spinning/$id.tsx",
                lineNumber: 230,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "w-full bg-gray-200  rounded-full ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
                "div",
                {
                  className: "bg-orange-300 rounded-full text-xs font-medium  text-center p-1 leading-none  ",
                  style: aula2.start === "07:30" ? {
                    width: Math.round(alunos730 / 17 * 100) + "%"
                  } : {
                    width: Math.round(alunos19 / 17 * 100) + "%"
                  },
                  children: aula2.start === "07:30" ? Math.round(alunos730 / 17 * 100) + "% " : Math.round(alunos19 / 17 * 100) + "% "
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/spinning/$id.tsx",
                  lineNumber: 234,
                  columnNumber: 29
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/spinning/$id.tsx",
                lineNumber: 233,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/spinning/$id.tsx",
              lineNumber: 229,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/spinning/$id.tsx",
            lineNumber: 151,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/spinning/$id.tsx",
          lineNumber: 135,
          columnNumber: 21
        }, this) }, aula2.id, !1, {
          fileName: "app/routes/spinning/$id.tsx",
          lineNumber: 134,
          columnNumber: 19
        }, this)),
        (alunoAgendado == null ? void 0 : alunoAgendado.message) && /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("p", { className: "  text-center text-md text-white font-medium px-4 py-3 bg-blue-400 rounded-lg", children: alunoAgendado.message }, void 0, !1, {
          fileName: "app/routes/spinning/$id.tsx",
          lineNumber: 260,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/spinning/$id.tsx",
        lineNumber: 132,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/spinning/$id.tsx",
        lineNumber: 131,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/spinning/$id.tsx",
      lineNumber: 125,
      columnNumber: 11
    }, this),
    agendaAluno.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "divide-y flex-row divide-gray-200 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h2", { className: "text-center font-semibold p-2", children: "Aulas Reservada" }, void 0, !1, {
        fileName: "app/routes/spinning/$id.tsx",
        lineNumber: 271,
        columnNumber: 15
      }, this),
      agendaAluno.map((aulas2) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
        import_react28.Form,
        {
          method: "post",
          className: " text-center mb-2 flex h-10 items-center  justify-between rounded-[26px] shadow  bg-slate-200 py-0 px-[12px] text-[13px] font-semibold  text-slate-800 ",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
              "input",
              {
                name: "idMember",
                hidden: !0,
                readOnly: !0,
                value: aluno.idMember
              },
              void 0,
              !1,
              {
                fileName: "app/routes/spinning/$id.tsx",
                lineNumber: 277,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("input", { name: "id", hidden: !0, readOnly: !0, value: aulas2.id }, void 0, !1, {
              fileName: "app/routes/spinning/$id.tsx",
              lineNumber: 282,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: " text-lg font-semibold", children: aulas2.aula }, void 0, !1, {
              fileName: "app/routes/spinning/$id.tsx",
              lineNumber: 283,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("p", { className: "text-lg font-semibold", children: aulas2.Hora }, void 0, !1, {
              fileName: "app/routes/spinning/$id.tsx",
              lineNumber: 284,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
              "button",
              {
                className: "flex items-center space-x-2 h-3/4  text-white rounded-full bg-red-500 py-2 px-3  ",
                type: "submit",
                name: "_action",
                value: "delete",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { className: "text-white items-center  font-medium", children: "N\xE3o Vou" }, void 0, !1, {
                    fileName: "app/routes/spinning/$id.tsx",
                    lineNumber: 291,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_ai3.AiTwotoneDelete, { className: " text-lg " }, void 0, !1, {
                    fileName: "app/routes/spinning/$id.tsx",
                    lineNumber: 294,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/spinning/$id.tsx",
                lineNumber: 286,
                columnNumber: 19
              },
              this
            )
          ]
        },
        aulas2.id,
        !0,
        {
          fileName: "app/routes/spinning/$id.tsx",
          lineNumber: 273,
          columnNumber: 17
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/routes/spinning/$id.tsx",
      lineNumber: 270,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/spinning/$id.tsx",
      lineNumber: 269,
      columnNumber: 11
    }, this),
    aluno.idMember === 4 && /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "w-full container mx-auto px-8 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "divide-y flex-row divide-gray-200 ", children: agendamentos.map((ag) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "py-3 sm:py-4 flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex mb-2 font-semibold text-lg  space-x-4 justify-center  ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("p", { className: " uppercase", children: ag.aula }, void 0, !1, {
          fileName: "app/routes/spinning/$id.tsx",
          lineNumber: 308,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("p", { children: ag.Hora }, void 0, !1, {
          fileName: "app/routes/spinning/$id.tsx",
          lineNumber: 309,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/spinning/$id.tsx",
        lineNumber: 307,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: ag.alunos.map((a) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: " text-center mb-2 flex  items-center  justify-between rounded-[26px] shadow  bg-slate-100 py-0 px-[12px] text-[13px] font-semibold  text-slate-800 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
          "img",
          {
            className: "my-0 mr-[8px]  shadow-md -ml-[12px] h-14 w-14 object-cover rounded-full",
            src: a.photo !== "" ? a.photo : "/user.png",
            alt: "avatar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/spinning/$id.tsx",
            lineNumber: 316,
            columnNumber: 27
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("p", { className: "mr-8", children: a.nome }, void 0, !1, {
          fileName: "app/routes/spinning/$id.tsx",
          lineNumber: 321,
          columnNumber: 27
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/spinning/$id.tsx",
        lineNumber: 315,
        columnNumber: 25
      }, this) }, a.idMember, !1, {
        fileName: "app/routes/spinning/$id.tsx",
        lineNumber: 314,
        columnNumber: 23
      }, this)) }, void 0, !1, {
        fileName: "app/routes/spinning/$id.tsx",
        lineNumber: 312,
        columnNumber: 19
      }, this)
    ] }, ag.id, !0, {
      fileName: "app/routes/spinning/$id.tsx",
      lineNumber: 306,
      columnNumber: 17
    }, this)) }, void 0, !1, {
      fileName: "app/routes/spinning/$id.tsx",
      lineNumber: 304,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/spinning/$id.tsx",
      lineNumber: 303,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/spinning/$id.tsx",
    lineNumber: 111,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/spinning/$id.tsx",
    lineNumber: 110,
    columnNumber: 5
  }, this);
}

// app/routes/aluno/grupo.tsx
var grupo_exports = {};
__export(grupo_exports, {
  action: () => action12,
  default: () => Grupo,
  loader: () => loader14
});
var import_react29 = require("@remix-run/react");
var import_node23 = require("@remix-run/node");
var import_ai4 = require("react-icons/ai"), import_ti = require("react-icons/ti");

// app/components/ui/separator.tsx
var React10 = __toESM(require("react")), SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"));
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), Separator2 = React10.forwardRef(
  ({ className, orientation = "horizontal", decorative = !0, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/separator.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  )
);
Separator2.displayName = SeparatorPrimitive.Root.displayName;

// app/routes/aluno/grupo.tsx
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), loader14 = async ({ request, params }) => {
  let grupos = await getGrupos();
  return (0, import_node23.json)(grupos);
};
async function action12({ request }) {
  let formData = await request.formData(), values = Object.fromEntries(formData);
  return await deleteAluno(values), (0, import_node23.redirect)("");
}
function Grupo() {
  let grupos = (0, import_react29.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_jsx_dev_runtime33.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: " text-center font-semibold text-lg  m-4", children: "Grupos projetos especiais" }, void 0, !1, {
      fileName: "app/routes/aluno/grupo.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex items-center gap-2 mb-2  place-content-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react29.Link, { to: "novo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Button, { variant: "secondary", className: "bg-stone-200 flex  ", children: "Novo Grupo" }, void 0, !1, {
        fileName: "app/routes/aluno/grupo.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/aluno/grupo.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react29.Link, { to: "cadaluno", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Button, { variant: "secondary", className: "bg-blue-500 text-white flex  ", children: "Novo Aluno" }, void 0, !1, {
        fileName: "app/routes/aluno/grupo.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/aluno/grupo.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno/grupo.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: " container grid gap-3 grid-cols-1 md:grid-cols-3", children: grupos.map((g, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(CardHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(CardTitle, { className: " mb-3 font-normal items-center place-content-between flex ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex items-center ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react29.Link, { to: g.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_ai4.AiTwotoneEdit, { className: "w-6 h-6 flex mr-2 rounded-full p-1 bg-teal-500  text-white" }, void 0, !1, {
            fileName: "app/routes/aluno/grupo.tsx",
            lineNumber: 57,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno/grupo.tsx",
            lineNumber: 56,
            columnNumber: 19
          }, this),
          g.nome
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/grupo.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Separator2, { orientation: "vertical" }, void 0, !1, {
          fileName: "app/routes/aluno/grupo.tsx",
          lineNumber: 62,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno/grupo.tsx",
          lineNumber: 61,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex gap-2", children: [
          "Membros - ",
          g.alunos.length,
          " / ",
          g.numero
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/grupo.tsx",
          lineNumber: 64,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno/grupo.tsx",
        lineNumber: 54,
        columnNumber: 15
      }, this),
      g.alunos.map((a, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react29.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          "input",
          {
            type: "text",
            hidden: !0,
            name: "idMember",
            defaultValue: a.idMember
          },
          void 0,
          !1,
          {
            fileName: "app/routes/aluno/grupo.tsx",
            lineNumber: 70,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("input", { type: "text", hidden: !0, name: "id", defaultValue: g.id }, void 0, !1, {
          fileName: "app/routes/aluno/grupo.tsx",
          lineNumber: 76,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(CardDescription, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex items-center place-content-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "", children: index2 + 1 + " - " + a.nome }, void 0, !1, {
            fileName: "app/routes/aluno/grupo.tsx",
            lineNumber: 91,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("button", { type: "submit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_ti.TiDelete, { className: "text-orange-400 w-6 h-6" }, void 0, !1, {
            fileName: "app/routes/aluno/grupo.tsx",
            lineNumber: 93,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno/grupo.tsx",
            lineNumber: 92,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/grupo.tsx",
          lineNumber: 78,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno/grupo.tsx",
          lineNumber: 77,
          columnNumber: 19
        }, this)
      ] }, a.id, !0, {
        fileName: "app/routes/aluno/grupo.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/aluno/grupo.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this) }, index, !1, {
      fileName: "app/routes/aluno/grupo.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/aluno/grupo.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react29.Outlet, {}, void 0, !1, {
      fileName: "app/routes/aluno/grupo.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno/grupo.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/aluno/grupo/cadaluno.tsx
var cadaluno_exports = {};
__export(cadaluno_exports, {
  action: () => action13,
  default: () => Grupo2,
  loader: () => loader15
});
var import_node24 = require("@remix-run/node");
var import_react30 = require("@remix-run/react");
var import_fa8 = require("react-icons/fa"), import_jsx_dev_runtime34 = require("react/jsx-dev-runtime"), loader15 = async ({ request, params }) => {
  let par = new URL(request.url).searchParams.get("aluno"), alunos = await getAlunoNome(par), grupos = await getGrupos();
  return (0, import_node24.json)({ alunos, grupos });
};
async function action13({ request }) {
  let formData = await request.formData(), values = Object.fromEntries(formData), grupo = await updateGrupo(values);
  return (0, import_node24.redirect)("..");
}
function Grupo2() {
  var _a;
  let { grupos } = (0, import_react30.useLoaderData)(), grupoFilter = grupos.filter(
    (grupo) => grupo.alunos.length < grupo.numero
  ), nome = (0, import_react30.useFetcher)(), alunos = (_a = nome.data) == null ? void 0 : _a.alunos, navigate = (0, import_react30.useNavigate)();
  function closeHandler() {
    navigate(-1);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_jsx_dev_runtime34.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: " container mx-auto p-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(nome.Form, { method: "get", action: ".", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex w-full max-w-sm items-center space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Input, { name: "aluno", type: "search", placeholder: "Pesquisar Aluno" }, void 0, !1, {
        fileName: "app/routes/aluno/grupo/cadaluno.tsx",
        lineNumber: 59,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
        Button,
        {
          name: "_action",
          value: "search",
          className: " bg-stone-400",
          type: "submit",
          children: "Pesquisar"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno/grupo/cadaluno.tsx",
          lineNumber: 60,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/aluno/grupo/cadaluno.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno/grupo/cadaluno.tsx",
      lineNumber: 57,
      columnNumber: 11
    }, this),
    alunos && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("ul", { className: " space-y-2 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "grid grid-cols-12 py-2 gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "col-span-2 hidden md:block font-light text-sm text-stone-500", children: "Matricula" }, void 0, !1, {
          fileName: "app/routes/aluno/grupo/cadaluno.tsx",
          lineNumber: 72,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "col-span-4 font-light text-sm text-stone-500", children: "Nome" }, void 0, !1, {
          fileName: "app/routes/aluno/grupo/cadaluno.tsx",
          lineNumber: 75,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "col-span-3 text-center font-light text-sm text-stone-500", children: "Grupo" }, void 0, !1, {
          fileName: "app/routes/aluno/grupo/cadaluno.tsx",
          lineNumber: 78,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno/grupo/cadaluno.tsx",
        lineNumber: 71,
        columnNumber: 15
      }, this),
      alunos == null ? void 0 : alunos.map((aluno) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react30.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          "input",
          {
            hidden: !0,
            name: "idMember",
            value: aluno.idMember
          },
          void 0,
          !1,
          {
            fileName: "app/routes/aluno/grupo/cadaluno.tsx",
            lineNumber: 85,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          "input",
          {
            hidden: !0,
            name: "nome",
            value: aluno.lastName === null ? aluno.firstName : aluno.firstName + " " + aluno.lastName
          },
          void 0,
          !1,
          {
            fileName: "app/routes/aluno/grupo/cadaluno.tsx",
            lineNumber: 89,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("input", { hidden: !0, name: "photo", value: aluno.photoUrl }, void 0, !1, {
          fileName: "app/routes/aluno/grupo/cadaluno.tsx",
          lineNumber: 97,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "grid md:grid-cols-12  gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: " hidden md:block md:col-span-2", children: aluno.idMember }, void 0, !1, {
            fileName: "app/routes/aluno/grupo/cadaluno.tsx",
            lineNumber: 100,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "col-span-4", children: aluno.lastName === null ? aluno.firstName : aluno.firstName + " " + aluno.lastName }, void 0, !1, {
            fileName: "app/routes/aluno/grupo/cadaluno.tsx",
            lineNumber: 103,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: " col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Select, { name: "grupo", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(SelectValue, { placeholder: "Grupo Atividades" }, void 0, !1, {
              fileName: "app/routes/aluno/grupo/cadaluno.tsx",
              lineNumber: 111,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/aluno/grupo/cadaluno.tsx",
              lineNumber: 110,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(SelectContent, { children: grupoFilter.map((g) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(SelectItem, { value: g.id, children: g.nome }, g.id, !1, {
              fileName: "app/routes/aluno/grupo/cadaluno.tsx",
              lineNumber: 115,
              columnNumber: 31
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno/grupo/cadaluno.tsx",
              lineNumber: 113,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/grupo/cadaluno.tsx",
            lineNumber: 109,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno/grupo/cadaluno.tsx",
            lineNumber: 108,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: " col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
            Button,
            {
              name: "_action",
              value: "grupo",
              className: " bg-green-400",
              type: "submit",
              children: "Cadastrar"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/aluno/grupo/cadaluno.tsx",
              lineNumber: 123,
              columnNumber: 25
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/aluno/grupo/cadaluno.tsx",
            lineNumber: 122,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/grupo/cadaluno.tsx",
          lineNumber: 99,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno/grupo/cadaluno.tsx",
        lineNumber: 84,
        columnNumber: 19
      }, this) }, aluno.idMember, !1, {
        fileName: "app/routes/aluno/grupo/cadaluno.tsx",
        lineNumber: 83,
        columnNumber: 17
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/aluno/grupo/cadaluno.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "  mt-4  flex place-content-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Button, { variant: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react30.Link, { to: "..", className: "  flex items-center space-x-2  ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_fa8.FaWindowClose, {}, void 0, !1, {
        fileName: "app/routes/aluno/grupo/cadaluno.tsx",
        lineNumber: 142,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/aluno/grupo/cadaluno.tsx",
        lineNumber: 141,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: "Sair" }, void 0, !1, {
        fileName: "app/routes/aluno/grupo/cadaluno.tsx",
        lineNumber: 144,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno/grupo/cadaluno.tsx",
      lineNumber: 140,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno/grupo/cadaluno.tsx",
      lineNumber: 139,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno/grupo/cadaluno.tsx",
      lineNumber: 138,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno/grupo/cadaluno.tsx",
    lineNumber: 56,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/aluno/grupo/cadaluno.tsx",
    lineNumber: 55,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/aluno/grupo/cadaluno.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

// app/routes/aluno/grupo/novo.tsx
var novo_exports2 = {};
__export(novo_exports2, {
  action: () => action14,
  default: () => Novo2
});

// app/components/ui/label.tsx
var React11 = __toESM(require("react")), LabelPrimitive = __toESM(require("@radix-ui/react-label")), import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), labelVariants = (0, import_class_variance_authority2.cva)(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Label2 = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/label.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  this
));
Label2.displayName = LabelPrimitive.Root.displayName;

// app/routes/aluno/grupo/novo.tsx
var import_react31 = require("@remix-run/react"), import_fa9 = require("react-icons/fa"), import_node25 = require("@remix-run/node");
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
async function action14({ request }) {
  let formData = await request.formData(), values = Object.fromEntries(formData), grupo = await cadGrupo(values);
  return (0, import_node25.redirect)("..");
}
function Novo2() {
  let navigate = (0, import_react31.useNavigate)();
  function closeHandler() {
    navigate(-1);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Modal_default, { onClose: closeHandler, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
      import_react31.Form,
      {
        method: "post",
        className: "font-semibold grid space-x-2 space-y-4 grid-cols-1 ",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: " text-center mb-4", children: "Novo Grupo" }, void 0, !1, {
            fileName: "app/routes/aluno/grupo/novo.tsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "grid w-full grid-cols-2 max-w-sm items-center gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Label2, { htmlFor: "grupo", children: "Grupo" }, void 0, !1, {
              fileName: "app/routes/aluno/grupo/novo.tsx",
              lineNumber: 31,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
              Input,
              {
                type: "text",
                id: "grupo",
                name: "grupo",
                placeholder: "Grupo",
                className: "w-full"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/grupo/novo.tsx",
                lineNumber: 32,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Label2, { htmlFor: "grupo", children: "N\xFAmero de Integrantes" }, void 0, !1, {
              fileName: "app/routes/aluno/grupo/novo.tsx",
              lineNumber: 39,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
              Input,
              {
                type: "number",
                name: "numero",
                id: "numero",
                placeholder: "N\xFAmero de Membros"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/grupo/novo.tsx",
                lineNumber: 40,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/grupo/novo.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "grid w-full grid-cols-2 max-w-sm items-center gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Label2, { htmlFor: "inicio", children: "In\xEDcio" }, void 0, !1, {
              fileName: "app/routes/aluno/grupo/novo.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
              "input",
              {
                type: "date",
                id: "inicio",
                name: "inicio",
                className: "w-full p-2 rounded-xl my-2",
                defaultValue: new Date().toISOString().substring(0, 10)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/grupo/novo.tsx",
                lineNumber: 49,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Label2, { htmlFor: "fim", children: "Fim" }, void 0, !1, {
              fileName: "app/routes/aluno/grupo/novo.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
              "input",
              {
                type: "date",
                id: "fim",
                name: "fim",
                className: "w-full p-2 rounded-xl my-2",
                defaultValue: new Date().toISOString().substring(0, 10)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/grupo/novo.tsx",
                lineNumber: 57,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/grupo/novo.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Button, { type: "submit", children: "Cadastrar" }, void 0, !1, {
            fileName: "app/routes/aluno/grupo/novo.tsx",
            lineNumber: 66,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/aluno/grupo/novo.tsx",
        lineNumber: 26,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "  mt-4  flex place-content-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Button, { variant: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react31.Link, { to: "..", className: "  flex items-center space-x-2  ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_fa9.FaWindowClose, {}, void 0, !1, {
        fileName: "app/routes/aluno/grupo/novo.tsx",
        lineNumber: 73,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/aluno/grupo/novo.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { children: "Sair" }, void 0, !1, {
        fileName: "app/routes/aluno/grupo/novo.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno/grupo/novo.tsx",
      lineNumber: 71,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno/grupo/novo.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno/grupo/novo.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno/grupo/novo.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/aluno/grupo/$id.tsx
var id_exports2 = {};
__export(id_exports2, {
  action: () => action15,
  default: () => Editar2,
  loader: () => loader16
});
var import_react32 = require("@remix-run/react"), import_fa10 = require("react-icons/fa"), import_node26 = require("@remix-run/node");
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime"), loader16 = async ({ request, params }) => {
  let grupo = await getGrupo(params.id);
  return (0, import_node26.json)(grupo);
};
async function action15({ request }) {
  let formData = await request.formData(), values = Object.fromEntries(formData);
  return values._action === "update" ? await cadGrupo(values) : await delGrupo(values), (0, import_node26.redirect)("..");
}
function Editar2() {
  let grupo = (0, import_react32.useLoaderData)(), navigate = (0, import_react32.useNavigate)();
  function closeHandler() {
    navigate(-1);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Modal_default, { onClose: closeHandler, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
      import_react32.Form,
      {
        method: "post",
        className: "font-semibold grid space-x-2 space-y-4 grid-cols-1 ",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: " text-center mb-4", children: "Editar Grupo" }, void 0, !1, {
            fileName: "app/routes/aluno/grupo/$id.tsx",
            lineNumber: 40,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "grid w-full grid-cols-2 max-w-sm items-center gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Label2, { htmlFor: "grupo", children: "Grupo" }, void 0, !1, {
              fileName: "app/routes/aluno/grupo/$id.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("input", { hidden: !0, type: "text", name: "id", defaultValue: grupo.id }, void 0, !1, {
              fileName: "app/routes/aluno/grupo/$id.tsx",
              lineNumber: 43,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
              Input,
              {
                type: "text",
                id: "grupo",
                name: "grupo",
                placeholder: "Grupo",
                className: "w-full",
                defaultValue: grupo.nome
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/grupo/$id.tsx",
                lineNumber: 44,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Label2, { htmlFor: "grupo", children: "N\xFAmero de Integrantes" }, void 0, !1, {
              fileName: "app/routes/aluno/grupo/$id.tsx",
              lineNumber: 52,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
              Input,
              {
                type: "number",
                name: "numero",
                id: "numero",
                placeholder: "N\xFAmero de Membros",
                defaultValue: grupo.numero
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/grupo/$id.tsx",
                lineNumber: 53,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/grupo/$id.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "grid w-full grid-cols-2 max-w-sm items-center gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Label2, { htmlFor: "inicio", children: "In\xEDcio" }, void 0, !1, {
              fileName: "app/routes/aluno/grupo/$id.tsx",
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
              "input",
              {
                type: "date",
                id: "inicio",
                name: "inicio",
                className: "w-full p-2 rounded-xl my-2",
                defaultValue: new Date(grupo.inicio).toISOString().substring(0, 10)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/grupo/$id.tsx",
                lineNumber: 63,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Label2, { htmlFor: "fim", children: "Fim" }, void 0, !1, {
              fileName: "app/routes/aluno/grupo/$id.tsx",
              lineNumber: 70,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
              "input",
              {
                type: "date",
                id: "fim",
                name: "fim",
                className: "w-full p-2 rounded-xl my-2",
                defaultValue: new Date(grupo.fim).toISOString().substring(0, 10)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/grupo/$id.tsx",
                lineNumber: 71,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/grupo/$id.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex place-content-end gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Button, { name: "_action", value: "update", type: "submit", children: "Salvar" }, void 0, !1, {
              fileName: "app/routes/aluno/grupo/$id.tsx",
              lineNumber: 80,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
              Button,
              {
                variant: "destructive",
                name: "_action",
                value: "delete",
                type: "submit",
                children: "Apagar"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/grupo/$id.tsx",
                lineNumber: 83,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/grupo/$id.tsx",
            lineNumber: 79,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/aluno/grupo/$id.tsx",
        lineNumber: 37,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "  mt-4  flex place-content-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Button, { variant: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_react32.Link, { to: "..", className: "  flex items-center space-x-2  ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_fa10.FaWindowClose, {}, void 0, !1, {
        fileName: "app/routes/aluno/grupo/$id.tsx",
        lineNumber: 97,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/aluno/grupo/$id.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: "Sair" }, void 0, !1, {
        fileName: "app/routes/aluno/grupo/$id.tsx",
        lineNumber: 99,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno/grupo/$id.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno/grupo/$id.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/aluno/grupo/$id.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno/grupo/$id.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/routes/aluno/index.tsx
var aluno_exports = {};
__export(aluno_exports, {
  action: () => action16,
  default: () => Treino2,
  loader: () => loader17
});
var import_node27 = require("@remix-run/node"), import_node28 = require("@remix-run/node"), import_react33 = require("@remix-run/react");
var import_date_fns3 = require("date-fns"), import_format2 = __toESM(require("date-fns/format")), import_pt_BR2 = __toESM(require("date-fns/locale/pt-BR")), import_react34 = require("react"), import_lodash7 = __toESM(require("lodash")), import_fa11 = require("react-icons/fa"), import_fi2 = require("react-icons/fi"), import_tb = require("react-icons/tb");
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime"), loader17 = async ({ request, params }) => {
  var _a, _b;
  let session = await getSession(request.headers.get("Cookie"));
  if (!((_a = session.get("aluno")) == null ? void 0 : _a.id))
    return session.set("aluno", {
      red: "/aluno"
    }), (0, import_node27.redirect)("/login", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  let aluno = (await getAluno((_b = session.get("aluno")) == null ? void 0 : _b.id))[0], treinosGrupo = await getTreinos((0, import_date_fns3.getWeek)(new Date())), historicoTreinos = await getHistorico(Number(session.get("aluno").id));
  return (0, import_node28.json)({ aluno, treinosGrupo, historicoTreinos });
}, action16 = async ({ request }) => {
  let form = await request.formData(), values = Object.fromEntries(form), test = await updateHistorico(values);
  return (0, import_node27.redirect)("/aluno");
};
function Treino2() {
  let { aluno, treinosGrupo, historicoTreinos } = (0, import_react33.useLoaderData)(), [grupo, setGrupo] = (0, import_react34.useState)(""), [dt, setDt] = (0, import_react34.useState)(Date), [tipoTreinoGrupo, SetTipoTreinoGRupo] = (0, import_react34.useState)(
    treinosGrupo.filter((el) => el.grupo.includes(""))
  ), [treino, setTreino] = (0, import_react34.useState)(), [checked, setChecked] = (0, import_react34.useState)([]), transition = (0, import_react33.useTransition)(), hitTreino = import_lodash7.default.mapValues(historicoTreinos == null ? void 0 : historicoTreinos.treinos, function(o) {
    let data = (0, import_format2.default)(new Date(o.data), "EEEEEE - dd/MM", {
      locale: import_pt_BR2.default
    });
    return { treino: o.treino, data };
  }), grupotreino = import_lodash7.default.map(import_lodash7.default.groupBy(hitTreino, "data"), (data, idx) => ({ data: idx, treino: data })), PlaneTreino = import_lodash7.default.mapValues(historicoTreinos == null ? void 0 : historicoTreinos.planejados, function(o) {
    return { treino: o.treinoP, dia: o.dia };
  }), plano = import_lodash7.default.map(PlaneTreino, (treino2) => treino2), grupotreinoPlan = import_lodash7.default.map(
    import_lodash7.default.groupBy(PlaneTreino, "data"),
    (data, idx, dt2, feito) => ({ data: idx, treino: data, dt: dt2, feito })
  ), ultimosPlan = import_lodash7.default.takeRight(grupotreinoPlan, 7), ultimos = import_lodash7.default.takeRight(grupotreino, 3), ultimosTreinos = import_lodash7.default.takeRight(historicoTreinos == null ? void 0 : historicoTreinos.treinos, 3), handleGrupo = (event) => {
    setGrupo(event.target.value.split(",")[0]), setDt(event.target.value.split(",")[1]);
    for (var inputs = document.querySelectorAll("[id=done]"), i = 0; i < inputs.length; i++)
      inputs[i].checked = !1;
  }, handleCheck = (event) => {
    var updatedList = [...checked];
    event.target.checked ? updatedList = [...checked, event.target.value] : updatedList.splice(checked.indexOf(event.target.value), 1), setChecked(updatedList);
  };
  var isChecked = (item) => checked.includes(item) ? "bg-green-300 mb-2  font-light  p-2 rounded-lg  shadow-md" : "bg-stone-100 mb-2  font-light  p-2 rounded-lg  ", isCheckedTitle = (item) => checked.includes(item) ? "text-decoration-line: line-through" : "text font-medium text-green-600";
  (0, import_react34.useEffect)(() => {
    setTreino(
      import_lodash7.default.filter(tipoTreinoGrupo, ["grupo", grupo])
    );
  }, [grupo, tipoTreinoGrupo]);
  let textInput = (0, import_react34.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_jsx_dev_runtime38.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: " px-2 mx-auto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
        "img",
        {
          src: aluno != null && aluno.photoUrl ? aluno == null ? void 0 : aluno.photoUrl : "/user.png",
          className: "rounded-full shadow-lg w-24 h-24 m-4 mx-auto",
          alt: "Avatar"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno/index.tsx",
          lineNumber: 226,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h5", { className: "text-xl  leading-tight mb-2", children: [
        aluno == null ? void 0 : aluno.firstName,
        " ",
        aluno == null ? void 0 : aluno.lastName,
        " -",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "font-mono text-gray-400", children: [
          " ",
          aluno == null ? void 0 : aluno.idMember
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/index.tsx",
          lineNumber: 233,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno/index.tsx",
        lineNumber: 231,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "", children: plano && /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_jsx_dev_runtime38.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: " bg-teal-100  rounded-md mb-2 items-center place-content-center gap-2 text-center flex text-stone-600 font-light ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_tb.TbHandClick, { className: "text-stone-600 text-xl" }, void 0, !1, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 260,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: "no treino para ver os exerc\xEDcios" }, void 0, !1, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 261,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/index.tsx",
          lineNumber: 259,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h2", { className: "  text-stone-500 font-medium mb-2 text-center mt-2", children: "Treinos Planejados" }, void 0, !1, {
          fileName: "app/routes/aluno/index.tsx",
          lineNumber: 264,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/aluno/index.tsx",
          lineNumber: 263,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "text-stone-600 text-center place-content-center gap-2  mx-auto grid grid-cols-2 md:gap-2 md:grid-cols-4 lg:grid-cols-7 lg:container-2xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardTitle, { children: "Segunda" }, void 0, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 272,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardDescription, { children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("segunda");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              index,
              !1,
              {
                fileName: "app/routes/aluno/index.tsx",
                lineNumber: 278,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 277,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 273,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 271,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 270,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardTitle, { children: "Ter\xE7a" }, void 0, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 292,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardDescription, { className: "", children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("terca");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/index.tsx",
                lineNumber: 298,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 297,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 293,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 291,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 290,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardTitle, { children: "Quarta" }, void 0, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 311,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardDescription, { children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("quarta");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              index,
              !1,
              {
                fileName: "app/routes/aluno/index.tsx",
                lineNumber: 317,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 316,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 312,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 310,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 309,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardTitle, { children: "Quinta" }, void 0, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 331,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardDescription, { children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("quinta");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              index,
              !1,
              {
                fileName: "app/routes/aluno/index.tsx",
                lineNumber: 337,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 336,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 332,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 330,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 329,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardTitle, { children: "Sexta" }, void 0, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 351,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardDescription, { children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("sexta");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              index,
              !1,
              {
                fileName: "app/routes/aluno/index.tsx",
                lineNumber: 357,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 356,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 352,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 350,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 349,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardTitle, { children: "S\xE1bado" }, void 0, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 371,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardDescription, { className: " ", children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("sabado");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              index,
              !1,
              {
                fileName: "app/routes/aluno/index.tsx",
                lineNumber: 377,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 376,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 372,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 370,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 369,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Card, { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardTitle, { children: "Domingo" }, void 0, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 391,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardDescription, { children: plano.filter((o) => {
              var _a;
              return (_a = o.dia) == null ? void 0 : _a.includes("domingo");
            }).map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
              "button",
              {
                value: s.treino,
                onClick: handleGrupo,
                name: "treino",
                children: s.treino
              },
              index,
              !1,
              {
                fileName: "app/routes/aluno/index.tsx",
                lineNumber: 397,
                columnNumber: 31
              },
              this
            ) }, index, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 396,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 392,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 390,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 389,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/index.tsx",
          lineNumber: 269,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno/index.tsx",
        lineNumber: 258,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/aluno/index.tsx",
        lineNumber: 256,
        columnNumber: 11
      }, this),
      ultimosTreinos.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_jsx_dev_runtime38.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h2", { className: "  text-stone-500 font-medium mb-1 text-center mt-2", children: "\xDALTIMOS TREINOS" }, void 0, !1, {
          fileName: "app/routes/aluno/index.tsx",
          lineNumber: 415,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "text-gray-500 grid  gap-2 grid-cols-3", children: ultimos.map((u, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mt-1 mb-4  py-2 px-2 rounded-md my-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: u.data }, void 0, !1, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 422,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "font-semibold text-teal-600", children: u.treino.map((t, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: t.treino }, index2, !1, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 425,
            columnNumber: 27
          }, this)) }, void 0, !1, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 423,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/index.tsx",
          lineNumber: 421,
          columnNumber: 21
        }, this) }, index, !1, {
          fileName: "app/routes/aluno/index.tsx",
          lineNumber: 420,
          columnNumber: 19
        }, this)) }, void 0, !1, {
          fileName: "app/routes/aluno/index.tsx",
          lineNumber: 418,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno/index.tsx",
        lineNumber: 414,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aluno/index.tsx",
      lineNumber: 225,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: " max-w-lg mt-2 flex mx-auto ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
      "select",
      {
        className: "form-select block  justify-center w-full px-3 py-1.5 font-light text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none",
        "aria-label": "Selecione o treino",
        defaultValue: "Selecione o Treino",
        value: grupo,
        onChange: handleGrupo,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("option", { children: "Selecione o Treino" }, void 0, !1, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 541,
            columnNumber: 13
          }, this),
          tipoTreinoGrupo == null ? void 0 : tipoTreinoGrupo.map((grupo2) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("option", { value: grupo2.grupo, children: grupo2.grupo }, grupo2.grupo, !1, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 543,
            columnNumber: 15
          }, this))
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/aluno/index.tsx",
        lineNumber: 534,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/aluno/index.tsx",
      lineNumber: 533,
      columnNumber: 9
    }, this),
    grupo && /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react33.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("input", { readOnly: !0, hidden: !0, type: "text", name: "treino", value: grupo }, void 0, !1, {
        fileName: "app/routes/aluno/index.tsx",
        lineNumber: 552,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("input", { readOnly: !0, hidden: !0, type: "text", name: "data", value: dt }, void 0, !1, {
        fileName: "app/routes/aluno/index.tsx",
        lineNumber: 553,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
        "input",
        {
          hidden: !0,
          type: "number",
          name: "aluno",
          readOnly: !0,
          defaultValue: aluno.idMember
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluno/index.tsx",
          lineNumber: 554,
          columnNumber: 13
        },
        this
      ),
      grupo !== "Selecione o Treino" && /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: " block justify-center mx-auto max-w-xl ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex flex-row  justify-evenly  font-bold text-orange-500 items-center m-2 text-xl", children: [
        grupo,
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("button", { className: "bg-blue-500   inline-flex gap-3 items-center px-3 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-md  hover:shadow-lg hover:bg-green-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_fa11.FaCheck, {}, void 0, !1, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 567,
            columnNumber: 21
          }, this),
          transition.state === "submitting" ? "Atualizando..." : "Feito"
        ] }, void 0, !0, {
          fileName: "app/routes/aluno/index.tsx",
          lineNumber: 566,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aluno/index.tsx",
        lineNumber: 564,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/aluno/index.tsx",
        lineNumber: 563,
        columnNumber: 15
      }, this),
      treino == null ? void 0 : treino.map((e, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
        "div",
        {
          className: " grid  gap-2 sm:grid-cols-2 lg:grid-cols-3  ",
          children: e.exercicios.map((exe, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: isChecked(exe.nome), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex mb-2 flex-row justify-between ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: isCheckedTitle(exe.nome), children: exe.nome }, void 0, !1, {
                fileName: "app/routes/aluno/index.tsx",
                lineNumber: 585,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
                "input",
                {
                  className: " w-6 h-6 accent-green-500 mr-4",
                  value: exe.nome,
                  type: "checkbox",
                  onChange: handleCheck,
                  id: "done",
                  name: "done",
                  ref: textInput
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/aluno/index.tsx",
                  lineNumber: 589,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 584,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex mb-2 shrink-0 items-center content-around  ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_fa11.FaSyncAlt, { className: "shrink-0 mr-3 " }, void 0, !1, {
                fileName: "app/routes/aluno/index.tsx",
                lineNumber: 600,
                columnNumber: 25
              }, this),
              exe.Repeticoes
            ] }, void 0, !0, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 599,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex  mb-2  items-center content-around lowercase", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_fa11.FaDumbbell, { className: " shrink-0 mr-3" }, void 0, !1, {
                fileName: "app/routes/aluno/index.tsx",
                lineNumber: 604,
                columnNumber: 25
              }, this),
              exe.carga
            ] }, void 0, !0, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 603,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex mb-2  shrink-0 items-center content-around lowercase ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_fa11.FaExclamationCircle, { className: "shrink-0 mr-3" }, void 0, !1, {
                fileName: "app/routes/aluno/index.tsx",
                lineNumber: 609,
                columnNumber: 25
              }, this),
              exe.obs
            ] }, void 0, !0, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 608,
              columnNumber: 23
            }, this),
            exe.video !== "" && /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: " flex justify-end  text-l mr-4 text-white ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
              import_react33.Link,
              {
                className: "bg-orange-300 rounded-lg px-6 p-2 ",
                to: `${exe.video}`,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_fi2.FiVideo, {}, void 0, !1, {
                  fileName: "app/routes/aluno/index.tsx",
                  lineNumber: 617,
                  columnNumber: 29
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/aluno/index.tsx",
                lineNumber: 614,
                columnNumber: 27
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/aluno/index.tsx",
              lineNumber: 613,
              columnNumber: 25
            }, this)
          ] }, index2, !0, {
            fileName: "app/routes/aluno/index.tsx",
            lineNumber: 583,
            columnNumber: 21
          }, this))
        },
        index,
        !1,
        {
          fileName: "app/routes/aluno/index.tsx",
          lineNumber: 579,
          columnNumber: 17
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/routes/aluno/index.tsx",
      lineNumber: 551,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aluno/index.tsx",
    lineNumber: 224,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/aluno/index.tsx",
    lineNumber: 221,
    columnNumber: 5
  }, this);
}

// app/routes/bancotreino.tsx
var bancotreino_exports = {};
__export(bancotreino_exports, {
  default: () => Treino3,
  loader: () => loader18
});
var import_node29 = require("@remix-run/node");
var import_react35 = require("@remix-run/react"), import_fa12 = require("react-icons/fa"), import_jsx_dev_runtime39 = require("react/jsx-dev-runtime"), loader18 = async ({ request }) => {
  let par = new URL(request.url).searchParams.get("semana_query"), parametro = par ? parseInt(par) : 101, treinos2 = await getTreinos2(parametro);
  return (0, import_node29.json)({ treinos: treinos2 });
};
function Treino3() {
  var _a;
  let semana = (0, import_react35.useFetcher)(), { treinos: treinos2 } = (0, import_react35.useLoaderData)(), treinoSemana = (_a = semana.data) != null && _a.treinos ? semana.data.treinos : treinos2;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "w-full container mx-auto p-2 bg-stone-100 font-Roboto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "flex items-center  space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h2", { className: "text-2xl font-extrabold text-slate-700", children: "Lista de Treinos" }, void 0, !1, {
        fileName: "app/routes/bancotreino.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(semana.Form, { method: "get", action: ".", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
        "select",
        {
          name: "semana_query",
          onChange: (event) => semana.submit(event.target.form),
          className: "rounded-md border-2 form-control block",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("option", { value: "101", children: "Treino 01 " }, void 0, !1, {
              fileName: "app/routes/bancotreino.tsx",
              lineNumber: 32,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("option", { value: "102", children: "Treino 02 " }, void 0, !1, {
              fileName: "app/routes/bancotreino.tsx",
              lineNumber: 33,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("option", { value: "103", children: "Treino 03 " }, void 0, !1, {
              fileName: "app/routes/bancotreino.tsx",
              lineNumber: 34,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("option", { value: "104", children: "Treino 04 " }, void 0, !1, {
              fileName: "app/routes/bancotreino.tsx",
              lineNumber: 35,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("option", { value: "105", children: "Treino 05 " }, void 0, !1, {
              fileName: "app/routes/bancotreino.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("option", { value: "106", children: "Treino 06 " }, void 0, !1, {
              fileName: "app/routes/bancotreino.tsx",
              lineNumber: 37,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/bancotreino.tsx",
          lineNumber: 28,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/bancotreino.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/bancotreino.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "container mx-auto content-center  py-6 px-2 md:px-0 md:grid md:gap-x-6  md:gap-y-4 md:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "overflow-x-auto relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("table", { className: "w-full  text-sm text-left text-gray-500 dark:text-gray-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("thead", { className: "text-xs  text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("tr", { className: "rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("th", { scope: "col", className: " ", children: "Grupo" }, void 0, !1, {
            fileName: "app/routes/bancotreino.tsx",
            lineNumber: 46,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("th", { scope: "col", className: "text-center ", children: "Treino" }, void 0, !1, {
            fileName: "app/routes/bancotreino.tsx",
            lineNumber: 49,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/bancotreino.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/bancotreino.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("tbody", { children: treinoSemana.map((treino) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("tr", { className: " dark:bg-gray-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("th", { className: "py-1 flex gap-x-2 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white", children: treino.grupo }, void 0, !1, {
            fileName: "app/routes/bancotreino.tsx",
            lineNumber: 61,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("td", { className: " text-center", children: treino.semana - 100 }, void 0, !1, {
            fileName: "app/routes/bancotreino.tsx",
            lineNumber: 64,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("td", { className: "  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react35.Link, { to: `${treino.id}`, className: "text-sky-600 text-lg ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_fa12.FaListAlt, {}, void 0, !1, {
            fileName: "app/routes/bancotreino.tsx",
            lineNumber: 68,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/bancotreino.tsx",
            lineNumber: 66,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/bancotreino.tsx",
            lineNumber: 65,
            columnNumber: 19
          }, this)
        ] }, treino.id, !0, {
          fileName: "app/routes/bancotreino.tsx",
          lineNumber: 60,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/bancotreino.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/bancotreino.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/bancotreino.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "col-span-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h2", { className: " font-semibold text-center text-slate-700", children: "Lista de Exerc\xEDcios" }, void 0, !1, {
          fileName: "app/routes/bancotreino.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react35.Outlet, {}, void 0, !1, {
          fileName: "app/routes/bancotreino.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/bancotreino.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/bancotreino.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/bancotreino.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/bancotreino/$grupo.tsx
var grupo_exports2 = {};
__export(grupo_exports2, {
  action: () => action17,
  default: () => Grupocadastrado,
  loader: () => loader19
});
var import_node30 = require("@remix-run/node"), import_react36 = require("@remix-run/react");
var import_fa13 = require("react-icons/fa"), import_react37 = require("react"), import_jsx_dev_runtime40 = require("react/jsx-dev-runtime"), loader19 = async ({ request, params }) => await getExercicios(params.grupo), action17 = async ({ request, params }) => {
  let form = await request.formData(), values = Object.fromEntries(form), treinos2 = await updateTreino(values);
  return (0, import_node30.redirect)(`${treinos2.id}`);
};
function Grupocadastrado() {
  let { exercicios } = (0, import_react36.useLoaderData)(), [semana, setSemana] = (0, import_react37.useState)(""), [grupo, setGrupo] = (0, import_react37.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
        "select",
        {
          onChange: (event) => setSemana(event.target.value),
          id: "semana",
          name: "semana",
          className: `rounded-md col-span-2 border-2 form-control block
                          w-full `,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "01", children: "01 - (01/01 a 07/01)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 38,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "02", children: "02 - (08/01 a 14/01)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 39,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "03", children: "03 - (15/01 a 21/01)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 40,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "04", children: "04 - (22/01 a 28/01)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 41,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "05", children: "05 - (29/01 a 04/02)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "06", children: "06 - (05/02 a 11/02)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 43,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "07", children: "07 - (12/02 a 18/02)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 44,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "08", children: "08 - (19/02 a 25/02)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 45,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "09", children: "09 - (26/02 a 04/03)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "10", children: "10 - (05/02 a 11/03)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "11", children: "11 - (12/03 a 18/03)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "12", children: "12 - (19/03 a 25/03)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 49,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "13", children: "13 - (26/03 a 01/04)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 50,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "14", children: "14 - (02/04 a 08/04)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 51,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "15", children: "15 - (09/04 a 15/04)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 52,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "16", children: "16 - (16/04 a 22/04)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "17", children: "17 - (23/04 a 29/04)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 54,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "18", children: "18 - (30/04 a 06/05)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 55,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "19", children: "19 - (30/04 a 06/05)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "20", children: "20 - (07/05 a 13/05)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 57,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "21", children: "21 - (14/05 a 20/05)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 58,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "22", children: "22 - (21/05 a 27/05)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 59,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "23", children: "23 - (28/05 a 03/06)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "24", children: "24 - (04/06 a 10/06)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 61,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "25", children: "25 - (11/06 a 17/06)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "26", children: "26 - (18/06 a 24/06)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 63,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "27", children: "27 - (25/06 a 01/07)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 64,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "28", children: "28 - (02/07 a 08/07)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 65,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "29", children: "29 - (09/07 a 15/07)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 66,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "30", children: "30 - (16/07 a 22/07)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 67,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "31", children: "31 - (23/07 a 29/07)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 68,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "32", children: "32 - (06/07 a 12/07)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 69,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "33", children: "33 - (13/08 a 19/08)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 70,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "34", children: "34 - (20/08 a 26/08)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 71,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "35", children: "35 - (27/08 a 02/09)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 72,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "36", children: "36 - (03/09 a 09/09)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 73,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "37", children: "37 - (10/09 a 16/09)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 74,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "38", children: "38 - (17/09 a 23/08)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 75,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "39", children: "39 - (24/09 a 30/08)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 76,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "40", children: "40 - (01/10 a 07/10)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 77,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "41", children: "41 - (08/10 a 13/10)" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 78,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/bancotreino/$grupo.tsx",
          lineNumber: 32,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
        "select",
        {
          onChange: (event) => setGrupo(event.target.value),
          id: "grupo",
          name: "grupo",
          className: `rounded-md border-2 form-control block
                          w-full col-span-2 bg-transparent  `,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "", children: "Selecione o grupo" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 86,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "PEITORAL", children: "PEITORAL" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 87,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "OMBROS", children: "OMBROS" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 88,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "MEMBROS SUPERIORES 1", children: "MEMBROS SUPERIORES 1" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 89,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "COSTAS", children: "COSTAS" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 90,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "MEMBROS SUPERIORES 2", children: "MEMBROS SUPERIORES 2" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 91,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "BICEPS", children: "BICEPS" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 92,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "TRICEPS", children: "TRICEPS" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 93,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "QUADS", children: "QUADS" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 94,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "POSTERIORES DE COXAS", children: "POSTERIORES DE COXAS" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 95,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "GLUTEOS", children: "GLUTEOS" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 96,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "PANTURRILHA", children: "PANTURRILHA" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 97,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "ABDOME", children: "ABDOME" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 98,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "MEMBROS INFERIORES GERAL", children: "MEMBROS INFERIORES GERAL" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 99,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "MEMBROS SUPERIORES GERAL", children: "MEMBROS SUPERIORES GERAL" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 102,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "2X SEMANA - TREINO A", children: "2X SEMANA - TREINO A" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 105,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "2X SEMANA - TREINO B", children: "2X SEMANA - TREINO B" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 106,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "3X SEMANA - TREINO A", children: "3X SEMANA - TREINO A" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 107,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "3X SEMANA - TREINO B", children: "3X SEMANA - TREINO B" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 108,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("option", { value: "3X SEMANA - TREINO C", children: "3X SEMANA - TREINO C" }, void 0, !1, {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 109,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/bancotreino/$grupo.tsx",
          lineNumber: 80,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/bancotreino/$grupo.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "grid grid-cols-12 py-2 gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "col-span-3 font-light text-sm text-sky-500", children: "N\xFAmero" }, void 0, !1, {
          fileName: "app/routes/bancotreino/$grupo.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "col-span-8 font-light text-sm text-sky-500", children: "Nome" }, void 0, !1, {
          fileName: "app/routes/bancotreino/$grupo.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/bancotreino/$grupo.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      exercicios.map((exec, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("li", { className: "py-1  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_react36.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
          "input",
          {
            type: "text",
            defaultValue: semana,
            hidden: !0,
            name: "semana",
            id: "semana"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/bancotreino/$grupo.tsx",
            lineNumber: 122,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
          "input",
          {
            type: "text",
            defaultValue: grupo,
            hidden: !0,
            name: "grupo",
            id: "grupo"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/bancotreino/$grupo.tsx",
            lineNumber: 129,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "grid grid-cols-12  gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
            "input",
            {
              className: "col-span-2 bg-transparent",
              type: "text",
              id: "index",
              readOnly: !0,
              disabled: !0,
              defaultValue: index + 1
            },
            void 0,
            !1,
            {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 137,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
            "input",
            {
              hidden: !0,
              type: "text",
              id: "execid",
              name: "execid",
              defaultValue: exec.execid
            },
            void 0,
            !1,
            {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 145,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
            "input",
            {
              type: "text",
              id: "nome",
              name: "nome",
              readOnly: !0,
              defaultValue: exec.nome,
              className: "col-span-5 bg-transparent  "
            },
            void 0,
            !1,
            {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 153,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
            "input",
            {
              type: "text",
              id: "carga",
              name: "carga",
              hidden: !0,
              defaultValue: exec.carga,
              className: "col-span-2 bg-stone-50 border-b-2 "
            },
            void 0,
            !1,
            {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 162,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
            "input",
            {
              type: "text",
              id: "repeticoes",
              name: "repeticoes",
              hidden: !0,
              defaultValue: exec.Repeticoes,
              className: "col-span-2 bg-stone-50 border-b-2"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 171,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
            "input",
            {
              type: "text",
              id: "obs",
              name: "obs",
              hidden: !0,
              defaultValue: exec.obs,
              className: "col-span-3 text-sm bg-stone-50 border-b-2"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 180,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
            "input",
            {
              type: "text",
              id: "video",
              name: "video",
              hidden: !0,
              defaultValue: exec.video,
              className: "col-span-3 text-sm bg-stone-50 border-b-2"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 188,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "grid justify-items-center grid-cols-1 gap2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
            "button",
            {
              className: "flex content-center text-green-500 bg-stone-100 ",
              type: "submit",
              name: "_action",
              value: "save",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_fa13.FaSave, {}, void 0, !1, {
                fileName: "app/routes/bancotreino/$grupo.tsx",
                lineNumber: 203,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/bancotreino/$grupo.tsx",
              lineNumber: 198,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/bancotreino/$grupo.tsx",
            lineNumber: 197,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/bancotreino/$grupo.tsx",
          lineNumber: 136,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/bancotreino/$grupo.tsx",
        lineNumber: 121,
        columnNumber: 13
      }, this) }, exec.execid, !1, {
        fileName: "app/routes/bancotreino/$grupo.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/bancotreino/$grupo.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "text-center  font-semibold text-red-600 mt-6", children: [
      grupo + "  ",
      " ",
      semana
    ] }, void 0, !0, {
      fileName: "app/routes/bancotreino/$grupo.tsx",
      lineNumber: 212,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_react36.Outlet, {}, void 0, !1, {
      fileName: "app/routes/bancotreino/$grupo.tsx",
      lineNumber: 215,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/bancotreino/$grupo.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/bancotreino/$grupo/$id.tsx
var id_exports3 = {};
__export(id_exports3, {
  default: () => Exercicio,
  loader: () => loader20
});
var import_react38 = require("@remix-run/react");
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime"), loader20 = async ({ request, params }) => await getExercicios(params.id);
function Exercicio() {
  let { exercicios } = (0, import_react38.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_jsx_dev_runtime41.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "text-xl mt-4 text-center", children: "Exerc\xEDcio Cadastrado" }, void 0, !1, {
      fileName: "app/routes/bancotreino/$grupo/$id.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("table", { className: "min-w-full shadow-lg bg-white text-left text-sm font-light", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("thead", { className: "border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("th", { scope: "col", className: "px-6 py-4", children: "N\xFAmero" }, void 0, !1, {
          fileName: "app/routes/bancotreino/$grupo/$id.tsx",
          lineNumber: 21,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("th", { scope: "col", className: "px-6 py-4", children: "Nome" }, void 0, !1, {
          fileName: "app/routes/bancotreino/$grupo/$id.tsx",
          lineNumber: 24,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/bancotreino/$grupo/$id.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/bancotreino/$grupo/$id.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("tbody", { children: exercicios.map((exe, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("td", { children: index + 1 }, void 0, !1, {
          fileName: "app/routes/bancotreino/$grupo/$id.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("td", { children: exe.nome }, void 0, !1, {
          fileName: "app/routes/bancotreino/$grupo/$id.tsx",
          lineNumber: 33,
          columnNumber: 17
        }, this)
      ] }, index, !0, {
        fileName: "app/routes/bancotreino/$grupo/$id.tsx",
        lineNumber: 31,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/bancotreino/$grupo/$id.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/bancotreino/$grupo/$id.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/bancotreino/$grupo/$id.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/bancotreino/$grupo/$id.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/cadastro 2.tsx
var cadastro_2_exports = {};
__export(cadastro_2_exports, {
  action: () => action18,
  default: () => Cadastro
});
var import_zod = require("zod"), import_domain_functions = require("domain-functions"), import_remix_forms = require("remix-forms"), import_node31 = require("@remix-run/node");
var import_react39 = require("@remix-run/react"), import_react40 = require("react"), import_jsx_dev_runtime42 = require("react/jsx-dev-runtime"), schema = import_zod.z.object({
  grupo: import_zod.z.string().min(4, { message: "Descri\xE7\xE3o do grupo com no m\xEDnimo 4 caracteres" }),
  semana: import_zod.z.number().min(1, { message: "Informe o n\xFAmero da Semana" }),
  nome: import_zod.z.string().min(1, { message: "Informe o nome do exerc\xEDcio" }),
  repeticoes: import_zod.z.string().min(1, { message: "Repeti\xE7\xF5es do exerc\xEDcio" }),
  carga: import_zod.z.string().min(1, { message: "Informe as cargas do exerc\xEDcio " }),
  obs: import_zod.z.string(),
  video: import_zod.z.string()
}), mutation = (0, import_domain_functions.makeDomainFunction)(schema)(async (values) => await updateTreino(values)), action18 = async ({ request }) => {
  let result = await (0, import_remix_forms.performMutation)({ request, schema, mutation });
  return result.success ? (0, import_node31.redirect)(`/cadastro/${result.data.id}`) : (0, import_node31.json)(result, 400);
};
function Cadastro() {
  let transition = (0, import_react39.useTransition)(), adicionando = transition.state === "submitting";
  return (0, import_react40.useEffect)(() => {
    adicionando || console.log("limpando");
  }, [adicionando]), /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "w-full bg-stone-100 font-Roboto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Navbar2, {}, void 0, !1, {
      fileName: "app/routes/cadastro 2.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "h-full mt-6 items-center flex flex-col gap-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("h2", { className: "text-2xl font-extrabold text-slate-700", children: "Cadastro de Exerc\xEDcio" }, void 0, !1, {
        fileName: "app/routes/cadastro 2.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "block p-6 rounded-lg shadow-lg bg-white w-3/4 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_remix_forms.Form, { schema, children: ({ Field, Errors, Button: Button2, register }) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Field, { name: "grupo", label: "Grupo", children: ({ Label: Label3, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_jsx_dev_runtime42.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "form-group ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
            Label3,
            {
              htmlFor: "grupo",
              className: "form-label font-light inline-block  text-gray-400",
              children: "Grupo"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cadastro 2.tsx",
              lineNumber: 69,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
            "select",
            {
              ...register("grupo"),
              className: `rounded-md border-2 form-control block
                          w-full `,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "PEITORAL", children: "PEITORAL" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 82,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "OMBROS", children: "OMBROS" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 83,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "MEMBROS SUPERIORES 1", children: "MEMBROS SUPERIORES 1" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 84,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "COSTAS", children: "COSTAS" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 87,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "MEMBROS SUPERIORES 2", children: "MEMBROS SUPERIORES 2" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 88,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "BICEPS", children: "BICEPS" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 91,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "TRICEPS", children: "TRICEPS" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 92,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "QUADS", children: "QUADS" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 93,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "POSTERIORES DE COXAS", children: "POSTERIORES DE COXAS" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 94,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "GLUTEOS", children: "GLUTEOS" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 97,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "PANTURRILHA", children: "PANTURRILHA" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 98,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "ABDOME", children: "ABDOME" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 99,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "MEMBROS INFERIORES GERAL", children: "MEMBROS INFERIORES GERAL" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 100,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "MEMBROS SUPERIORES GERAL", children: "MEMBROS SUPERIORES GERAL" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 103,
                  columnNumber: 27
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/cadastro 2.tsx",
              lineNumber: 76,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro 2.tsx",
            lineNumber: 107,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 68,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 67,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 65,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Field, { name: "semana", label: "Semana", children: ({ Label: Label3, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_jsx_dev_runtime42.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Label3, { className: "form-label font-light inline-block  text-gray-400" }, void 0, !1, {
            fileName: "app/routes/cadastro 2.tsx",
            lineNumber: 116,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
            "select",
            {
              ...register("semana"),
              className: `rounded-md border-2 form-control block
                          w-full `,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "01", children: "01 - (01/01 a 07/01)" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 123,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "02", children: "02 - (08/01 a 14/01)" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 124,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "03", children: "03 - (15/01 a 21/01)" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 125,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "04", children: "04 - (22/01 a 28/01)" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 126,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "05", children: "05 - (29/01 a 04/02)" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 127,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "06", children: "06 - (05/02 a 11/02)" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 128,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "07", children: "07 - (12/02 a 18/02)" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 129,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "08", children: "08 - (19/02 a 25/02)" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 130,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "09", children: "09 - (26/02 a 04/03)" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 131,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "10", children: "10 - (05/02 a 10/03)" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 132,
                  columnNumber: 27
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/cadastro 2.tsx",
              lineNumber: 117,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro 2.tsx",
            lineNumber: 134,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 115,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 114,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 112,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Field, { name: "nome", label: "Exercicio", children: ({ Label: Label3, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_jsx_dev_runtime42.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Label3, { className: "form-label font-light inline-block  text-gray-400" }, void 0, !1, {
            fileName: "app/routes/cadastro 2.tsx",
            lineNumber: 143,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
            "input",
            {
              type: "text",
              ...register("nome"),
              className: `rounded-md border-2 form-control block
                          w-full `
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cadastro 2.tsx",
              lineNumber: 144,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro 2.tsx",
            lineNumber: 150,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 142,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 141,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 139,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Field, { name: "repeticoes", label: "Repeti\xE7\xF5es", children: ({ Label: Label3, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_jsx_dev_runtime42.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "form-group ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Label3, { className: "form-label font-light inline-block  text-gray-400" }, void 0, !1, {
            fileName: "app/routes/cadastro 2.tsx",
            lineNumber: 159,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
            "input",
            {
              type: "text",
              ...register("repeticoes"),
              className: `rounded-md border-2 form-control block
                          w-full `
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cadastro 2.tsx",
              lineNumber: 160,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro 2.tsx",
            lineNumber: 166,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 158,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 157,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 155,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Field, { name: "carga", label: "Carga", children: ({ Label: Label3, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_jsx_dev_runtime42.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "form-group ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Label3, { className: "form-label font-light inline-block  text-gray-400" }, void 0, !1, {
            fileName: "app/routes/cadastro 2.tsx",
            lineNumber: 175,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
            "input",
            {
              type: "text",
              ...register("carga"),
              className: `rounded-md border-2 form-control block
                          w-full `
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cadastro 2.tsx",
              lineNumber: 176,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro 2.tsx",
            lineNumber: 182,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 174,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 173,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 171,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Field, { name: "obs", label: "Observa\xE7\xE3o", children: ({ Label: Label3, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_jsx_dev_runtime42.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "form-group ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Label3, { className: "form-label font-light inline-block  text-gray-400" }, void 0, !1, {
            fileName: "app/routes/cadastro 2.tsx",
            lineNumber: 191,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
            "input",
            {
              type: "text",
              ...register("obs"),
              className: `rounded-md border-2 form-control block
                          w-full `
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cadastro 2.tsx",
              lineNumber: 192,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro 2.tsx",
            lineNumber: 198,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 190,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 189,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 187,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Field, { name: "video", label: "Video", children: ({ Label: Label3, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_jsx_dev_runtime42.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Label3, { className: "form-label font-light inline-block  text-gray-400" }, void 0, !1, {
            fileName: "app/routes/cadastro 2.tsx",
            lineNumber: 207,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
            "select",
            {
              ...register("video"),
              className: `rounded-md border-2 form-control block
                          w-full `,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "", children: "Selecione a m\xE1quina" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 214,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "abd_declinado.gif", children: "Abdominal Declinado" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 215,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "abd_maquina.gif", children: "Abdominal M\xE1quina" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 218,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "agachamento.gif", children: "Agachamento" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 221,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "apoio.gif", children: "Apoio" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 222,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "apoio_pe_banco.gif", children: "Apoio P\xE9 no banco" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 223,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "barra_graviton.gif", children: "Barra no Graviton" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 226,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "cadeira_extensora.gif", children: "Cadeira Extensora" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 229,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "crucifixo_reto_alteres.gif", children: "Crucifixo reto com halteres" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 232,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "desenvolvimento_militar_sentado.gif", children: "Crucifixo Cross Over" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 235,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "crucifixo_halteres.gif", children: "Crucifixo com Halteres" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 238,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "crucifixo_invertido_maquina.gif", children: "Crucifixo Invertido M\xE1quina" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 241,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "crucifixo_cross_over.gif", children: "Desenvolvimento Militar Sentado" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 244,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "desenvolvimento_halteres.gif", children: "Desenvolvimento com Halteres" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 247,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "desenvolvimento_maquina.gif", children: "Desenvolvimento M\xE1quina" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 250,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "elevacao_lateral_curvado.gif", children: "Eleva\xE7\xE3o Lateral Curvado" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 253,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "elevacao_frontal_alternado_sentado.gif", children: "Eleva\xE7\xE3o Frontal Alternado Sentado" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 256,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "elevacao_lateral.gif", children: "Eleva\xE7\xE3o Lateral" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 259,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "flying_reto_alternado.gif", children: "Flying Reto Alternado" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 262,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "levantamento_terra.gif", children: "Levantamento Terra" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 265,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "leg_45.gif", children: "Leg 45\xBA" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 268,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "leg_horizontal.gif", children: "Leg Horizontal" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 269,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "martelo_alternado.gif", children: "Martelo Alternado" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 272,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "paralela_maquina.gif", children: "Paralela M\xE1quina" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 275,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "pulldown_articulado.gif", children: "Pull Down Articulado" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 278,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "pulldown_barra.gif", children: "Pull Down com Barra" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 281,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "puxador_frente.gif", children: "Puxador Frente" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 284,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "remada_alta_barra.gif", children: [
                  "Remada Alta com Barra",
                  " "
                ] }, void 0, !0, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 287,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "remada_sentada_triangulo.gif", children: "Remada Sentada com Triangulo" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 290,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "rosca_direta_w.gif", children: "Rosca Direta Barra 'W'" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 293,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "rosca_testa_halteres.gif", children: "Rosca Testa Halteres" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 296,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "rosca_francesa_halteres.gif", children: "Rosca Francesa Halteres" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 300,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "rosca_testa_barra.gif", children: "Rosca Testa com Barra" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 303,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "supino_maquina.gif", children: "Supino M\xE1quina" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 307,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "supino_inclinado.gif", children: "Supino Inclinado" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 310,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "supino_reto.gif", children: "Supino Reto" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 313,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "triceps_pulley_barra.gif", children: "Triceps Pulley com Barra" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 314,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "triceps_pulley_corda.gif", children: "Triceps Pulley com Corda" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 317,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "triceps_pulley_unilateral.gif", children: "Triceps Pulley Unilateral" }, void 0, !1, {
                  fileName: "app/routes/cadastro 2.tsx",
                  lineNumber: 320,
                  columnNumber: 27
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/cadastro 2.tsx",
              lineNumber: 208,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro 2.tsx",
            lineNumber: 324,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 206,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 205,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 203,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Errors, {}, void 0, !1, {
          fileName: "app/routes/cadastro 2.tsx",
          lineNumber: 329,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
          Button2,
          {
            type: "submit",
            className: "rounded-xl w-32 bg-green-600 px-3 py-2 text-white font-semibold hover:bg-green-800",
            children: transition.state === "submitting" ? "Cadastrando..." : "Cadastrar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadastro 2.tsx",
            lineNumber: 331,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/cadastro 2.tsx",
        lineNumber: 64,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/cadastro 2.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/cadastro 2.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cadastro 2.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react39.Outlet, {}, void 0, !1, {
      fileName: "app/routes/cadastro 2.tsx",
      lineNumber: 350,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cadastro 2.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

// app/routes/index_foto.tsx
var index_foto_exports = {};
__export(index_foto_exports, {
  default: () => Index5,
  loader: () => loader21
});
var import_fa15 = require("react-icons/fa");

// app/components/Aulas.tsx
var import_fa14 = require("react-icons/fa"), import_react41 = require("react"), import_jsx_dev_runtime43 = require("react/jsx-dev-runtime");
function Aulas(props) {
  let { aulas } = props, now = new Date();
  var horaCerta = "";
  now.getHours() < 10 && (horaCerta = "0" + now.getHours()), now.getHours() >= 10 && (horaCerta = now.getHours());
  let hourFilter = aulas.filter(
    (classes) => classes.start >= horaCerta.toString() && classes.days.includes(now.getDay())
  ), [procuraAula, setProcuraAula] = (0, import_react41.useState)(""), filtrada = aulas.filter(
    (aulas2) => aulas2.turma.toLowerCase().includes(procuraAula.toLowerCase())
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_jsx_dev_runtime43.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex justify-center flex-wrap mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: " w-full   ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "font-bold  text-blue-500 text-center", children: "PR\xD3XIMAS AULAS" }, void 0, !1, {
      fileName: "app/components/Aulas.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "overflow-x-auto relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "p-2 w-full ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "mt-2 mb-2  text-blue-500 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "relative  ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_fa14.FaSearch, {}, void 0, !1, {
            fileName: "app/components/Aulas.tsx",
            lineNumber: 43,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/Aulas.tsx",
            lineNumber: 42,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
            "input",
            {
              type: "search",
              id: "search",
              value: procuraAula,
              onChange: (e) => setProcuraAula(e.target.value),
              placeholder: "Procurar Aulas",
              className: "block p-1  pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  "
            },
            void 0,
            !1,
            {
              fileName: "app/components/Aulas.tsx",
              lineNumber: 46,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Aulas.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Aulas.tsx",
          lineNumber: 40,
          columnNumber: 15
        }, this),
        procuraAula.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("table", { className: "w-full  text-sm text-left text-gray-500 dark:text-gray-400", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("thead", { className: "text-xs  text-gray-700 uppercase bg-slate-300/50 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("tr", { className: "rounded-lg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("th", { scope: "col", className: " px-6 py-2 ", children: "Aulas" }, void 0, !1, {
              fileName: "app/components/Aulas.tsx",
              lineNumber: 62,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("th", { scope: "col", className: "  px-6 py-2", children: "Hor\xE1rio" }, void 0, !1, {
              fileName: "app/components/Aulas.tsx",
              lineNumber: 65,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("th", { scope: "col", className: " ", children: "Dias" }, void 0, !1, {
              fileName: "app/components/Aulas.tsx",
              lineNumber: 68,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Aulas.tsx",
            lineNumber: 61,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/components/Aulas.tsx",
            lineNumber: 60,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("tbody", { children: filtrada.map((aula2) => /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("tr", { className: " dark:bg-gray-800", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
              "th",
              {
                scope: "row",
                className: "py-2 px-2 flex gap-x-2 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                    "img",
                    {
                      className: "avatar h-6 w-6 rounded-full ",
                      src: aula2.icon,
                      alt: aula2.turma
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Aulas.tsx",
                      lineNumber: 79,
                      columnNumber: 29
                    },
                    this
                  ),
                  aula2.turma
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/Aulas.tsx",
                lineNumber: 76,
                columnNumber: 27
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("td", { className: "py-2 px-6", children: aula2.start }, void 0, !1, {
              fileName: "app/components/Aulas.tsx",
              lineNumber: 86,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("td", { className: "py-2 font-mono text-stone-400 ", children: aula2.days.map((m) => m == 1 ? "SEG " : m == 2 ? "TER " : m == 3 ? "QUA  " : m == 4 ? "QUI " : m == 5 ? "SEX " : m == 6 ? "SAB " : "DOM") }, void 0, !1, {
              fileName: "app/components/Aulas.tsx",
              lineNumber: 88,
              columnNumber: 27
            }, this)
          ] }, aula2.id, !0, {
            fileName: "app/components/Aulas.tsx",
            lineNumber: 75,
            columnNumber: 25
          }, this)) }, void 0, !1, {
            fileName: "app/components/Aulas.tsx",
            lineNumber: 73,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Aulas.tsx",
          lineNumber: 59,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/Aulas.tsx",
          lineNumber: 58,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Aulas.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this),
      procuraAula.length == 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("table", { className: "w-full  text-sm text-left text-gray-500 dark:text-gray-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("thead", { className: "text-xs  text-gray-700 uppercase bg-slate-300/50 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("tr", { className: "rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("th", { scope: "col", className: "px-6 py-2 ", children: "Aulas" }, void 0, !1, {
            fileName: "app/components/Aulas.tsx",
            lineNumber: 123,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("th", { scope: "col", className: "py-2", children: "Hor\xE1rio" }, void 0, !1, {
            fileName: "app/components/Aulas.tsx",
            lineNumber: 126,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Aulas.tsx",
          lineNumber: 122,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/Aulas.tsx",
          lineNumber: 121,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("tbody", { children: hourFilter.map((aula2) => /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("tr", { className: " dark:bg-gray-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
            "th",
            {
              scope: "row",
              className: "py-2 px-6 flex gap-x-2 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                  "img",
                  {
                    className: "avatar h-6 w-6  rounded-full ",
                    src: aula2.icon,
                    alt: aula2.turma
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Aulas.tsx",
                    lineNumber: 137,
                    columnNumber: 25
                  },
                  this
                ),
                aula2.turma
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/Aulas.tsx",
              lineNumber: 134,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("td", { className: "py-2 text-xs md:text-base  ", children: [
            aula2.start,
            " - ",
            aula2.finish
          ] }, void 0, !0, {
            fileName: "app/components/Aulas.tsx",
            lineNumber: 144,
            columnNumber: 23
          }, this)
        ] }, aula2.id, !0, {
          fileName: "app/components/Aulas.tsx",
          lineNumber: 133,
          columnNumber: 21
        }, this)) }, void 0, !1, {
          fileName: "app/components/Aulas.tsx",
          lineNumber: 131,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Aulas.tsx",
        lineNumber: 120,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Aulas.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Aulas.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Aulas.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Aulas.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/index_foto.tsx
var import_node32 = require("@remix-run/node");
var import_react42 = require("@remix-run/react");

// app/components/Eventos.tsx
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime");
function Eventos() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("figure", { className: "flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("blockquote", { className: "mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Aul\xE3o de Spinning e Gl\xFAteos" }, void 0, !1, {
          fileName: "app/components/Eventos.tsx",
          lineNumber: 6,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("p", { className: "my-4 text-orange-500 font-medium", children: "Aul\xE3o de Spinning FERIAD\xC3O com o professor PEDR\xC3O" }, void 0, !1, {
          fileName: "app/components/Eventos.tsx",
          lineNumber: 9,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Eventos.tsx",
        lineNumber: 5,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("figcaption", { className: "flex justify-center items-center space-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("img", { className: "w-full", src: "aulao2.jpg", alt: "spinning " }, void 0, !1, {
        fileName: "app/components/Eventos.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Eventos.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Eventos.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("figure", { className: "flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("blockquote", { className: "mx-auto mb-2 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Espet\xE1culo de Ballet Cl\xE1ssico" }, void 0, !1, {
          fileName: "app/components/Eventos.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("p", { className: "my-2 text-rose-300 text-lg font-medium", children: "A Bela Adormecida" }, void 0, !1, {
          fileName: "app/components/Eventos.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Eventos.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("figcaption", { className: "flex justify-center items-center space-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("img", { className: "w-full ", src: "ballet.jpg", alt: "Ballet" }, void 0, !1, {
        fileName: "app/components/Eventos.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Eventos.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Eventos.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Eventos.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/index_foto.tsx
var import_jsx_dev_runtime45 = require("react/jsx-dev-runtime"), loader21 = async ({ request }) => {
  let TodasAulas = await getAulas();
  return (0, import_node32.json)({ TodasAulas });
};
function Index5() {
  let { TodasAulas } = (0, import_react42.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "text-gray-600 body-font", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(Navbar2, {}, void 0, !1, {
      fileName: "app/routes/index_foto.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "h-80 xl:h-5/6 w-full bg-gradient-to-tl from-black to-orange-500 relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
        "img",
        {
          alt: "content",
          className: "w-full h-full object-cover absolute mix-blend-overlay ",
          src: "/fundo_novo.jpg"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index_foto.tsx",
          lineNumber: 22,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "pt-10 xl:pt-20 xl:pl-10 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("h2", { className: "text-4xl xl:text-6xl font-extrabold shadow-xl text-white md:text-3xl", children: "Quattor Academia" }, void 0, !1, {
          fileName: "app/routes/index_foto.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "text-md xl:text-2xl font-bold text-white ", children: "Jornada de Resultados Reais" }, void 0, !1, {
          fileName: "app/routes/index_foto.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index_foto.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: " pl-32 pt-8 flex justify-end items-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
        "img",
        {
          alt: "logo",
          src: "/15anos.svg",
          className: "mt-10 w-60 xl:w-96 xl:mt-0  "
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index_foto.tsx",
          lineNumber: 37,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/index_foto.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index_foto.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "flex mt-1 flex-wrap -m-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "p-2 w-full md:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "flex rounded-lg h-full bg-stone-100 shadow-lg  p-8 flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "flex items-center mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_fa15.FaMapMarkedAlt, {}, void 0, !1, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 50,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 49,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("h2", { className: "text-gray-900 text-lg title-font font-medium", children: "Onde Estamos" }, void 0, !1, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index_foto.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "flex-grow text-center ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("p", { className: "leading-relaxed font-bold", children: "Rua 5 Sul - Arauc\xE1rias - \xC1guas Claras - DF" }, void 0, !1, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 57,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: " ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
              "a",
              {
                href: "https://wa.me/5561993190568",
                className: "mt-2  font-semibold inline-flex items-center ",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_fa15.FaWhatsapp, { className: "text-green-600 text-2xl mr-2 " }, void 0, !1, {
                    fileName: "app/routes/index_foto.tsx",
                    lineNumber: 64,
                    columnNumber: 19
                  }, this),
                  "(61) 99319-0568"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/index_foto.tsx",
                lineNumber: 61,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("a", { href: "https://wa.me/5561993190568", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("button", { className: "bg-green-600 tracking-tighter ml-5 px-2 py-1  text-white inline-flex items-center space-x-2 rounded", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_fa15.FaWhatsapp, {}, void 0, !1, {
                fileName: "app/routes/index_foto.tsx",
                lineNumber: 69,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("span", { children: "Aula experimental" }, void 0, !1, {
                fileName: "app/routes/index_foto.tsx",
                lineNumber: 70,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/index_foto.tsx",
              lineNumber: 68,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/index_foto.tsx",
              lineNumber: 67,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 60,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index_foto.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index_foto.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index_foto.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "p-2 w-full md:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "flex rounded-lg h-full bg-stone-100 shadow-lg p-8 flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "flex items-center mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_fa15.FaClock, {}, void 0, !1, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 80,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("h2", { className: "text-gray-900 text-lg title-font font-medium", children: "Hor\xE1rio de Funcionamento" }, void 0, !1, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index_foto.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "flex-grow text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("p", { className: "leading-relaxed  text-red-500 font-bold", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("span", { className: "font-semibold text-gray-900 ", children: "Segunda a Sexta:" }, void 0, !1, {
              fileName: "app/routes/index_foto.tsx",
              lineNumber: 89,
              columnNumber: 17
            }, this),
            " ",
            "6:00h \xE0s 23:00h"
          ] }, void 0, !0, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("p", { className: "leading-relaxed text-red-500 font-bold", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("span", { className: "font-semibold text-gray-900 ", children: "S\xE1bados e Feriados:" }, void 0, !1, {
              fileName: "app/routes/index_foto.tsx",
              lineNumber: 95,
              columnNumber: 17
            }, this),
            " ",
            "8:00h \xE0s 12:00h"
          ] }, void 0, !0, {
            fileName: "app/routes/index_foto.tsx",
            lineNumber: 94,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index_foto.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index_foto.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index_foto.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index_foto.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(Aulas, { aulas: TodasAulas }, void 0, !1, {
      fileName: "app/routes/index_foto.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(Eventos, {}, void 0, !1, {
      fileName: "app/routes/index_foto.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index_foto.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/print/$exe.tsx
var exe_exports = {};
__export(exe_exports, {
  default: () => Treino4,
  loader: () => loader22
});
var import_react43 = require("@remix-run/react");
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime"), loader22 = async ({ request, params }) => await getExercicios(params.exe);
function Treino4() {
  let { exercicios } = (0, import_react43.useLoaderData)(), grupo = (0, import_react43.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_jsx_dev_runtime46.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "w-full container text-center mx-auto bg-white  rounded-sm border border-gray-500", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("header", { className: "px-5 py-4 border-b border-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: " flex place-content-between items-center font-extrabold text-3xl print:text-xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("img", { src: "/logo_alto.svg", className: " w-32", alt: "logo" }, void 0, !1, {
          fileName: "app/routes/print/$exe.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        grupo.grupo,
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("img", { className: " w-20 ", alt: "qr", src: "/qr1.svg" }, void 0, !1, {
          fileName: "app/routes/print/$exe.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/print/$exe.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/print/$exe.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("table", { className: "table-auto w-full text-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("tbody", { className: "text-sm divide-y divide-gray-500", children: exercicios.map((exec, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("tr", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("td", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: " font-extrabold text-3xl", children: [
          index + 1,
          " - ",
          exec.nome
        ] }, void 0, !0, {
          fileName: "app/routes/print/$exe.tsx",
          lineNumber: 29,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "pl-8 space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "items-center flex font-semibold text-lg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
              "img",
              {
                src: "/ponto_verde.svg",
                alt: "bolas",
                className: "w-3  mr-3  text-red-600"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/print/$exe.tsx",
                lineNumber: 38,
                columnNumber: 23
              },
              this
            ),
            exec.carga
          ] }, void 0, !0, {
            fileName: "app/routes/print/$exe.tsx",
            lineNumber: 37,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "items-center flex font-semibold text-lg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
              "img",
              {
                src: "/ponto_vermelho.svg",
                alt: "bolas",
                className: "w-3 mr-3 "
              },
              void 0,
              !1,
              {
                fileName: "app/routes/print/$exe.tsx",
                lineNumber: 47,
                columnNumber: 23
              },
              this
            ),
            exec.Repeticoes
          ] }, void 0, !0, {
            fileName: "app/routes/print/$exe.tsx",
            lineNumber: 45,
            columnNumber: 21
          }, this),
          exec.obs && /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "items-center flex font-semibold text-lg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
              "img",
              {
                src: "/ponto_laranja.svg",
                alt: "bolas",
                className: "w-3 mr-3 "
              },
              void 0,
              !1,
              {
                fileName: "app/routes/print/$exe.tsx",
                lineNumber: 58,
                columnNumber: 25
              },
              this
            ),
            exec.obs
          ] }, void 0, !0, {
            fileName: "app/routes/print/$exe.tsx",
            lineNumber: 55,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/print/$exe.tsx",
          lineNumber: 32,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/print/$exe.tsx",
        lineNumber: 28,
        columnNumber: 17
      }, this) }, exec.execid, !1, {
        fileName: "app/routes/print/$exe.tsx",
        lineNumber: 27,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/print/$exe.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/print/$exe.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/print/$exe.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("footer", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
      "img",
      {
        className: " h-[100px] pt-1 mx-auto items-center",
        alt: "footer",
        src: "/semana.svg"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/print/$exe.tsx",
        lineNumber: 74,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/print/$exe.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/print/$exe.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/cadastro.tsx
var cadastro_exports = {};
__export(cadastro_exports, {
  action: () => action19,
  default: () => Cadastro2
});
var import_zod2 = require("zod"), import_domain_functions2 = require("domain-functions"), import_remix_forms2 = require("remix-forms"), import_node33 = require("@remix-run/node");
var import_react44 = require("@remix-run/react"), import_jsx_dev_runtime47 = require("react/jsx-dev-runtime"), schema2 = import_zod2.z.object({
  grupo: import_zod2.z.string().min(4, { message: "Descri\xE7\xE3o do grupo com no m\xEDnimo 4 caracteres" }),
  semana: import_zod2.z.number().min(1, { message: "Informe o n\xFAmero da Semana" }),
  nome: import_zod2.z.string().min(1, { message: "Informe o nome do exerc\xEDcio" }),
  repeticoes: import_zod2.z.string().min(1, { message: "Repeti\xE7\xF5es do exerc\xEDcio" }),
  carga: import_zod2.z.string().min(1, { message: "Informe as cargas do exerc\xEDcio " }),
  obs: import_zod2.z.string(),
  video: import_zod2.z.string()
}), mutation2 = (0, import_domain_functions2.makeDomainFunction)(schema2)(async (values) => await updateTreino(values)), action19 = async ({ request }) => {
  let result = await (0, import_remix_forms2.performMutation)({ request, schema: schema2, mutation: mutation2 });
  return result.success ? (0, import_node33.redirect)(`/cadastro/${result.data.id}`) : (0, import_node33.json)(result, 400);
};
function Cadastro2() {
  let transition = (0, import_react44.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "w-full bg-stone-100 font-Roboto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "h-full mt-6 items-center flex flex-col gap-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("h2", { className: "text-2xl font-extrabold text-slate-700", children: "Cadastro de Exerc\xEDcio" }, void 0, !1, {
        fileName: "app/routes/cadastro.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "block p-6 rounded-lg shadow-lg bg-white w-3/4 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_remix_forms2.Form, { schema: schema2, children: ({ Field, Errors, Button: Button2, register }) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Field, { name: "grupo", label: "Grupo", children: ({ Label: Label3, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_jsx_dev_runtime47.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "form-group ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
            Label3,
            {
              htmlFor: "grupo",
              className: "form-label font-light inline-block  text-gray-400",
              children: "Grupo"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cadastro.tsx",
              lineNumber: 58,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
            "select",
            {
              ...register("grupo"),
              className: `rounded-md border-2 form-control block
                          w-full `,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "PEITORAL", children: "PEITORAL" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 69,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "OMBROS", children: "OMBROS" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 70,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "MEMBROS SUPERIORES 1", children: "MEMBROS SUPERIORES 1" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 71,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "COSTAS", children: "COSTAS" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 74,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "MEMBROS SUPERIORES 2", children: "MEMBROS SUPERIORES 2" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 75,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "BICEPS", children: "BICEPS" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 78,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "TRICEPS", children: "TRICEPS" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 79,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "QUADS", children: "QUADS" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 80,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "POSTERIORES DE COXAS", children: "POSTERIORES DE COXAS" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 81,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "GLUTEOS", children: "GLUTEOS" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 84,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "PANTURRILHA", children: "PANTURRILHA" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 85,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "ABDOME", children: "ABDOME" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 86,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "MEMBROS INFERIORES GERAL", children: "MEMBROS INFERIORES GERAL" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 87,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "MEMBROS SUPERIORES GERAL", children: "MEMBROS SUPERIORES GERAL" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 90,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "2X SEMANA - TREINO A", children: "2X SEMANA - TREINO A" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 93,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "2X SEMANA - TREINO B", children: "2X SEMANA - TREINO B" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 96,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "3X SEMANA - TREINO A", children: "3X SEMANA - TREINO A" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 99,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "3X SEMANA - TREINO B", children: "3X SEMANA - TREINO B" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 102,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "3X SEMANA - TREINO C", children: "3X SEMANA - TREINO C" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 105,
                  columnNumber: 27
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/cadastro.tsx",
              lineNumber: 64,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 109,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 57,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 56,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 54,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Field, { name: "semana", label: "Semana", children: ({ Label: Label3, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_jsx_dev_runtime47.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Label3, { className: "form-label font-light inline-block  text-gray-400" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 118,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
            "select",
            {
              ...register("semana"),
              className: `rounded-md border-2 form-control block
                          w-full `,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "101", children: "treino 1 " }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 124,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "102", children: "treino 2" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 125,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "103", children: "treino 3" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 126,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "104", children: "treino 4" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 127,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "105", children: "treino 5" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 128,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "106", children: "treino 6" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 129,
                  columnNumber: 27
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/cadastro.tsx",
              lineNumber: 119,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 131,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 117,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 116,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 114,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Field, { name: "nome", label: "Exercicio", children: ({ Label: Label3, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_jsx_dev_runtime47.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Label3, { className: "form-label font-light inline-block  text-gray-400" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 140,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
            "input",
            {
              type: "text",
              ...register("nome"),
              className: `rounded-md border-2 form-control block
                          w-full `
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cadastro.tsx",
              lineNumber: 141,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 147,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 139,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 138,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 136,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Field, { name: "repeticoes", label: "Repeti\xE7\xF5es", children: ({ Label: Label3, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_jsx_dev_runtime47.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "form-group ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Label3, { className: "form-label font-light inline-block  text-gray-400" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 156,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
            "input",
            {
              type: "text",
              ...register("repeticoes"),
              className: `rounded-md border-2 form-control block
                          w-full `
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cadastro.tsx",
              lineNumber: 157,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 163,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 155,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 154,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 152,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Field, { name: "carga", label: "Carga", children: ({ Label: Label3, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_jsx_dev_runtime47.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "form-group ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Label3, { className: "form-label font-light inline-block  text-gray-400" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 172,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
            "input",
            {
              type: "text",
              ...register("carga"),
              className: `rounded-md border-2 form-control block
                          w-full `
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cadastro.tsx",
              lineNumber: 173,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 179,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 171,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 170,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 168,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Field, { name: "obs", label: "Observa\xE7\xE3o", children: ({ Label: Label3, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_jsx_dev_runtime47.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "form-group ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Label3, { className: "form-label font-light inline-block  text-gray-400" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 188,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
            "input",
            {
              type: "text",
              ...register("obs"),
              className: `rounded-md border-2 form-control block
                          w-full `
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cadastro.tsx",
              lineNumber: 189,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 195,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 187,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 186,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 184,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Field, { name: "video", label: "Video", children: ({ Label: Label3, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_jsx_dev_runtime47.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Label3, { className: "form-label font-light inline-block  text-gray-400" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 204,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
            "select",
            {
              ...register("video"),
              className: `rounded-md border-2 form-control block
                          w-full `,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "", children: "Selecione a m\xE1quina" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 210,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "abd_declinado.gif", children: "Abdominal Declinado" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 211,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "abd_maquina.gif", children: "Abdominal M\xE1quina" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 214,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "agachamento.gif", children: "Agachamento" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 217,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "apoio.gif", children: "Apoio" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 218,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "apoio_pe_banco.gif", children: "Apoio P\xE9 no banco" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 219,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "barra_graviton.gif", children: "Barra no Graviton" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 222,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "cadeira_extensora.gif", children: "Cadeira Extensora" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 225,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "crucifixo_reto_alteres.gif", children: "Crucifixo reto com halteres" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 228,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "desenvolvimento_militar_sentado.gif", children: "Crucifixo Cross Over" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 231,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "crucifixo_halteres.gif", children: "Crucifixo com Halteres" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 234,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "crucifixo_invertido_maquina.gif", children: "Crucifixo Invertido M\xE1quina" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 237,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "crucifixo_cross_over.gif", children: "Desenvolvimento Militar Sentado" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 240,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "desenvolvimento_halteres.gif", children: "Desenvolvimento com Halteres" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 243,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "desenvolvimento_maquina.gif", children: "Desenvolvimento M\xE1quina" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 246,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "elevacao_lateral_curvado.gif", children: "Eleva\xE7\xE3o Lateral Curvado" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 249,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "elevacao_frontal_alternado_sentado.gif", children: "Eleva\xE7\xE3o Frontal Alternado Sentado" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 252,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "elevacao_lateral.gif", children: "Eleva\xE7\xE3o Lateral" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 255,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "flying_reto_alternado.gif", children: "Flying Reto Alternado" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 258,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "levantamento_terra.gif", children: "Levantamento Terra" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 261,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "leg_45.gif", children: "Leg 45\xBA" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 264,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "leg_horizontal.gif", children: "Leg Horizontal" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 265,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "martelo_alternado.gif", children: "Martelo Alternado" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 268,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "paralela_maquina.gif", children: "Paralela M\xE1quina" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 271,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "pulldown_articulado.gif", children: "Pull Down Articulado" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 274,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "pulldown_barra.gif", children: "Pull Down com Barra" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 277,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "puxador_frente.gif", children: "Puxador Frente" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 280,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "remada_alta_barra.gif", children: [
                  "Remada Alta com Barra",
                  " "
                ] }, void 0, !0, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 283,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "remada_sentada_triangulo.gif", children: "Remada Sentada com Triangulo" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 286,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "rosca_direta_w.gif", children: "Rosca Direta Barra 'W'" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 289,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "rosca_testa_halteres.gif", children: "Rosca Testa Halteres" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 292,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "rosca_francesa_halteres.gif", children: "Rosca Francesa Halteres" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 296,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "rosca_testa_barra.gif", children: "Rosca Testa com Barra" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 299,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "supino_maquina.gif", children: "Supino M\xE1quina" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 303,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "supino_inclinado.gif", children: "Supino Inclinado" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 306,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "supino_reto.gif", children: "Supino Reto" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 309,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "triceps_pulley_barra.gif", children: "Triceps Pulley com Barra" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 310,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "triceps_pulley_corda.gif", children: "Triceps Pulley com Corda" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 313,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("option", { value: "triceps_pulley_unilateral.gif", children: "Triceps Pulley Unilateral" }, void 0, !1, {
                  fileName: "app/routes/cadastro.tsx",
                  lineNumber: 316,
                  columnNumber: 27
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/cadastro.tsx",
              lineNumber: 205,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Errors2, { className: "text-red-500" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 320,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 203,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 202,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 200,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Errors, {}, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 325,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
          Button2,
          {
            type: "submit",
            className: "rounded-xl w-32 bg-green-600 px-3 py-2 text-white font-semibold hover:bg-green-800",
            children: transition.state === "submitting" ? "Cadastrando..." : "Cadastrar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 327,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/cadastro.tsx",
        lineNumber: 53,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/cadastro.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/cadastro.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cadastro.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_react44.Outlet, {}, void 0, !1, {
      fileName: "app/routes/cadastro.tsx",
      lineNumber: 345,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cadastro.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

// app/routes/cadastro/$exercicios.tsx
var exercicios_exports = {};
__export(exercicios_exports, {
  default: () => Treino5,
  loader: () => loader23
});
var import_react45 = require("@remix-run/react");
var import_jsx_dev_runtime48 = require("react/jsx-dev-runtime"), loader23 = async ({ request, params }) => await getExercicios(params.exercicios);
function Treino5() {
  let { exercicios } = (0, import_react45.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_jsx_dev_runtime48.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "text-center font-semibold mt-2 uppercase text-blue-600", children: "Exerc\xEDcios" }, void 0, !1, {
      fileName: "app/routes/cadastro/$exercicios.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "flex justify-center overflow-y-auto  max-h-[32rem] ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
      "table",
      {
        className: `w-3/4 text-sm text-left mt-4 
        text-gray-500 border-l-2 border-r-2 border-slate-100`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
            "thead",
            {
              className: `text-xs text-gray-700 uppercase
           bg-stone-100 dark:bg-gray-700 dark:text-gray-400`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("th", { scope: "col", className: "px-6 py-1", children: "Nome" }, void 0, !1, {
                  fileName: "app/routes/cadastro/$exercicios.tsx",
                  lineNumber: 28,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("th", { scope: "col", className: "px-6 py-1", children: "Repeticoes" }, void 0, !1, {
                  fileName: "app/routes/cadastro/$exercicios.tsx",
                  lineNumber: 31,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("th", { scope: "col", className: "px-6 py-1 ", children: "Carga" }, void 0, !1, {
                  fileName: "app/routes/cadastro/$exercicios.tsx",
                  lineNumber: 34,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("th", { scope: "col", className: "px-6 py-1 ", children: "Observa\xE7\xF5es" }, void 0, !1, {
                  fileName: "app/routes/cadastro/$exercicios.tsx",
                  lineNumber: 37,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("th", { scope: "col", className: "px-6 py-1 ", children: "Video" }, void 0, !1, {
                  fileName: "app/routes/cadastro/$exercicios.tsx",
                  lineNumber: 40,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/cadastro/$exercicios.tsx",
                lineNumber: 27,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cadastro/$exercicios.tsx",
              lineNumber: 23,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("tbody", { children: exercicios.map((exec, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
            "tr",
            {
              className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
                  "th",
                  {
                    scope: "row",
                    className: "px-6  font-medium text-gray-900 dark:text-white whitespace-nowrap",
                    children: exec.nome
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/cadastro/$exercicios.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("td", { className: "px-6 py-3 ", children: exec.Repeticoes }, void 0, !1, {
                  fileName: "app/routes/cadastro/$exercicios.tsx",
                  lineNumber: 57,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("td", { className: "px-6 py-3 ", children: exec.carga }, void 0, !1, {
                  fileName: "app/routes/cadastro/$exercicios.tsx",
                  lineNumber: 58,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("td", { className: "px-6 py-3 ", children: exec.obs }, void 0, !1, {
                  fileName: "app/routes/cadastro/$exercicios.tsx",
                  lineNumber: 59,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("td", { className: "px-6 py-3 ", children: exec.video }, void 0, !1, {
                  fileName: "app/routes/cadastro/$exercicios.tsx",
                  lineNumber: 60,
                  columnNumber: 17
                }, this)
              ]
            },
            index,
            !0,
            {
              fileName: "app/routes/cadastro/$exercicios.tsx",
              lineNumber: 47,
              columnNumber: 15
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/cadastro/$exercicios.tsx",
            lineNumber: 45,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/cadastro/$exercicios.tsx",
        lineNumber: 19,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/cadastro/$exercicios.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cadastro/$exercicios.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/especial.tsx
var especial_exports = {};
__export(especial_exports, {
  default: () => Especial,
  loader: () => loader24
});
var import_node34 = require("@remix-run/node"), import_react46 = require("@remix-run/react"), import_date_fns4 = require("date-fns"), import_lodash8 = __toESM(require("lodash")), import_react_chartjs_2 = require("react-chartjs-2"), import_auto = require("chart.js/auto");
var import_jsx_dev_runtime49 = require("react/jsx-dev-runtime"), loader24 = async ({ request, params }) => {
  var _a;
  let session = await getSession(request.headers.get("Cookie"));
  if (!((_a = session.get("aluno")) == null ? void 0 : _a.id))
    return session.set("aluno", {
      red: "/aluno"
    }), (0, import_node34.redirect)("/login", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  let grupos = await getGrupos(), historicoTreinos = await getHistoricoSemana();
  return (0, import_node34.json)({ grupos, historicoTreinos });
};
function Especial() {
  let { grupos, historicoTreinos } = (0, import_react46.useLoaderData)();
  function treinosFeitos(aluno) {
    let treinos2 = import_lodash8.default.filter(historicoTreinos, { aluno }), treinosFiltered = import_lodash8.default.flatten(treinos2.map((t) => t.treinos));
    return import_lodash8.default.filter(treinosFiltered, {
      semana: (0, import_date_fns4.getWeek)(new Date())
    }).length;
  }
  let semanas1 = numeroSemanas(
    grupos.map((g) => g.inicio)[0],
    grupos.map((g) => g.fim)[0]
  );
  function treinosFeitosTotal(aluno) {
    let treinos2 = import_lodash8.default.filter(historicoTreinos, { aluno }), treinosFiltered = import_lodash8.default.flatten(treinos2.map((t) => t.treinos));
    return import_lodash8.default.filter(
      treinosFiltered,
      (v) => import_lodash8.default.includes(semanas1, v.semana)
    ).length;
  }
  function treinosFeitosPeriodo(aluno, data2) {
    let treinos2 = import_lodash8.default.filter(historicoTreinos, { aluno }), treinosFiltered = import_lodash8.default.flatten(treinos2.map((t) => t.treinos));
    return import_lodash8.default.filter(treinosFiltered, {
      semana: data2
    }).length;
  }
  function pontosGrupo(nome, data2) {
    let treinos2 = import_lodash8.default.filter(grupos, { nome }).map(
      (a) => a.alunos.map((b) => treinosFeitosPeriodo(b.idMember, data2))
    ), pontuar = import_lodash8.default.flatten(treinos2).length * 3;
    return import_lodash8.default.sum(import_lodash8.default.flatten(treinos2)) - pontuar >= 0 ? 1 : 0;
  }
  function somaTreinosGrupo(nome) {
    let treinos2 = import_lodash8.default.filter(grupos, { nome }).map(
      (a) => a.alunos.map((b) => treinosFeitos(b.idMember))
    );
    return import_lodash8.default.sum(import_lodash8.default.flatten(treinos2));
  }
  function numeroSemanas(inicio, fim) {
    let ini = (0, import_date_fns4.getWeek)(new Date(inicio)), final = (0, import_date_fns4.getWeek)(new Date(fim)), weeks = [];
    for (let i = ini; i <= final; i++)
      weeks.push(i);
    return weeks;
  }
  function totalGrupos(grupo) {
    let tot = numeroSemanas(
      grupos.map((g) => g.inicio)[0],
      grupos.map((g) => g.fim)[0]
    ).map((s) => pontosGrupo(grupo, s));
    return import_lodash8.default.sum(tot);
  }
  function pontosSemana(grupo) {
    let tot = numeroSemanas(
      grupos.map((g) => g.inicio)[0],
      grupos.map((g) => g.fim)[0]
    ).map((s) => pontosGrupo(grupo, s));
    return import_lodash8.default.map(tot, function(value, key) {
      return {
        semana: key + 1,
        pontos: value
      };
    });
  }
  let gruposGraficoSemana = Object.fromEntries(
    grupos.map((g) => [g.nome, pontosSemana(g.nome)])
  ), gruposGrafico = Object.fromEntries(
    grupos.map((g) => [g.nome, totalGrupos(g.nome)])
  );
  var pontosem = import_lodash8.default.map(gruposGraficoSemana, function(value, key) {
    return {
      name: key,
      pontos: value
    };
  });
  let colors = [
    "orange",
    "#0088FE",
    "#FF8042",
    "#FFBB28",
    "#00C49F",
    "pink",
    "blue"
  ];
  var output = import_lodash8.default.map(gruposGrafico, function(value, key) {
    return {
      name: key,
      pontos: value,
      fill: colors[key.slice(-1)]
    };
  });
  import_auto.Chart.register(
    import_auto.CategoryScale,
    import_auto.LinearScale,
    import_auto.PointElement,
    import_auto.BarElement,
    import_auto.LineElement,
    import_auto.Title
  );
  let TotlTreinosAlunos = import_lodash8.default.flatten(
    grupos.map(
      (g) => g.alunos.map((a) => ({
        nome: a.nome,
        treinos: treinosFeitosTotal(a.idMember)
      }))
    )
  ), cores = [];
  for (let i = 0; i < 40; i++) {
    let randomColor = `hsla(${~~(430 * Math.random())}, 70%,  72%, 0.8)`;
    cores.push(randomColor);
  }
  let labelsAlunos = TotlTreinosAlunos.map((o) => o.nome.split(" ")[0]), totalAlunos = TotlTreinosAlunos.map((o) => o.treinos), dataAlunos = {
    labels: labelsAlunos,
    datasets: [
      {
        label: "Total de Pontos",
        data: totalAlunos,
        axis: "y",
        backgroundColor: cores
      }
    ]
  }, dataLine = {
    labels: ["Total"],
    datasets: output.map((o) => ({
      label: o.name,
      data: [o.pontos]
    }))
  }, data = {
    labels: semanas1,
    datasets: pontosem.map((p) => ({
      label: p.name,
      data: p.pontos.map((v) => v.pontos)
    }))
  }, optionsBar = {
    plugins: {
      title: {
        display: !0,
        text: "Pontos por semana"
      }
    },
    scales: {
      x: {
        min: 0,
        max: 4
      }
    },
    ticks: {
      stepSize: 1
    },
    responsive: !0
  }, optionsBarTotal = {
    plugins: {
      title: {
        display: !0,
        text: "Pontos Totais"
      }
    },
    scales: {
      x: {
        min: 0,
        max: 4
      }
    },
    ticks: {
      stepSize: 1
    },
    responsive: !0
  }, optionsBarAlunos = {
    indexAxis: "y",
    plugins: {
      title: {
        display: !0,
        text: "Pontos por Aluno"
      }
    },
    scales: {
      y: {
        ticks: {
          display: !0
        }
      }
    },
    ticks: {
      stepSize: 1
    },
    responsive: !0
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_jsx_dev_runtime49.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: " mt-4 p-2 md:container grid gap-3 grid-cols-1 md:grid-cols-3", children: [
    grupos.map((g, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(Card, { className: "overflow-hidden shadow-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(CardTitle, { className: " bg-gradient-to-r from-transparent via-stone-300 space-x-5 to-transparent mb-3 font-normal items-center  place-content-center flex ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "flex  font-light items-center ", children: g.nome }, void 0, !1, {
          fileName: "app/routes/especial.tsx",
          lineNumber: 292,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
          Separator2,
          {
            orientation: "vertical",
            className: "  h-4 border border-white "
          },
          void 0,
          !1,
          {
            fileName: "app/routes/especial.tsx",
            lineNumber: 293,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "flex text-base space items-center font-light space-x-4   gap-2  pb-1 pt-1 p-3 ", children: [
          "PONTOS",
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: " text-lg font-semibold", children: totalGrupos(g.nome) }, void 0, !1, {
            fileName: "app/routes/especial.tsx",
            lineNumber: 299,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/especial.tsx",
          lineNumber: 297,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/especial.tsx",
        lineNumber: 291,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "flex items-center place-content-center mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "flex text-blue-600  font-extralight gap-2", children: [
        "Treinos - ",
        somaTreinosGrupo(g.nome),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
          Separator2,
          {
            orientation: "vertical",
            className: "  h-4 border border-stone-300 "
          },
          void 0,
          !1,
          {
            fileName: "app/routes/especial.tsx",
            lineNumber: 308,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/especial.tsx",
          lineNumber: 307,
          columnNumber: 17
        }, this),
        " ",
        g.alunos.length * 3
      ] }, void 0, !0, {
        fileName: "app/routes/especial.tsx",
        lineNumber: 305,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/especial.tsx",
        lineNumber: 304,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(CardContent, { className: "grid gap-6", children: g.alunos.map((a, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
        "div",
        {
          className: "flex items-center justify-between space-x-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(Avatar, { className: " w-14 h-14", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
                  AvatarImage,
                  {
                    className: "object-cover",
                    src: a.photo,
                    alt: "avatar"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/especial.tsx",
                    lineNumber: 323,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(AvatarFallback, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("img", { src: "/user.png", alt: "avatar" }, void 0, !1, {
                  fileName: "app/routes/especial.tsx",
                  lineNumber: 329,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/routes/especial.tsx",
                  lineNumber: 328,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/especial.tsx",
                lineNumber: 322,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("p", { className: "text-sm font-medium leading-none", children: a.nome.split(" ")[0] }, void 0, !1, {
                  fileName: "app/routes/especial.tsx",
                  lineNumber: 333,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("p", { className: "text-sm font-extralight text-muted-foreground", children: a.nome.substr(a.nome.indexOf(" ") + 1) }, void 0, !1, {
                  fileName: "app/routes/especial.tsx",
                  lineNumber: 336,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/especial.tsx",
                lineNumber: 332,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/especial.tsx",
              lineNumber: 321,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "w-12 bg-gray-200  rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
              "div",
              {
                className: `${treinosFeitos(a.idMember) >= 3 ? "bg-green-400" : treinosFeitos(a.idMember) === 2 ? "bg-amber-400" : treinosFeitos(a.idMember) === 0 ? "bg-slate-200" : "bg-red-400"}  rounded-full p-0.5 text-center text-xs font-medium leading-none text-primary-100`,
                style: {
                  width: treinosFeitos(a.idMember) > 3 || treinosFeitos(a.idMember) === 0 ? "100%" : treinosFeitos(a.idMember) * 33.333 + "%"
                },
                children: treinosFeitos(a.idMember) > 0 ? treinosFeitos(a.idMember) : ""
              },
              void 0,
              !1,
              {
                fileName: "app/routes/especial.tsx",
                lineNumber: 342,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/especial.tsx",
              lineNumber: 341,
              columnNumber: 19
            }, this)
          ]
        },
        index2,
        !0,
        {
          fileName: "app/routes/especial.tsx",
          lineNumber: 318,
          columnNumber: 17
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/especial.tsx",
        lineNumber: 316,
        columnNumber: 13
      }, this)
    ] }, g.id, !0, {
      fileName: "app/routes/especial.tsx",
      lineNumber: 290,
      columnNumber: 11
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_react_chartjs_2.Bar, { data: dataLine, options: optionsBarTotal }, void 0, !1, {
      fileName: "app/routes/especial.tsx",
      lineNumber: 373,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/especial.tsx",
      lineNumber: 372,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_react_chartjs_2.Bar, { data, options: optionsBar }, void 0, !1, {
      fileName: "app/routes/especial.tsx",
      lineNumber: 376,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/especial.tsx",
      lineNumber: 375,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
      import_react_chartjs_2.Bar,
      {
        data: dataAlunos,
        options: optionsBarAlunos
      },
      void 0,
      !1,
      {
        fileName: "app/routes/especial.tsx",
        lineNumber: 379,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/especial.tsx",
      lineNumber: 378,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/especial.tsx",
    lineNumber: 288,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/especial.tsx",
    lineNumber: 287,
    columnNumber: 5
  }, this);
}

// app/routes/indexold.tsx
var indexold_exports = {};
__export(indexold_exports, {
  default: () => Index6,
  loader: () => loader25
});
var import_fa16 = require("react-icons/fa");
var import_node35 = require("@remix-run/node");
var import_react47 = require("@remix-run/react"), import_jsx_dev_runtime50 = require("react/jsx-dev-runtime"), loader25 = async ({ request }) => {
  let TodasAulas = await getAulas();
  return (0, import_node35.json)({ TodasAulas });
};
function Index6() {
  let { TodasAulas } = (0, import_react47.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_jsx_dev_runtime50.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "h-80 xl:h-5/6 w-full bg-gradient-to-tl from-black to-orange-500 relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
        "img",
        {
          alt: "content",
          className: "w-full h-full object-cover absolute mix-blend-overlay ",
          src: "/fundo_novo.jpg"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/indexold.tsx",
          lineNumber: 19,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "pt-10 xl:pt-20 xl:pl-10 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("h2", { className: "text-4xl xl:text-6xl font-extrabold shadow-xl text-white md:text-3xl", children: "Quattor Academia" }, void 0, !1, {
          fileName: "app/routes/indexold.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "text-md xl:text-2xl font-bold text-white ", children: "Jornada de Resultados Reais" }, void 0, !1, {
          fileName: "app/routes/indexold.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/indexold.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: " pl-32 pt-8 flex justify-end items-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
        "img",
        {
          alt: "logo",
          src: "/15anos.svg",
          className: "mt-10 w-60 xl:w-96 xl:mt-0  "
        },
        void 0,
        !1,
        {
          fileName: "app/routes/indexold.tsx",
          lineNumber: 34,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/indexold.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/indexold.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "bg-gradient-to-r from-[#2BC0E4] to-[#EAECC6]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "text-gray-600 body-font bg-no-repeat min-h-screen bg-contain bg-center bg-[url('/bola50.svg')]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "container mx-auto content-center  py-6 px-2 md:px-0 md:grid md:gap-x-6  md:gap-y-4 md:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "bg-white/75  py-6 mb-2 flex flex-col items-center rounded-lg  drop-shadow-2xl  min-h-96 max-h-96", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "flex  items-center mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_fa16.FaMapMarkedAlt, {}, void 0, !1, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 48,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 47,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("h2", { className: "text-gray-900 text-lg title-font font-medium", children: "Onde Estamos" }, void 0, !1, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 50,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/indexold.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "text-center ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { className: "font-semibold", children: "Rua 5 Sul - \xC1guas Claras - DF" }, void 0, !1, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 56,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: " ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
              "a",
              {
                href: "https://wa.me/5561993190568",
                className: "mt-2  font-semibold inline-flex items-center ",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_fa16.FaWhatsapp, { className: "text-green-600 text-2xl mr-2 " }, void 0, !1, {
                    fileName: "app/routes/indexold.tsx",
                    lineNumber: 61,
                    columnNumber: 21
                  }, this),
                  "(61) 99319-0568"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/indexold.tsx",
                lineNumber: 58,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("a", { href: "https://wa.me/5561993190568", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("button", { className: "bg-green-400 tracking-tighter ml-5 px-2 py-1  text-white inline-flex items-center space-x-2 rounded", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_fa16.FaWhatsapp, {}, void 0, !1, {
                fileName: "app/routes/indexold.tsx",
                lineNumber: 66,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("span", { children: "Aula experimental" }, void 0, !1, {
                fileName: "app/routes/indexold.tsx",
                lineNumber: 67,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/indexold.tsx",
              lineNumber: 65,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/indexold.tsx",
              lineNumber: 64,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 57,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/indexold.tsx",
          lineNumber: 55,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "flex mt-10  items-center mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "w-8 h-8  mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_fa16.FaClock, {}, void 0, !1, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 74,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("h2", { className: "text-gray-900 text-lg title-font font-medium", children: "Hor\xE1rio de Funcionamento" }, void 0, !1, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/indexold.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "flex-grow text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { className: "leading-relaxed ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("span", { className: " text-gray-900 ", children: "Segunda a Sexta:" }, void 0, !1, {
              fileName: "app/routes/indexold.tsx",
              lineNumber: 82,
              columnNumber: 19
            }, this),
            " ",
            "6:00h \xE0s 23:00h"
          ] }, void 0, !0, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { className: "leading-relaxed  ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("span", { className: " text-gray-900 ", children: "S\xE1bados e Feriados:" }, void 0, !1, {
              fileName: "app/routes/indexold.tsx",
              lineNumber: 86,
              columnNumber: 19
            }, this),
            " ",
            "8:00h \xE0s 12:00h"
          ] }, void 0, !0, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { className: "leading-relaxed  ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("span", { className: " text-gray-900 ", children: "Domingos:" }, void 0, !1, {
              fileName: "app/routes/indexold.tsx",
              lineNumber: 90,
              columnNumber: 19
            }, this),
            " 8:00h \xE0s 12:00h"
          ] }, void 0, !0, {
            fileName: "app/routes/indexold.tsx",
            lineNumber: 89,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/indexold.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/indexold.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "bg-white/75 overflow-auto rounded-lg mb-2  max-h-96  min-h-96 col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(Aulas, { aulas: TodasAulas }, void 0, !1, {
        fileName: "app/routes/indexold.tsx",
        lineNumber: 96,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/indexold.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("video", { controls: !0, poster: "/como.jpg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("source", { src: "/treino.mp4" }, void 0, !1, {
        fileName: "app/routes/indexold.tsx",
        lineNumber: 103,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/indexold.tsx",
        lineNumber: 102,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/indexold.tsx",
        lineNumber: 101,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/indexold.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/indexold.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/indexold.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/indexold.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/treinos.tsx
var treinos_exports = {};
__export(treinos_exports, {
  default: () => Treino6,
  loader: () => loader26
});
var import_node36 = require("@remix-run/node");
var import_date_fns5 = require("date-fns"), import_react48 = require("@remix-run/react"), import_fa17 = require("react-icons/fa"), import_jsx_dev_runtime51 = require("react/jsx-dev-runtime"), loader26 = async ({ request }) => {
  let par = new URL(request.url).searchParams.get("semana_query"), parametro = par ? parseInt(par) : (0, import_date_fns5.getWeek)(new Date()), treinos2 = await getTreinos2(parametro);
  return (0, import_node36.json)({ treinos: treinos2 });
};
function Treino6() {
  var _a;
  let semana = (0, import_react48.useFetcher)(), { treinos: treinos2 } = (0, import_react48.useLoaderData)(), treinoSemana = (_a = semana.data) != null && _a.treinos ? semana.data.treinos : treinos2;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "w-full bg-stone-100 font-Roboto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "flex items-center flex-col space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("h2", { className: "text-2xl font-extrabold text-slate-700", children: "Lista de Treinos" }, void 0, !1, {
        fileName: "app/routes/treinos.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(semana.Form, { method: "get", action: ".", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
        "select",
        {
          name: "semana_query",
          onChange: (event) => semana.submit(event.target.form),
          className: "rounded-md border-2 form-control block",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "01", children: "01 - (01/01 a 07/01)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "02", children: "02 - (08/01 a 14/01)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 37,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "03", children: "03 - (15/01 a 21/01)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 38,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "04", children: "04 - (22/01 a 28/01)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 39,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "05", children: "05 - (29/01 a 04/02)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 40,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "06", children: "06 - (05/02 a 11/02)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 41,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "07", children: "07 - (12/02 a 18/02)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 42,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "08", children: "08 - (19/02 a 25/02)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 43,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "09", children: "09 - (26/02 a 04/03)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 44,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "10", children: "10 - (05/02 a 11/03)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 45,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "11", children: "11 - (12/03 a 18/03)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 46,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "12", children: "12 - (19/03 a 25/03)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 47,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "13", children: "13 - (26/03 a 01/04)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 48,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "14", children: "14 - (02/04 a 08/04)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 49,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "15", children: "15 - (09/04 a 15/04)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 50,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "16", children: "16 - (16/04 a 22/04)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 51,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "17", children: "17 - (23/04 a 29/04)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 52,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "18", children: "18 - (30/04 a 06/05)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 53,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "19", children: "19 - (30/04 a 06/05)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 54,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "20", children: "20 - (07/05 a 13/05)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 55,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "21", children: "21 - (14/05 a 20/05)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 56,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "22", children: "22 - (21/05 a 27/05)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 57,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "23", children: "23 - (28/05 a 03/06)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 58,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "24", children: "24 - (04/06 a 10/06)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 59,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "25", children: "25 - (11/06 a 17/06)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 60,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "26", children: "26 - (18/06 a 24/06)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 61,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "27", children: "27 - (25/06 a 01/07)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 62,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "28", children: "28 - (02/07 a 08/07)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 63,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "29", children: "29 - (09/07 a 15/07)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 64,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "30", children: "30 - (16/07 a 22/07)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 65,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "31", children: "31 - (23/07 a 29/07)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 66,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "32", children: "32 - (06/07 a 12/07)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 67,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "33", children: "33 - (13/08 a 19/08)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 68,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "34", children: "34 - (20/08 a 26/08)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 69,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "35", children: "35 - (27/08 a 02/09)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 70,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "36", children: "36 - (03/09 a 09/09)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 71,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "37", children: "37 - (10/09 a 16/09)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 72,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "38", children: "38 - (17/09 a 23/08)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 73,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "39", children: "39 - (24/09 a 30/08)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 74,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "40", children: "40 - (01/10 a 07/10)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 75,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("option", { value: "41", children: "41 - (08/10 a 13/10)" }, void 0, !1, {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 76,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/treinos.tsx",
          lineNumber: 32,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/treinos.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/treinos.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "container mx-auto content-center  py-6 px-2 md:px-0 md:grid md:gap-x-6  md:gap-y-4 md:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "overflow-x-auto relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("table", { className: "w-full  text-sm text-left text-gray-500 dark:text-gray-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("thead", { className: "text-xs  text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("tr", { className: "rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("th", { scope: "col", className: " ", children: "Grupo" }, void 0, !1, {
            fileName: "app/routes/treinos.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("th", { scope: "col", className: "text-center ", children: "Semana" }, void 0, !1, {
            fileName: "app/routes/treinos.tsx",
            lineNumber: 88,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/treinos.tsx",
          lineNumber: 84,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/treinos.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("tbody", { children: treinoSemana.map((treino) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("tr", { className: " dark:bg-gray-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("th", { className: "py-1 flex gap-x-2 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white", children: treino.grupo }, void 0, !1, {
            fileName: "app/routes/treinos.tsx",
            lineNumber: 100,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("td", { className: " text-center", children: treino.semana }, void 0, !1, {
            fileName: "app/routes/treinos.tsx",
            lineNumber: 103,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("td", { className: "  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react48.Link, { to: `${treino.id}`, className: "text-sky-600 text-lg ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_fa17.FaListAlt, {}, void 0, !1, {
            fileName: "app/routes/treinos.tsx",
            lineNumber: 107,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/treinos.tsx",
            lineNumber: 105,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/treinos.tsx",
            lineNumber: 104,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("td", { className: "  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
            import_react48.Link,
            {
              to: `/print/${treino.id}`,
              className: "text-orange-400 text-lg ",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_fa17.FaPrint, {}, void 0, !1, {
                fileName: "app/routes/treinos.tsx",
                lineNumber: 114,
                columnNumber: 23
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/treinos.tsx",
              lineNumber: 111,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/treinos.tsx",
            lineNumber: 110,
            columnNumber: 19
          }, this)
        ] }, treino.id, !0, {
          fileName: "app/routes/treinos.tsx",
          lineNumber: 99,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/treinos.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/treinos.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/treinos.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "col-span-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("h2", { className: " font-semibold text-center text-slate-700", children: "Lista de Exerc\xEDcios" }, void 0, !1, {
          fileName: "app/routes/treinos.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react48.Outlet, {}, void 0, !1, {
          fileName: "app/routes/treinos.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/treinos.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/treinos.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/treinos.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/treinos/$exe.tsx
var exe_exports2 = {};
__export(exe_exports2, {
  action: () => action20,
  default: () => Treino7,
  loader: () => loader27
});
var import_node37 = require("@remix-run/node"), import_react49 = require("@remix-run/react");
var import_fa18 = require("react-icons/fa"), import_jsx_dev_runtime52 = require("react/jsx-dev-runtime"), loader27 = async ({ request, params }) => await getExercicios(params.exe), action20 = async ({ request, params }) => {
  let form = await request.formData(), nome = form.get("nome"), repeticoes = form.get("repeticoes"), carga = form.get("carga"), obs = form.get("obs"), execid = form.get("execid"), video = form.get("video"), _action = form.get("_action"), id = params.exe;
  return _action === "save" && await updateCadastroTreino(id, nome, repeticoes, carga, obs, execid, video), _action === "delete" && await deleteExercicio(id, execid), (0, import_node37.redirect)(`/treinos/${id}`);
};
function Treino7() {
  let { exercicios } = (0, import_react49.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("ul", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "grid grid-cols-12 py-2 gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "col-span-4 font-light text-sm text-sky-500", children: "Nome" }, void 0, !1, {
        fileName: "app/routes/treinos/$exe.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "col-span-2 font-light text-sm text-sky-500", children: "Carga" }, void 0, !1, {
        fileName: "app/routes/treinos/$exe.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "col-span-2 font-light text-sm text-sky-500", children: "Repeti\xE7\xF5es" }, void 0, !1, {
        fileName: "app/routes/treinos/$exe.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "col-span-3 font-light text-sm text-sky-500", children: "Observa\xE7\xE3o" }, void 0, !1, {
        fileName: "app/routes/treinos/$exe.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "col-span-3 font-light text-sm text-sky-500", children: "Video" }, void 0, !1, {
        fileName: "app/routes/treinos/$exe.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/treinos/$exe.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    exercicios.map((exec, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("li", { className: "py-1  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_react49.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "grid grid-cols-12  gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
        "input",
        {
          hidden: !0,
          type: "text",
          id: "execid",
          name: "execid",
          defaultValue: exec.execid
        },
        void 0,
        !1,
        {
          fileName: "app/routes/treinos/$exe.tsx",
          lineNumber: 54,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
        "input",
        {
          type: "text",
          id: "nome",
          name: "nome",
          defaultValue: exec.nome,
          className: "col-span-4 bg-stone-50 border-b-2 "
        },
        void 0,
        !1,
        {
          fileName: "app/routes/treinos/$exe.tsx",
          lineNumber: 62,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
        "input",
        {
          type: "text",
          id: "carga",
          name: "carga",
          defaultValue: exec.carga,
          className: "col-span-2 bg-stone-50 border-b-2 "
        },
        void 0,
        !1,
        {
          fileName: "app/routes/treinos/$exe.tsx",
          lineNumber: 70,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
        "input",
        {
          type: "text",
          id: "repeticoes",
          name: "repeticoes",
          defaultValue: exec.Repeticoes,
          className: "col-span-2 bg-stone-50 border-b-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/treinos/$exe.tsx",
          lineNumber: 78,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
        "input",
        {
          type: "text",
          id: "obs",
          name: "obs",
          defaultValue: exec.obs,
          className: "col-span-3 text-sm bg-stone-50 border-b-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/treinos/$exe.tsx",
          lineNumber: 86,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
        "input",
        {
          type: "text",
          id: "video",
          name: "video",
          defaultValue: exec.video,
          className: "col-span-3 text-sm bg-stone-50 border-b-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/treinos/$exe.tsx",
          lineNumber: 93,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "grid justify-items-center grid-cols-2 gap2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
          "button",
          {
            className: "flex content-center text-green-500 bg-stone-100 ",
            type: "submit",
            name: "_action",
            value: "save",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_fa18.FaSave, {}, void 0, !1, {
              fileName: "app/routes/treinos/$exe.tsx",
              lineNumber: 106,
              columnNumber: 19
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/treinos/$exe.tsx",
            lineNumber: 101,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
          "button",
          {
            className: "flex content-center text-red-500 bg-stone-100 ",
            type: "submit",
            name: "_action",
            value: "delete",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_fa18.FaTrash, {}, void 0, !1, {
              fileName: "app/routes/treinos/$exe.tsx",
              lineNumber: 113,
              columnNumber: 19
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/treinos/$exe.tsx",
            lineNumber: 108,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/treinos/$exe.tsx",
        lineNumber: 100,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/treinos/$exe.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/treinos/$exe.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this) }, exec.execid, !1, {
      fileName: "app/routes/treinos/$exe.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this))
  ] }, void 0, !0, {
    fileName: "app/routes/treinos/$exe.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  loader: () => loader28
});
var import_node38 = require("@remix-run/node");
async function loader28({ request }) {
  let session = await getSession(request.headers.get("Cookie"));
  return (0, import_node38.redirect)("/", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index7,
  loader: () => loader29
});
var import_node39 = require("@remix-run/node"), import_react50 = require("@remix-run/react");
var import_fa19 = require("react-icons/fa"), import_gi = require("react-icons/gi");
var import_jsx_dev_runtime53 = require("react/jsx-dev-runtime"), loader29 = async ({ request }) => {
  let TodasAulas = await getAulas();
  return (0, import_node39.json)({ TodasAulas });
};
function Index7() {
  let { TodasAulas } = (0, import_react50.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "md:pt-4 h-screen md:container md:mx-auto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: " bg-white py-4 px-6 mx-auto rounded-lg ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: " h-[140px] w-[100px] md:w-[400px] md:h-[200px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
        "img",
        {
          src: "/back_cinza.svg",
          alt: "background",
          className: "hidden   w-full h-full "
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 21,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "flex flex-col items-center md:-mt-44 -mt-32", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("img", { src: "/back1.svg", alt: "logo", className: "w-48 md:w-72 " }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "flex items-center space-x-2 mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("p", { className: "text-2xl", children: "Rua 5 sul - \xC1guas Claras" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("p", { className: "text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
          "a",
          {
            href: "https://wa.me/5561993190568",
            className: "mt-2 text-xl font-semibold inline-flex items-center ",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_fa19.FaWhatsapp, { className: "text-green-600 text-3xl mr-2  " }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 36,
                columnNumber: 15
              }, this),
              "(61) 99319-0568"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 33,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Seg \xE0 sex 6h - 23h - sab / dom / Feriados - 8h - 12h" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "flex items-center space-x-4 mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
          "a",
          {
            href: "https://wa.me/5561993190568",
            className: "flex items-center bg-blue-400 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_gi.GiGymBag, {}, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 56,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("span", { children: "Agendar " }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 57,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 53,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
          "a",
          {
            href: "https://wa.me/5561993190568",
            className: "flex items-center bg-blue-400 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-4 w-4",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z",
                      clipRule: "evenodd"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 67,
                      columnNumber: 17
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 62,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("span", { children: "Mensagem" }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 72,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 59,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4  gap-x-2 lg:gap-x-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "mx-2 mt-5  md:block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("img", { className: "rounded-lg bg-cover ", src: "/espetaculo.jpg", alt: "" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "flex flex-row justify-between items-start mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
          import_react50.Link,
          {
            to: "http://www.google.com",
            className: "text-lg mx-auto bg-yellow-400 block p-2 w-full text-center rounded-md font-bold text-blue-800 ",
            children: "Comprar Ingressos"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 142,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "mx-2 mt-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("img", { className: "rounded-lg bg-cover", src: "/amigo.jpg", alt: "" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 152,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "flex flex-row justify-between items-start mt-4" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 153,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "mx-2 hidden  md:block mt-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("img", { className: "rounded-lg bg-cover", src: "/foto_natacao.jpg", alt: "" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 173,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "flex flex-row justify-between items-start mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("p", { className: "text-lg font-bold text-blue-400 ", children: "Nata\xE7\xE3o" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 176,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("p", { className: "text-gray-500 mb-4", children: "Infantil" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 177,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 175,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 174,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 172,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "mx-2 mt-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
          "img",
          {
            className: "rounded-lg bg-cover",
            src: "/musculacao_foto.jpg",
            alt: ""
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 183,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "flex flex-row justify-between items-start mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("p", { className: "text-lg font-bold text-blue-400 ", children: "Muscula\xE7\xE3o" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 190,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("p", { className: "text-gray-500 mb-4", children: "M\xE9todo Exclusivo" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 191,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 189,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 188,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 138,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "overflow-auto rounded-lg mb-2 max-h-[500px] ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(Aulas, { aulas: TodasAulas }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 320,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 319,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action21,
  default: () => Index8,
  loader: () => loader30
});
var import_node40 = require("@remix-run/node"), import_react51 = require("@remix-run/react");
var import_lodash9 = __toESM(require("lodash")), import_im2 = require("react-icons/im");

// app/components/ui/alert.tsx
var React12 = __toESM(require("react")), import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_dev_runtime54 = require("react/jsx-dev-runtime"), alertVariants = (0, import_class_variance_authority3.cva)(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&:has(svg)]:pl-11 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Alert = React12.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
  "div",
  {
    ref,
    role: "alert",
    className: cn(alertVariants({ variant }), className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert.tsx",
    lineNumber: 26,
    columnNumber: 3
  },
  this
));
Alert.displayName = "Alert";
var AlertTitle = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert.tsx",
    lineNumber: 39,
    columnNumber: 3
  },
  this
));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert.tsx",
    lineNumber: 51,
    columnNumber: 3
  },
  this
));
AlertDescription.displayName = "AlertDescription";

// app/routes/login.tsx
var import_react_icons5 = require("@radix-ui/react-icons");

// app/components/ui/toast.tsx
var React13 = __toESM(require("react")), import_react_icons4 = require("@radix-ui/react-icons"), ToastPrimitives = __toESM(require("@radix-ui/react-toast")), import_class_variance_authority4 = require("class-variance-authority");
var import_jsx_dev_runtime55 = require("react/jsx-dev-runtime"), ToastProvider = ToastPrimitives.Provider, ToastViewport = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 14,
    columnNumber: 3
  },
  this
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = (0, import_class_variance_authority4.cva)(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Toast = React13.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
  ToastPrimitives.Root,
  {
    ref,
    className: cn(toastVariants({ variant }), className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 47,
    columnNumber: 5
  },
  this
));
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 60,
    columnNumber: 3
  },
  this
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_react_icons4.Cross2Icon, { className: "h-4 w-4" }, void 0, !1, {
      fileName: "app/components/ui/toast.tsx",
      lineNumber: 84,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 75,
    columnNumber: 3
  },
  this
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold [&+div]:text-xs", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 93,
    columnNumber: 3
  },
  this
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 105,
    columnNumber: 3
  },
  this
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// app/components/ui/use-toast.ts
var React14 = __toESM(require("react")), TOAST_LIMIT = 1, TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  return count = (count + 1) % Number.MAX_VALUE, count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map(), addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId))
    return;
  let timeout = setTimeout(() => {
    toastTimeouts.delete(toastId), dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
}, reducer = (state, action23) => {
  switch (action23.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action23.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action23.toast.id ? { ...t, ...action23.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      let { toastId } = action23;
      return toastId ? addToRemoveQueue(toastId) : state.toasts.forEach((toast4) => {
        addToRemoveQueue(toast4.id);
      }), {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: !1
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      return action23.toastId === void 0 ? {
        ...state,
        toasts: []
      } : {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action23.toastId)
      };
  }
}, listeners = [], memoryState = { toasts: [] };
function dispatch(action23) {
  memoryState = reducer(memoryState, action23), listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast3({ ...props }) {
  let id = genId(), update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  }), dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  return dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: !0,
      onOpenChange: (open) => {
        open || dismiss();
      }
    }
  }), {
    id,
    dismiss,
    update
  };
}
function useToast() {
  let [state, setState] = React14.useState(memoryState);
  return React14.useEffect(() => (listeners.push(setState), () => {
    let index = listeners.indexOf(setState);
    index > -1 && listeners.splice(index, 1);
  }), [state]), {
    ...state,
    toast: toast3,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}

// app/components/ui/toaster.tsx
var import_jsx_dev_runtime56 = require("react/jsx-dev-runtime");
function Toaster3() {
  let { toasts } = useToast();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action: action23, ...props }) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(Toast, { ...props, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(ToastTitle, { children: title }, void 0, !1, {
            fileName: "app/components/ui/toaster.tsx",
            lineNumber: 20,
            columnNumber: 25
          }, this),
          description && /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(ToastDescription, { children: description }, void 0, !1, {
            fileName: "app/components/ui/toaster.tsx",
            lineNumber: 22,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ui/toaster.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        action23,
        /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(ToastClose, {}, void 0, !1, {
          fileName: "app/components/ui/toaster.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ] }, id, !0, {
        fileName: "app/components/ui/toaster.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this);
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(ToastViewport, {}, void 0, !1, {
      fileName: "app/components/ui/toaster.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/toaster.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var import_jsx_dev_runtime57 = require("react/jsx-dev-runtime"), loader30 = async ({ request, params }) => {
  var _a, _b;
  let session = await getSession(request.headers.get("Cookie")), motivo = (_a = session.get("aluno")) == null ? void 0 : _a.motivo, url = (_b = session.get("aluno")) == null ? void 0 : _b.red;
  return motivo || url || null;
}, action21 = async ({ request }) => {
  let form = await request.formData(), matricula = form.get("matricula"), redi = form.get("redirectTo") || "/", aluno = (await getAluno(matricula))[0];
  console.log(aluno);
  let alunoGym = [];
  aluno.membershipStatus === "Inactive" && (alunoGym = (await getAlunoGym(Number(matricula))).map((a) => a.gympassId));
  let plano = import_lodash9.default.filter(aluno.memberships, { membershipStatus: "active" }).map(
    (n) => n.name
  );
  if (console.log(plano), !aluno.idMember)
    return {
      message: "Aluno n\xE3o encontrado"
    };
  if (aluno.membershipStatus === "Inactive" && alunoGym[0] === null)
    return {
      message: "Seu plano est\xE1 Inativo Favor procurar recep\xE7\xE3o"
    };
  console.log(aluno.membershipStatus, aluno.idMember, plano);
  let session = await getSession(request.headers.get("Cookie"));
  return session.set("aluno", {
    id: aluno.idMember,
    plano,
    status: aluno.membershipStatus
  }), (0, import_node40.redirect)(redi, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};
function Index8() {
  let transition = (0, import_react51.useTransition)(), data = (0, import_react51.useActionData)(), motivo = (0, import_react51.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: "h-screen w-full bg-stone-100 font-Roboto ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: "bg-stone-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: "text-gray-600 body-font  min-h-screen ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: "h-full   pt-20 items-center flex flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
      import_react51.Form,
      {
        method: "post",
        className: "rounded-2xl bg-white bg-opacity-80  p-4 md:w-1/2 lg:w1/4 w-11/12",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
            "input",
            {
              type: "hidden",
              value: motivo || "",
              name: "redirectTo"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 106,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("label", { htmlFor: "matricula", className: " font-semibold mb-9 ", children: "N\xFAmero de Matricula" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 112,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: "relative  my-4 flex w-full flex-wrap items-stretch mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("span", { className: "z-10 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded-xl text-base items-center justify-center w-8 pl-3 py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(import_im2.ImEnter, {}, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 117,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 116,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
              "input",
              {
                type: "number",
                name: "matricula",
                required: !0,
                autoFocus: !0,
                placeholder: "Pegue seu n\xFAmero na recep\xE7\xE3o",
                className: "px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white  rounded-xl text-sm border shadow outline-none border-slate-200 focus:outline-none focus:ring w-full pl-10"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 119,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 115,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(Toaster3, {}, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: "w-full text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
              "button",
              {
                disabled: transition.state === "submitting" || transition.state === "loading",
                type: "submit",
                name: "Entrar",
                className: "" + transition.state == "loading" ? "rounded-xl mt-2  bg-blue-600 px-3 py-2 text-white font-semibold" : "rounded-xl mt-2  bg-stone-500 text-white px-3 py-2  font-semibold hover:bg-orange-400 hover:-translate-y-1",
                children: transition.state === "submitting" ? "Localizando..." : transition.state === "loading" ? "Carregando Aulas" : "Entrar"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 130,
                columnNumber: 17
              },
              this
            ),
            data && /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: " mt-3  p-1 bg-white rounded-lg ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(Alert, { variant: "destructive", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(import_react_icons5.ExclamationTriangleIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/routes/login.tsx",
                lineNumber: 151,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(AlertTitle, { children: "Sem treino " }, void 0, !1, {
                fileName: "app/routes/login.tsx",
                lineNumber: 152,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(AlertDescription, { children: data.message }, void 0, !1, {
                fileName: "app/routes/login.tsx",
                lineNumber: 153,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/login.tsx",
              lineNumber: 150,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 149,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 129,
            columnNumber: 15
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 103,
        columnNumber: 13
      },
      this
    ),
    (motivo == null ? void 0 : motivo.motivo) && /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("p", { className: "  text-center text-md text-white font-medium px-4 py-3 bg-red-600 rounded-lg", children: motivo || "" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 161,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 102,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 101,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 100,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}

// app/routes/teste.tsx
var teste_exports = {};
__export(teste_exports, {
  action: () => action22,
  default: () => Grupocadastrado2,
  loader: () => loader31
});
var import_node41 = require("@remix-run/node"), import_react52 = require("@remix-run/react");
var import_fa20 = require("react-icons/fa"), import_jsx_dev_runtime58 = require("react/jsx-dev-runtime"), loader31 = async ({ request, params }) => await getExercicios(params.grupo), action22 = async ({ request, params }) => {
  let form = await request.formData(), nome = form.get("nome"), repeticoes = form.get("repeticoes"), carga = form.get("carga"), obs = form.get("obs"), execid = form.get("execid"), video = form.get("video"), _action = form.get("_action"), id = params.exe;
  return _action === "save" && await updateCadastroTreino(id, nome, repeticoes, carga, obs, execid, video), _action === "delete" && await deleteExercicio(id, execid), (0, import_node41.redirect)(`/treinos/${id}`);
};
function Grupocadastrado2() {
  let { exercicios } = (0, import_react52.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("ul", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "grid grid-cols-12 py-2 gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "col-span-4 font-light text-sm text-sky-500", children: "N\xFAmero" }, void 0, !1, {
        fileName: "app/routes/teste.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "col-span-4 font-light text-sm text-sky-500", children: "Nome" }, void 0, !1, {
        fileName: "app/routes/teste.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/teste.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    exercicios.map((exec, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("li", { className: "py-1  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react52.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "grid grid-cols-12  gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("input", { type: "text", id: "index", defaultValue: index + 1 }, void 0, !1, {
        fileName: "app/routes/teste.tsx",
        lineNumber: 47,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
        "input",
        {
          hidden: !0,
          type: "text",
          id: "execid",
          name: "execid",
          defaultValue: exec.execid
        },
        void 0,
        !1,
        {
          fileName: "app/routes/teste.tsx",
          lineNumber: 48,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
        "input",
        {
          type: "text",
          id: "nome",
          name: "nome",
          defaultValue: exec.nome,
          className: "col-span-4 bg-stone-50 border-b-2 "
        },
        void 0,
        !1,
        {
          fileName: "app/routes/teste.tsx",
          lineNumber: 56,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
        "input",
        {
          type: "text",
          id: "carga",
          name: "carga",
          defaultValue: exec.carga,
          className: "col-span-2 bg-stone-50 border-b-2 "
        },
        void 0,
        !1,
        {
          fileName: "app/routes/teste.tsx",
          lineNumber: 64,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
        "input",
        {
          type: "text",
          id: "repeticoes",
          name: "repeticoes",
          defaultValue: exec.Repeticoes,
          className: "col-span-2 bg-stone-50 border-b-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/teste.tsx",
          lineNumber: 72,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
        "input",
        {
          type: "text",
          id: "obs",
          name: "obs",
          defaultValue: exec.obs,
          className: "col-span-3 text-sm bg-stone-50 border-b-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/teste.tsx",
          lineNumber: 80,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
        "input",
        {
          type: "text",
          id: "video",
          name: "video",
          defaultValue: exec.video,
          className: "col-span-3 text-sm bg-stone-50 border-b-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/teste.tsx",
          lineNumber: 87,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "grid justify-items-center grid-cols-2 gap2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
          "button",
          {
            className: "flex content-center text-green-500 bg-stone-100 ",
            type: "submit",
            name: "_action",
            value: "save",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_fa20.FaSave, {}, void 0, !1, {
              fileName: "app/routes/teste.tsx",
              lineNumber: 100,
              columnNumber: 19
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/teste.tsx",
            lineNumber: 95,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
          "button",
          {
            className: "flex content-center text-red-500 bg-stone-100 ",
            type: "submit",
            name: "_action",
            value: "delete",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_fa20.FaTrash, {}, void 0, !1, {
              fileName: "app/routes/teste.tsx",
              lineNumber: 107,
              columnNumber: 19
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/teste.tsx",
            lineNumber: 102,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/teste.tsx",
        lineNumber: 94,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/teste.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/teste.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this) }, exec.execid, !1, {
      fileName: "app/routes/teste.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this))
  ] }, void 0, !0, {
    fileName: "app/routes/teste.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "b9312807", entry: { module: "/build/entry.client-CY6YBAX6.js", imports: ["/build/_shared/chunk-BUK43IZD.js", "/build/_shared/chunk-5NMD7JUV.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-IIRSPWW2.js", imports: ["/build/_shared/chunk-MMMALSPV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno/$maquina": { id: "routes/aluno/$maquina", parentId: "root", path: "aluno/:maquina", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno/$maquina-ZWHQ2SMC.js", imports: ["/build/_shared/chunk-JODODTPB.js", "/build/_shared/chunk-DOTR6DNH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno/$treino/$maquina": { id: "routes/aluno/$treino/$maquina", parentId: "root", path: "aluno/:treino/:maquina", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno/$treino/$maquina-JJSX3W6Z.js", imports: ["/build/_shared/chunk-JODODTPB.js", "/build/_shared/chunk-DOTR6DNH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno/baktreino": { id: "routes/aluno/baktreino", parentId: "root", path: "aluno/baktreino", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno/baktreino-RCIII55X.js", imports: ["/build/_shared/chunk-6QDG6VJR.js", "/build/_shared/chunk-QL24ILLA.js", "/build/_shared/chunk-5M2WMXU4.js", "/build/_shared/chunk-DOTR6DNH.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno/grupo": { id: "routes/aluno/grupo", parentId: "root", path: "aluno/grupo", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno/grupo-5PJEW24O.js", imports: ["/build/_shared/chunk-WQC2EACV.js", "/build/_shared/chunk-2CFVURB5.js", "/build/_shared/chunk-7V2O5DRL.js", "/build/_shared/chunk-VXEOFHG4.js", "/build/_shared/chunk-O3X6S7UW.js", "/build/_shared/chunk-4I45Q6Y5.js", "/build/_shared/chunk-M6SAXTWL.js", "/build/_shared/chunk-LL7M334E.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno/grupo/$id": { id: "routes/aluno/grupo/$id", parentId: "routes/aluno/grupo", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno/grupo/$id-22YQM2XO.js", imports: ["/build/_shared/chunk-3FD5YU33.js", "/build/_shared/chunk-JODODTPB.js", "/build/_shared/chunk-AMHG35MK.js", "/build/_shared/chunk-DOTR6DNH.js", "/build/_shared/chunk-MMMALSPV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno/grupo/cadaluno": { id: "routes/aluno/grupo/cadaluno", parentId: "routes/aluno/grupo", path: "cadaluno", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno/grupo/cadaluno-S4A4PVSY.js", imports: ["/build/_shared/chunk-EEUM7OLB.js", "/build/_shared/chunk-IRSJFO7P.js", "/build/_shared/chunk-QFCSSHUS.js", "/build/_shared/chunk-CDEZS3UP.js", "/build/_shared/chunk-5DKPSWWW.js", "/build/_shared/chunk-WUA3ZKYN.js", "/build/_shared/chunk-SEMXCLTB.js", "/build/_shared/chunk-JODODTPB.js", "/build/_shared/chunk-AMHG35MK.js", "/build/_shared/chunk-DOTR6DNH.js", "/build/_shared/chunk-MMMALSPV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno/grupo/novo": { id: "routes/aluno/grupo/novo", parentId: "routes/aluno/grupo", path: "novo", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno/grupo/novo-KAHI4TGY.js", imports: ["/build/_shared/chunk-3FD5YU33.js", "/build/_shared/chunk-JODODTPB.js", "/build/_shared/chunk-AMHG35MK.js", "/build/_shared/chunk-DOTR6DNH.js", "/build/_shared/chunk-MMMALSPV.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno/index": { id: "routes/aluno/index", parentId: "root", path: "aluno", index: !0, caseSensitive: void 0, module: "/build/routes/aluno/index-T2KKYEOW.js", imports: ["/build/_shared/chunk-6QDG6VJR.js", "/build/_shared/chunk-QL24ILLA.js", "/build/_shared/chunk-2CFVURB5.js", "/build/_shared/chunk-5M2WMXU4.js", "/build/_shared/chunk-LL7M334E.js", "/build/_shared/chunk-DOTR6DNH.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno/index_bak": { id: "routes/aluno/index_bak", parentId: "root", path: "aluno/index_bak", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno/index_bak-JH4S7C4Q.js", imports: ["/build/_shared/chunk-JGQOTAP6.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/aluno/planejamento/$idaluno": { id: "routes/aluno/planejamento/$idaluno", parentId: "root", path: "aluno/planejamento/:idaluno", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno/planejamento/$idaluno-4CGRA2WM.js", imports: ["/build/_shared/chunk-M4VO63AP.js", "/build/_shared/chunk-EEUM7OLB.js", "/build/_shared/chunk-IRSJFO7P.js", "/build/_shared/chunk-2CFVURB5.js", "/build/_shared/chunk-7V2O5DRL.js", "/build/_shared/chunk-5M2WMXU4.js", "/build/_shared/chunk-QFCSSHUS.js", "/build/_shared/chunk-CDEZS3UP.js", "/build/_shared/chunk-5DKPSWWW.js", "/build/_shared/chunk-WUA3ZKYN.js", "/build/_shared/chunk-SEMXCLTB.js", "/build/_shared/chunk-VXEOFHG4.js", "/build/_shared/chunk-M6SAXTWL.js", "/build/_shared/chunk-LL7M334E.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno/planejamento/$idaluno/$editar": { id: "routes/aluno/planejamento/$idaluno/$editar", parentId: "routes/aluno/planejamento/$idaluno", path: ":editar", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno/planejamento/$idaluno/$editar-PPTTDESF.js", imports: ["/build/_shared/chunk-Y626B6US.js", "/build/_shared/chunk-FUC7P6VA.js", "/build/_shared/chunk-JODODTPB.js", "/build/_shared/chunk-O3X6S7UW.js", "/build/_shared/chunk-4I45Q6Y5.js", "/build/_shared/chunk-DOTR6DNH.js", "/build/_shared/chunk-MMMALSPV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno/planejamento/$idaluno/novo": { id: "routes/aluno/planejamento/$idaluno/novo", parentId: "routes/aluno/planejamento/$idaluno", path: "novo", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno/planejamento/$idaluno/novo-S3THW3XM.js", imports: ["/build/_shared/chunk-TKNQNABM.js", "/build/_shared/chunk-Y626B6US.js", "/build/_shared/chunk-FUC7P6VA.js", "/build/_shared/chunk-JODODTPB.js", "/build/_shared/chunk-AMHG35MK.js", "/build/_shared/chunk-O3X6S7UW.js", "/build/_shared/chunk-4I45Q6Y5.js", "/build/_shared/chunk-DOTR6DNH.js", "/build/_shared/chunk-MMMALSPV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno/planejamento/index": { id: "routes/aluno/planejamento/index", parentId: "root", path: "aluno/planejamento", index: !0, caseSensitive: void 0, module: "/build/routes/aluno/planejamento/index-JM63MH35.js", imports: ["/build/_shared/chunk-MVZIXRTN.js", "/build/_shared/chunk-AMHG35MK.js", "/build/_shared/chunk-O3X6S7UW.js", "/build/_shared/chunk-4I45Q6Y5.js", "/build/_shared/chunk-M6SAXTWL.js", "/build/_shared/chunk-LL7M334E.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno/planejamento_bak": { id: "routes/aluno/planejamento_bak", parentId: "root", path: "aluno/planejamento_bak", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno/planejamento_bak-ZBYPHB2T.js", imports: ["/build/_shared/chunk-MVZIXRTN.js", "/build/_shared/chunk-AMHG35MK.js", "/build/_shared/chunk-O3X6S7UW.js", "/build/_shared/chunk-4I45Q6Y5.js", "/build/_shared/chunk-M6SAXTWL.js", "/build/_shared/chunk-LL7M334E.js", "/build/_shared/chunk-DOTR6DNH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluno/spinning_bak": { id: "routes/aluno/spinning_bak", parentId: "root", path: "aluno/spinning_bak", index: void 0, caseSensitive: void 0, module: "/build/routes/aluno/spinning_bak-N2TFIGQP.js", imports: ["/build/_shared/chunk-JGQOTAP6.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/bancotreino": { id: "routes/bancotreino", parentId: "root", path: "bancotreino", index: void 0, caseSensitive: void 0, module: "/build/routes/bancotreino-3ZZSHXL2.js", imports: ["/build/_shared/chunk-DOTR6DNH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/bancotreino/$grupo": { id: "routes/bancotreino/$grupo", parentId: "routes/bancotreino", path: ":grupo", index: void 0, caseSensitive: void 0, module: "/build/routes/bancotreino/$grupo-22P5K225.js", imports: ["/build/_shared/chunk-MMMALSPV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/bancotreino/$grupo/$id": { id: "routes/bancotreino/$grupo/$id", parentId: "routes/bancotreino/$grupo", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/bancotreino/$grupo/$id-O2XNKVL3.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cadastro 2": { id: "routes/cadastro 2", parentId: "root", path: "cadastro 2", index: void 0, caseSensitive: void 0, module: "/build/routes/cadastro 2-GO5AFQ2M.js", imports: ["/build/_shared/chunk-IFEXC3DO.js", "/build/_shared/chunk-LXGZIKDR.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cadastro": { id: "routes/cadastro", parentId: "root", path: "cadastro", index: void 0, caseSensitive: void 0, module: "/build/routes/cadastro-7UPF63OB.js", imports: ["/build/_shared/chunk-IFEXC3DO.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cadastro/$exercicios": { id: "routes/cadastro/$exercicios", parentId: "routes/cadastro", path: ":exercicios", index: void 0, caseSensitive: void 0, module: "/build/routes/cadastro/$exercicios-T2RMWWBQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cadaulas/$aula": { id: "routes/cadaulas/$aula", parentId: "root", path: "cadaulas/:aula", index: void 0, caseSensitive: void 0, module: "/build/routes/cadaulas/$aula-6JCDOMAR.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cadaulas/index": { id: "routes/cadaulas/index", parentId: "root", path: "cadaulas", index: !0, caseSensitive: void 0, module: "/build/routes/cadaulas/index-CRFKEOMB.js", imports: ["/build/_shared/chunk-DOTR6DNH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cadaulas/nova": { id: "routes/cadaulas/nova", parentId: "root", path: "cadaulas/nova", index: void 0, caseSensitive: void 0, module: "/build/routes/cadaulas/nova-RG7W5BFS.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/especial": { id: "routes/especial", parentId: "root", path: "especial", index: void 0, caseSensitive: void 0, module: "/build/routes/especial-NOJOZ4K7.js", imports: ["/build/_shared/chunk-WQC2EACV.js", "/build/_shared/chunk-QL24ILLA.js", "/build/_shared/chunk-M4VO63AP.js", "/build/_shared/chunk-2CFVURB5.js", "/build/_shared/chunk-5M2WMXU4.js", "/build/_shared/chunk-SEMXCLTB.js", "/build/_shared/chunk-VXEOFHG4.js", "/build/_shared/chunk-M6SAXTWL.js", "/build/_shared/chunk-LL7M334E.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-BIAIXSWN.js", imports: ["/build/_shared/chunk-RIV46BQD.js", "/build/_shared/chunk-DOTR6DNH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index_foto": { id: "routes/index_foto", parentId: "root", path: "index_foto", index: void 0, caseSensitive: void 0, module: "/build/routes/index_foto-HR7UBDIV.js", imports: ["/build/_shared/chunk-RIV46BQD.js", "/build/_shared/chunk-LXGZIKDR.js", "/build/_shared/chunk-DOTR6DNH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/indexold": { id: "routes/indexold", parentId: "root", path: "indexold", index: void 0, caseSensitive: void 0, module: "/build/routes/indexold-6YYGYDKB.js", imports: ["/build/_shared/chunk-RIV46BQD.js", "/build/_shared/chunk-DOTR6DNH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-LLWCYAT5.js", imports: ["/build/_shared/chunk-3QKMUYJU.js", "/build/_shared/chunk-IRSJFO7P.js", "/build/_shared/chunk-TKNQNABM.js", "/build/_shared/chunk-CDEZS3UP.js", "/build/_shared/chunk-FUC7P6VA.js", "/build/_shared/chunk-WUA3ZKYN.js", "/build/_shared/chunk-SEMXCLTB.js", "/build/_shared/chunk-VXEOFHG4.js", "/build/_shared/chunk-4I45Q6Y5.js", "/build/_shared/chunk-M6SAXTWL.js", "/build/_shared/chunk-LL7M334E.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-TLBEXFRQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/print/$exe": { id: "routes/print/$exe", parentId: "root", path: "print/:exe", index: void 0, caseSensitive: void 0, module: "/build/routes/print/$exe-P4NXATR6.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/spinning/$id": { id: "routes/spinning/$id", parentId: "root", path: "spinning/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/spinning/$id-MDJWIJSX.js", imports: ["/build/_shared/chunk-CMGIMNRK.js", "/build/_shared/chunk-7V2O5DRL.js", "/build/_shared/chunk-5M2WMXU4.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/spinning/index": { id: "routes/spinning/index", parentId: "root", path: "spinning", index: !0, caseSensitive: void 0, module: "/build/routes/spinning/index-W54GWU67.js", imports: ["/build/_shared/chunk-CMGIMNRK.js", "/build/_shared/chunk-7V2O5DRL.js", "/build/_shared/chunk-5M2WMXU4.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/spinning/index_old": { id: "routes/spinning/index_old", parentId: "root", path: "spinning/index_old", index: void 0, caseSensitive: void 0, module: "/build/routes/spinning/index_old-3BJBHEAL.js", imports: ["/build/_shared/chunk-3QKMUYJU.js", "/build/_shared/chunk-LXGZIKDR.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/teste": { id: "routes/teste", parentId: "root", path: "teste", index: void 0, caseSensitive: void 0, module: "/build/routes/teste-J3GCSYIF.js", imports: ["/build/_shared/chunk-DOTR6DNH.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/treinos": { id: "routes/treinos", parentId: "root", path: "treinos", index: void 0, caseSensitive: void 0, module: "/build/routes/treinos-XNKSGV64.js", imports: ["/build/_shared/chunk-DOTR6DNH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/treinos/$exe": { id: "routes/treinos/$exe", parentId: "routes/treinos", path: ":exe", index: void 0, caseSensitive: void 0, module: "/build/routes/treinos/$exe-Q5LOM4WX.js", imports: ["/build/_shared/chunk-MMMALSPV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-B9312807.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/aluno/planejamento/$idaluno": {
    id: "routes/aluno/planejamento/$idaluno",
    parentId: "root",
    path: "aluno/planejamento/:idaluno",
    index: void 0,
    caseSensitive: void 0,
    module: idaluno_exports
  },
  "routes/aluno/planejamento/$idaluno/$editar": {
    id: "routes/aluno/planejamento/$idaluno/$editar",
    parentId: "routes/aluno/planejamento/$idaluno",
    path: ":editar",
    index: void 0,
    caseSensitive: void 0,
    module: editar_exports
  },
  "routes/aluno/planejamento/$idaluno/novo": {
    id: "routes/aluno/planejamento/$idaluno/novo",
    parentId: "routes/aluno/planejamento/$idaluno",
    path: "novo",
    index: void 0,
    caseSensitive: void 0,
    module: novo_exports
  },
  "routes/aluno/planejamento/index": {
    id: "routes/aluno/planejamento/index",
    parentId: "root",
    path: "aluno/planejamento",
    index: !0,
    caseSensitive: void 0,
    module: planejamento_exports
  },
  "routes/aluno/$treino/$maquina": {
    id: "routes/aluno/$treino/$maquina",
    parentId: "root",
    path: "aluno/:treino/:maquina",
    index: void 0,
    caseSensitive: void 0,
    module: maquina_exports
  },
  "routes/aluno/planejamento_bak": {
    id: "routes/aluno/planejamento_bak",
    parentId: "root",
    path: "aluno/planejamento_bak",
    index: void 0,
    caseSensitive: void 0,
    module: planejamento_bak_exports
  },
  "routes/aluno/spinning_bak": {
    id: "routes/aluno/spinning_bak",
    parentId: "root",
    path: "aluno/spinning_bak",
    index: void 0,
    caseSensitive: void 0,
    module: spinning_bak_exports
  },
  "routes/spinning/index_old": {
    id: "routes/spinning/index_old",
    parentId: "root",
    path: "spinning/index_old",
    index: void 0,
    caseSensitive: void 0,
    module: index_old_exports
  },
  "routes/aluno/baktreino": {
    id: "routes/aluno/baktreino",
    parentId: "root",
    path: "aluno/baktreino",
    index: void 0,
    caseSensitive: void 0,
    module: baktreino_exports
  },
  "routes/aluno/index_bak": {
    id: "routes/aluno/index_bak",
    parentId: "root",
    path: "aluno/index_bak",
    index: void 0,
    caseSensitive: void 0,
    module: index_bak_exports
  },
  "routes/aluno/$maquina": {
    id: "routes/aluno/$maquina",
    parentId: "root",
    path: "aluno/:maquina",
    index: void 0,
    caseSensitive: void 0,
    module: maquina_exports2
  },
  "routes/cadaulas/$aula": {
    id: "routes/cadaulas/$aula",
    parentId: "root",
    path: "cadaulas/:aula",
    index: void 0,
    caseSensitive: void 0,
    module: aula_exports
  },
  "routes/cadaulas/index": {
    id: "routes/cadaulas/index",
    parentId: "root",
    path: "cadaulas",
    index: !0,
    caseSensitive: void 0,
    module: cadaulas_exports
  },
  "routes/spinning/index": {
    id: "routes/spinning/index",
    parentId: "root",
    path: "spinning",
    index: !0,
    caseSensitive: void 0,
    module: spinning_exports
  },
  "routes/cadaulas/nova": {
    id: "routes/cadaulas/nova",
    parentId: "root",
    path: "cadaulas/nova",
    index: void 0,
    caseSensitive: void 0,
    module: nova_exports
  },
  "routes/spinning/$id": {
    id: "routes/spinning/$id",
    parentId: "root",
    path: "spinning/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/aluno/grupo": {
    id: "routes/aluno/grupo",
    parentId: "root",
    path: "aluno/grupo",
    index: void 0,
    caseSensitive: void 0,
    module: grupo_exports
  },
  "routes/aluno/grupo/cadaluno": {
    id: "routes/aluno/grupo/cadaluno",
    parentId: "routes/aluno/grupo",
    path: "cadaluno",
    index: void 0,
    caseSensitive: void 0,
    module: cadaluno_exports
  },
  "routes/aluno/grupo/novo": {
    id: "routes/aluno/grupo/novo",
    parentId: "routes/aluno/grupo",
    path: "novo",
    index: void 0,
    caseSensitive: void 0,
    module: novo_exports2
  },
  "routes/aluno/grupo/$id": {
    id: "routes/aluno/grupo/$id",
    parentId: "routes/aluno/grupo",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports2
  },
  "routes/aluno/index": {
    id: "routes/aluno/index",
    parentId: "root",
    path: "aluno",
    index: !0,
    caseSensitive: void 0,
    module: aluno_exports
  },
  "routes/bancotreino": {
    id: "routes/bancotreino",
    parentId: "root",
    path: "bancotreino",
    index: void 0,
    caseSensitive: void 0,
    module: bancotreino_exports
  },
  "routes/bancotreino/$grupo": {
    id: "routes/bancotreino/$grupo",
    parentId: "routes/bancotreino",
    path: ":grupo",
    index: void 0,
    caseSensitive: void 0,
    module: grupo_exports2
  },
  "routes/bancotreino/$grupo/$id": {
    id: "routes/bancotreino/$grupo/$id",
    parentId: "routes/bancotreino/$grupo",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports3
  },
  "routes/cadastro 2": {
    id: "routes/cadastro 2",
    parentId: "root",
    path: "cadastro 2",
    index: void 0,
    caseSensitive: void 0,
    module: cadastro_2_exports
  },
  "routes/index_foto": {
    id: "routes/index_foto",
    parentId: "root",
    path: "index_foto",
    index: void 0,
    caseSensitive: void 0,
    module: index_foto_exports
  },
  "routes/print/$exe": {
    id: "routes/print/$exe",
    parentId: "root",
    path: "print/:exe",
    index: void 0,
    caseSensitive: void 0,
    module: exe_exports
  },
  "routes/cadastro": {
    id: "routes/cadastro",
    parentId: "root",
    path: "cadastro",
    index: void 0,
    caseSensitive: void 0,
    module: cadastro_exports
  },
  "routes/cadastro/$exercicios": {
    id: "routes/cadastro/$exercicios",
    parentId: "routes/cadastro",
    path: ":exercicios",
    index: void 0,
    caseSensitive: void 0,
    module: exercicios_exports
  },
  "routes/especial": {
    id: "routes/especial",
    parentId: "root",
    path: "especial",
    index: void 0,
    caseSensitive: void 0,
    module: especial_exports
  },
  "routes/indexold": {
    id: "routes/indexold",
    parentId: "root",
    path: "indexold",
    index: void 0,
    caseSensitive: void 0,
    module: indexold_exports
  },
  "routes/treinos": {
    id: "routes/treinos",
    parentId: "root",
    path: "treinos",
    index: void 0,
    caseSensitive: void 0,
    module: treinos_exports
  },
  "routes/treinos/$exe": {
    id: "routes/treinos/$exe",
    parentId: "routes/treinos",
    path: ":exe",
    index: void 0,
    caseSensitive: void 0,
    module: exe_exports2
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/teste": {
    id: "routes/teste",
    parentId: "root",
    path: "teste",
    index: void 0,
    caseSensitive: void 0,
    module: teste_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
