import React, {useEffect, useState} from "react";
import searchCss from './Search.module.css';
import axios from 'axios';
import PromotionCard from '../card/Card';
import { Link } from "react-router-dom";


const PromotionSearch = () => { 
        const [promotions, setPromotions] =  useState([]);
        const[ search, setSearch] = useState('');
    
        useEffect(() => {
          const params = {};
          if (search) {
            params.title_like = search;
          }

          axios.get('http://localhost:5000/promotions?_embed=comments&_order=desc&_sort=id', { params })
          .then((response) => {
            console.log(response.data);
            setPromotions(response.data);
    
          }
          );
         }, [search])
          return (
         <>
         <header className={searchCss.PromotionSearchHeader}>
           <h1> promo show</h1>
           <Link to= "/create">Nova promoção</Link>
         </header>
         <input type="search"
         className={searchCss.PromotionSearchInput} 
         placeholder="Busca"
         value={search}
         onChange={(ev) => setSearch(ev.target.value)}
         />
          {promotions.map((promotion) =>(
            <PromotionCard promotion={promotion} key={promotion.id}/>
           ) )}  
         </>
    );

};

export default PromotionSearch;
