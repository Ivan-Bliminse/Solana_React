import dec from "./Decentralized.module.css";

const Decentralized = () => {
  return (
    <div className={dec.container}>
      <img
        src='https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findex_decentralized.cc2957f6.png&w=3840&q=75'
        alt=''
      />
      <div className={dec.container__textArea}>
        <div className={dec.container__text}>
          <h2>Decentralized</h2>
          <h3>and secure</h3>
          <div className={dec.container__description}>
            Not only is Solana ultra-fast and low cost, it is censorship
            resistant. The Solana network is spread over thousands of
            independent nodes — which means that your transactions are always
            safe.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decentralized;
