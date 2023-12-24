import { Router } from 'express'
import WeatherController from "../controller/WeatherController.js";

export const weatherRoutes = new Router();

weatherRoutes.get("/getLocation", WeatherController.getWeatherByLocation);
weatherRoutes.post('/insertLatLon', WeatherController.insertLatLonByLocation)