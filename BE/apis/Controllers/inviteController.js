
const mailService = require('../services/mailService'); // Assuming you have a mail service to handle sending emails


const InviteController = async (req, res) => {

        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required.' });
        }

        try {
            await mailService.sendMail(email);
            return res.status(200).json({ success: 'Invite sent successfully.' });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to send invite.' });
        }
    
};

module.exports = { InviteController };