import express from "express";
import { adminlogin,adminsign } from "./controller.js";
const router = express.Router()
router.get('/login',adminlogin)
router.get('/signup',adminsign)

export default router