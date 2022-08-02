import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  background-color: ${(props) => props.theme.color.beige[200]};
`;

const Wrap = styled.div`
  flex: 1 1 0%;
  background-color: ${(props) => props.theme.color.beige[200]};
`;

const Default = ({ children }: Props) => {
  return (
    <Container>
      <Wrap>
        <div>{children}</div>
      </Wrap>
    </Container>
  );
};

export default Default;
