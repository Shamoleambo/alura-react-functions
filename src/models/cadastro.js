const validarCPF = (cpf) => {
  let valido = true;
  let texto = "";
  if (cpf.length !== 11) {
    valido = false;
    texto = "CPF deve conter 11 dígitos";
  }

  return { cpf: { valido, texto } };
};

const validarSenha = (senha) => {
  if (senha.length < 4 || senha.length > 72) {
    return { valido: false, texto: "A senha deve ter entre 4 e 72 digitios" };
  } else {
    return { valido: true, texto: "" };
  }
};

export { validarCPF, validarSenha };
