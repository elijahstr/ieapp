const { text } = require('express');

const nodemailer = require('nodemailer'),
      {EMAIL, PASSWORD} = process.env;

module.exports = {
    email: (req, res) => {
        const {firstName, lastName, email, message} = req.body;
        
        let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                service: 'gmail',
                secure: false,
                requireTLS: true,
                auth:{
                    user: EMAIL,
                    pass: PASSWORD
                }
            });

        let info = {
            from: EMAIL,
            to: 'contactelijahs@gmail.com',
            subject: `${firstName} ${lastName} is contacting you`,
            text: `${email} ${message}`
        }

        transporter.sendMail(info, (err, data)=>{
            if(err){
                return console.log(err)
            }
            return res.sendStatus(200);;
        });
    }
}