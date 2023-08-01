const { sendEmail } = require("../utils/sendEmail");
const { PartnerSchema } = require("../schemas/add-partner.schema");
const { createHttpException } = require("../services");
const dotenv = require("dotenv");

dotenv.config();

const { WORK_EMAIL } = process.env;

const addPartner = async (req, res, next) => {
    const {
        name,
        company,
        email,
        phone,
        comment,

    } = req.body;

    const { error, value } = PartnerSchema.validate({
        name,
        company,
        email,
        phone,
        comment,
    });
    if (error) {
        const invalidField = error.details[0].path[0];
        throw createHttpException(
            400,
            `Missing or not valid field ${invalidField} => ${error.message}`
        );
    }

    const html = `
    <p style="font-family: Courier New">
      Інформація про партнера:
      <br />
      <br />

      ПІБ: ${name}
      <br />
     
     Чим займаються: ${company}
      <br />
     
      E-mail: ${email}
      <br />

      Номер телефону: ${phone}
      <br />

      Додаткові коментарі: ${comment}
      <br />
      
      <br />
    </p>
  `;

    const data = {
        to: WORK_EMAIL,
        subject: "Partner reqest",
        html,
    };

    sendEmail(data);
    res.status(201).json({ message: "Partner reqest sent successfully" });
};

module.exports = {
    addPartner,
};