import './styles.css';
import './css/main.css';
import Saludar from './classes/saludar.js';

const saludo = new Saludar('Brayan');
const variablePrueba = 'nani';

const crearTitulo = (nombre) => {
  const titulo = document.createElement('h1');
  titulo.innerText = `Hola, mi nombre es ${nombre}`;
  document.body.append(titulo);
};

crearTitulo(saludo.nombre);
console.log(variablePrueba);
