import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/api/me', verifyToken, getUsers);
router.post('/api/register', Register);
router.post('/api/login', Login);
router.get('/api/token', refreshToken);
router.delete('/api/logout', Logout);

export default router;