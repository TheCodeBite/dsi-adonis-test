'use strict'
const User = use('App/Models/User');

class UserController {
    //convencion para el post
    async store({ request }){
        const {username, email, rol} = request.all();

        const user = await User.create({
            username,
            email,
            rol
        });

        return user;
    }
}

module.exports = UserController
