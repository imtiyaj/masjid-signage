'use strict';

var nodemailer = require("nodemailer"),
    rest = require('./restware');
// server.js (Express 4.0)
var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');


var app            = express();

app.use(express.static(__dirname + '/.')); 	// set the static files location /public/img will be /img for users
app.use(bodyParser()); 						// pull information from html in POST

app.use(methodOverride()); 					// simulate DELETE and PUT

app.listen(8002);
console.log('masjid-signage listening on port 5000'); 			// shoutout to the user

app.post('/contact', function(req, res){
    console.log(req.body)
    sendemail(req,res)
});
// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "pisignage@gmail.com",
        pass: "hePvkmeFIphc2"
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: "Pi Signage ✔ <pisignage@ariemtech.com>", // sender address
    to: "imtiyaj@ariemtech.com", // list of receivers
    //to: "imtiyaj@ariemtech.com", // list of receivers
    subject: "Email from pisignage.com contact form", // Subject line
    text: "Hello world ✔" // plaintext body
    // html: "<b>Hello world ✔</b>" // html body
}

function sendemail (req,res) {
// send mail with defined transport object
    mailOptions.from=req.body.email;
    mailOptions.text="Email: "+req.body.email+'\r\n';
    if (req.body.name)
        mailOptions.text += "Name: "+req.body.name+'\r\n';
    if (req.body.phone)
        mailOptions.text += "Phone: "+req.body.phone+'\r\n';
    if (req.body.message)
        mailOptions.text += "Message: "+req.body.message+'\r\n';


    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: ", req.body.email);
            return rest.sendSuccess(res, "Thank You for Your Interest in masjid-signage! ")
        }

        // if you don't want to use this transport object anymore, uncomment following line
        smtpTransport.close(); // shut down the connection pool, no more messages
    });
}





