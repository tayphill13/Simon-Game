// Back End Logic

export function Simon()  {
  this.colors = ["red", "blue", "green", "yellow"];
  this.userPattern = [];
  this.aIPattern = [];
  this.score = 0;
}

Simon.prototype.randomColor = function() {
  let randomPattern = Math.floor(Math.random()*4);
  this.aIPattern.push(this.colors[randomPattern]);
};
// Simon.prototype.arrayGo() {
//   for (let i=0; i>= this.colors.length; i++)
// }