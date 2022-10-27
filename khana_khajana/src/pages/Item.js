import {useEffect, useState, useContext} from 'react';
// import Nav from './components/navBar;
import {Cartcontext} from "../context/cart.context";
import {useQuery, useMutation} from 'react-query'
import { API_URL } from '../lib/config';

export default function ItemContainer() {
	const {cartlist, setCartlist} = useContext(Cartcontext);
	const {data: foodItems, isLoading: foodItemsLoading, refetch: refetchFoodItems} = useQuery('Dishes', () => fetch(`${API_URL}api/dish`)
	.then((res) => res.json())
	.then((data) => 
	data.map(dish => {
			const base64 = btoa(
				dish.image.data.reduce((data, byte) => data + String.fromCharCode(byte),''))
			return {
				...dish,
				imageSrc: base64,
			}
		})
	
	), {
		enabled: true
	})

	const {} = useMutation('AddToCart', async( name) => {
		await fetch(`${API_URL}api/addToCart`)
	})

	const getDetails = (id, name, price, imageSrc) =>{
		let itemIndex;
	    const existingItem=cartlist.find((item,index) => item.name===name) ;
        if(existingItem)
        {
	      setCartlist( cartlist.map((item) =>
	      	item.name == name?{...item,quantity:item.quantity+1}:item
	      ));
        }

	    else {
	      setCartlist([...cartlist, {id,name, price, imageSrc, quantity:1}])
	      
	    }
	    
		
		// console.log(foodItems);
	}

	return (
		
			foodItemsLoading ? <div>Loading...</div> : <div className="food-container">
			{
				foodItems?.map(({id, name, price, imageSrc}) =>{
					return (
						// <img src={`data:image/jpeg;base64,${imageSrc}`} />

						<div key={id} className="food-item">

							<img src={`data:image/jpeg;base64,${imageSrc}`} />
							<div className="food-item-body">
							<div>
							<p>{name}</p>
							<p>price :{price}</p>
							</div>
							<button className="button-conatiner" onClick={() => {getDetails(id,name,price, imageSrc)}} >Add</button>
							</div>

						</div>
						)
				})
			}
		</div>
		

		
	)
}