// External dependencies
import { ObjectId } from "mongodb";

// Class Implementation
export default class Carrier{
    constructor(public name:string, public sms:string, public mms:string, public teir:number)
}