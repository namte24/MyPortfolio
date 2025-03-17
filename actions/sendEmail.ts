"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail =async (formData: FormData) => {
    
    const senderEmail = formData.get("senderEmail"); 
    const message = formData.get("message");

    if(!validateString(senderEmail, 500)){
        return{
            error: "Inavid sender email"
        };
    }
    if(!validateString(message, 1000)){
        return  {error:"Invalid Message"};
    }
   

    let data;
try {
    data = await resend.emails.send({
        from: 'Contact Form<onboarding@resend.dev>',
        to: 'tenzingb1738@gmail.com',
        subject: 'message from contact form',
        reply_to: senderEmail as string,
        react: React.createElement(ContactFormEmail,{
            message: message as string,
            senderEmail: senderEmail as string,
        })
    })
} catch (error: unknown) {
    return{
        error: getErrorMessage(error)
    }
}   
return{
    data,
}
}