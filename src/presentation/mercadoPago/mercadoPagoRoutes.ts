import express from "express";
import { createPreference, getPayment } from "./mercadoPagoController";

const router = express.Router();
router.post("/create-preference", createPreference);
router.get("/payments/:id", getPayment);

export default router;