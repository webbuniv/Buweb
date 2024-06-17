import express from 'express';
import { 
    getAllDepartments, 
    createDepartment, 
    getDepartmentById, 
    updateDepartmentById, 
    deleteDepartmentById 
} from '../controllers/department.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get("/", getAllDepartments);
router.post("/create", verifyToken, createDepartment);
router.get("/:id", getDepartmentById);
router.patch("/:id/update", verifyToken, updateDepartmentById);
router.delete("/:id/delete", verifyToken, deleteDepartmentById);

export default router;
