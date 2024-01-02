import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { HitBox } from "./components/hit-box";
import { Pov } from "./components/pov";
import { Crosshair } from "./components/crosshair";
import { Esferas } from "./components/esferas";
import { Mapa } from "./components/mapa";
import Header from "./components/header";
import { useStore } from "./hooks/useStore";
import { useEffect } from "react";
import Footer from "./components/footer";
import Start from "./components/start";
import confetti from "canvas-confetti";

function App() {
  const setTimer = useStore((state) => state.setTimer);
  const status = useStore((state) => state.status);
  const setScore = useStore((state) => state.setScore);
  const setStatus = useStore((state) => state.setStatus);
  const timer = useStore((state) => state.timer);
  const setAccuracy = useStore((state) => state.setAccuracy);
  const reset = useStore((state) => state.reset);
  const setBestScore = useStore((state) => state.setBestScore);
  const isBestScore = useStore((state) => state.isBestScore);
  const setIsBestScore = useStore((state) => state.setIsBestScore);

  useEffect(() => {
    let interval;
    if (status === "playing") {
      interval = setInterval(() => {
        setTimer(0.01);
        setScore(1);
        setAccuracy();
      }, 10);
    }
    return () => clearInterval(interval);
  }, [status]);
  if (timer <= 0) {
    reset();
    setBestScore();
    setStatus("initial");
  }
  if(isBestScore){
    confetti()
    setIsBestScore(false)
  }
  return (
    <>
      <Canvas>
        <ambientLight intensity={5.5} />
        {status === "playing" && <ambientLight intensity={7} />}
        <Pov />
        <Physics>
          <Esferas />
          <HitBox />
          <Mapa />
        </Physics>
      </Canvas>
      <Header />
      {status === "initial" && <Start />}
      <Crosshair />
      <Footer />
    </>
  );
}

export default App;
