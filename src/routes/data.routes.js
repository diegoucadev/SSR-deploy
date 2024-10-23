import express from "express";
import userController from "../controllers/data.controller.js";

const router = express.Router();

router.get("/", userController.showHome);

router.get("/form", userController.showForm);

router.get("/confirm", userController.showConfirm);

router.post("/submit", userController.processData);

export default router;