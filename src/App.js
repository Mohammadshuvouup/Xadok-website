import Sidebar from "./Components/sidebar";
import Supermarket from "./Components/supermarket";
import Explore from "./Components/explore";
import SubCategory from "./Components/subCategory_page";
import Offers from "./Components/offers";
import OffersDark from "./Components/offersDark";
import Dairy from "./Components/dairy";
import Eggs from "./Components/eggs";
import Reoffer from "./Components/reoffer";
import Weekend from "./Components/weekend";
import National from "./Components/nationalDay";
import Exploring from "./Components/exploring";
import Favorite from "./Components/favorite";
import Orders from "./Components/orders";
import Messages from "./Components/messages";
import Settings from "./Components/settings";
import './App.css';
import SideDrawer from './Components/SideDrawer/SideDrawer'
import{BrowserRouter as Router,Route,Switch,useRouteMatch } from "react-router-dom"


import React, { Component } from 'react';


const App=()=>{
  
  return(
    <div>
      <Router>
     <Switch>
       <Route path="/" exact component={Sidebar} />
       <Route path="/supermarket" exact component={Supermarket} />
       <Route path="/exploring" exact component={Exploring}/>
       <Route path="/favorite" exact component={Favorite}/>
        <Route path="/orders" exact component={Orders}/>
       <Route path="/messages" exact component={Messages}/>        
       <Route path="/settings" exact component={Settings}/>       
        <Route path="/products/:shop_name/:shop_id/:cat_id" exact component={Explore}/>
       {/* <Route path="/:shop_name/:shop_id/:cat_id(/:subcat_name)(/:subcat_id)" exact component={SubCategory}/> */}
       <Route path="/:shop_name/:shop_id/:cat_id/:subcat_name/:subcat_id" exact component={SubCategory}/>
       <Route path="/offers" exact component={Offers}/>       
        <Route path="/offersDark" exact component={OffersDark}/>       
         <Route path="/dairy" exact component={Dairy}/>      
           <Route path="/eggs" exact component={Eggs} />        
           <Route path="/reoffer" exact component={Reoffer}/>        
           <Route path="/weekendDayOffer" exact component={Weekend}/>       
            <Route path="/nationalDayOffer" exact component={National}/>          
             </Switch>

            </Router>  


    </div>
  );
}

export default App;

// export default class App extends Component {



//   render() {

   
//     return (
//       <div>
//            <Router>
//       <Switch>
//         <Route path="/" exact component={Sidebar} />
//         <Route path="/supermarket" exact component={Supermarket} />
//         <Route path="/exploring" exact component={Exploring}/>
//         <Route path="/favorite" exact component={Favorite}/>
//         <Route path="/orders" exact component={Orders}/>
//         <Route path="/messages" exact component={Messages}/>
//         <Route path="/settings" exact component={Settings}/>
//         <Route path="/products/:shop_name/:shop_id/:cat_id" exact component={Explore}/>
//         <Route path="/:shop_name/:shop_id/:cat_id/:subcat_name/:subcat_id" exact component={SubCategory}/>
//         <Route path="/offers" exact component={Offers}/>
//         <Route path="/offersDark" exact component={OffersDark}/>
//         <Route path="/dairy" exact component={Dairy}/>
//         <Route path="/eggs" exact component={Eggs} />
//         <Route path="/reoffer" exact component={Reoffer}/>
//         <Route path="/weekendDayOffer" exact component={Weekend}/>
//         <Route path="/nationalDayOffer" exact component={National}/>   
//         </Switch>


//             </Router>  


//       </div>
//     )
//   }
// }

