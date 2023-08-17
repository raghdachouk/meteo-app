import PropTypes from 'prop-types';

import styles from './input.module.scss';

export default function Input({ disabled, id, label, name, onChange, placeholder, type, value, ...rest }) {
  return (
    <div className={styles.input}>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
}

Input.defaultProps = {
  disabled: false,
  name: '',
  onChange: () => {},
  placeholder: '',
  type: 'text',
};

Input.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
