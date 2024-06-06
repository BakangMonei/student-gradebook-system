const app = require('./app');
// const port = process.env.PORT || 5000;
require('dotenv').config();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
