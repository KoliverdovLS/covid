import { dashBoard } from './dashboard';
import "@babel/polyfill";

const container = document.createElement('div');
container.classList.add('container');
container.textContent = 'kkkk';
console.log(dashBoard());
document.body.appendChild(container);