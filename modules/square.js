export class Square{
  constructor(ctx, length, x, y, color){
    this.ctx = ctx;
    this.length = length;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  name = 'square';

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(x, y, length, length);
  
    return {
      length: this.length,
      x: this.x,
      y: this.y,
      color: this.color
    };
  }
  
  random(min, max) {
     let num = Math.floor(Math.random() * (max - min)) + min;
     return num;
  }
  
  reportArea(listId) {
    let listItem = document.createElement('li');
    listItem.textContent = `${name} area is ${this.length * this.length}px squared.`
  
    let list = document.getElementById(listId);
    list.appendChild(listItem);
  }
  
  reportPerimeter(listId) {
    let listItem = document.createElement('li');
    listItem.textContent = `${name} perimeter is ${this.length * 4}px.`
  
    let list = document.getElementById(listId);
    list.appendChild(listItem);
  }
  
  randomSquare(ctx) {
    let color1 = random(0, 255);
    let color2 = random(0, 255);
    let color3 = random(0, 255);
    let color = `rgb(${color1},${color2},${color3})`
    this.ctx.fillStyle = color;
  
    let x = random(0, 480);
    let y = random(0, 320);
    let length = random(10, 100);
    this.ctx.fillRect(x, y, length, length);
  
    return {
      length: this.length,
      x: this.x,
      y: this.y,
      color: this.color
    };
  }
}