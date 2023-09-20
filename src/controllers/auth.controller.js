import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import { createAccessToken } from '../libs/jwt.js'
import jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../config.js'

export const register = async (req, res) => {
    const { name, surname, id_number, email, password } = req.body;

    try {
        const userFoundi = await User.findOne({id_number})
        if(userFoundi) return res.status(400).json(['The id number is already in use']);

        const userFounde = await User.findOne({email})
        if(userFounde) return res.status(400).json( ['The email is already in use']);

        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({
            name,
            surname,
            id_number,
            email,
            password: passwordHash
        })

        const userSaved = await newUser.save();
        const token = await createAccessToken({ id: userSaved._id })

        res.cookie('token', token)
        res.json({
            id: userSaved._id,
            name: userSaved.name,
            surname: userSaved.surname,
            id_number: userSaved.id_number,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const userFound= await User.findOne({ email})
        if(!userFound) return res.status(400).json({ message: "User not found"})

        const isMatch = await bcrypt.compare(password, userFound.password)
        if(!isMatch) return res.status(400).json({ message: "Incorrect password"})

        const token = await createAccessToken({ id: userFound._id })

        res.cookie('token', token)
        res.json({
            id: userFound._id,
            name: userFound.name,
            surname: userFound.surname,
            id_number: userFound.id_number,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}

export const profile = async(req, res) => {
    const userFound = await User.findById(req.user.id)

    if(!userFound) return res.status(400).json({message: "User not found"});

    return res.json({
        id: userFound._id,
        name: userFound.name,
        surname: userFound.surname,
        id_number: userFound.id_number,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })
    res.send('profile')
}

export const verifyToken = async (req, res) => {
    const {token} = req.cookies

    if(!token) return res.status(401).json({message: "Unauthorized"})

    jwt.verify(token, TOKEN_SECRET, async(err, user) => {
        if (err) return res.status(401).json({message: "Unauthorized"})

        const userFound = await User.findById(user.id)
        if(!userFound) return res.status(401).json({message: "Unauthorized"})

        return res.json({
            id: userFound._id,
            name: userFound.name,
            surname: userFound.surname,
            id_number: userFound.id_number,
            email: userFound.email
        })
    })
}