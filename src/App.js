import { Container, Typography } from "@mui/material";
import "./App.css";
import "@fontsource/roboto/300.css";

import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário cadastro
      </Typography>
      <FormularioCadastro
        onSubmitForm={onSubmitFormCadastro}
        validarCpfForm={validarCpfFormCadastro}
      />
    </Container>
  );
}

const onSubmitFormCadastro = (dados) => {
  console.log(dados);
};

const validarCpfFormCadastro = (cpf) => {
  let valido = true;
  let texto = "";
  if (cpf.length !== 11) {
    valido = false;
    texto = "CPF deve conter 11 dígitos";
  }

  return { cpf: { valido, texto } };
};

export default App;
