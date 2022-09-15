import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixin.center()};
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
`;

const ModalBack = styled.div`
  ${({ theme }) => theme.mixin.center()};
  width: 80vw;
  height: 80vh;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0.3;
`;

const Modal = styled.div`
  background-color: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ItemWrappter = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.p`
  font-size: 2rem;
  margin: 0 2rem;
`;

const Item = styled.p`
  font-size: 2rem;
  margin: 0 2rem;
`;

const Typo = styled.p`
  font-size: 2rem;
  margin: 0 2rem;
  color: black;
`;

const ItemEdit = styled.textarea`
  font-size: 2rem;
  margin: 0 2rem;
  border: solid 2px #1e90ff;
`;

const DelteBtn = styled.button`
  margin: 0 2rem;
  background: none;
  border-width: 0.4rem;
  border-radius: 2rem;
`;

const EditBtn = styled.button`
  margin: 0 2rem;
  background: none;
  border-width: 0.4rem;
  border-radius: 2rem;
`;

const TodoItem = ({
  id,
  itemTitle,
  itemContent,
  handleDelete,
  handleEdit,
}: {
  id: string;
  itemTitle: string;
  itemContent: string;
  handleDelete: Function;
  handleEdit: Function;
}) => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(itemTitle);
  const [content, setContent] = useState(itemContent);

  const titleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };
  const contentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <Wrapper>
      {!modal ? (
        <ItemWrappter>
          <ItemTitle>{itemTitle}</ItemTitle>
          <Item>{itemContent}</Item>
        </ItemWrappter>
      ) : (
        <ModalBack>
          <ItemWrappter>
            <Modal>
              <form
                onSubmit={() => {
                  handleEdit({
                    id,
                    body: {
                      title: title,
                      content: content,
                    },
                  });
                }}
              >
                <Typo>제목:</Typo>
                <ItemEdit onChange={titleChange} value={title}></ItemEdit>
                <Typo>내용:</Typo>
                <ItemEdit onChange={contentChange} value={content}></ItemEdit>
                <div>
                  <EditBtn>변경</EditBtn>
                </div>
              </form>
            </Modal>
          </ItemWrappter>
        </ModalBack>
      )}
      <ButtonWrapper>
        <EditBtn
          onClick={() => {
            setModal(!modal);
          }}
        >
          {!modal ? "수정" : "목록"}
        </EditBtn>
        <DelteBtn onClick={() => handleDelete(id)}>삭제</DelteBtn>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default TodoItem;
