import React, {useEffect, useState} from "react";
import searchCss from './Search.module.css';
import axios from 'axios';
import PromotionCard from '../card/Card';
import {link} from 'react-router-dom';
import { Link } from "react-router-dom";


const PromotionSearch = () => { 
        const [promotions, setPromotions] =  useState([]);
        const[ search, setShearch] = useState('');
    
        useEffect(() => {
          axios.get('http://localhost:5000/promotions?_embed=comments')
          .then((response) => {
            console.log(response.data);
            setPromotions(response.data);
    
          }
          );
         }, [])
          return (
         <>
         <header>
           <h1> promo show</h1>
           <Link to= "">Nova promoção</Link>
         </header>
         <input type="search"
         className={searchCss.PromotionSearchIput} 
         placeholder="Busca"
         value={search}/>
          {promotions.map((promotion) =>(
            <PromotionCard promotion={promotion} key={promotion.id}/>
           ) )}  
         </>
    );

};

export default PromotionSearch;
