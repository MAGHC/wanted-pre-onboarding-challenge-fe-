import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Content = styled.p`
  color: ${(props) => props.theme.colors.primary};
`;

const Login = () => {
  return (
    <Wrapper>
      <Content>확인</Content>
    </Wrapper>
  );
};

export default Login;
