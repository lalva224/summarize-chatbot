
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
  
  
  export const SelectNamespace = () => {
      const [namespaces,setNamespaces] = useState(['None'])
      const {setSelectedNamespace} = useNamespace()
      const getNamespaces = async()=>{
        const response = await fetch('/api/namespaces',{
          method:'GET'
        })
        if(!response.ok){
          console.log('empty namespace')
        }
        const data = await response.json()
        
        setNamespaces([...namespaces,...data])
      }
      const addNamespace = async(namespace:string)=>{
        
        const response = await fetch('api/namespaces',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          //sending namespace: namespace on other end
          body:JSON.stringify({namespace})
        })
        if(!response.ok){
          console.log(response.status)
        }
        const result = await response.json()
        console.log(result)
  
        //refresh by calling getNamespaces
        getNamespaces()
      }
      useEffect(()=>{
       
        getNamespaces()
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
                    <SelectItem key={index} value={namespace}>{namespace}</SelectItem>
                   
  
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
  