import React from "react";
import UserContext from "./Usercontext.js";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

// import usercontext
// usercontextprovider is a method and export it
// jaisa outlet tha  another context jo bhi prop arhe 
// usko {children} kyouki data pass krna hai
// children ka matlab ye hai ki jo bhi component arha usko as it is likh do
//Usercontext.provider  to ye children kya access karega koi data bhi to pass krna padega 
// created state user setuser 
// lekin konsi value ka access de rhe apan log
//  value  mein object hai jisme koi bhi data de sakte hai
// usestate se data milega jo ki value mein pass hoga 
// this is a store