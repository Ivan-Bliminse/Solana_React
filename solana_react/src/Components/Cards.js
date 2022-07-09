import cards from "./Cards.module.css";

const Cards = () => {
  return (
    <div className={cards.container}>
      <div id='cardOne' className={cards.cardOneContainer}>
        <div>
          <h2>Low cost, forever</h2>
          <p>
            Solana's scalability ensures transactions remain less than $0.01 for
            both developers and users.
          </p>
        </div>
        <div className={cards.cardOneContainer__image}></div>
        <img
          src='https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findex_low_cost.5dfdb6d1.png&w=1080&q=90'
          alt=''
        />
      </div>

      <div id='cardTwo' className={cards.cardTwoContainer}>
        <div>
          <h2>Fast, forever</h2>
          <p>
            Solana is all about speed, with 400 millisecond block times. And as
            hardware gets faster, so does the network.
          </p>
        </div>

        <img
          src='https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findex_fast_fck.47b945e5.png&w=1080&q=90'
          alt=''
        />
      </div>
    </div>
  );
};

export default Cards;
