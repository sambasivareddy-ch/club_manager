import {Schema} from 'mongoose';

export const string_type = {
    type: String,
    required: true,
}

export const date_type = {
    type: Date,
    default: Date.now,
}

export const bool_type = {
    type: Boolean,
    default: false,
    required: true,
}

export const number_type = {
    type: Number,
    default: 0,
    required: true,
}

export const user_type = {
    type: Schema.Types.ObjectId,
    ref: 'user-model'
}

export const club_type = {
    type: Schema.Types.ObjectId,
    ref: 'club-model'
}

export const event_type = {
    type: Schema.Types.ObjectId,
    ref: 'event-model'
}

export const buffer_type = {
    type: Buffer,
    required: true,
}