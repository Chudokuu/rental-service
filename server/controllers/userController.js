
import { User } from "../models/user.js";

async function getAllUsers(req, res, next) {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password'] } // скрываем пароли
        });
        res.send(users);
    } catch (error) {
        console.error('Не удалось получить список пользователей:', error);
    }
}

export { getAllUsers };
