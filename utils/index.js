
const UPLOAD_FILE_LIMIT_IN_BYTE = 3145728;

const ALLOWED_FORMATS = ["jpg", "png", "svg", "webp"];

const PHONE_REGEXP = /^\+380\d{9}$/;

const EMAIL_REGEXP = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

// const LOOPSCHECKBOX = ["yes", "no"];

module.exports = {
    UPLOAD_FILE_LIMIT_IN_BYTE,
    ALLOWED_FORMATS,
    PHONE_REGEXP,
    EMAIL_REGEXP,
    // LOOPSCHECKBOX,

};