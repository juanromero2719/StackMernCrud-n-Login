import {Router} from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { getTask, getTasks, createTask, updateTask, deleteTask } from '../controllers/tasks.controller.js'
import { validateSchema } from '../middlewares/validator.middlewar.js'
import { createTaskSchema } from '../schemas/task.schema.js'

const router = Router()

router.get('/tasks', authRequired, getTasks)
router.get('/tasks/:id', authRequired, getTask)
router.post('/tasks', authRequired, validateSchema(createTaskSchema), createTask)
router.delete('/tasks/:id', authRequired, deleteTask)
router.put('/tasks/:id', authRequired, updateTask)

export default router