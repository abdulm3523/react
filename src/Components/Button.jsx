const Button = ({ url, btnText, styleClass }) => {
  return (
    <a href={url} className={styleClass}>
      {btnText}
    </a>
  );
};

export default Button;
