import { Container, Typography } from "@mui/material";
import "./App.css";
import "@fontsource/roboto/300.css";

import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { validarCPF, validarSenha } from "./models/cadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário cadastro
      </Typography>
      <FormularioCadastro
        onSubmit={onSubmitForm}
        validacoes={{ cpf: validarCPF, senha: validarSenha }}
      />
    </Container>
  );
}

const onSubmitForm = (dados) => {
  console.log(dados);
};

export default App;
