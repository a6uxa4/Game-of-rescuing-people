import { useState, useEffect } from "react";
import { GAME_DURATION, TOTAL_EXPERTS } from "./utils/constants/constants";
import styled from "styled-components";
import { BsFillPauseFill } from "react-icons/bs";
import { Character } from "./components/Character";
import { Modal } from "./components/MainModal";
import { countScore } from "./utils/helpers/helpers";
import { CounterExperts } from "./components/CounterExperts";
import { Timers } from "./components/Timer";

function App() {
  const [experts, setExperts] = useState<number>(TOTAL_EXPERTS);
  const [time, setTime] = useState<number>(GAME_DURATION);
  const [activeExperts, setActiveExperts] = useState<JSX.Element[]>([]);

  const [modalActive, setModalActive] = useState<{
    modal: boolean;
    type: string;
  }>({
    modal: false,
    type: "",
  });

  function handleClickCharacter(index: number) {
    const newExperts = activeExperts.slice();
    newExperts.splice(index, 1);
    setActiveExperts(newExperts);
    setExperts(experts - 1);
  }

  useEffect(() => {
    if (!modalActive.modal) {
      const interval = setInterval(() => {
        if (time > 0) {
          setTime((prevSeconds: any) => prevSeconds - 1);
        } else {
          setModalActive({
            modal: true,
            type: countScore(experts),
          });
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time, modalActive.modal]);

  if (activeExperts.length < 3) {
    if (experts) {
      setTimeout(() => {
        const newExperts = activeExperts.slice();
        newExperts.push(
          <Character
            key={newExperts.length}
            onClick={() => handleClickCharacter(newExperts.length)}
          />
        );
        setActiveExperts(newExperts);
      }, 1000);
    } else {
      setModalActive({
        modal: true,
        type: countScore(experts),
      });
    }
  }

  function handlePause() {
    setModalActive({
      modal: true,
      type: "pause",
    });
  }

  const handleCloseModal = () => {
    setModalActive({
      modal: false,
      type: "",
    });
  };

  return (
    <Container>
      {modalActive.modal && (
        <Modal type={modalActive.type} onClose={handleCloseModal} />
      )}

      {activeExperts}
      <Pause onClick={() => handlePause()}>
        <BsFillPauseFill />
      </Pause>
      <Timers time={time} />
      <CounterExperts experts={experts} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: end;
`;
const Pause = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px;
  background-color: white;
  border-radius: 8px;
  opacity: 0.8;
  font-family: cursive;
  font-size: 24px;
  position: absolute;
  top: 10px;
  right: 20px;
`;

export default App;
