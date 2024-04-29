import mongoose, { Schema} from "mongoose";

const logInShcema = new Schema(
    {
        username : {
            type: String,
            required: true
        },
        password : {
            type: String,
            required: true
        }
    }
)

export default mongoose.model("SignUp", logInShcema);