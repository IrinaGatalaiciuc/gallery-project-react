import React, {useState} from 'react'
import { createContext } from 'react'
import Buttons from '../buttons/Buttons'

export const BtnContext = createContext()

 

export const Context = (props) => {
    const [theme, setTheme] = useState("mixed")

 const datavalue = { theme, setTheme }
    return (
                <div>
                    <BtnContext.Provider value={datavalue}>
                        {props.children}
                    </BtnContext.Provider>
                 </div>
            )
}

