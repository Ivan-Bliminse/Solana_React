import db from "./DoubleBlock.module.css";

const DoubleBlock = () => {
  return (
    <div className={db.container}>
      <div className={db.container__blockOne}>
        <div className={db.container__header}>
          <h2>Join the fastest growing ecosystem</h2>
        </div>
      </div>
      <div className={db.container__blockTwo}>
        <div className={db.container__descriptionBlock}>
          <div className={db.container__description}>
            Solana is the fastest blockchain in the world and the fastest
            growing ecosystem in crypto, with thousands of projects spanning
            DeFi, NFTs, Web3 and more.
          </div>
          <button className={db.container__button_purple}>
            EXPLORE THE ECOSYSTEM
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoubleBlock;
