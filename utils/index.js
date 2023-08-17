const UPLOAD_FILE_LIMIT_IN_BYTE = 3145728;

const ALLOWED_FORMATS = ["jpg", "png", "webp"];

const PHONE_REGEXP = /^\+380\d{9}$|^\+380\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;

const PHONE_REGEXP_PARTNER = /^\+\d{1,3}\s?\d{2,3}\s?\d{3}\s?\d{2}\s?\d{2}$|^\+\d{10,12}$/;
const EMAIL_REGEXP = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;



module.exports = {
    UPLOAD_FILE_LIMIT_IN_BYTE,
    ALLOWED_FORMATS,
    PHONE_REGEXP,
    EMAIL_REGEXP,
    PHONE_REGEXP_PARTNER

};