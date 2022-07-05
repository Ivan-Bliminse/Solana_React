import { useEffect } from 'react';
import Cards from './Components/Cards';
import ContainerGreen from './Components/ContainerGreen';
import Decentralized from './Components/Decentralized';
import DoubleBlock from './Components/DoubleBlock';
import Grid from './Components/Grid';
import Head from './Components/Head';
import Navigation from './Components/Navigation';
import Scale from './Components/Scale';

function App() {

  useEffect(() => {
    const scaleImg = document.querySelector('.scaleImage')
    const cardOne = document.querySelector('.cardOne')
    const cardTwo = document.querySelector('.cardTwo')

    function scroll() {
      const scrolled = window.scrollY + window.innerHeight
      // Scale Image
      const scaleImgTrue = (scaleImg.offsetTop + scaleImg.offsetHeight / 3) < scrolled
      const scaleImgFinish = (scaleImg.offsetTop + scaleImg.offsetHeight) > window.scrollY

      // Cards One and Two
      const Card1 = (cardOne.offsetTop + cardOne.offsetHeight / 3.5) < scrolled
      const Card1Finish = (cardOne.offsetTop + cardOne.offsetHeight) > window.scrollY

      if (scaleImgTrue && scaleImgFinish) {
        scaleImg.classList.add('active')
      } else {
        scaleImg.classList.remove('active')
      }

      if (Card1 && Card1Finish) {
        cardOne.classList.add('activeRight')
        cardTwo.classList.add('activeLeft')
      } else {
        cardOne.classList.remove('activeRight')
        cardTwo.classList.remove('activeLeft')
      }

    }
    window.addEventListener('scroll', scroll)

  }, [])


  return (
    <div>
      <Navigation />
      <Head />
      <ContainerGreen />
      <DoubleBlock />
      <Scale />
      <Cards />
      <Decentralized />
      <Grid />
    </div>
  );
}

export default App;
