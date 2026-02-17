const express =  require('express');
const customerRouter = express.Router();
const customerController = require('../controllers/customer-controller');
const authMiddleware = require('../middlewares/auth-middleware')

customerRouter.post('/create', authMiddleware, customerController.createUser);

customerRouter.get('/', authMiddleware, customerController.getUser);

customerRouter.get('/:id', authMiddleware, customerController.getUserById);

customerRouter.put('/update/:id', authMiddleware, customerController.updateUser);

customerRouter.patch('/patch/:id', authMiddleware,  customerController.patchUser);

customerRouter.delete('/delete/:id', authMiddleware,  customerController.deleteUser);

module.exports = customerRouter;