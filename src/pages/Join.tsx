import styled from "styled-components";
import { useValidation } from "@/hooks";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  ${({ theme }) => theme.mixin.center()}
`;

const ContentContainer = styled.div`
  width: 25rem;
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
  label {
    opacity: 0;
    transition: all 0.2s;
  }
  &:disabled {
    label {
      opacity: 1;
    }
  }
`;

const Btn = styled.button`
  display: block;
  margin: 1.5rem auto;

  background-color: transparent;
`;

const Join = () => {
  const {} = useValidation();

  return (
    <Wrapper>
      <ContentContainer>
        <Title>회원가입</Title>
        <FormContainer>
          <Input id="id" placeholder="id&&email" type="email"></Input>
          <label htmlFor="id">이메일 형식을 확인해주세요</label>
          <Input id="nic" placeholder="닉네임" type="text"></Input>
          <label htmlFor="nic">확인용</label>
          <Input id="pw" placeholder="비밀번호" type="password"></Input>
          <label htmlFor="pw">8자리 이상의 숫자 1 문자 1 개가 포함되게 구성해주세요</label>
          <Input id="pwCon" placeholder="비밀번호 확인" type="password"></Input>
          <label htmlFor="pwCon">비밀 번호가 다릅니다</label>
          <Btn>회원가입</Btn>
        </FormContainer>
      </ContentContainer>
    </Wrapper>
  );
};

export default Join;
