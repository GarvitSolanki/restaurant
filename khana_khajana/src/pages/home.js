import Nav from '../components/navBar';
import {Outlet} from "react-router-dom";
export default function Home() {
	return(
		<div>
			<Nav/>
			<Outlet/>
		</div>
	)
}