import { useState } from "react";
import styled from "styled-components";
import { FormContainer } from "../Copmonents";

const Wrapper = styled.div(
  ({ theme }) => `
  width: 100%;
  height: 100vh;
  ${theme.mixin.center()}
  flex-direction:column;
`
);

const Title = styled.h1(
  ({ theme }) => `
  color:${theme.colors.font};
  font-size: 3.5rem;
  text-align:center;
  padding:2rem;
`
);

const ContentContainer = styled.div`
  width: 30rem;
  height: 20rem;
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  border-radius: 10%;
  padding: 1rem;
  flex-direction: column;
`;

const IdPwWrap = styled.div``;

const FromInput = styled(FormContainer.Input)`
  display: block;
  width: 96%;
  height: 2.5rem;
  box-shadow: none;

  &:focus {
    border: 5px solid ${({ theme }) => theme.colors.secondaryDark};
  }
`;

const Inner = styled.div`
  padding: 4rem;
`;

const ButtonWrap = styled.div`
  margin-top: 3rem;
`;
const FromButton = styled(FormContainer.Button)`
  width: 100%;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  border: none;
  border-radius: 2px;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.primaryLight};

  &:hover {
    cursor: pointer;
  }
`;

const Login = () => {
  const [UserInputValue, setUserInputValue] = useState({
    id: "",
    pw: "",
  });
  return (
    <Wrapper>
      <Title>LOGIN</Title>
      <ContentContainer>
        <FormContainer>
          <Inner>
            <IdPwWrap>
              <FromInput placeholder="아이디" type="email"></FromInput>
              <FromInput placeholder="비밀번호" type="password"></FromInput>
            </IdPwWrap>
            <ButtonWrap>
              <FromButton>로그인</FromButton>
            </ButtonWrap>
          </Inner>
        </FormContainer>
      </ContentContainer>
    </Wrapper>
  );
};

export default Login;
