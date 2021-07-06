import React, { ReactElement, useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CategoryProps, GlobalState } from "../../redux/types";
import { fetchData } from '../../redux/actions';
import { getDarkMode } from "../../redux/selectors";
import Category from '../../components/category/category';
import './products.css';
import DarkMode from "../../components/darkmode/DarkMode";
import { Link } from "react-router-dom";

interface ProductsStateProps {
  data: any;
  darkMode: boolean;
}

interface ProductsDispatchProps {
  getData: () => void;
}

interface ProductsProps extends ProductsStateProps {
  onChange: () => void;
}

function mapStateToProps(state: GlobalState): ProductsStateProps {
  return {
    darkMode: getDarkMode(state),
    data: state.uiState.data,
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    getData: () => dispatch<any>(fetchData()),
  }
}

function mergeProps(stateProps: ProductsStateProps, dispatchProps: ProductsDispatchProps): ProductsProps {
  return {
    ...stateProps,
    onChange: (): void => {
      dispatchProps.getData();
    }
  }
}

function Products(props: ProductsProps): ReactElement {
  const { onChange, data, darkMode } = props;
  useEffect(() => {
    onChange()
    // eslint-disable-next-line
  }, []);

  return (

    <div className={`products ${darkMode ? 'products--dark-mode' : ''}`}>
      <DarkMode />
      {data?.map((category: CategoryProps) =>
        <Category key={category.name} name={category.name} products={category.products} darkMode={props.darkMode} />
      )}
      <Link to="/basket" className="basket-button">Basket</Link>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Products);
