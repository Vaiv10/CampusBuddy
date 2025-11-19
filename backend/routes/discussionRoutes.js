import express from "express";
import Discussion from "../models/Discussion.js";

const router = express.Router();

// GET all discussions
router.get("/", async (req, res) => {
  try {
    const discussions = await Discussion.find().sort({ createdAt: -1 });
    res.json(discussions);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch discussions" });
  }
});

// POST new discussion
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newDiscussion = new Discussion({
      title,
      description,
      tags: ["#General"],
    });
    await newDiscussion.save();
    res.status(201).json(newDiscussion);
  } catch (err) {
    res.status(500).json({ message: "Failed to create discussion" });
  }
});

// LIKE discussion
router.put("/:id/like", async (req, res) => {
  try {
    const discussion = await Discussion.findById(req.params.id);
    if (!discussion)
      return res.status(404).json({ message: "Discussion not found" });

    discussion.likes += 1;
    await discussion.save();
    res.json(discussion);
  } catch (err) {
    res.status(500).json({ message: "Error liking discussion" });
  }
});

export default router;
