import { TextField, Button } from "@mui/material";

function DadosUsuario({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        id="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button value="proximo" type="submit" variant="contained">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
