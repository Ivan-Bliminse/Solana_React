const Head = () => {



    return (
        <div className="section1">
            <div className="video">
                <video autoPlay muted loop >
                    <source src="https://player.vimeo.com/external/589655407.hd.mp4?s=2de3fde08e6ce9dac62bfe1e8db32ef72461a5af&profile_id=175" type='video/mp4' />
                </video >
            </div>

            <div className="text">
                <h1>Powerful for developers. Fast for everyone.</h1>
                <div className="section1Buttons">
                    <button className="startBuildingButton">START BUILDING</button>
                    <button className="readDocumentationButton">READ DOCUMENTATION</button>
                </div>
                <div className="solanaText">
                    Solana is a decentralized blockchain built to enable scalable, user-friendly apps for the world.
                </div>
            </div>
            <div className="em"></div>
        </div>
    );
}

export default Head;
