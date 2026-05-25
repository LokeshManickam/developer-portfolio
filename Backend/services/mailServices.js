const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async ({ name, mobile, email, message }) => {
    try {

        await resend.emails.send({
            from: "Portfolio <contact@lokeshmanickam.online>",

            to: "contact@lokeshmanickam.online",

            reply_to: email,

            subject: "New Portfolio Contact Message",

            html: `
                <h2>Portfolio Contact Message</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Mobile:</strong> ${mobile}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        });

        console.log("Email Sent Successfully");

    } catch (error) {

        console.log("Mail error:", error);
    }
};

module.exports = sendMail;