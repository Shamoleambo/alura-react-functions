import { useState } from "react";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

import { Typography } from "@mui/material";

function FormularioCadastro({ onSubmitForm, validarCpfForm }) {
  const [etapa, setEtapa] = useState(1);

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario />;
      case 1:
        return (
          <DadosPessoais
            onSubmitForm={onSubmitForm}
            validarCpfForm={validarCpfForm}
          />
        );
      case 2:
        return <DadosEntrega />;
      default:
        return <Typography>Erro ao selecionar formulário</Typography>;
    }
  }

  return <>{formularioAtual(etapa)}</>;
}

export default FormularioCadastro;
