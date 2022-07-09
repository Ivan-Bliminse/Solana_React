import { useEffect } from "react";
import Cards from "./Components/Cards";
import ContainerGreen from "./Components/ContainerGreen";
import Decentralized from "./Components/Decentralized";
import DoubleBlock from "./Components/DoubleBlock";
import Grid from "./Components/Grid";
import Head from "./Components/Head";
import Navigation from "./Components/Navigation";
import Scale from "./Components/Scale";

function App() {
  useEffect(() => {
    const scaleImg = document.querySelector(".scaleImage");
    const cardOne = document.getElementById("cardOne");
    const cardTwo = document.getElementById("cardTwo");

    function fullHeight(el) {
      return el.offsetTop + el.offsetHeight;
    }

    function twoThirdsOfHeight(el) {
      return (el.offsetHeight / 3) * 2;
    }

    function scroll() {
      const Y = window.scrollY + window.innerHeight;
      // Scale Image
      const isScaleImgTwoThirds =
        fullHeight(scaleImg) - twoThirdsOfHeight(scaleImg) < Y;
      const isScaleImgScrolledPast =
        scaleImg.offsetTop + scaleImg.offsetHeight > window.scrollY;

      // Cards One and Two
      const isCardOneTwoThirds =
        fullHeight(cardOne) - twoThirdsOfHeight(cardOne) < Y;
      console.log(isCardOneTwoThirds);
      const isCardOneScrolledPast = fullHeight(cardOne) > window.scrollY;

      scaleImg.classList.toggle(
        "active",
        isScaleImgTwoThirds && isScaleImgScrolledPast
      );

      cardOne.classList.toggle(
        "activeRight",
        isCardOneTwoThirds && isCardOneScrolledPast
      );
      cardTwo.classList.toggle(
        "activeLeft",
        isCardOneTwoThirds && isCardOneScrolledPast
      );
    }
    window.addEventListener("scroll", scroll);
  }, []);

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
