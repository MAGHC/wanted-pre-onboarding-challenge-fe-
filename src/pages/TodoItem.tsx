import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixin.center()};
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
`;

const Item = styled.p`
  font-size: 2rem;
  margin: 0 2rem;
`;

const DelteBtn = styled.button`
  margin: 0 2rem;
`;

const EditBtn = styled.button`
  margin: 0 2rem;
`;

const TodoItem = () => {
  return (
    <Wrapper>
      <Item>간단한 메모 내용</Item>
      <EditBtn>수정</EditBtn>
      <DelteBtn>삭제</DelteBtn>
    </Wrapper>
  );
};

export default TodoItem;
