import User from "../models/user.model.js"

const getUserbyId = async (id) => {
    const userfound = await User.findById(id);
    return userfound
}

export default {getUserbyId}