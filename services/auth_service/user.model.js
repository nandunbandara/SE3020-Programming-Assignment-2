/**
 * Created by ntban_000 on 5/15/2017.
 */
const
    mongoose    =   require('mongoose');
    Schema      =   mongoose.Schema;

const UserSchema = new Schema({
    name: { type:String, required:true },
    email: { type:String, required:true, unique:true },
    password: { type:String, required:true }
})

//encrypt passwords
UserSchema.pre('save', next=>{
    var user = this;
    bcrypt.hash(user.password, null, null, function(err,hash){
        if(err) return next(err);
        user.password = hash;
        next();
    })
})

//compare passwords
UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);

