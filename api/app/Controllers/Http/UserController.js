'use strict'
const User = use('App/Models/User');

class UserController {
    //convencion para el post
    async store({ request }){
        const {username, email, rol, password} = request.all();

        const user = await User.create({
            username,
            email,
            rol,
            password
        });

        return user;
    }

    async getUsers({ request, response, view }){
        let users = User.all();
        
        return response.json(users);
    }

    async login({ request, auth }){
        const { email , password } = request.all();
        const token = await auth.attempt(email, password);
        return token
    }
}

module.exports = UserController
