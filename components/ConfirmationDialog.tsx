import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Ref } from "react"
import { Button } from "./ui/button"
import { useNamespace } from "@/app/NamespaceContext"
  export const ConfirmationDialog = ()=>{
    const {selectedNamespace} = useNamespace()
    console.log(selectedNamespace)
    return (
        <>
        <AlertDialog>
            {/**asChild allows user to implement their own custom child element instead of the default element */}
        <AlertDialogTrigger asChild> 
        <Button
                variant="ghost"
                
                className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start"
            >
                <span className="font-medium">Remove Context</span>
                <span className="text-muted-foreground">
                Remove from pinecone vector store
                </span>
            </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction >Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>

        </>
    )
  }
  