import "dotenv/config";
import { get } from "env-var";

export const envs = {
    port: get("PORT").required().asPortNumber() || 4000,
    development: get("DEVELOPMENT").asBool() || false,
    corsOrigin: get("CORS_ORIGIN").required().asString() || "http://localhost:3000",
    mercadoPagoAccessToken: get("MERCADO_PAGO_ACCESS_TOKEN").required().asString() || "ACCESS_TOKEN",
    backUrlSuccess: get("BACK_URL_SUCCESS").required().asString() || "",
    backUrlPending: get("BACK_URL_PENDING").required().asString() || "",
    backUrlFailure: get("BACK_URL_FAILURE").required().asString() || "",
};
