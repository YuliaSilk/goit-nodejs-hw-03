import { Schema, model } from "mongoose";
import { handleSaveError, addUpdateSettings } from "./hooks.js";
import Joi from 'joi';


const contactSchema = new Schema({
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    phone: {
        type: String,
        // match: /^\(d{3}\) \d{3}-\d{4}$/,
        require:true
    },
    favorite: {
        type: Boolean,
        default:false
    },
}, 
{versionKey: false, timestamps: true});

contactSchema.post("save", handleSaveError);

contactSchema.pre("findOneAndUpdate", addUpdateSettings);

contactSchema.post("findOneAndUpdate", handleSaveError);

export const contactAddScema = Joi.object ({
    name: Joi.string().required().messages({
        "any.required": `"name" must be exist`
    }),
    email: Joi.string().required().messages({
        "any.required": `"email" must be exist`
    }),
    phone: Joi.string().required().messages({
        "any.required": `"phone" must be exist`
    }),
    // favorite: Joi.boolean(),
})

export const contactUpdateFavoriteSchema = Joi.object ({
    favorite: Joi.boolean().required()
})

export const contactUpdateSchema = Joi.object ({
    name: Joi.string(),
    email: Joi.string(),
    phone: Joi.string(),
})

const Contact = model("contact", contactSchema);

export default Contact;