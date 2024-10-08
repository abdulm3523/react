const Logo = (props) => {
  return (
    <a href="index.html" className="navbar-logo block w-60 max-w-full px-4">
      <img src={props.logoUrl} alt="logo" className="header-logo h-12" />
    </a>
  );
};

export default Logo;
