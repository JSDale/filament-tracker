const Fs = require('fs');
const FsPromises = require('fs').promises;
const FilePath = 'filament.json';

exports.main = async (_, res) =>
{
    res.render("index")
}

exports.remainder = async (_, res) =>
{
    Fs.readFile(FilePath, 'utf8', (err, data) => 
    {
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

exports.addUsage = (req, res) =>
{
  console.log(req.body);
  const {Used} = req.body;
  console.log(`updating data: ${Used}`);

  const JsonData = 
  {
    Used: Used,
    Total: 1000
  };
  
  const StrJson = JSON.stringify(JsonData);
  console.log(StrJson);
  FsPromises.writeFile(FilePath, StrJson);

  res.status(200);
}