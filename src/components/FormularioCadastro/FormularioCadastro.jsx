import { useEffect, useState } from "react";

import { Typography, Stepper, Step, StepLabel } from "@mui/material";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ aoEnviar, validacoes }) {
  const [etapa, setEtapa] = useState(0);
  const [dados, setDados] = useState({});

  useEffect(() => {
    if (etapa === formularios.length - 1) {
      aoEnviar(dados);
    }
  });

  const formularios = [
    <DadosUsuario validacoes={validacoes} aoEnviar={controlarDados} />,
    <DadosPessoais validacoes={validacoes} aoEnviar={controlarDados} />,
    <DadosEntrega validacoes={validacoes} aoEnviar={controlarDados} />,
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
