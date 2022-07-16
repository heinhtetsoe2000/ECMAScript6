import { message, setMessage } from './message.js';
import * as cal from './cal.js';
import diff from './diff.js';


//cal.add();
//cal.multiply();
setMessage(diff(cal.a, cal.b));
//setMessage('Sorye ge ton!');

const h1 = document.createElement('h1');
h1.textContent = message

document.body.appendChild(h1)

