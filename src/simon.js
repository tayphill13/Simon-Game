// Back End Logic

export function Simon()  {
  this.colors = ["red", "blue", "green", "yellow"];
  this.userPattern = [];
  this.aIPattern = [];
}

Simon.prototype.randomColor = function() {
  let randomPattern = Math.floor(Math.random()*4);
  this.aIPattern.push(this.colors[randomPattern]);
};

Simon.prototype.compareColors = function() {
  if(this.aIPattern.length!=this.userPattern.length)
    return "False";
  else {
    for(let i=0;i<this.aIPattern.length;i++) 
      if(this.aIpattern[i]!=this.userPattern[i])
        return "False";
    return "True";
  }
};