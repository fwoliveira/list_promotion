import React,{useState, useEffect} from 'react';
import PromotionCard from '../../../componets/Promotion/card/Card'
import axios from 'axios';

const PagesPromotionlist = () => {

    // const promotion = {
    //     id: 1,
    //     title:
    //       "Kit Notebook Acer Aspire 3 + Mochila Green, A315-41-R790, AMD Ryzen 3 2200U Dual Core",
    //     price: 1799,
    //     imageUrl:"https://m.media-amazon.com/images/I/61o0lt6Sh6L._AC_SX679_.jpg",
    //      URL: "https://www.amazon.com.br/Notebook-Acer-Mochila-A315-41-R790-Memória/dp/B07YDWLV7S",
    //     comments: [
    //       {
    //         id: 1,
    //         comment: "TELA HD",
    //         promotionId: 1,
    //       },
    //     ]
    //   }
    const [promotions, setPromotions] =  useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/promotions?_embed=comments')
      .then((response) => {
        //console.log(response.data);
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