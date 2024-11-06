require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` || '.env.pub'});
const Express = require('express');
const app = Express();
const Path = require('path');
const
{
    PORT
} = process.env;

var port = PORT;
if (typeof port == 'undefined')
{
    port = 3001;
}

app.use(express.static(Path.join(__dirname, 'views')));
app.use(express.static(Path.join(__dirname, 'public')));

const MainController = require("./controllers/main");
app.set("view engine", "ejs");
app.get('/', MainController.main);

app.listen(port, () =>
{
    console.debug("starting on: " + port);
});
