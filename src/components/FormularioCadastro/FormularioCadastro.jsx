import { useEffect, useState } from "react";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ onSubmit, validarCpfForm }) {
  const [etapa, setEtapa] = useState(0);
  const [dados, setDados] = useState({});

  useEffect(() => {
    console.log(dados);
  });

  const formularios = [
    <DadosUsuario onSubmit={controlarDados} />,
    <DadosPessoais validarCpfForm={validarCpfForm} onSubmit={controlarDados} />,
    <DadosEntrega onSubmit={controlarDados} />,
  ];

  function controlarDados(dadosColetados) {
    setDados({ ...dados, ...dadosColetados });
    controlarEtapa();
  }

  function controlarEtapa() {
    setEtapa(etapa + 1);
  }

  return <>{formularios[etapa]}</>;
}

export default FormularioCadastro;
