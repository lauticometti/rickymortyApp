const { Router } = require('express')
const getCharById = require('../controllers/getCharById.js')

const router = Router()

router.get('/character/:id', (req, res) => {
  try {
    const character = getCharById(req.params.id)
    res.status(200).json(character)
  } 
  catch(error){
    res.status(404).json({error:error.message})
  }
})

module.exports = router