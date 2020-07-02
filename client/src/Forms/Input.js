import styled from 'styled-components'

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #083D77;
  background: ${({type}) => type === 'submit' ? '#003D99' : 'rgba(0, 0, 0, 0.2)'};
  cursor: ${({type}) => type === 'submit' && 'pointer'};
  display: block;
  width: 100%;
  margin: 40px 0;
  font-size: 16px;
  padding: 10px 15px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;

    &::placeholder {
      font-size: 12px;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.7);
    }


    &:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px rgba(20, 0, 115, 0.9) inset;
  -webkit-text-fill-color: rgba(255, 255, 255, 0.9);
}
    
    &:focus {
      border: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      outline: 0;
    }
`