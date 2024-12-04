import mongoose from 'mongoose'

export const connectDB = async() => {

    try {

        await mongoose.connect('mongodb://localhost/merndb')     
    } catch (error) {
        
        console.log(error)
    }

}