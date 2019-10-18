import styled from 'styled-components';

export const InputContainer = styled.div `
 margin-top: 50px;
  input {
    width: 100%;
    font-size: 1.25rem;
    border-radius: 4px;
    font-weight: 600;
    height: 30px;
    border: 1px solid #ccc;
  }
`

export const Container = styled.div `
  display: flex;
  width: 1000px;
  margin: 0 auto;
  flex-direction: column;
`;

export const HeadlinesContainer = styled.div  `
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  a {
    border: 1px solid #ccc;
    font-weight: 600;
    padding: 5px 0;
    color: #000;
    text-transform: uppercase;
    font-style: italic;
    margin: 5px 0;
  }
`

export const DetailsContainer = styled.div `
  display: flex;
  justify-content: space-between;
`

export const ButtonContainer = styled.div `
  display: grid;
  grid-template-columns: 75px 75px;
  grid-gap: 10px;
`

export const Button = styled.button `
  width: 75px;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  margin-right: 10px;
  font-size: .95rem;
  background: cadetblue;
  color: #fff;
  ${props => props.disabled &&
    `background: none;
    color: #000;
    cursor: none;`
  }
`