// Elementos
const SELECTORS = {
  form: "#form-cadastro",
  name: "#nome",
  btnSubmit: ".btn-acesso"
}

const validator = new JustValidate(SELECTORS.form, {
    errorFieldCssClass: 'just-validate-error-field',
    errorLabelStyle: {}, 
});

// Validações
validator
  .addField(SELECTORS.name, [
    { rule: 'required', errorMessage: 'O nome é obrigatório' },
    { rule: 'minLength', value: 3, errorMessage: 'Mínimo de 3 caracteres' },
    {
      // Validador para garantir Nome + Sobrenome
      validator: (value) => {
        const words = value.trim().split(/\s+/);
        return words.length >= 2 && words[1].length > 0;
      },
      errorMessage: 'Informe seu nome completo',
    }
  ])

 .onSuccess((event) => {
    event.preventDefault();
    showSuccessAlert();
 });

// Funções
function showSuccessAlert() {
  Swal.fire({
    title: "Dados validados!",
    text: "Nome completo verificado com sucesso.",
    icon: "success",
    confirmButtonColor: "#004a99"
  });
}