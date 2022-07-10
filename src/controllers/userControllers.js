import {db} from '../dbStrategy/mongo.js'
import joi from 'joi'
import bcrypt from 'bcrypt';
import {v4 as uuid} from 'uuid'


export async function createUser (request, response){
    const usuario = request.body
    const schemaCadastro = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required(),
        confirmPassword: joi.ref('password')
    })
    const {error} = schemaCadastro.validate(usuario)
    if(error){
        return response.sendStatus(422)
    }
    const passwordCriptografada = bcrypt.hashSync(usuario.password, 10)

    await db.collection('users').insertOne({...usuario, password : passwordCriptografada, confirmPassword: passwordCriptografada })
    response.sendStatus(201)

}

export async function loginUser (request, response){
    const usuario = request.body
    const schemaLogin = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    })
    const {error} = schemaLogin.validate(usuario)

    if(error){
        return response.sendStatus(422)
    }

    const user = await db.collection('users').findOne({email: usuario.email})

    if(user && bcrypt.compareSync(usuario.password, user.password)){
        const token = uuid ()
        return response.status(200).send({token})
    }else {
        return response.sendStatus(401)
    }
}