
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
  import { auth } from "@/app/(auth)/auth";
  import { useEffect, useState } from "react";
  import { UUID } from "crypto";
  import { Button } from "./ui/button";
  import { useNamespace } from "@/app/NamespaceContext";
  
  export const getNamespaces = async(namespaces:string[],setNamespaces:React.Dispatch<React.SetStateAction<Array<string>>>)=>{
    const response = await fetch('/api/namespaces',{
      method:'GET'
    })
    if(!response.ok){
      console.log('empty namespace')
    }
    const data = await response.json()
    
    setNamespaces([...namespaces,...data])
  }
  export const SelectNamespace = () => {
    const {namespaces,setNamespaces} = useNamespace()
      const {setSelectedNamespace} = useNamespace()
      
    
      useEffect(()=>{
       
        getNamespaces(namespaces,setNamespaces)
      },[])
  
     
    return (
      <>
      {/**onvalueChange automatically looks at SelectValue to pass in the value */}
        <Select onValueChange={(value)=>setSelectedNamespace(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Namespaces" />
          </SelectTrigger>
          <SelectContent>
              {
                  namespaces.map((namespace,index)=>(
                    namespace ? (
                    <SelectItem key={index} value={namespace}>{namespace}</SelectItem>
                    ):null
  
                  ))
              }
            {/* <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem> */}
          </SelectContent>
        </Select>
      </>
    );
  };
  