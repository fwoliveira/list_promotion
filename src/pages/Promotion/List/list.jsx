import React,{useState, useEffect} from 'react';
import PromotionCard from '../../../componets/Promotion/card/Card'
import axios from 'axios';

const PagesPromotionlist = () => {

    
    const [promotions, setPromotions] =  useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/promotions?_embed=comments')
      .then((response) => {
        console.log(response.data);
        setPromotions(response.data);

      }
      );
     }, [])

    
     
     return(
        
        <>
          {promotions.map((promotion) =>(
            <PromotionCard promotion={promotion} key={promotion.id}/>
           ) )}
            
        </>
    )
}


export default PagesPromotionlist;