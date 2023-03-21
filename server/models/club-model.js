import {Schema, model} from "mongoose";

import { string_type, number_type, bool_type, user_type, event_type } from "./type-schemas.js";

const clubSchema = new Schema({
    clubName: string_type,
    hadManager: bool_type,
    noOfMembers: number_type,
    clubType: string_type,
    members: [user_type],
    aboutClub: {
        ...string_type,
        required: false,
    },
    lead: user_type,
    clubEvents: [event_type]
}, {
    colllection: 'clubs'
})

const clubModel = model('club-model', clubSchema);

export default clubModel;