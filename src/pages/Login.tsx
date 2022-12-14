import { useValidation, useLogin } from "../hooks";
import styled from "styled-components";
import { useEffect, useState } from "react";

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
  padding:1.5rem;
  letter-spacing: 0.2rem;
  p{
    margin-top:1rem;
    font-size:2rem;
    letter-spacing:1rem;
  }
`
);

const FormContainer = styled.form``;

const ContentContainer = styled.div`
  width: 38rem;
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  border-radius: 10%;
  flex-direction: column;
`;

const IdPwWrap = styled.div``;

const FromInput = styled.input`
  display: block;
  width: 96%;
  height: 5rem;
  box-shadow: none;

  &:focus {
    border: 5px solid ${({ theme }) => theme.colors.secondaryDark};
  }
`;

const Inner = styled.div`
  padding: 3rem;
`;

const ButtonWrap = styled.div`
  margin-top: 3rem;
`;
const FromButton = styled.button`
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  border: none;
  border-radius: 10px;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.primaryLight};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }
`;

const Login = () => {
  const { password, email, onChangeEmail, onChangePassword, emailValid, passwordValid } = useValidation();
  const { Login } = useLogin();
  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (passwordValid && emailValid) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [emailValid, passwordValid]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = { email, password };
    Login(body);
  };

  return (
    <Wrapper>
      <Title>
        Wanted Fe Challenge
        <p>LOGIN</p>
      </Title>
      <ContentContainer>
        <FormContainer onSubmit={onSubmit}>
          <Inner>
            <IdPwWrap>
              <FromInput onChange={onChangeEmail} placeholder="?????????" type="email"></FromInput>
              <FromInput onChange={onChangePassword} placeholder="????????????" type="password"></FromInput>
            </IdPwWrap>
            <ButtonWrap>
              <FromButton disabled={valid} type="submit">
                ?????????
              </FromButton>
            </ButtonWrap>
          </Inner>
        </FormContainer>
      </ContentContainer>
    </Wrapper>
  );
};

export default Login;
