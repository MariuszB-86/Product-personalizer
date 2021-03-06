import styles from './OptionColor.module.scss';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import clsx from 'clsx';

const OptionColor = (props) => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
    };

  return(
    <div className={styles.colors}>
    <h3 className={styles.optionLabel}>Colors</h3>
    <ul className={styles.choices}>
      {props.colors.map(color => <li key={shortid()}><button onClick={() => props.changeColor(color)} type="button" className={clsx(prepareColorClassName(color), color === props.currentColor && styles.active)} /></li>)}
    </ul>
    </div>
  );
};

OptionColor.propTypes = {
  changeColor: PropTypes.func,
  currentColor: PropTypes.string,
  colors: PropTypes.array,
};

export default OptionColor;