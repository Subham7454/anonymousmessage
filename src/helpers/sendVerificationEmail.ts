import { resend } from "@/lib/resend";
import VerifiactionEmail from "../../emails/VerificationEmail";
import { ApiResposne } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string, username: string, verifyCode: string):Promise<ApiResposne>{
    try {
           await resend.emails.send({
        from: 'shubhamrawat1843@gmail.com',
        to: email,
        subject: 'verification code',
        react:VerifiactionEmail({username,otp:verifyCode})
    });
       
        return { success: false, message: "failed to send verification email" }
    } catch (emailError) {
        console.log("error sending verifiaction email", emailError)
        return{success:false,message:"failed to send verification email"}
    }
}