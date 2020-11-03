var wrapper = document.body;
var data = [
  {
    name:"Protagonist",
    codename:"Joker"
  },
  {
    name:"Anne",
    codename:"Panther"
  },
  {
    name:"Ryuji",
    codename:"Skull"
  }
];
var elements = [];

function character(name,codename) {
  var that=this;
  this.name = name;
  this.codename = codename;
  this.ele = document.createElement("div");
  this.nameEle = document.createElement("div");
  this.codenameEle = document.createElement("div");
  this.nameEle.innerHTML = this.name;

  this.ele.appendChild(this.nameEle);
  this.ele.appendChild(this.codenameEle);
  
  this.ele.addEventListener("click", function(){
    that.changeCodename();
  })
  wrapper.appendChild(this.ele);
}

character.prototype.changeCodename = function () {
    this.nameEle.innerHTML = this.codename;
};

character.prototype.changeName = function () {
    this.nameEle.innerHTML = this.name;
};

for(var i=0; i<data.length;i++){
  elements.push(new character(data[i].name,data[i].codename))
}