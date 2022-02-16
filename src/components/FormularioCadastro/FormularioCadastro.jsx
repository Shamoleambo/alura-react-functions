import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ onSubmitForm, validarCpfForm }) {
  return (
    <>
      <DadosPessoais
        onSubmitForm={onSubmitForm}
        validarCpfForm={validarCpfForm}
      />
      <DadosUsuario />
      <DadosEntrega />
    </>
  );
}

export default FormularioCadastro;
