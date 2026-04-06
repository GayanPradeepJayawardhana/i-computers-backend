import User from "../models/user.js"

export async function createUser(req,res){
    try{

        const user = await User.findOne(
            {
                email:req.body.email
            }
        )
        if(user!=null){
            return res.json({messege:"User already exist"})
        }

        

        const newUser = new User({
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: req.body.password
        })
        
        await newUser.save()
        res.json({messege:"User created successfully"})

    }
    catch(err)
    {
        res.json(
            {
                messege:err.messege
            }
        )
    }
}


export async function loginUser(req,res){

    try{

    const email = req.body.email
    const password = req.body.password

    if(email===null||password===null) {
        res.json({messege:"Email and Password are required"})
        return
    }

    const user = await User.findOne({email:email})

    if(user==null){
        res.json({messege:"User not found"})
        return
    }

    }catch(err){

    }

    

}