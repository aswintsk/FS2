export const adminlogin = (req,res)=>{
    res.send('ADMIN LOGIN')
}
export const adminsign = (req,res)=>{
    res.send('ADMIN Signup')
}
export const user = (req,res)=>{
    const username = req.param.user
    res.send(`HELLO ${username}`)
}
export const username = (req,res)=>{
    const key = req.query.key
    res.send(`Searching for  ${key}`)
}