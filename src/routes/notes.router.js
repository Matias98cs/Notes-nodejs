import express from "express";
import {
  getOwnList,
  getNoteById,
  create,
  updateNote,
} from "../controllers/note/index.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/list", authMiddleware, getOwnList);
router.get("/:noteId", authMiddleware, getNoteById);
router.post("/createNota", authMiddleware, create);
router.put("/update-note/:noteId", authMiddleware, updateNote);

export default router;
