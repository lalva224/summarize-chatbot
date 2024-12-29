import { useRef, useState } from "react"
import { ConfirmationDialog } from "./ConfirmationDialog"
import { Button } from "./ui/button"
import { AddContext } from "./AddContext"


export const ContextButton = ({type}:{type:string})=>{
    const [isDialogOpen,setIsDialogOpen] = useState(false)
    const handleConfirm= ()=>{
        setIsDialogOpen(false)
    }
    const handleCancel = ()=>{
        setIsDialogOpen(false)
    }
    return (
        <>
        {
            type=='add'?(
                <AddContext/>
            ):(
                        <ConfirmationDialog/>
            )
        }
      
        </>
    )
}