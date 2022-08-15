const {v4: uuidv4} = require("uuid");
const users =[
    {
        id:uuidv4(),
        userName:"Ratan singha",
        email:"ratan@gmail.com"
    },
    {
        id:uuidv4(),
        userName:"Riva pagli",
        email:"riva@gmail.com"
    },
    {
        id:uuidv4(),
        userName:"Rita",
        email:"Rita@gmail.com"
    },
    {
        id:uuidv4(),
        userName:"Ruhi",
        email:"Ruhi@gmail.com"
    },
]

module.exports =users;