import grid from "./Grid.module.css";

const Grid = () => {
  return (
    <div className={grid.gridContainer}>
      <div className={grid.gridContainer__Grid_pink}>
        <h1>Solana Community</h1>
        <p>
          There's something for everybody. Follow along, chat on Discord, or
          read up on what we’re doing.
        </p>
        <button>LEARN MORE</button>
      </div>

      <div className={grid.gridContainer__Grid_green}>
        <h1>Become a Validator</h1>
        <p>
          Help secure the network by running decentralized infrastructure. Learn
          about operating a validator node.
        </p>
        <button>GET STARTED</button>
      </div>

      <div className={grid.gridContainer__Grid_cyan}>
        <h2>Developer Resources</h2>
        <div className={grid.gridContainer__text}>
          <p>
            See the get started guide, videos, tutorials, SDKs, reference
            implementations, and more.
          </p>
          <button>START BUILDING</button>
        </div>
      </div>
    </div>
  );
};

export default Grid;
