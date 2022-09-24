const csvIn = require("csv-stream");
const fs = require("fs");
const process = require("process");
const csvOut = require("fast-csv");
const rotateTable = require("./rotate-table");

const main = () => {
  const fileName = process.argv[2];
  const csvStream = csvIn.createStream({ enclosedChar: '"' });
  const csvStreamOut = csvOut.format({ headers: true });

  csvStreamOut.pipe(process.stdout).on("end", () => process.exit());

  fs.createReadStream(fileName)
    .on("error", (err) => {
      console.error("Input file not found");
      process.exit();
    })
    .pipe(csvStream)
    .on("data", (data) => {
      if (!data.id || !data.json) {
        console.error("Malformed data");
        process.exit();
      }

      let rotateResult = [];
      try {
        const tableArray = JSON.parse(data.json);
        rotateResult = rotateTable(tableArray);
      } catch {}

      const dataResult = {
        id: data.id,
        json: JSON.stringify(rotateResult),
        is_valid: !!rotateResult.length,
      };

      csvStreamOut.write(dataResult);
    })
    .on("end", () => {
      csvStreamOut.end();
    });
};

main();
