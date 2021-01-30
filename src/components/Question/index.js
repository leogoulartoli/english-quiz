import styled from 'styled-components'

const Question = styled.div`
    width:90%;
`

Question.TitleContainer = styled.div`
    background-color: #FFFFFF99;
    width:100%;
    border-radius:7px;
    margin-bottom: 2.1rem;
`

Question.Title = styled.h2`
    font-weight: 500;
    padding: 0.5rem;
    color: #1e1e1e;
    border-style:none;
    font-size: 1.3rem;
`

Question.OptionContainer = styled.div`
    margin: 0 auto;
    width:90%;
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
    font-size: 1.1rem;
    border-radius:7px;
    margin-bottom:1rem;

    &:hover{
        background-color:#efe9e9;
        border: 1px solid #7a7a7a;
        transition: 0.3s ease;
    } &:focus {
        outline: none;
        color:#FFFFFF;
        background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
        
    }

    &:last-child{
        margin-bottom:0;
    }

`
export default Question;