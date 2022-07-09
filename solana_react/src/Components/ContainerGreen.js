import cg from "./ContainerGreen.module.css";

const ContainerGreen = () => {
  return (
    <div className={cg.box}>
      <div className={cg.box__elements}>
        <span className='elementText'>Transactions per second</span>
        <span className='elementNumber'>2,367</span>
      </div>
      <div className={cg.box__elements}>
        <span className='elementText'>Total Transactions</span>
        <span className='elementNumber'>81,744,517,160</span>
      </div>
      <div className={cg.box__elements}>
        <span className='elementText'>Avg. cost per transaction</span>
        <span className='elementNumber'>$0.00025</span>
      </div>
      <div className={cg.box__elements}>
        <span className='elementText'>Validator nodes</span>
        <span className='elementNumber'>1,790</span>
      </div>
    </div>
  );
};

export default ContainerGreen;
