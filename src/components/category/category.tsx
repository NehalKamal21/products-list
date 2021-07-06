import React, { ReactElement } from 'react';
import { CategoryProps } from "../../redux/types";
import Product from '../product/product';
import './category.css';

const Category = ({ name, products, darkMode }: CategoryProps): ReactElement => {
    return (
        <div>
            <h2 className={`category-name ${darkMode ? 'category-name--dark-mode' : ''}`}>{name}</h2>
            <div className="products-container">
                {products.map(product =>
                    <Product key={product.name}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        selected={product.selected} />
                )}
            </div>
        </div>
    )

}


export default Category;
