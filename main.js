import { create, createReportList } from './modules/canvas.js';
import { Square } from './modules/square.js';

let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = new Square();
square1.draw();
square1.reportArea(reportList);
square1.reportPerimeter(reportList);
