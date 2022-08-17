const nodemailer = require("nodemailer");

const sendMail = async (mail) => {
    const testAccount = await nodemailer.createTestAccount();
    
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
        },
    });

/*     let transporter = nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 587,
        secure: false,
        auth: {
        user: "archie.tombacz@gmail.com", 
        pass: "xsmtpsib-3e66302111cdb44fb036d12b8c539a8d5e3b39590d765c15e874f14f432060d5-w9HRfXZ7IjPLsQ6J",
        },
    });
*/
    
/*         transporter.verify(function (error, success) {
            if (error) {
            console.log(error);
            } else {
            console.log("Server is ready to take our messages");
            }
        });
 */    
    const info = await transporter.sendMail({
        from: mail.from, //'"Fred Foo 👻" <foo@example.com>', // sender address
        to: mail.to, //"bar@example.com, baz@example.com", // list of receivers
        subject: mail.subject, //"Hello ✔", // Subject line
        text: mail.text, //"Hello world?", // plain text body
        html: mail.html  //"<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

//sendMail();
module.exports = sendMail;