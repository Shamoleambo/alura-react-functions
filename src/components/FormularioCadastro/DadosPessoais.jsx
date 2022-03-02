import { useState } from "react";
import { Button, TextField, FormControlLabel, Switch } from "@mui/material";

function DadosPessoais({ onSubmit, validacoes }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <TextField
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={sobrenome}
        onChange={(e) => setSobrenome(e.target.value)}
      />
      <TextField
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        fullWidth
        onChange={(e) => setCpf(e.target.value)}
        onBlur={validarCampos}
      />

      <FormControlLabel
        label="Promoções"
        name="promocoes"
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
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
