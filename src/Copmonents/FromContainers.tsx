import styled from "styled-components";

const Form = styled.form``;

const Label = styled.label``;

const TextArea = styled.textarea``;

const Input = styled.input``;

const Button = styled.button``;

interface IForm extends React.FormHTMLAttributes<HTMLFormElement> {}

interface ILabel extends React.LabelHTMLAttributes<HTMLLabelElement> {}

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}

interface ITextarea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const FormContainer = ({ ...props }: IForm) => {
  return <Form {...props}>{props.children}</Form>;
};
FormContainer.Label = ({ ...props }: ILabel) => {
  return <Label {...props}>{props.children}</Label>;
};

FormContainer.TextArea = ({ ...props }: ITextarea) => {
  return <TextArea {...props}>{props.children}</TextArea>;
};

FormContainer.Input = ({ ...props }: IInput) => {
  return <Input {...props}>{props.children}</Input>;
};

FormContainer.Button = ({ ...props }: IButton) => {
  return <Button {...props}>{props.children}</Button>;
};

export default FormContainer;
