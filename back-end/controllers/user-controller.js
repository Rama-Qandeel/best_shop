import asyncHandler from 'express-async-handler'
import User from '../models/user.js'
import generateToken from '../utilis/generateJwt.js'

const createUser = (asyncHandler(async(req,res) => {
    const {email, password} = req.body

    const user = await User.find({email})

    if(user[0] && (await user[0].matchPassword(password)) ){
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

    const registerUser = asyncHandler(async (req, res) => {
        const { name, email, password } = req.body
      
        const userExists = await User.findOne({ email })
      
        if (userExists) {
          res.status(400)
          throw new Error('User already exists')
        }
      
        const user = await User.create({
          name,
          email,
          password,
        })
      
        if (user) {
          res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
          })
        } else {
          res.status(400)
          throw new Error('Invalid user data')
        }
      })

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const getUsers = (asyncHandler(async(req,res) => {
  const users = await User.find({})
  res.json(users)
}))

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const getUserById = (asyncHandler(async(req,res) => {
  const user = await User.findById(req.params.id).select('-password')
  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
}))

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin || user.isAdmin

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export {
    createUser,
    geteUser,
    registerUser,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
}
