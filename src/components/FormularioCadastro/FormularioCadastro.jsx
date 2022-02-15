import { useState } from "react";
import { Button, TextField, FormControlLabel, Switch } from "@mui/material";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(nome, sobrenome);
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
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch name="novidades" defaultChecked />}
      />

      <Button variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
