const handlers = require('../handlers');
const multer = require('multer');

let upload = multer({
    dest: './public/uploads'
});

module.exports = (app) => {   
    app.get('/', handlers.home.index);
}