import styled from "styled-components";

const Wrapper = styled.div(
  ({ theme }) => `
  width: 100%;
  height: 100vh;
  ${theme.mixin.center()}
`
);

const Title = styled.h1(
  ({ theme }) => `
  color:${theme.colors.primaryDark};
  font-size: 4rem;

`
);

const ContentContainer = styled.div`
  width: 20rem;
  height: 20rem;
  background-color: aliceblue;
`;

const Login = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <Title>Login</Title>
      </ContentContainer>
    </Wrapper>
  );
};

export default Login;
