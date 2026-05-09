const Contact = require("../models/Contact");
const sendMail = require("../services/mailServices");

const submitContact = async (req, res) => {
    try {
        const { name, mobile, email, message } = req.body;

        // Validation
        if (!name || !mobile || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Save message in MongoDB
        const newContact = await Contact.create({
            name,
            mobile,
            email,
            message
        });

        // Send email
        await sendMail({
            name,
            mobile,
            email,
            message
        });

        res.status(201).json({
            success: true,
            message: "Message sent successfully",
            data: newContact
        });

    } catch (error) {
        console.log("Contact Error:", error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

module.exports = { submitContact };