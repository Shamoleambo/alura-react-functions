import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ onSubmitForm, validarCpfForm }) {
  return (
    <>
      <DadosPessoais
        onSubmitForm={onSubmitForm}
        validarCpfForm={validarCpfForm}
      />
      <DadosUsuario />
    </>
  );
}

export default FormularioCadastro;
