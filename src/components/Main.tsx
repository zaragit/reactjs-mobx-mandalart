import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import Mandalart from './Mandalart';
import { useMandalartStore } from '../store';

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

function Main() {
  const { store } = useMandalartStore();

  return (
    <Container>
      <div>
        <h1>만다라트</h1>
        <Mandalart size={900} gap={16} corePlan={store.core} />
      </div>
    </Container>
  );
}

export default observer(Main);
