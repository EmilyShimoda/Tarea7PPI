import express from 'express';
const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('hello world')
// })

// router.use((req, res, next) => {
//     console.log("consola");
//     next();
// })

import Fav from '../models/favs'

router.get('/favs', async(req, res) => {
    try{
        const tema = await Fav.find();
        res.json(tema);
    } catch (error){
        return res.status(400).json({
            mensaje: "Ocurrio un error",
            error
        })
    }
});

router.get('/fav/:idu/:idt', async(req, res) => {
    try{
        const _idU = req.params.idu;
        const _idT = req.params.idt;
        console.log("hdkajf");
        const tema = await Fav.findOne({userId: _idU, temId: _idT});
        console.log(tema);
        res.json(tema);
    } catch (error){
        console.log(error);
        return res.status(400).json({
            mensaje: "Ocurrio un error",
            error
        })
    }
});

router.post('/nuevo-f/:idu/:idt', async(req, res) => {
    const _idU = req.params.idu;
        const _idT = req.params.idt;
    try {
        console.log("")
      const notaDB = await Fav.create({userId: _idU, temId: _idT});
      res.status(200).json(notaDB); 
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  router.delete('/del/fav/:idu/:idt', async(req, res) => {
    const _idU = req.params.idu;
    const _idT = req.params.idt;
    try {
      const notaDb = await Fav.findOneAndDelete({userId: _idU, temId: _idT});
      if(!notaDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(notaDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });
  
  module.exports = router;