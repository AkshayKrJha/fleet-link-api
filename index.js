import bp from "body-parser";
import dotenv from "dotenv";
import express from "express";
import vehiclesRouter from "./routes/vehicles.mjs";
import bookingsRouter from "./routes/bookings.mjs";
const app = express();
dotenv.config();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use("/api/vehicles/", vehiclesRouter);
app.use("/api/bookings/", bookingsRouter);


export default app;
