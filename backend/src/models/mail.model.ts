import mongoose from 'mongoose';

const mailSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'invalid user']
        },
        email: {
            type: String,
            required: [true, 'invalid email'],
            unique: true
        },
        subject: {
            type: String,
            required: [true, 'invalid subject']
        },
        message: {
            type: String,
            required: [true, 'invalid message']
        }
    },{
        timestamps: true
    }
)

const Mail = mongoose.model('Mail', mailSchema);

export default Mail;