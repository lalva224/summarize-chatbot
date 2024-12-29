'use client'
//need this to identify selected namespace from selected items
import { createContext,useState,useContext } from "react";
//default values for the useContext hook
const NamespaceContext = createContext<{selectedNamespace:string,setSelectedNamespace:React.Dispatch<React.SetStateAction<string>>}>({
    selectedNamespace : '',
    setSelectedNamespace: ()=>{}
});
//provider will wrap the root layout
export const NamespaceProvider = ({ children }: { children: React.ReactNode }) => {
    //default valyes for context provider
    //variable setSelectedNamespace will be used to set selectedNamespace in select-namespace
    //then the current selectedNamespace will be retrieved in Context-Buttons
    const [selectedNamespace, setSelectedNamespace] = useState('');

    return (
        <NamespaceContext.Provider value={{ selectedNamespace, setSelectedNamespace }}>
            {children}
        </NamespaceContext.Provider>
    );}
//this is what will be used in other files
export const useNamespace = () => useContext(NamespaceContext)