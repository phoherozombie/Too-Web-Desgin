function great(name, callback) {
    console.log('Hello' + name  + '!');
    callback();

}
function sayGoodBye() { 
    console.log('Goodbye!');
}
great('Alice', sayGoodBye);

// function A(callback){
//     const kq = 5+6;
//     callback(kq);
// }
// function B(kq){
//     console.log('hello kq: ' + kq);

// }
// A(B)