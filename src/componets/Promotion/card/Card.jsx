import React from "react";
import card from "./card.module.css";
import {Link} from "react-router-dom";
function PromotionCard({promotion} ) {
  return (
    <div className={card.promotionCard}>
      <img className={card.promotionCardImage} src={promotion.imageUrl} alt={promotion.title} />
      <div />
      <div>
        <h1 className={card.promotionCardTitle}>{promotion.title}</h1>
        <span className={card.promotionCardPrice} >R${promotion.price}</span>
        <footer className={card.promotionCardFooter}>
          <div className={card.promotionCardComment}>
            {promotion.comments.length > 0 && (
              <div className={card.promotionCardComment}>
                "{promotion.comments[0].comment}"
              </div>
            )}
          </div>
          <div className={card.promotionCardCommentsCount} >
            {promotion.comments.length }{''}
            {promotion.comments.length >1 ? 'Comentario':'Comentarios' }
          </div >
          <a className={card.promotionCardLink} href= {promotion.URL} rel="nooper">Ir para o site</a>
          <Link to={`/edit/${promotion.id}`}>editar</Link>
        </footer>
      </div>
    </div>
  );
}

export default PromotionCard;
