import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);
// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'bbaaa',
//     lastname: 'bbb',
//     email: 'aas',
//     password_hash: '123',
//   });
//   return res.json(user);
// });

export default routes;
