import express from express;

const router = express.Router();
import Tema from '../models/temas.js'


router.get('/tema/:id', async(req, res) => {
    const id = req.params.id;
    try{
        const tema = await Tema.findOne({id});
        res.json(tema);
    } catch (error){
        return res.status(400).json({
            mensaje: "Ocurrio un error",
            error
        })
    }
  });
  
  module.exports = router;