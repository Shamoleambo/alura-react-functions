import { useState } from "react";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

import { Typography } from "@mui/material";

function FormularioCadastro({ onSubmit, validarCpfForm }) {
  let [etapa, setEtapa] = useState(0);

  const formularios = [
    <DadosUsuario onSubmit={controlarEtapa} />,
    <DadosPessoais validarCpfForm={validarCpfForm} onSubmit={controlarEtapa} />,
    <DadosEntrega onSubmit={onSubmit} />,
  ];

  function controlarEtapa() {
    setEtapa(() => ++etapa);
  }

  return <>{formularios[etapa]}</>;
}

export default FormularioCadastro;
