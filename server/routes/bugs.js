import express from "express";
import Bug from "../models/Bug.js";

const router = express.Router();

// Get all bugs
router.get("/", async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new bug
router.post("/", async (req, res) => {
  try {
    const bug = new Bug(req.body);
    await bug.save();
    res.status(201).json(bug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a bug by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedBug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBug) return res.status(404).json({ message: "Bug not found" });
    res.json(updatedBug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a bug by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedBug = await Bug.findByIdAndDelete(req.params.id);
    if (!deletedBug) return res.status(404).json({ message: "Bug not found" });
    res.json({ message: "Bug deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
