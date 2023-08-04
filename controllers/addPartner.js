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
    <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
  <div style="max-width: 700px; background-color: white; margin: 0 auto;">
    <div style="width: 100%; background-color: #0069B5; padding: 20px 0;">
      <div style="width: 120px; height: 70px; background-color: #ffffff; padding: 20px 0; overflow: hidden; border-radius: 50%; margin: 0 auto;">
       
          <img src="https://res.cloudinary.com/dsw7lnmcv/image/upload/v1691065540/nnaikmeerbn4qmyjz4fo.png"
               style="width: 120px; height: 100%; object-fit: contain; margin: 0 auto;"
               alt="Circle Image"
          />
        
      </div>
    </div>
    <p style="font-family: Courier New">
    <span style=" font-size: 18px; font-weight: bold">
      Інформація про партнера:
      </span>
      <br />
      <br />

      <span style=" font-size: 14px; font-weight: bold">
      ПІБ:
      </span>
       ${name}
      <br />
     
      <span style=" font-size: 14px; font-weight: bold">
     Чим займаються:
     </span>
      ${company}
      <br />
     
      <span style=" font-size: 14px; font-weight: bold">
      E-mail:
      </span>
       ${email}
      <br />

      <span style=" font-size: 14px; font-weight: bold">
      Номер телефону:
      </span>
       ${phone}
      <br />

      <span style=" font-size: 14px; font-weight: bold">
      Додаткові коментарі:
      </span>
       ${comment}
      <br />
      
      <br />
    </p>
    </div>
   </div>
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