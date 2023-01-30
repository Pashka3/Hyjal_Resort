import styled from 'styled-components';

const HeroStyle = styled.header`
  min-height: 60vh;
  background: url(${(props) => props.img}) center/cover no-repeat;
  background-attachment: fixed;
  background-position: 0% 120%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default HeroStyle;
