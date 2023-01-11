import { Router } from "express";
import sessionsController from "../controllers/sessions.controller";

const router = Router()

router.post("/register",sessionsController.register)
router.post("/login",sessionsController.login)

import default router