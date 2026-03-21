const validator = new JustValidate('#form-acesso', {
    errorFieldCssClass: 'just-validate-error-field',
    errorLabelStyle: {}, 
});

validator
  .addField('#matricula', [
  { rule: 'required', errorMessage: 'Campo obrigatório' },
  { rule: 'number', errorMessage: 'Use apenas números' },
  { rule: 'minLength', value: 8, errorMessage: 'A matrícula deve ter 8 dígitos' },
  { rule: 'maxLength', value: 8, errorMessage: 'A matrícula deve ter 8 dígitos' },
])

 .onSuccess((event) => {
    event.preventDefault();
  alert("Matrícula validada com sucesso! Preparando acesso...");
 });