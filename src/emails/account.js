const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to : email,
        from: 'arlisha.hayles.00@gmail.com',
        subject: 'Thanks for Join the Task App',
        text: `Welcome to Task App, ${name}. Let me know how you like it!`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'arlisha.hayles.00@gmail.com',
        subject: 'Sorry to see you go :{ !',
        text: `Sorry to see you go ${name}. Please let us no what can we do to keep you.`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}