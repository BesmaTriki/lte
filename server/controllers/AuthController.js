const User = require('../models/user')
const jwt = require("jsonwebtoken")

exports.signup = (req,res) => {
   
    User.findOne({
        email : req.body.email            
    }).exec( (error,user) => {
        if (user ) return res.status(400).json({
            message : 'User already registred'
        })
        const {
            firstname ,
            lastname ,
            email ,
            password  
        } = req.body;
        const _user = new User({
            firstname ,
            lastname ,
            email ,
            password ,
            username : Math.random().toString() 
            

        });
        _user.save((error,data) => {
            if(error){
                return res.status(400).json({
                    message : "Something went wrong"
                });

            }
            if(data){
                return res.status(201).json({
                    message : "User created successfully ...!"
                })
            }
        })


    }) // add user 
}

exports.signin = (req,res) => {
    User.findOne({
        email : req.body.email            
    }).exec((error,user)=>{
        if(error) return res.status(400).json({ error })
        if(user){
                if(user.authenticate(req.body.password )){
                        const token = jwt.sign({_id:user._id , role : user.role  },process.env.JWT_SECRET , { expiresIn : '1h'}) 
                        const { _id , firstname , lastname , email , role , fullname , username } = user;
                        res.status(200).json({
                            token,
                            user :{
                                _id ,
                                firstname ,
                                lastname ,
                                email ,
                                role ,
                                fullname ,
                                username
                            }
                        })
                    }else{
                        return res.status(400).json({message : "Invalid password "}) 
                    }
        }
        else{
            return res.status(400).json({ message : 'Something went wrong' })
        }
    })
}