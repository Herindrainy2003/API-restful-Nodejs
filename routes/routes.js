const express = require('express')
const router = express.Router()
const contactControllers = require('../controllers/controllers')

router.get('/', (req , res)=>{
    res.send('welcome to home')
})


router.get('/contact', (req , res)=>{
    res.send('GET is succes')
})

router.post('/contact', contactControllers.addContact)
router.get('/contact/:contactId', contactControllers.getContactId)



router.put('/contact/:contactId', contactControllers.updatecontact)

router.delete('/contact/:contactId', contactControllers.deletecontact)

module.exports = router ;
