import styled from "styled-components";
import TodoItem from "./TodoItem";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  ${({ theme }) => theme.mixin.center()}
  flex-direction: column;
`;

const TodoCard = styled.div`
  width: 60rem;
  border: 1px solid ${({ theme }) => theme.colors.secondaryDark};
  text-align: center;
`;

const Title = styled.h1`
  letter-spacing: 1rem;
  font-size: 3rem;
  margin: 2rem 0;
`;
const FormContainer = styled.form``;

const Input = styled.input`
  margin: 2rem 0;
`;

const Todo = () => {
  return (
    <Wrapper>
      <Title>할일을적어주세요</Title>
      <FormContainer>
        <Input type="text"></Input>
      </FormContainer>
      <TodoCard>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </TodoCard>
    </Wrapper>
  );
};

export default Todo;
