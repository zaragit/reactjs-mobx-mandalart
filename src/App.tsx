import "./App.css";
import styled from "styled-components";

import Camera from "./components/Camera";
import { useMandalartStore } from "./store";
import Mandalart from "./components/Mandalart";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  margin: auto;
  padding: 40px;
`;

const Header = styled.h1`
  color: #ffd369;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  margin: 32px 0px;
  letter-spacing: 0.5rem;
`;

function App() {
  const { store, fileName, changeFileName } = useMandalartStore();

  return (
    <Container>
      <Camera fileName={fileName}>
        <Header>{fileName}</Header>
        <Mandalart store={store} />
      </Camera>
    </Container>
  );
}

export default App;
