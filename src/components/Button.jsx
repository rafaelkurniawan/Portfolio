import PropTypes from 'prop-types';

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={`mt-5 md:md-10 text-gray-900 py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-80 duration-200 hover:scale-150 rounded-[24px] bg-blue-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  className: '',
};

export default Button;
