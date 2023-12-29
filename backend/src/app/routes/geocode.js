import { Router } from "express";
import GeocodeController from "../controller/GeocodeController.js";

export const geocodeRoutes = new Router();

geocodeRoutes.get("/getLocalization", GeocodeController.getLocalization);
