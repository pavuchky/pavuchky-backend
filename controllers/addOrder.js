const { sendEmail } = require("../utils/sendEmail");
const { OrderSchema } = require("../schemas/add-order.schema");
const { createHttpException } = require("../services");
const dotenv = require("dotenv");

dotenv.config();

const { WORK_EMAIL } = process.env;

const addOrder = async (req, res, next) => {
    const {
        name,
        phone,
        position,
        comment,
        militaryUnit,
        gridSize,
        typeBase,
        material,
        color,
        loops,
    } = req.body;

    const { error, value } = OrderSchema.validate({
        name,
        phone,
        position,
        comment,
        militaryUnit,
        gridSize,
        typeBase,
        material,
        color,
        loops,
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
       
          <img src="https://res.cloudinary.com/dsw7lnmcv/image/upload/v1691065540/sahaqasvyjjmhip2eapu.png"
               style="width: 120px; height: 60px; object-fit: contain; margin: 0 auto;"
               alt="Circle Image"
          />
        
      </div>
    </div>
    <p style="font-family: Courier New">
     <span style=" font-size: 18px; font-weight: bold">
      Інформація про замовлення:
      </span>
      <br />
      <br />

      <span style=" font-size: 14px; font-weight: bold">
      ПІБ:
       </span>
       ${name}
      <br />

      <span style=" font-size: 14px; font-weight: bold">
      Посада:
      </span>
       ${position}
      <br />
     
       <span style=" font-size: 14px; font-weight: bold">
      Номер військової частини або бригади:
      </span>
       ${militaryUnit}
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

      <span style=" font-size: 14px; font-weight: bold">
      Розмір сітки:
      </span>
       ${gridSize}
      <br />

      <span style=" font-size: 14px; font-weight: bold">
      Вид основи:
      </span>
       ${typeBase}
      <br />

       <span style=" font-size: 14px; font-weight: bold">
      Матеріал:
       </span>
        ${material}
      <br />

       <span style=" font-size: 14px; font-weight: bold">
      Колір сітки:
      </span>
       ${color}
      <br />

      <span style=" font-size: 14px; font-weight: bold">
      Петлі для кріплення:
      </span>
       ${loops}
      <br />
      
      <br />
    </p>
      </div>
   </div>
  `;

    const data = {
        to: WORK_EMAIL,
        subject: "Order received",
        html,
    };

    sendEmail(data);
    res.status(201).json({ message: "Order sent successfully" });
};

module.exports = {
    addOrder,
};