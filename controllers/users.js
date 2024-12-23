const User = require('../models/user')

exports.getSignupPage = (req,res,next)=>{
    res.render('User/signUp', {
        pageTitle:'SignUp',
        path:'/signup'
    })
}

exports.postSignUpDetails = (req,res,next) => {
    const email = req.body.email
    const uName = req.body.uname
    const pwd = req.body.password
    const cart = {items:[]}

    const user = new User(email, uName, pwd, cart) 
    user.save()
    .then(result=>{
        console.log('UserCreated')
        res.redirect('/')
    })
    .catch()

}

exports.getloginPage = (req,res, next)=>{
    res.render('User/login',{
        pageTitle: 'Add User',
        path: '/login'
    })
}


//sumbit
exports.postLoginDetail = (req,res, next) =>{
    
}