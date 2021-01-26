import styled from "styled-components"

const ButtonEnter = styled.button`
    font-family: 'Quicksand',sans-serif;
    font-weight: 500;
    color: #1e1e1e;
    width:80%;
    height:2.5rem;
    background-color: #FFF;
    border-style:none;
    font-size: 1.3rem;
    border-radius: ${({borderRadius}) => borderRadius};
    &:hover{
        background-color:#efe9e9;
        border: 1px solid #7a7a7a;
        transition: 0.3s ease;
    } &:focus {
        outline: none;
    }
`;

export default ButtonEnter