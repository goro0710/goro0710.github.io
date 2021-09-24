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
    this.ctx.fillRect(this.x, this.y, this.length, this.length);
  
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
  
  randomSquare() {
    let color1 = Math.floor(Math.random(0, 256));
    let color2 = Math.floor(Math.random(0, 256));
    let color3 = Math.floor(Math.random(0, 256));
    let color = `rgb(${color1},${color2},${color3})`
    this.ctx.fillStyle = color;
  
    let x = Math.floor(Math.random(0, 481));
    let y = Math.floor(Math.random(0, 321));
    let length = Math.floor(Math.random(0, 101));
    this.ctx.fillRect(x, y, length, length);
  
    return {
      length: this.length,
      x: this.x,
      y: this.y,
      color: this.color
    };
  }
}