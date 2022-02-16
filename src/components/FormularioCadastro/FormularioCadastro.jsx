import { useState } from "react";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

import { Typography } from "@mui/material";

function FormularioCadastro({ validarCpfForm }) {
  let [etapa, setEtapa] = useState(0);

  function controlarEtapa() {
    setEtapa(() => ++etapa);
  }

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario onSubmit={controlarEtapa} />;
      case 1:
        return (
          <DadosPessoais
            validarCpfForm={validarCpfForm}
            onSubmit={controlarEtapa}
          />
        );
      case 2:
        return <DadosEntrega onSubmit />;
      default:
        return <Typography>Erro ao selecionar formulário</Typography>;
    }
  }

  return <>{formularioAtual(etapa)}</>;
}

export default FormularioCadastro;
