function Card(id, x, y){
  this.id = id,
  this.x = x,
  this.y = y,
  this.rightWall = false,
  this.leftWall = false,
  this.topWall = false,
  this.bottomWall = false
}

Card.prototype.makeGraph = function(){
  nodes.push(this.node);
  var x = this.x - 1;
  console.log(cards);
  console.log(this);
  if (x >= 0 && cards[x][this.y].bottomWall === false && this.topWall === false) {
    this.node.edges.push(cards[x][this.y].node);
  }
  x = this.x + 1;
  if (x <= 2 && cards[x][this.y].topWall === false && this.bottomWall === false) {
    this.node.edges.push(cards[x][this.y].node);
  }
  var y = this.y - 1;
  if (y >= 0 && cards[this.x][y].rightWall === false && this.leftWall === false) {
    this.node.edges.push(cards[this.x][y].node);
  }
  y = this.y + 1;
  if (y <= 2 && cards[this.x][y].leftWall === false && this.rightWall === false) {
    this.node.edges.push(cards[this.x][y].node);
  }
};
