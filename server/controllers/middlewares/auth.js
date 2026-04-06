import jwt from 'jsonwebtoken'
// like guards 

const userAuth = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.json({ success: false, message: 'NOt Authorized. Login Again' });
        

    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if(tokenDecode.id){
            req.userId = tokenDecode.id;
            if (req.body) {
                req.body.userId = tokenDecode.id;
            }
            // chat gpt
            // req.user = { userId: tokenDecode.id };


        }else{
            return res.json({ success: false, message: 'NOt Authorized. Login Again' });

        }
        // return user credits 
        next(); // iam done pass the control to the next middlewares and routes
    }catch(error){
        res.json({success:false,message:error.message});


    }
};

export default userAuth;
