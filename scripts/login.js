// Elementos
const SELECTORS = {
  form: "#form-acesso",
  registration: "#matricula",
  password: "#senha",
  btnSubmit: "#btn-acesso"
}

const validator = new JustValidate(SELECTORS.form, {
    errorFieldCssClass: 'just-validate-error-field',
    errorLabelStyle: {}, 
});

// Validações
validator
  .addField(SELECTORS.registration, [
  { rule: 'required', errorMessage: 'Campo obrigatório' },
  { rule: 'number', errorMessage: 'Use apenas números' },
  { rule: 'minLength', value: 8, errorMessage: 'A matrícula deve ter 8 dígitos' },
  { rule: 'maxLength', value: 8, errorMessage: 'A matrícula deve ter 8 dígitos' },
  ])

  .addField(SELECTORS.password, [
    { rule: 'required', errorMessage: 'Campo obrigatório' },
    { 
      rule: 'customRegexp', 
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 
      errorMessage: 'A senha deve conter no mínimo oito caracteres, sendo pelo menos uma letra e um número.' 
    }
  ])

 .onSuccess((event) => {
    event.preventDefault();
    showSuccessAlert();
 });

// Funções
function showSuccessAlert() {
  Swal.fire({
    title: "Matrícula validada com sucesso! Preparando acesso...",
    icon: "success",
  });
}