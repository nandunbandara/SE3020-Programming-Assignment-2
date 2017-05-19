/**
 * Created by ntban_000 on 5/19/2017.
 */
const mongoose = require('mongoose');
    Schema = mongoose.Schema;

const PaymentSchema  = new Schema({
    name: { type:String, required:true },
    amount: { type:Number, required:true },
    account_id: { type:String, required:true },
    dateTime: { type:String, required:true }
})

module.exports = mongoose.model('Payment', PaymentSchema);