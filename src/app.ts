import "reflect-metadata";
import express from "express";
import "dotenv/config";
import { router } from "./Router/routes";

const app = express();
app.use(express.json());
app.use(router);

export default app;
