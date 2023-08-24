/* eslint-disable no-useless-escape */
export default function validate (userContact){
    const errors= []

    if(!userContact.name){
        errors.name = "Write your name"
    }else errors.name= ""

    if(!userContact.email){
        errors.email= "Write your email"
    }
    else if( !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userContact.email))
     {
      errors.email = "Invalid email";
    } else errors.email= ""

    if(!userContact.message) {
        errors.message = "Write a message"
    } else if (userContact.message.length < 5){
        errors.message="Message too short"
    }
    else errors.message=""

    return errors
}