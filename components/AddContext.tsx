// 'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNamespace } from "@/app/NamespaceContext";
import { getNamespaces } from "./select-namespace";
import { useState } from "react";

export function AddContext() {
    const {namespaces,setNamespaces} = useNamespace()
    const [newNamespace,setNewNamespace] = useState('')
    const [isOpen,setIsOpen] = useState(false)
    const addNamespace = async()=>{
        if(newNamespace in namespaces){
          console.log('duplicate')
          return 'Duplicate'
        }
        const response = await fetch('api/namespaces',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          //sending namespace: namespace on other end
          body:JSON.stringify({newNamespace})
        })
        if(!response.ok){
          console.log(response.status)
        }
        const result = await response.json()
        console.log(result)
  
        //refresh by calling getNamespaces
        getNamespaces(namespaces,setNamespaces)

        setIsOpen(false)
      }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
      <Button
        variant="ghost"
        onClick={async () => {
          setIsOpen(true)
        }}
        className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start"
      >
        <span className="font-medium">Add Context</span>
        <span className="text-muted-foreground">
          Add document, data or context you want saved
        </span>
      </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Context</DialogTitle>
          <DialogDescription>
           Add your context here. The chatbot will remember this permanently or until you remove and answer all of your questions on based on this data.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="namespace" className="text-right">
              Namespace
            </Label>
            <Input id="name" onChange={e=>setNewNamespace(e.target.value)}className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            {/* <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" /> */}
          </div>
        </div>
        <DialogFooter>
          <Button onClick={addNamespace} type="submit">Add context</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
