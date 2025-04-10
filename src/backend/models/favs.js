import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const favSchema = new Schema({
    userId: String,
    temId: Number,
});

const Fav = mongoose.model('Fav', favSchema);

export default Fav;