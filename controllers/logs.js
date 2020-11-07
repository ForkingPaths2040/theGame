const Logs = require("../models/log");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const getLogs = async (req, res) => {
  try {
    const logs = await Logs.find();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLog = async (req, res) => {
  try {
    const { id } = req.params;
    const log = await Logs.findById(id);
    if (log) {
      return res.json(log);
    }
    res.status(404).json({ message: "Log not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createLog = async (req, res) => {
  try {
    const log = await new Log(req.body);
    await log.save();
    res.status(201).json(log);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateLog = async (req, res) => {
  const { id } = req.params;
  await Log.findByIdAndUpdate(id, req.body, { new: true }, (error, post) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!log) {
      return res.status(404).json({ message: "Log not found!" });
    }
    res.status(200).json(log);
  });
};

const deleteLog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Log.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Log deleted");
    }
    throw new Error("Log not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createLog,
  getLogs,
  getLog,
  updateLog,
  deleteLog,
};