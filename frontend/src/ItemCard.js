import React from 'react';

const ItemCard = ({part}) => {

    return(
        <div id="cardContainer">
            {part.map(item => (
                <div id="card">
                    <h2 id="itemName">{item.name}</h2>
                    <h3 id="itemQuantity">{item.quantity} left </h3>
                    <h3 id="itemValue"><i>{item.value} / ea</i></h3>
                </div>
            ))}
        </div>
    )

}

export default ItemCard;