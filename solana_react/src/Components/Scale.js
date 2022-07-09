import scale from "./Scale.module.css";

const Scale = () => {
  const image =
    "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findex_scale_adoption.c7a36416.png&w=3840&q=90";

  return (
    <div className={scale.container}>
      <div className={scale.container__textArea}>
        <div className={scale.container__text}>
          <h2>Scale</h2>
          <h3>for global adoption</h3>
          <div className={scale.container__description}>
            Integrate once and never worry about scaling again. Solana ensures
            composability between ecosystem projects by maintaining a single
            global state as the network scales. Never deal with fragmented Layer
            2 systems or sharded chains.
          </div>
        </div>
      </div>

      <div className={scale.container__imageContainer}>
        <img className='scaleImage' src={image} alt='' />
      </div>
      {/* scaleImage active */}
    </div>
  );
};

export default Scale;
