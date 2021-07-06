import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { CategoryProps, GlobalState, ProductProps } from "../../redux/types";
import { getDarkMode } from "../../redux/selectors";
import "./basket.css";
import DarkMode from "../../components/darkmode/DarkMode";
import BasketItem from "../../components/basketItem/basketItem";
import { Link } from "react-router-dom";

interface BasketStateProps {
  data: any;
  darkMode: boolean;
}

function mapStateToProps(state: GlobalState): BasketStateProps {
  return {
    darkMode: getDarkMode(state),
    data: state.uiState.data,
  };
}

function Basket(props: BasketStateProps): ReactElement {
  const { data, darkMode } = props;

  return (
    <div className={`basket ${darkMode ? "basket--dark-mode" : ""}`}>
      <DarkMode />
      <h2 className={`overview ${darkMode ? 'overview--dark-mode' : ''}`}>Overview</h2>
      {data?.map((category: CategoryProps) => (
        <div key={category.name}>
          {category.products.map((product: ProductProps) => {
            return (
              <div key={product.name}>
                {product.selected && (
                  <BasketItem
                    key={product.name}
                    name={product.name}
                    price={product.price}
                  />
                )}
              </div>
            );
          })}
        </div>
      ))}
      <Link to="/" className="order-button">
        Order
      </Link>
    </div>
  );
}

export default connect(mapStateToProps)(Basket);
