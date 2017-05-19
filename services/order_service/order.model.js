/**
 * Created by ntban_000 on 5/17/2017.
 */
const mongoose = require('mongoose')
      Schema = mongoose.Schema;

const OrderSchema = new Schema({
      user_id: { type:String, required:true},
      theatre_id: { type:String, required:true },
      movie_id: { type:String, required:true },
      time: { type:String, required: true },
      seats: { type: Schema.Types.ObjectId, ref: 'seat' },
      snacks: { type:Schema.Types.ObjectId, ref: 'snack' }
})