const nodemailer = require("nodemailer");

const sendMail = async ({ name, mobile, email, message }) => {
    try {

        const transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
            port: 465,
            secure: true,

            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,

            to: process.env.EMAIL_USER,

            replyTo: email,

            subject: "New Portfolio Contact Message",

            html: `
                <h2>Portfolio Contact</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Mobile:</strong> ${mobile}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        console.log("Email Sent Successfully");

    } catch (error) {
        console.log("Mail error:", error);
    }
};

module.exports = sendMail;