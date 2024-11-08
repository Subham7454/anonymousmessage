import { Message } from "@/model/User";
export interface ApiResposne{
    success: boolean;
    message: string;
    isAcceptingMessage?: boolean;
    messages?:Array<Message>
}