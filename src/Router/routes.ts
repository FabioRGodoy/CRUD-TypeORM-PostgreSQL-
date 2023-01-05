import { Router } from "express";
import app from "../app";
import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  loginUserController,
  updateUserController,
} from "../Controllers/userControllers";
import {
  authTokenMiddleware,
  isAdmMiddlewere,
  verifyTokenMiddleware,
} from "../Middleweres/userMiddleweres";

export const router = Router();

router.post("/users", createUserController);

router.post("/login", loginUserController);

router.use(authTokenMiddleware);
router.get("/users", isAdmMiddlewere, getAllUsersController);

router.patch("/users/:id", verifyTokenMiddleware, updateUserController);

router.delete("/users/:id", isAdmMiddlewere, deleteUserController);
