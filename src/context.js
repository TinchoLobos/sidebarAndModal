import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
const [isSidebarOpen,setIsSidebarOpen] = useState(false)
const [isModalOpen,setIsModalOpen] = useState(false)

const openSideBar = () =>{
setIsSidebarOpen(true)
console.log(isSidebarOpen);
}
const closeSideBar = () =>{
setIsSidebarOpen(false)
}
const openModal = () =>{
setIsModalOpen(true)
}
const closeModal = () =>{
setIsModalOpen(false)
}

   return( 
   <AppContext.Provider
   value={
   {isModalOpen,
   isSidebarOpen,
   openSideBar,
   closeSideBar,
   openModal,
   closeModal}
   }>
   {children}</AppContext.Provider>
   )
}

// Custom hook
export const useGlobalContext = () => {
   return useContext(AppContext)
}

export {AppContext, AppProvider}