import {Schema, model} from "mongoose";

import { string_type, date_type, club_type, buffer_type } from "./type-schemas.js";

const eventSchema = new Schema({
    eventName: string_type,
    aboutEvent: String,
    eventDate: date_type,
    club: club_type,
    registerLink: string_type,
    eventPageLink: String,
}, {
    collection: "events"
})

const eventModel = model('event-model', eventSchema);

export default eventModel;