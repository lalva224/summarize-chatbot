'use client'
//need this to identify selected namespace from selected items
import { createContext,useState,useContext, SetStateAction } from "react";
//default values for the useContext hook
const NamespaceContext = createContext<{selectedNamespace:string,namespaces:Array<string>, setNamespaces:React.Dispatch<React.SetStateAction<Array<string>>>,setSelectedNamespace:React.Dispatch<React.SetStateAction<string>>}>({
    selectedNamespace: '',
    setSelectedNamespace: () => { },
    namespaces: ['None'],
    setNamespaces: ()=>{}
 
});
//provider will wrap the root layout
export const NamespaceProvider = ({ children }: { children: React.ReactNode }) => {
    //default valyes for context provider
    //variable setSelectedNamespace will be used to set selectedNamespace in select-namespace
    //then the current selectedNamespace will be retrieved in Context-Buttons
    const [selectedNamespace, setSelectedNamespace] = useState('');
    const [namespaces,setNamespaces] = useState(['None'])
    return (
        <NamespaceContext.Provider value={{ selectedNamespace, setSelectedNamespace,namespaces,setNamespaces }}>
            {children}
        </NamespaceContext.Provider>
    );}
//this is what will be used in other files
export const useNamespace = () => useContext(NamespaceContext)