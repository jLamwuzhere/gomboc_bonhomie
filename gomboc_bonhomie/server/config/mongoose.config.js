//IMPORT DEPENDENCIES
const mongoose = require("mongoose")

//CHANGE THINGS TO WHATEVER IT IS
mongoose.connect('mongodb://localhost/homies_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database', err));