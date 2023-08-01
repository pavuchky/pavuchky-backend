const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();

const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
});

