const User = require('../models/User');

// index     , show     , store  , update, destroy -> methods that can be create on Controllers
// list many , list one , create , update, delete  -> description

module.exports = {
    async store(req, res){
        const { email } = req.body; // this is the same as "const email = req.body.email", being the words the same it is possible.
        
        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email });
        }

        return res.json(user);
    }
}