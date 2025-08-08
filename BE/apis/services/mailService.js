const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (to) => {
    const msg = {
        to: to,
        from: process.env.SENDGRID_FROM_EMAIL,
        subject: 'You are invited!',
        text: 'Please accept this invitation.',
    };

    try {
        const info = await sgMail.send(msg);
        return info;
    } catch (error) {
        throw new Error('Error sending email: ' + error.message);
    }
};

module.exports = { sendMail };