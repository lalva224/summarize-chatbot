import { useRef, useState } from "react"
import { ConfirmationDialog } from "./ConfirmationDialog"
import { Button } from "./ui/button"


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
                <Button
        variant="ghost"
        onClick={async () => {
          // Some functionality
        }}
        className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start"
      >
        <span className="font-medium">Add Context</span>
        <span className="text-muted-foreground">
          Add document, data or context you want saved
        </span>
      </Button>
            ):(
                        <ConfirmationDialog/>
            )
        }
      
        </>
    )
}