import styled from 'styled-components';

const LabelContainer = styled.div`
    width:80%;
    text-align:left;
`

LabelContainer.Label = styled.label`
    padding-left:2px;
    font-weight:400;
    color: ${({textColor})=> textColor};
`;

export default LabelContainer;