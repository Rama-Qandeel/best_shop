import jwt from 'jsonwebtoken'

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    })
  }
  
  export default generateToken