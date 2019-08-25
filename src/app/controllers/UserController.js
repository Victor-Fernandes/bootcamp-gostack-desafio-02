/* eslint-disable class-methods-use-this */
import User from '../models/User';

class UserController {
  async store(req, res) {
    // verificando se email já existe
    const userExist = await User.findOne({ where: { email: req.body.email } });

    if (userExist) {
      return res.status(401).json({ erro: 'User alredy exist' });
    }

    const { name, lastname, email } = await User.create(req.body);
    return res.json({
      name,
      lastname,
      email,
    });
  }
}

export default new UserController();
