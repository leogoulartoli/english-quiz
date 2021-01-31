import styled from 'styled-components'

const Question = styled.div`
    width:90%;
`

Question.Title = styled.h2`
    text-align:center;
    font-weight: 400;
    color: #1e1e1e;
    border-style:none;
    font-size: 1.3rem;
    margin-bottom:2.5rem;
`

Question.OptionContainer = styled.div`
    margin: 0 auto;
    width:80%;
    display: flex;
    flex-direction: column;
    align-items:center;
`

Question.OptionLetter = styled.div

Question.Option = styled.button`
    background-color: #FFFFFF;
    text-align: left;
    width:100%;
    font-weight: 400;
    padding: 0.5rem;
    color: #1e1e1e;
    border-style:none;
    font-size: 1rem;
    border-radius:7px;
    margin-bottom:1rem;

    &:hover{
        background-color:#efe9e9;
        transition: 0.3s ease;
    } &:focus {
        outline: none;
        color:#9733EE;
        border: 1px solid ${({borderColor}) => borderColor};
        
    }

    &:last-child{
        margin-bottom:0;
    }
`;
export default Question;