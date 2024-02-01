const Contact = require('../models/models');


exports.getContactId = (req, res) =>{
    let id = req.params.contactId ; 
    Contact.findById(id)
        .then((result)=>{
            res.send(result)
        })
        .catch(er =>{
            console.log(er)
        })
}


exports.addContact = (req , res) =>{
    const contact = new Contact({
        Name : req.body.Name ,
        email : req.body.email ,
        phone : req.body.phone
    })
    contact.save()
        .then((result)=>{
            res.json(result)
        })
        .catch(error=>{
            console.log(error)
        })

}

exports.updatecontact = (req , res)=>{
    let id = req.params.contactId ;
    Contact.updateOne({_id : id} , req.body)
        .then(result =>{
            res.json(result)
        })
        .catch(erorr =>{
            console.log(erorr)
        })
}


exports.deletecontact = (req , res) =>{
    id = req.params.contactId ;
    Contact.deleteOne({_id : id})
        .then(()=>{
            res.send('delete succes')
        })
        .catch((er) =>{
            console.log(er)
        })
}