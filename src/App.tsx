import "./App.css";
import styled from "styled-components";
import { useMandalartStore } from "./store";
import Mandalart from "./components/Mandalart";

const Container = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;
    margin: auto;
    > h1 {
      font-size: 4rem;
      font-weight: 700;
      text-align: center;
      margin: 32px 0px 40px;
      letter-spacing: 0.5rem;
    }
  }
`;

function App() {
  const { store } = useMandalartStore();

  return (
    <Container>
      <div>
        <h1>만다라트</h1>
        <Mandalart store={store} />
      </div>
    </Container>
  );
}

export default App;
