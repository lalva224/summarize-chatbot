import { addUserNamespace, getUserNamespaces } from "@/lib/db/queries";
import {auth} from '@/app/(auth)/auth'
import { UUID } from "crypto";

export async function GET(request:Request){
    try{
    const session = await auth()
    //type assertions tell compiler to treat a type as something, in this case as UUID, in the case that the compiler couldnt infer by itself.
    const userId = session?.user?.id as UUID
    const namespaces = await getUserNamespaces(userId)
    return new Response(JSON.stringify(namespaces),{status:200})
    }
    catch(error){
        console.log(error)
        return new Response(JSON.stringify('No namespaces!'),{status:500})
    }
    
}

export async function POST(request:Request){
    try{
    const session = await auth()
    const userId = session?.user?.id as UUID
    const {namespace} = await request.json()
    console.log(namespace)
    const result = await addUserNamespace(userId,namespace)
    return new Response(JSON.stringify('Success'),{status:200})
    }
    catch(error){
        console.log(error)
        return new Response(JSON.stringify(error),{status:500})
    }
}