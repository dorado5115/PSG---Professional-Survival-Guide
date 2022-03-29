const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function email(req, res) {
    const { name, email, message, active } = req.body;

    const msg = `
        Nombre: ${name}\r\n
        Email: ${email}\r\n
        Porqué: ${active}\r\n
        Mensaje: ${message}\r\n
    `;

    const data = {
        to: 'psg.teamcontact@gmail.com',
        from: 'psg.teamcontact@ihiveadream.tech',
        subject: 'Nuevo email',
        text: JSON.stringify(msg),
        html: msg.replace(/\r\n/g, '<br>')
    };

    try {
        mail.send(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }

    res.status(200).json({status: 'success'});
}