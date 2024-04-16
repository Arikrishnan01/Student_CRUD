import express from 'express';
import { 
    createStudent, 
    deleteStudents, 
    getAllStudents, 
    getByIdStudent, 
    updateStudents
} from '../controllers/studentsController.js';

const router = express.Router();

router.post('/create', createStudent);
router.get("/getAllStudents", getAllStudents);
router.get("/:id", getByIdStudent);
router.put("/:id", updateStudents);
router.delete("/:id", deleteStudents);

/** export the sub router */
const studentsRouters = router;
export default studentsRouters;