import styled from "styled-components"

const Button = styled.button`
    font-family: 'Quicksand',sans-serif;
    font-weight: 500;
    color: #FFF;
    width:80%;
    height:2.8rem;
    background-image: linear-gradient(to right, #AA076B 0%, #61045F  51%, #AA076B  100%);
    border-style:none;
    background-size: 200% auto;
    font-size: 1.3rem;
    margin-top:2.5rem;
    border-radius: ${({borderRadius}) => borderRadius};
    &:hover{
        background-position: right center; 
        //background-color:#efe9e9;
        border: 1px solid #7a7a7a;
        transition: 0.3s ease;
    } &:focus {
        outline: none;
    }
`;

export default Button