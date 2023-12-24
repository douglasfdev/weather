import { Router } from 'express';
import { weatherRoutes } from './weather.js';

export const router = new Router();
router.use(weatherRoutes);