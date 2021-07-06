import React from "react";
import { PriceProps } from "../../redux/types";
import "./price.css";

const Price = ({ amount, billingFrequency, periodStart }: PriceProps) => {
  const freq =
    billingFrequency === "MONTHLY"
      ? "Month"
      : billingFrequency === "ONCE"
      ? "one time"
      : null;
  return (
    <div className="price-container">
      {periodStart > 1 ? (
        <div className="price">{`From ${periodStart} ${freq} ${amount} € / ${freq}`}</div>
      ) : (
        <div className="price">{`${amount} € / ${freq}`}</div>
      )}
    </div>
  );
};

export default Price;
