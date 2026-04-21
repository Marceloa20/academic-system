// Elementos
const SELECTORS = {
  form: "#form-cadastro",
  name: "#nome",
  email: "#email",
  password: "#senha",
  btnSubmit: ".btn-acesso"
}

const validator = new JustValidate(SELECTORS.form, {
    errorFieldCssClass: 'just-validate-error-field',
    errorLabelStyle: {}, 
});

// Validações
validator
  // Campo nome
  .addField(SELECTORS.name, [
    { rule: 'required', errorMessage: 'O nome é obrigatório.' },
    { rule: 'minLength', value: 3, errorMessage: 'Mínimo de 3 caracteres.' },
    {
      // Validador para garantir Nome + Sobrenome
      validator: (value) => {
        const words = value.trim().split(/\s+/);
        return words.length >= 2 && words[1].length > 0;
      },
      errorMessage: 'Informe seu nome completo.',
    }
  ])

  // Campo e-mail
  .addField(SELECTORS.email, [
    { rule: 'required', errorMessage: 'O e-mail é obrigatório.' },
    { rule: 'email', errorMessage: 'O e-mail possui formato inválido.' },
  ])

  // Campo senha
  .addField(SELECTORS.password, [
    { rule: 'required', errorMessage: 'A senha é obrigatória.' },
    { rule: 'minLength', value: 8, errorMessage: 'A senha deve conter no mínimo 8 caracteres.' },
    { rule: 'strongPassword', errorMessage: 'A senha deve conter no mínimo oito caracteres, sendo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.' }
  ])

 .onSuccess((event) => {
    event.preventDefault();
    showSuccessAlert()
    .then(() => { // Espera o clique no ok do alert para depois resetar o formulário. 
      resetForm()
    })
 })

 

// Funções
function showSuccessAlert() {
  return Swal.fire({
    title: "Cadastro realizado com sucesso.",
    text: "Seus dados foram cadastrados.",
    icon: "success",
    confirmButtonColor: "#004a99"
  });
}

function resetForm() {
  const form = document.querySelector(SELECTORS.form);
  const name = document.querySelector(SELECTORS.name);
  form.reset();
  name.focus()
}
