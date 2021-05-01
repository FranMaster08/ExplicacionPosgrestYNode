require('dotenv').config();
const app = require('./app')
app.listen(process.env.PORT, () => {
    console.log(`Listen in Port: ${process.env.PORT}`)
}
)