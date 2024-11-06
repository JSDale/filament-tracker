const Fs = require('fs');

exports.main = async (_, res) =>
{
    res.render("index")
}

exports.remainder = async (_, res) =>
{
    Fs.readFile('filament.json', 'utf8', (err, data) => {
        if (err) 
        {
          console.error('Error reading file:', err);
          return;
        }

        const FilamentData = JSON.parse(data);
        //console.log(FilamentData);
        res.json(FilamentData);
      });
}