import solana_video from '../video/solanaVideo.mp4'

const Head = () => {
    return (
        <div className="section1">
            {/* <div className="video">
                <video autoplay muted loop id="myVideo">
                    <source src='https://vod-progressive.akamaized.net/exp=1657029292~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2931%2F23%2F589655407%2F2781013183.mp4~hmac=04a760a3da32f1be494d97136630798279689f3ee37ac444d001605e5a939219/vimeo-prod-skyfire-std-us/01/2931/23/589655407/2781013183.mp4?filename=Sequence+01_2.mp4.mp4' type='video/mp4' />
                </video>
            </div> */}

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
