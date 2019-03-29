import React from 'react';
import PropTypes from 'prop-types';

function ProductList (props) {
	return (
		<ul>
		  {
			props.products.map(product => (
			  <li key={product.id} onClick={() => props.onProductSelect(product)}>
        {product.name} ({product.brand})
        </li>
			))
		  }
		</ul>
	  )
}
// permet de faire un check du type des props qui vont etre passés a notre component
ProductList.propTypes = {
	products: PropTypes.array.isRequired,
	onProductSelect: PropTypes.func.isRequired
};
  export default ProductList;