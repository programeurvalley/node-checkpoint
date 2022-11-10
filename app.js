const fs = require('fs')
const http = require('http')
const generator = require('generate-password');
const nodemailer = require('nodemailer');

const port = 3000
var msg = require('./hello-world.js');
var snd = require('./email-sender ')

// Task 1
console.log(msg);

var password = generator.generate({
	length: 10,
	numbers: true
});

// Task 2
const server = http.createServer(function(req , res){
    res.write('<h1>Hello Node!!!!</h1>\n')
    res.end()
})

// Task 3
fs.writeFile("welcome.txt","Hello Node",function (err) {
    if (err) throw err;
})
fs.readFile('welcome.txt', 'utf8', function(err, data){
    console.log(data);
})

// Task 4
fs.writeFile('password-generator.txt', password , (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("\nPassword is : ",
        fs.readFileSync("password-generator.txt", "utf8"));
    }
} )

// Task 5
snd.Sender()


server.listen(port , function(error){
    if(error){
        console.log('Something went wrong', error)
    }else{
        console.log('Server is listening on port' + port)
    }
})