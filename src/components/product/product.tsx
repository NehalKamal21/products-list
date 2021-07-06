import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { updateProduct } from "../../redux/actions";
import { ProductProps } from "../../redux/types";
import Price from "../price/price";

import "./product.css";

const Product = ({
  name,
  description,
  price,
  selected,
  toggleSelected,
}: ProductProps): ReactElement => {
  const handleOnChange = (ev: any) => {
    toggleSelected(ev.target.checked, name);
  };

  return (
    <div className="product-container">
      <input
        type="checkbox"
        checked={selected}
        onChange={(ev) => handleOnChange(ev)}
        id="product"
        className={`${selected ? 'selected' : ''}`}
      />
      <div className="product-details">
        <label htmlFor="product">{name}</label>
        <div>{description}</div>
        <>
          {price?.map((item) => (
            <Price
              key={item.amount}
              amount={item.amount}
              billingFrequency={item.billingFrequency}
              periodStart={item.periodStart}
            />
          ))}
        </>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    toggleSelected: (checked: boolean, name: string) =>
      dispatch<any>(updateProduct(checked, name)),
  };
}

export default connect(undefined, mapDispatchToProps)(Product);
