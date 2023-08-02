const { sendEmail } = require("../utils/sendEmail");
const { RewiesSchema } = require("../schemas/add-rewies.schema");
const { createHttpException } = require("../services");
const dotenv = require("dotenv");

dotenv.config();

const { WORK_EMAIL } = process.env;

const addRewies = async (req, res, next) => {
    const {
        name,
        email,
        comment,
    } = req.body;

    const photo = req.file ? req.file.path : null;

    const { error, value } = RewiesSchema.validate({
        name,
        email,
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
      Відгук:
      <br />
      <br />

      ПІБ: ${name}
      <br />
          
      E-mail: ${email}
      <br />

      Відгук: ${comment}
      <br />

      <br />
      ${photo ? `<img src="${photo}" alt="Partner Photo">` : ''}
      
      <br />
    </p>
  `;

    const data = {
        to: WORK_EMAIL,
        subject: "Rewie",
        html,
    };

    sendEmail(data);
    res.status(201).json({ message: "Rewie sent successfully" });
};

module.exports = {
    addRewies,
};