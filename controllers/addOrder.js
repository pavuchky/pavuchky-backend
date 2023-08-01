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
    <p style="font-family: Courier New">
      Інформація про замовлення:
      <br />
      <br />

      ПІБ: ${name}
      <br />
     
      Посада: ${position}
      <br />
     
      Номер військової частини або бригади: ${militaryUnit}
      <br />

      Номер телефону: ${phone}
      <br />

      Додаткові коментарі: ${comment}
      <br />

      Розмір сітки: ${gridSize}
      <br />

      Вид основи: ${typeBase}
      <br />

      Матеріал: ${material}
      <br />

      Колір сітки: ${color}
      <br />

      Петлі для кріплення: ${loops}
      <br />
      
      <br />
    </p>
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