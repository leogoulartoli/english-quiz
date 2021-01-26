import styled from 'styled-components';

const BackgroundImage = styled.div`
  background-image:url(${({backgroundImage}) => backgroundImage});
  flex:1;
  background-size: cover;
  background-position: center;
`;

export default BackgroundImage;