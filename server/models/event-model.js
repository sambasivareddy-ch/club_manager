import {Schema, model} from "mongoose";

import { string_type, date_type, club_type, buffer_type } from "./type-schemas.js";

const eventSchema = new Schema({
    eventName: string_type,
    aboutEvent: string_type,
    eventDate: date_type,
    club: club_type,
    registerLink: string_type,
    eventPageLink: string_type,
    poster: buffer_type
}, {
    collection: "events"
})

const eventModel = model('event-model', eventSchema);

export default eventModel;