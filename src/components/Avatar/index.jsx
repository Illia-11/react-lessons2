import PropTypes from "prop-types";

const Avatar = (props) => {
  const { src, alt } = props;

  return (
    <img
      src={src}
      alt={alt}
      title={alt}
      style={{ width: "64px", height: "64px", borderRadius: "50px" }}
    />
  );
};

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Avatar;
