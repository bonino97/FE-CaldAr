export const required = (value) => (value ? undefined : 'Valor r equerido');

export const email = (value) =>
  /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value)
    ? undefined
    : 'Email invalido';
