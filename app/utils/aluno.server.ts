// @ts-ignore
import { endOfDay, format, getWeek } from "date-fns";
import { prisma } from "./prisma.server";
import fetch from "@remix-run/web-fetch";
import { v4 as uuidv4 } from "uuid";

const EVO_AUTH = process.env.NEXT_PUBLIC_EVO_AUTH;

export const getAluno = async (matricula: number) => {
  const aluno = await fetch(
    `https://evo-integracao.w12app.com.br/api/v1/members/basic?idMember=${matricula}&take=1&skip=0`,

    {
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(EVO_AUTH as string),
      },
    }
  );

  // return Object.assign({}, aluno.json());
  return aluno.json();
};

export const gstBasico = async (matricula: number) => {
  if (!matricula) {
    return null;
  }
  try {
    const aluno = await fetch(
      `https://evo-integracao.w12app.com.br/api/v1/members/${matricula}`,
      // `https://evo-integracao.w12app.com.br/api/v1/members/basic?idMember=${matricula}take=50&skip=0`,

      {
        method: "GET",
        headers: {
          Authorization: "Basic " + btoa(EVO_AUTH as string),
        },
      }
    );
    // console.log(aluno.status);
    // if (aluno.status === 400) {
    //   throw "Aluno não Encontrado";
    // }

    return aluno.json();
  } catch (error) {
    throw error;
  }
};
export const getAlunoGym = async (matricula: number) => {
  if (!matricula) {
    return null;
  }
  try {
    const aluno = await fetch(
      // `https://evo-integracao.w12app.com.br/api/v1/members/${matricula}`,
      `https://evo-integracao.w12app.com.br/api/v1/members?take=50&skip=0&idsMembers=${matricula}&onlyPersonal=false&showActivityData=false`,
      {
        method: "GET",
        headers: {
          Authorization: "Basic " + btoa(EVO_AUTH as string),
        },
      }
    );
    // if (aluno.status === 400) {
    //   throw "Aluno não Encontrado";
    // }
    return aluno.json();
  } catch (error) {
    throw error;
  }
};

export const getAlunoNome = async (nome: any) => {
  if (!nome) {
    return null;
  }
  try {
    const aluno = await fetch(
      `https://evo-integracao.w12app.com.br/api/v1/members?name=${nome}&status=1&take=50&skip=0&onlyPersonal=false`,
      {
        method: "GET",
        headers: {
          Authorization: "Basic " + btoa(EVO_AUTH as string),
        },
      }
    );
    // if (aluno.status === 400) {
    //   throw "Aluno não Encontrado";
    // }
    return aluno.json();
  } catch (error) {
    throw error;
  }
};

export const getTreinos = async (semana: number) => {
  return prisma.treinos.findMany({
    where: {
      semana: semana,
    },
  });
};
export const getTreinosSemanal = async (semana: number) => {
  return prisma.treinos.findMany({
    where: {
      AND: [
        { semana: semana },
        {
          grupo: {
            contains: "SEMANA",
          },
        },
      ],
    },
  });
};

export const updateHistorico = async (historico: any) => {
  return prisma.historico.upsert({
    where: {
      aluno: parseInt(historico.aluno),
    },
    update: {
      treinos: {
        push: {
          treino: historico.treino ? historico.treino : historico.treinolivre,
          data: new Date(),
          semana: getWeek(new Date()),
        },
      },
    },
    create: {
      aluno: parseInt(historico.aluno),
      treinos: {
        treino: historico.treino,
        data: new Date(),
        semana: getWeek(new Date()),
      },
    },
  });
};

export const updateHistoricoExe = async (historico: any) => {
  return prisma.historicoExercicios.upsert({
    where: {
      aluno: parseInt(historico.aluno),
    },
    update: {
      histexe: {
        push: {
          grupo: historico.treino,
          data: new Date(),
          carga: historico.carga,
          nome: historico.exenome,
          obs: historico.obs,
        },
      },
    },
    create: {
      aluno: parseInt(historico.aluno),
      histexe: {
        grupo: historico.treino,
        data: new Date(),
        carga: historico.carga,
        nome: historico.exenome,
        obs: historico.obs,
      },
    },
  });
};

export const cadGrupo = async (grupo: any) => {
  const id = grupo.id ? grupo.id : "000000000000000000000000";
  const inicio = new Date(grupo.inicio);
  const fim = new Date(grupo.fim);
  console.log(grupo);
  return prisma.grupo.upsert({
    where: {
      id: id,
    },
    update: {
      nome: grupo.grupo,
      numero: Number(grupo.numero),
      inicio: inicio,
      fim: fim,
    },
    create: {
      nome: grupo.grupo,
      numero: Number(grupo.numero),
      inicio: inicio,
      fim: fim,
    },
  });
};
export const delGrupo = async (grupo: any) => {
  return prisma.grupo.delete({ where: { id: grupo.id } });
};
// export const cadGrupo = async (grupo: any) => {
//   return prisma.grupo.create({
//     data: {
//       nome: grupo.grupo,
//       numero: Number(grupo.numero),
//     },
//   });
// };
export const updateGrupo = async (aluno: any) => {
  // const { photoUrl } = await getAluno(aluno.idMember);
  // const arrAluno = await getAluno(aluno.idMember);
  // const { photoUrl } = arrAluno[0];

  return prisma.grupo.update({
    where: {
      id: aluno.grupo,
    },
    data: {
      alunos: {
        push: {
          nome: aluno.nome,
          idMember: Number(aluno.idMember),
          photo: aluno.photo,
          // photo: photoUrl ? photoUrl : "",
        },
      },
    },
  });
};

export const getGrupo = async (grupo: any) => {
  return prisma.grupo.findUnique({
    where: {
      id: grupo,
    },
  });
};
export const getGrupos = async () => {
  return prisma.grupo.findMany();
};

export const deleteAluno = async (aluno: any) => {
  return prisma.grupo.update({
    where: {
      id: aluno.id,
    },
    data: {
      alunos: {
        deleteMany: {
          where: {
            idMember: Number(aluno.idMember),
          },
        },
      },
    },
  });
};

export const updatePlanejamento = async (historico: any, dias: any) => {
  const treino = historico.treinolivre
    ? historico.treinolivre.toUpperCase()
    : historico.treino.toUpperCase();

  return prisma.historico.upsert({
    where: {
      aluno: parseInt(historico.aluno),
    },
    update: {
      planejados: {
        push: {
          treinoP: treino,
          dia: dias,
          id: uuidv4(),
          feito: false,
        },
      },
    },
    create: {
      aluno: parseInt(historico.aluno),
      planejados: {
        treinoP: treino,
        dia: dias,
        id: uuidv4(),
        // data: new Date(Date.parse(historico.data)),
        feito: false,
      },
    },
  });
};

export const TreinoPlanejadoFeito = async (treino: any) => {
  let dataformatada = "";
  treino.data
    ? (dataformatada = format(
        endOfDay(new Date(treino.data)),
        "yyyy-MM-dd'T'03:00:00.000+00:00"
      ))
    : (dataformatada = dataformatada =
        format(endOfDay(new Date()), "yyyy-MM-dd'T'03:00:00.000+00:00"));

  const temtreino = prisma.historico.findMany({
    where: {
      AND: [
        { aluno: parseInt(treino.aluno) },
        {
          planejados: {
            some: { treinoP: treino.treino, data: dataformatada },
          },
        },
      ],
    },
  });
  if ((await temtreino).length !== 0) {
    const tre = prisma.historico.update({
      where: {
        aluno: parseInt(treino.aluno),
      },
      data: {
        planejados: {
          updateMany: {
            where: {
              treinoP: treino.treino,
              data: dataformatada,
            },
            data: { feito: true },
          },
        },
      },
    });

    return tre;
  } else {
    return prisma.historico.upsert({
      where: {
        aluno: parseInt(treino.aluno),
      },
      update: {
        planejados: {
          push: {
            treinoP: treino.treino,
            data: dataformatada,
            feito: true,
          },
        },
      },
      create: {
        aluno: parseInt(treino.aluno),
        planejados: {
          treinoP: treino.treino,
          data: dataformatada,
          feito: true,
        },
      },
    });
  }
};
export const updatePlanejamentoTreino1 = async (historico: any, dias: any) => {
  const dataformatada = format(
    endOfDay(new Date()),
    "yyyy-MM-dd'T'03:00:00.000+00:00"
  );

  const his = prisma.historico.update({
    where: {
      AND: [
        { aluno: parseInt(historico.aluno) },
        {
          planejados: {
            some: { id: historico.id },
          },
        },
      ],
    },
    data: {
      planejados: {
        set: {
          dia: dias,
        },
      },
    },
  });

  return his;
};

export const updatePlanejamentoTreino = async (treino: any, dias: any) => {
  return prisma.historico.update({
    where: {
      aluno: parseInt(treino.aluno),
    },

    data: {
      planejados: {
        updateMany: {
          where: {
            id: treino.id,
          },
          data: {
            dia: dias,
          },
        },
      },
    },
  });
};
export const updateFicha = async (ficha: any) => {
  return prisma.historico.upsert({
    where: {
      aluno: parseInt(ficha.aluno),
    },
    update: {
      historico: ficha.historico,
      nivel: ficha.nivel,
      patologias: ficha.patologias,
    },
    create: {
      aluno: parseInt(ficha.aluno),
      historico: ficha.historico,
      nivel: ficha.nivel,
      patologias: ficha.patologias,
    },
  });
};

export const getHistoricoSemana = async () => {
  return prisma.historico.findMany();
};
// export const getHistoricoSemana = async () => {
//   return prisma.historico.findMany({
//     where: {
//       treinos: {
//         some: { semana: getWeek(new Date()) },
//       },
//     },
//   });
// };

export const getHistorico = async (historico: any) => {
  if (!historico) {
    return null;
  }

  return prisma.historico.findUnique({
    where: {
      aluno: parseInt(historico),
    },
  });
};

export const getHistoricoExe = async (historico: any) => {
  if (!historico) {
    return null;
  }

  return prisma.historicoExercicios.findUnique({
    where: {
      aluno: parseInt(historico),
    },
  });
};

export const deleteTreinoPlanejado = async (treino: any) => {
  return prisma.historico.update({
    where: {
      aluno: parseInt(treino.aluno),
    },
    data: {
      planejados: {
        deleteMany: {
          where: {
            id: treino.id,
          },
        },
      },
    },
  });
};
export const deleteTreinoPlanejadoDia = async (treino: any) => {
  const tre = prisma.historico.update({
    where: {
      aluno: parseInt(treino.aluno),
    },
    data: {
      planejados: {
        updateMany: {
          where: {
            treinoP: treino.treino,
          },
          data: { dia: "" },
        },
      },
    },
  });
  return tre;
};
