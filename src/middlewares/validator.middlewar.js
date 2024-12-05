export const validateSchema = (schema) => (request, response, next) => {
    try{

        schema.parse(request.body) 
        next()
    }catch(error){
        
        return response.status(400).json({error: error.errors.map(error => error.message)})
    }
}