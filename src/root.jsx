import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import PagesPromotionForm from "./pages/Promotion/Form/form";

import PagesPromotionForm from "./pages/Promotion/List/list";

const Root = () => {
    return(
        <Router>
           <Routes>
              <Route exact path="/" componet={PagesPromotionlist} />
              <Route path="/create" componet={PagesPromotionForm}/>
              <Route path="/edit/:id" componet={PagesPromotionForm}/>
           </Routes>        
        </Router>

    )


}
export default Root;

