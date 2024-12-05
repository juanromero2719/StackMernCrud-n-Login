import jwtToken from 'jsonwebtoken'
import {TOKEN_SECRET} from '../config.js'

export const authRequired = (request, response, next) => {
    
    const {token} = request.cookies;
    if(!token) return response.status(401).json({ message: "No token, autorization denied"});

    jwtToken.verify(token, TOKEN_SECRET, (error, user) => {
        if(error) return response.status(403).json({ message: "invalid token "})
        request.user = user
        next()
    })
    
}