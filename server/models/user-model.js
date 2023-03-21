import {Schema, model} from 'mongoose';

import { string_type, bool_type, club_type } from './type-schemas.js';

const userSchema = new Schema({
    username: string_type,
    isAdmin: bool_type,
    isManager: bool_type,
    club: string_type,
    userType: string_type,
    email: string_type,
    password: string_type,
}, {
    collection: "Users"
})

const userModel = model('user-model', userSchema);

export default userModel;