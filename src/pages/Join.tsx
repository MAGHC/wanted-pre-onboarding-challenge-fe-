import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  ${({ theme }) => theme.mixin.center()}
`;

const FormContainer = styled.form``;

const Join = () => {
  return (
    <Wrapper>
      <FormContainer></FormContainer>
    </Wrapper>
  );
};

export default Join;
