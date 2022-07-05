const Scale = () => {

    const scaleImg = "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findex_scale_adoption.c7a36416.png&w=3840&q=90"

    return (
        <div className="scale">
            <h1>Scale</h1>
            <h3>for global adoption</h3>
            <div className="scaleText">
                Integrate once and never worry about scaling again. Solana ensures composability between ecosystem projects by maintaining a single global state as the network scales. Never deal with fragmented Layer 2 systems or sharded chains.
            </div>

            <img className="scaleImage" src={scaleImg} alt="" /> {/* scaleImage active */}
        </div>
    );
}

export default Scale;