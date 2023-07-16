
const logout = (req,res)=>{
    res.clearCookie('token').redirect('/users/signin')
}
module.exports = logout 