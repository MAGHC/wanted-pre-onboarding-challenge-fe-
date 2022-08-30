import { useState } from "react";
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
  color:${theme.colors.font};
  font-size: 4rem;
  text-align:center;
  padding:2rem;
`
);

const ContentContainer = styled.div`
  width: 40rem;
  height: 40rem;
  background-color: ${({ theme }) => theme.colors.primaryDark};
`;

const Login = () => {
  const [UserInputValue, setUserInputValue] = useState({
    id: "",
    pw: "",
  });
  return (
    <Wrapper>
      <ContentContainer>
        <Title>Login</Title>
      </ContentContainer>
    </Wrapper>
  );
};

export default Login;
