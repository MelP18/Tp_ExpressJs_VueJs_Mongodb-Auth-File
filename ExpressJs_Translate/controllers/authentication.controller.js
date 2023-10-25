const authenticationModel = require('../models/autentication.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()


const registration = async (req, res, next) => {

    const hashPassword = await bcrypt.hash(req.body.password, 10);

    const userData = new authenticationModel({
        username: req.body.username,
        surname: req.body.surname,
        firstname: req.body.firstname,
        email: req.body.email,
        password: hashPassword
    });

    try {
        const userSave = await userData.save()

        if (!userSave) {
            res.status(400).send('Schema/Model non conforme')
        }
        res.status(201).send(userSave)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

//gegerate token
const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60000s' });
}

//signin
const connection = async (req, res, next) => {
    const { email, password } = req.body

    try {
        const connectData = await authenticationModel.findOne({ email })
        console.log(connectData);
        if(connectData){
            if (connectData && bcrypt.compareSync(password, connectData.password)){
            
                const accessToken = generateAccessToken(connectData.toObject())
    
                console.log('accessToken', accessToken);
                //token
                res.status(200).send(accessToken)

            }else{
                res.status(400).send('Mot de passe Incorrect!')
            }
        }
        else{
            res.status(400).send('Données Invalid!')
        }

    }catch (e) {
        res.status(400).json({ message: e.message })
    }

}

module.exports = {
    registration,
    connection
}