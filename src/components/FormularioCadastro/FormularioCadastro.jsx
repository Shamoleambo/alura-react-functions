import { useState } from "react";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ onSubmit, validarCpfForm }) {
  let [etapa, setEtapa] = useState(0);

  const formularios = [
    <DadosUsuario onSubmit={onSubmit} />,
    <DadosPessoais validarCpfForm={validarCpfForm} onSubmit={onSubmit} />,
    <DadosEntrega onSubmit={onSubmit} />,
  ];

  function controlarEtapa() {
    setEtapa(() => ++etapa);
  }

  return <>{formularios[etapa]}</>;
}

export default FormularioCadastro;
