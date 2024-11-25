// import { Express } from "express";
import express from 'express'
import { db } from '../src/db';
const Router = express.Router();


Router.get('/film', async(req, res) => {
    const film = await db('film').select('*');
    res.send(film)
})

export default Router;