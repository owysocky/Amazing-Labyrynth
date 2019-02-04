function Node (id){
  this.id = id,
  this.edges = [],
  this.visited = false
}

var nodes = [];
function traverceGraphInDeep(node){
  node.visited = true;
  for (var i = 0; i < node.edges.length; i++) {
    if (node.edges[i].visited === false){
      traverceGraphInDeep(node.edges[i]);
    };
  };
};

function Queue (){
  this.array = []
}

Queue.prototype.enqueue = function(item){
  this.array.push(item);
}

Queue.prototype.dequeue = function(){
  this.array.shift();
}

Queue.prototype.first = function(){
  if (!this.isEmpty()){
    return this.array[0];
  }
  return "No elements in the Queue";
}

Queue.prototype.isEmpty = function(){
  return this.array.length == 0;
}

function traverceGraphInWidth(node){
  var queue = new Queue;
  queue.enqueue(node);
  while (!queue.isEmpty()){
    queue.first().visited = true;
    for (var i = 0; i < queue.first().edges.length; i++) {
      if (queue.first().edges[i].visited === false){
        queue.enqueue(queue.first().edges[i]);
      }
    };
    queue.dequeue();
  }
}

var cards = new Array(3);
for (var k = 0; k < 3; k++) {
  cards[k] = new Array(3);
};

$(document).ready(function(){

  $("#traverse").click(function(){

    var id = 0;
    for (var i = 0; i < cards.length; i++) {
      for (var j = 0; j < cards[i].length; j++) {
        var card = new Card(id, i, j);
        var node = new Node(id);
        card.node = node;
        id += 1;
        cards[i][j] = card;
      };
    };

    cards[0][0].rightWall = true;
    cards[1][0].bottomWall = true;
    cards[2][1].topWall = true;
    cards[1][2].leftWall = true;
    cards[2][1].rightWall = true;

    for (var i = 0; i < cards.length; i++) {
      for (var j = 0; j < cards[i].length; j++) {
        cards[i][j].makeGraph();
      };
    };

    // console.log("Deep");
    // traverceGraphInDeep(nodes[0]);

     console.log("Width");
     traverceGraphInWidth(nodes[0]);
     console.log(nodes);
     console.log(nodes[8]);
  });
});
