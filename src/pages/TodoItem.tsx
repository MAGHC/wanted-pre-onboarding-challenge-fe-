import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixin.center()};
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
`;

const ItemWrappter = styled.div``;

const ItemTitle = styled.p`
  font-size: 2rem;
  margin: 0 2rem;
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
      <ItemWrappter>
        <ItemTitle>제목</ItemTitle>
        <Item>내용</Item>
      </ItemWrappter>
      <EditBtn>수정</EditBtn>
      <DelteBtn>삭제</DelteBtn>
    </Wrapper>
  );
};

export default TodoItem;
