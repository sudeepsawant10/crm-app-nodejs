// functions to send the data to db or update the db of db

import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel"

const Contact = mongoose.model('Contacts', ContactSchema);

export const addNewContact = (req, res) =>{
    let newContact = new Contact(req.body);

    newContact.save((err, contact) =>{
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
   
};

export const getContacts = (req, res) => {
    Contact.find().then((data)=>{
        res.send('GET request successful!')
    })
};