const nodemailer=require("nodemailer")
require("dotenv").config()
const path=require("path")

// SET NODEMAILER SERVICE OPTIONS
const transporter = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER_NAME,
      pass: process.env.PASSWORD,
    },
  });

// SET MAIL OPTIONS
const mailOptions={
    from: 
    {
        name:"El3aked 👻",
        address:process.env.USER_NAME
    }, // sender address
    to: "devSCommunity2023@gmail.com", // list of receivers
    subject: "Hello From 3raby✔", // Subject line
    text: "DevS Number One", // plain text body
    html: "<b>Hello From 3raby</b>", // html body
    attachments:[
        {
            filename:"Capture.JPG",
            path:path.join(__dirname,"Capture.JPG"),
            contentType:"image/JPG"
            // contentType:"application/PDF"
        }
    ]
}

// CREATE SEND-MAIL FUNC
async function sendMail(transport,mailOptions) {
    try {
          // send mail with defined transport object
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: ", info.messageId);
    } catch (error) {
        console.log(error)
    }
}
sendMail(transporter,mailOptions)