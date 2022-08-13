const fechaHoy = new Date();

const fechaNacimiento = new Date (1989, 09, 29);

const fechaComparación = fechaHoy > fechaNacimiento;

const diaNacimiento = fechaNacimiento.getDate();

const mesNacimiento = fechaNacimiento.getMonth() + 1;

const anyoNacimiento = fechaNacimiento.getFullYear();

