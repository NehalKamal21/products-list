import React, { ReactElement } from 'react';
import { BasketItemProps } from "../../redux/types";
import Price from '../price/price';
import './basketItem.css';

const BasketItem = ({ name, price }: BasketItemProps): ReactElement => {
    return (
        <div className="basket-item-container">
            <div className="product-name">{name}</div>
            <div className="price">
                {price.map(i =>
                    <Price
                        key={i.amount}
                        amount={i.amount}
                        billingFrequency={i.billingFrequency}
                        periodStart={i.periodStart}
                    />
                )}
            </div>
        </div>
    )

}


export default BasketItem;
