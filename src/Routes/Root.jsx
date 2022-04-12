import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import PagesPromotionForm from "../pages/Promotion/Form/form";

import PagesPromotionlist from "../pages/Promotion/List/list";

const Root = () => {
    return(
        <Router>
           <Routes>
              <Route  path="/" element={<PagesPromotionlist/>} />
              <Route path="/create" element={<PagesPromotionForm/>}/>
              <Route path="/edit/:id" element={<PagesPromotionForm/>}/>
           </Routes>        
        </Router>

    )


}
export default Root;

