import asyncHandler from 'express-async-handler'
import User from '../models/user.js'
import generateToken from '../utilis/generateJwt.js'

const createUser = (asyncHandler(async(req,res) => {
    const {email, password} = req.body

    const user = await User.find({email})

    if(user && (await user[0].matchPassword(password)) ){
    res.json({
    id : user[0].id,
    name : user[0].name,
    email: user[0].email,
    isAdmin: user[0].isAdmin,
    token: generateToken(user[0].id)
})
    }else {
        res.status(401)
        throw new Error ('invalid email or password')
    }
}))

const geteUser = (asyncHandler(async(req,res) => {
    const user = await User.findById(req.user._id)
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }}))

export {
    createUser,
    geteUser
}
