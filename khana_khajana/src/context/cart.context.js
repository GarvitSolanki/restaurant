import {createContext, useState} from "react";

export const Cartcontext = createContext({
	cartlist: [],
	setCartlist: () =>{
		
		return null
	}
	
})

export default function CartProvider({children}){
	const [cartlist,setCartlist] =useState([]);
	const value = { cartlist,setCartlist};

	return <Cartcontext.Provider value = {value}> {children} </Cartcontext.Provider>
}
