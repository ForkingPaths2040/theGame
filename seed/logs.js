const db = require("../db/connection");
const Log = require("../models/log");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const logs = [
    {
      date: "11/07/2020",
      source: "TikTok"
    },
    {
      date: "10/12/2020",
      source: "Facebook"
    }
    ];
  await Log.insertMany(logs);
  console.log("Created logs!");
  };
const run = async () => {
await main();
db.close();
};

run();