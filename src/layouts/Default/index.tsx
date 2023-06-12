import styled from 'styled-components';
import Sidebar from '@global-components/Sidebar';

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
`;

const Wrap = styled.div`
  flex: 1 1 0%;
  background-color: #000000;
  display: flex;
  padding: 0.5rem;
`;

const Default = ({ children }: Props) => {
  return (
    <Container>
      <Wrap>
        <Sidebar />
        <div>{children}</div>
      </Wrap>
    </Container>
  );
};

export default Default;
