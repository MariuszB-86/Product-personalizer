import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import clsx from 'clsx';

const OptionSize = (props) => {
  return(
    <div className={styles.sizes}>
    <h3 className={styles.optionLabel}>Sizes</h3>
    <ul className={styles.choices}>
      {props.sizes.map(size => <li key={shortid()}><button onClick={() => props.changeSize(size.name)} type="button" className={clsx(size.name === props.currentSize  && styles.active)}>{size.name}</button></li>)}  
    </ul>
    </div>
  );
};

OptionSize.propTypes = {
  changeSize: PropTypes.func,
  currentSize: PropTypes.string,
  sizes: PropTypes.array,
};

export default OptionSize;