import jwtToken from 'jsonwebtoken'
import {TOKEN_SECRET} from '../config.js'

export const authRequired = (solicitud, respuesta, siguiente) => {
    
    const {token} = solicitud.cookies;
    if(!token) return respuesta.status(401).json({ message: "No token, autorization denied"});

    jwtToken.verify(token, TOKEN_SECRET, (error, user) => {
        if(error) return respuesta.status(403).json({ message: "invalid token "})
        solicitud.user = user
        siguiente()
    })
    
}