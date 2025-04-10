import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const temaSchema = new Schema({
    id: Number,
    title: String,
    link: String,
});

const Tema = mongoose.model('Tema', temaSchema);

export default Tema;