var User=require('./user');
var user=new User('Viktoriia','Izhovska');
console.log('firstname:'+user.first);
console.log('lastname:'+user.last);
user.fullName();
