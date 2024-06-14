const { contactUsEmail } = require("../mail/templates/contactFormRes");
const mailSender = require("../utils/mailSender");

exports.contactUsController = async (req, res) => {
    const {
        email,
        firstName,
        lastName,
        message,
        phoneNo,
        countrycode
    } = req.body;

    console.log("Request Body:", req.body);

    try {
        const emailRes = await mailSender(
            email,
            "Your Data Sent Successfully",
            contactUsEmail(email, firstName, lastName, message, phoneNo, countrycode)
        );
        console.log("Email Response:", emailRes);
        return res.json({
            success: true,
            message: 'Email Sent Successfully',
        });
    } catch (error) {
        console.log("Error:", error);
        console.log("Error Message:", error.message);
        return res.status(500).json({
            success: false,
            message: "Something went wrong...",
        });
    }
};
