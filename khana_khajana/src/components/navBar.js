import {Outlet, Link} from "react-router-dom";

 const Nav = function(){

	return(
		<>
		<header>
        		<nav>
          		<Link to="/" id="title">Khana  khajana</Link>
          		<div className="navlink-container">
          		<Link href="#" className="navlink"> 
          		
          		Cart
          		</Link>
          		</div>
       			 </nav>
     	 </header>
     	 <Outlet/>
     	 </>
		);

}

export default Nav;