import React from 'react'

const UserContext = React.createContext()

export default UserContext;
// react ke andar hi  createContext() method hai 
// isko UserContext mein store krdiya aur export
// context apko varible provider karega'
// so every context is a provider
// isko bhi ek wrapper lagayenge
// to wrap krne ke badd ye provider ban jayega
// to saare components jo iske andar honge usko Usercontext ka access miljayega
// context is a global variable

// jab userContext ban jaye to ek usercontxtprovider bhi banao

