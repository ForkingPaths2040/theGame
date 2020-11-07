const db = require("../db/connection");
const Log = require("../models/log");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const logs = [
    {
    }
    ];
  await Log.insertMany(variable);
  console.log("Created vaiables!");
  };
const run = async () => {
await main();
db.close();
};

run();