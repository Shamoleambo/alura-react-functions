import { useState } from "react";
import { Button, TextField, FormControlLabel, Switch } from "@mui/material";

function FormularioCadastro({ onSubmitFormCadastro }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitFormCadastro({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={sobrenome}
        onChange={(e) => setSobrenome(e.target.value)}
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={(e) => setCpf(e.target.value)}
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            name="promocoes"
            onChange={(e) => setPromocoes(e.target.checked)}
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            name="novidades"
            onClick={() => setNovidades(() => !novidades)}
          />
        }
      />

      <Button variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
