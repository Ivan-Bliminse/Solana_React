import nav from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={nav.navBar}>
      <div className={nav.navBar__logo}>
        <img
          src='https://solana.com/_next/static/media/dark-horizontal.c3a5eb36.svg'
          alt=''
        />
      </div>

      <div className={nav.navBar__links}>
        <a href='#'>Developers</a>
        <a href='#'>Network</a>
        <a href='#'>Validators</a>
        <a href='#'>Community</a>
        <a href='#'>Ecosystem</a>
      </div>
    </nav>
  );
};

export default Navigation;
