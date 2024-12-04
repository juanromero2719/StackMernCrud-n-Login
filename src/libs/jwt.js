import {TOKEN_SECRET} from '../config.js'
import jwtToken from 'jsonwebtoken'

export function createAccessToken(payload){

    return new Promise((resolve, reject) => {

        jwtToken.sign(
   
            payload,
            TOKEN_SECRET,
            {
            expiresIn: "1d",
            },
            (error, token) => {
                
                if (error) reject(error);
                resolve(token)            
            }
        )    
    })

}

