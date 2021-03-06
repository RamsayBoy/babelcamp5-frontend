import React from 'react';
import './ProductList.css';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gridView: false,
        }
    }

    render() {
        const productList = this.props.products.map(product => {
            return (
                <li key={product.id}>
                    <h2>{product.name}</h2>
                    <img src={product.image} alt={product.name} />
                    <p>{product.description.length > 150 ? product.description.slice(0, 150) + '...' : product.description}</p>
                    <div className="price">{product.price} €</div>
                    <div>
                        <button className="button">add to cart</button>
                    </div>
                </li>
            );
        });

        return (
            <div className="wrapper">
                <div className="views">
                    <i onClick={() => this.setState({ gridView: false })} className="material-icons">
                        view_list
                   </i>
                    <i onClick={() => this.setState({ gridView: true })} className="material-icons">
                        view_module
                  </i>
                </div>
                <ul className={this.state.gridView ? 'grid' : ''}>
                    {productList}
                </ul>
            </div>
        );
    }
}

export default ProductList;