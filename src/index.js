import './styles.css';
import './css/saludar.css';
import Saludar from './components/saludar.js';

const saludo = new Saludar('Brayan');

const crearTitulo = (nombre) => {
  const titulo = document.createElement('h1');
  titulo.innerText = `Hola, mi nombre es ${nombre}`;
  document.body.append(titulo);
};

crearTitulo(saludo.nombre);
