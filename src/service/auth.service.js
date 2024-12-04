import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'

const registerUser = async (email, password, username) => {

    try {

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: passwordHash
        })
    
        await newUser.save()
        return newUser
        
    } catch (error) {
        console.log("error: ", error)
    }

}

const loginUser = async (email, password) => {

    try {

        const userFound = await User.findOne({ email })
        if(!userFound) return null
        
        const isMatch  = await bcrypt.compare(password, userFound.password)
        if(!isMatch) return null

        return userFound
       
    } catch (error) {
        console.log("error: ", error)
    }

}

export default { registerUser, loginUser }