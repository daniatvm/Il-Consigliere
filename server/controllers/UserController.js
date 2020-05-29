const db = require('../../database/models');

class UserController {
    static async getUsers(req, res) {
        try {
            const users = await db.User.findAll();
            if (users.length > 0) {
                res.send(users);
              } else {
                res.send('No users found');
              }
        } catch (error){
            res.send(error);
        }
    }
}

module.exports = UserController;