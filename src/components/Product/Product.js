import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {
  
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = () => {
    const findItem = props.sizes.find(item => item.name === currentSize)

    return props.basePrice + findItem.additionalPrice;
  };

  const addToCart = (e) => {
    e.preventDefault();

    console.log(`      
      Summary
      ============
      Name: ${props.title}
      Price: ${getPrice()}
      Size: ${currentSize}
      Color: ${currentColor}`)
  };
  
  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm 
          addToCart={addToCart} 
          currentColor={currentColor}
          currentSize={currentSize}
          colors={props.colors}
          sizes={props.sizes}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}  />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  colors: PropTypes.array,
  sizes: PropTypes.array,
  basePrice: PropTypes.number};

export default Product;