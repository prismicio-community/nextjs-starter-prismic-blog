import styled, { css } from 'styled-components';

export const FormInput = styled.input`
  &&{
    border-radius: 0;
    border: 1px solid #e0e0e0;
    box-shadow: none;
    height: 45px;
    &:hover, &:focus {
      border: 1px solid #eeeeee;
      box-shadow: none;
    }
  }
`;

export const FormTextArea = styled.textarea`
  && {
    height: 115px;
    margin-bottom: 15px;
    resize: none;
    border: 1px solid #e0e0e0;
    border-radius: 0;
    box-shadow: none;

    &:focus, &:hover {
      border: 1px solid #eeeeee;
    }
  }
`;

export const AlignRight = css`
  text-align: right;
  direction: rtl;
`;
