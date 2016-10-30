/**
 * Created by udemy.don on 10/30/16.
 */
/**
 * Created by gopi on 4/9/16.
 */
import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";

export const Products = new Mongo.Collection("products");

if(Meteor.isServer){
    Products._ensureIndex({title:1});
}

Products.attachSchema(new SimpleSchema({
    name: {
        type: String
    },
    desc: {
        type: String,
        optional: true
    },
    price: {
        type: Number
    },
    pictureURL: {
        type: String,
        optional: true
    }
}));

