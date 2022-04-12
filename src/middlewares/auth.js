const admin = require('../config/firebaseConfig')

exports.auth = async(req, res, next) => {
        const token = req.headers.authorization?.split(' ')[1];
        try {
            const decodeValue = await admin.auth().verifyIdToken(token)
            console.log(decodeValue)
        if(decodeValue) {
            req.authUser = decodeValue;
            return next()
        }
        return res.json({msg: 'no podes entrar aca'})
        } catch (err) {
            return res.json({msg: 'internal error'})
        }
        
    }
