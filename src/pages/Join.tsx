import styled from "styled-components";
import { useValidation } from "./../hooks";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  ${({ theme }) => theme.mixin.center()}
`;

const ContentContainer = styled.div`
  width: 30rem;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 3rem;
`;

const FormContainer = styled.form``;

const Input = styled.input`
  margin: 1.5rem 0;
  height: 3rem;
  width: 100%;
  display: block;
`;

const Label = styled.label``;

const Btn = styled.button`
  display: block;
  margin: 1.5rem auto;

  background-color: transparent;
`;

const Join = () => {
  const { password, email, onChangeEmail, onChangePassword, passwordValid, emailValid, onChangePasswordConfirm, pwConfrimBoolean } = useValidation();

  return (
    <Wrapper>
      <ContentContainer>
        <Title>회원가입</Title>
        <FormContainer>
          <Input onChange={onChangeEmail} id="id" placeholder="id&&email" type="email"></Input>
          {!emailValid && <label htmlFor="id">이메일 형식을 확인해주세요</label>}
          <Input onChange={onChangePassword} id="pw" placeholder="비밀번호" type="password"></Input>
          {!passwordValid && <label htmlFor="pw">8자리 이상의 숫자 1 문자 1 개가 포함되게 구성해주세요</label>}
          <Input onChange={onChangePasswordConfirm} id="pwCon" placeholder="비밀번호 확인" type="password"></Input>
          {!pwConfrimBoolean && <label htmlFor="pwCon">비밀 번호가 다릅니다</label>}
          <Btn>회원가입</Btn>
        </FormContainer>
      </ContentContainer>
    </Wrapper>
  );
};

export default Join;
