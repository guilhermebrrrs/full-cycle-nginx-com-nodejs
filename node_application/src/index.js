const express = require("express");

const axios = require("axios");

const { connection, executeQuery } = require("./initDatabaseConnection.js");

const app = express();

const port = 3000;

executeQuery(
  "CREATE TABLE IF NOT EXISTS people (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL);"
);

app.get("/", async function (req, res) {
  try {
    const name = await axios
      .get("https://gerador-nomes.wolan.net/nomes/1")
      .then(({ data }) => data)
      .catch((error) => {
        console.error(error);
      });

    executeQuery(`INSERT INTO people (name) VALUES ('${name}');`);

    executeQuery("SELECT * FROM people;", function (error, result) {
      const html = `
        <h1>Full Cycle Rocks!!!</h1>
        <div>
          <ul>
            ${result.map((item) => `<li>${item.name}</li>`).join("")}
          </ul>
        </div
      `;

      res.send(html);
    });
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
