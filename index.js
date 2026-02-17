
const app = require('./src/app');
const connect = require('./config/db');

connect;

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});