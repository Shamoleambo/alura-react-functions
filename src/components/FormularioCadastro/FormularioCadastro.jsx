import { useEffect, useState } from "react";

import { Typography, Stepper, Step, StepLabel } from "@mui/material";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ onSubmit, validarCpfForm }) {
  const [etapa, setEtapa] = useState(0);
  const [dados, setDados] = useState({});

  useEffect(() => {
    if (etapa === formularios.length - 1) {
      onSubmit(dados);
    }
  });

  const formularios = [
    <DadosUsuario onSubmit={controlarDados} />,
    <DadosPessoais validarCpfForm={validarCpfForm} onSubmit={controlarDados} />,
    <DadosEntrega onSubmit={controlarDados} />,
    <Typography variant="h5">Obrigado pelo Cadastro</Typography>,
  ];

  function controlarDados(dadosColetados) {
    setDados({ ...dados, ...dadosColetados });
    controlarEtapa();
  }

  function controlarEtapa() {
    setEtapa(etapa + 1);
  }

  return (
    <>
      <Stepper activeStep={etapa}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finlização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapa]}
    </>
  );
}

export default FormularioCadastro;
