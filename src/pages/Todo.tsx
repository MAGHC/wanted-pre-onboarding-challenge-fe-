import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useMemo } from "../hooks";
import { useState } from "react";

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

const SubmitBtn = styled.button``;

const Todo = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { createTodo } = useMemo();

  const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const contentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo({ title, content });
  };

  return (
    <Wrapper>
      <Title>할일을적어주세요</Title>
      <FormContainer onSubmit={handleSubmit}>
        <Input type="text" onChange={titleChange} value={title} name="title" placeholder="제목"></Input>
        <Input type="text" onChange={contentChange} value={content} name="content" placeholder="내용"></Input>
        <SubmitBtn>작성</SubmitBtn>
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
