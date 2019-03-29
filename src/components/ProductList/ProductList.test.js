import React from 'react';
import {shallow} from 'enzyme';
import ProductList from './ProductList';
import '../../enzyme.setup'



let mockProducts, wrapper ,productSelectFn;
beforeEach(() => {
  // This is run before every test
 
  mockProducts = [
    {id: 1, name: 'Mock Product 1', brand: 'MockBrandA'},
    {id: 2, name: 'Mock Product 2', brand: 'MockBrandB'},
    {id: 3, name: 'Mock Product 3', brand: 'MockBrandC'},
  ];
  productSelectFn = (productSelected) => console.log('You selected', productSelected);
  wrapper = shallow(<ProductList products={mockProducts} onProductSelect={productSelectFn}/>);
});

it('should render an <li> element for every product in `props.products`', () => {
  expect(wrapper.find('li').length).toEqual(mockProducts.length);
});
it('should display the product name in each `<li>` element', () => {
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockProducts[0].name)).toEqual(true);
});
it('should display the brand name in each `<li>` element', () => {
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockProducts[0].brand)).toEqual(true);
});
it('should call `props.onProductSelect` when an <li> is clicked', () => {
  const firstElement = wrapper.find('li').first();
  firstElement.simulate('click');
 });
 