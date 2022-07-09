import head from "./Head.module.css";

const Head = () => {
  return (
    <div className={head.container}>
      <div className={head.container__description}>
        <div className={head.container__items}>
          <h1>Powerful for developers. Fast for everyone.</h1>
          <div className={head.container__buttons}>
            <button className={head.container__button_green}>
              START BUILDING
            </button>
            <button className={head.container__button_black}>
              READ DOCUMENTATION
            </button>
          </div>

          <p className={head.container__paragraph}>
            Solana is a decentralized blockchain built to enable scalable,
            user-friendly apps for the world.
          </p>
        </div>
      </div>

      <div className={head.container__video}>
        <video autoPlay muted loop>
          <source
            src='https://player.vimeo.com/external/589655407.hd.mp4?s=2de3fde08e6ce9dac62bfe1e8db32ef72461a5af&profile_id=175'
            type='video/mp4'
          />
        </video>
      </div>
    </div>
  );
};

export default Head;
