import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = (props) => {

  const changeSize = (size) => {
    props.setCurrentSize(size);
  };

  const changeColor = (color) => {
    props.setCurrentColor(color);
  };

  return(
    <form onSubmit={props.addToCart}>
      <OptionSize 
        changeSize={changeSize} 
        currentSize={props.currentSize} 
        sizes={props.sizes} />
      <OptionColor 
        changeColor={changeColor} 
        currentColor={props.currentColor} 
        colors={props.colors} />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  addToCart: PropTypes.func,
  currentColor: PropTypes.string,
  currentSize: PropTypes.string,
  colors: PropTypes.array,
  sizes: PropTypes.array,
  setCurrentSize: PropTypes.func,
  setCurrentColor: PropTypes.func,
};

export default ProductForm;