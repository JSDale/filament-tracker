require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` || '.env.pub'});
const Express = require('express');
const App = Express();
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

App.set("view engine", "ejs");

App.use(Express.static(Path.join(__dirname, 'views')));
App.use(Express.static(Path.join(__dirname, 'public')));

const MainController = require("./controllers/main");
App.get('/', MainController.main);

App.listen(port, () =>
{
    console.debug("starting on: " + port);
});
