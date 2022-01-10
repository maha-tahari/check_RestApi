const express=require("express")
const router = express.Router()
const user = require('../models/User')

// get the users list
router.get('/', (request, response) => {
user.find()
.then((user)=>response.send(user))
.catch((err)=>console.log(err))
}
)

router.post('/add', (request, response)=>{
    const newUser= new user({
        name : request.body.name,
        email : request.body.email
    })
    newUser.save()
    .then((user)=>response.json({"Message" : "New user added","user":user}))
    .catch((err)=>console.error(err))
    })

router.delete('/delete/:id', (request, response)=>{
    user.findByIdAndRemove(request.params.id)
    .then((user)=>response.send({"Message" : "User deleted", "Users": user}))
    .catch((err)=>console.log(err))
})

router.put('/update/:id', (request, response)=>{
    const {name, email} = request.body;
    user.findByIdAndUpdate(request.params.id,{$set : {name, email}},{new:true})
    .then((user)=>response.json({"Message" : "User updated", "User" : user}))
    .catch((err)=>console.log(err))
})
module.exports = router