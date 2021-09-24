import { create, createReportList } from './modules/canvas.js';
import { Square } from './modules/square.js';

let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = new Square();
square1.draw(myCanvas.ctx, 50, 50, 100, 'blue');
square1.reportArea(square1.length, reportList);
square1.reportPerimeter(square1.length, reportList);
