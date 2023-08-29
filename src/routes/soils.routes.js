import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import {
    getSoils,
    getSoil,
    createSoil,
    deleteSoil,
    updateSoil
} from '../controllers/soils.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createSoilSchema } from '../schemas/soil.schema.js'

const router = Router()

router.get('/soils', authRequired, getSoils);

router.get('/soils/:id', authRequired, getSoil);

router.post('/soils', 
    authRequired, 
    validateSchema(createSoilSchema), 
    createSoil
);

router.delete('/soils/:id', authRequired, deleteSoil);

router.put('/soils/:id', authRequired, updateSoil);

export default router;