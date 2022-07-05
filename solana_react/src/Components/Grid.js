const Grid = () => {
    return (
        <div className="gridContainer">

            <div className="pinkGrid">
                <h1>Solana Community</h1>
                <p>There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing.</p>
                <button>LEARN MORE</button>
            </div>

            <div className="greenGrid">
                <h1>Become a Validator</h1>
                <p>Help secure the network by running decentralized infrastructure. Learn about operating a validator node.</p>
                <button>GET STARTED</button>
            </div>

            <div className="cyanGrid">
                <h1>Developer Resources</h1>
                <div className="cyanGridText">
                    <p>See the get started guide, videos, tutorials, SDKs, reference implementations, and more.</p>
                    <button>START BUILDING</button>
                </div>
            </div>

        </div>
    );
}

export default Grid;