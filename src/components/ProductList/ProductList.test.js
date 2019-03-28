import React from 'react';
import {shallow} from 'enzyme';
import ProductList from './ProductList';
import '../../enzyme.setup'
// premier test qui doit s'assurer que c une liste non triée
beforeEach(() => {
  const mockProducts = [
    {id: 1, name: 'Mock Product 1', brand: 'MockBrandA'},
    {id: 2, name: 'Mock Product 2', brand: 'MockBrandB'},
    {id: 3, name: 'Mock Product 3', brand: 'MockBrandC'},
  ];
  wrapper = shallow(<ProductList products={mockProducts}/>);
})
it('should render a list of products as an unordered list', () => {
   const firstElement = wrapper.find('li').first();
   expect(firstElement.contains(mockProducts[0].name)).toEqual(true);
   expect(wrapper.find('li').length).toEqual(mockProducts.length); 
});
// test qui permet de s'assurer de l'affichage du nom du produit
it('should display the product name in each `<li>` element', () => {
    const firstElement = wrapper.find('li').first();
    expect(firstElement.contains(mockProducts[0].name)).toEqual(true);
});
// test qui permet de s'assurer de l'affichage de la marque du produit
it('should display the product brand in each `<li>` element',() => {
    const firstElement = wrapper.find('li').first();
    expect(firstElement.contains(mockProducts[0].brand)).toEqual(true);
});