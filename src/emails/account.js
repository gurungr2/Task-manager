const sgMail = require('@sendgrid/mail')

const sendGridAPIKey = "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"
sgMail.setApiKey(sendGridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'gurungramesh699@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendFarewellMessage = (email, name) => {
    sgMail.send({
        to: email,
        from: 'gurungramesh699@gmail.com',
        subject: 'Goodbye',
        text: `Hi ${name}, Sorry to see you go. Give us your feedback. Hope to see you back soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendFarewellMessage
}