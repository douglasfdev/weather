import { Router } from 'express';
import { weatherRoutes } from './weather.js';
import { geocodeRoutes } from "./geocode.js";

export const router = new Router();
router.use(weatherRoutes, geocodeRoutes);