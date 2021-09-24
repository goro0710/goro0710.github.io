import { create, createReportList } from './modules/canvas.js';
import { name, draw as drawSquare, reportArea as reportSquareArea, reportPerimeter as reportSquarePerimeter} from './modules/square.js';
import randomSquare from './modules/square.js';

let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = drawSquare(myCanvas.ctx, 50, 50, 100, 'blue');
reportSquareArea(square1.length, reportList);
reportSquarePerimeter(square1.length, reportList);

// Use the default
let square2 = randomSquare(myCanvas.ctx);
