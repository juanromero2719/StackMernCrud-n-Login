import authService from '../service/auth.service.js'
import userService from '../service/user.service.js'
import {createAccessToken} from '../libs/jwt.js'

export const register = async (request, response) => {

    try {

        const  {email, password, username} = request.body

        const newUser =  await authService.registerUser(email, password, username)
        const token = await createAccessToken({id:  newUser._id})

        response.cookie("token", token)
        response.json({
            message: "user created successfully"
        })

    } catch (error) {
        
        response.status(500).json({
            message: error.message
        })
    }
}

export const login = async (request, response) => {

    try {

        const  {email, password} = request.body

        const userLoged =  await authService.loginUser(email, password)
        const token = await createAccessToken({id:  userLoged._id})

        response.cookie("token", token)
        response.json({
            message: "user found successfully"
        })

    } catch (error) {
        
        response.status(400).json({
            message: error.message
        })
    }
}

export const logout = (request, response) => {

    response.cookie('token', "", {
        expires: new Date(0)
    })

    return response.sendStatus(200)
}

export const profile = async(request, response) => {
    const userFound = await userService.getUserbyId(request.user.id)
    if(!userFound) return response.status(400).json({ message: "User not found"})

    return response.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email
    })

}
