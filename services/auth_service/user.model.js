/**
 * Created by ntban_000 on 5/15/2017.
 */
const
    mongoose    =   require('mongoose');
    Schema      =   mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    name: String,
    email: String,
    password: String,
    contact: String
}))

