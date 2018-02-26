function Person(firstname,lastname){
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('This function is invoked.');
}
Person.prototype.getFullName = function () {
  return this.firstname + ' '+ this.lastname;
}
var teja = new Person('Teja', 'Reddy');
console.log(teja);
var teju = new Person('Teju','Reddy');
console.log(teju);
Person.prototype.getFormalFullName = function(){
return this.lastname+ ', '+this.firstname;
}
console.log(teja.getFormalFullName);
console.log(teju.getFullName);
