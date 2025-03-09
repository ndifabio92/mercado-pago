import { Router } from "express";
import healthRoutes from "../health/healthRoutes";
import mercadoPagoRoutes from "../mercadoPago/mercadoPagoRoutes";

const router = Router();

router.use("/health", healthRoutes);
router.use("/mercadopago", mercadoPagoRoutes);

export default router;