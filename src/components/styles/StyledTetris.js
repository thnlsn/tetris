import styled from 'styled-components';

import bgImage from '../../assets/images/noise3.png';

export const StyledTetrisWrapper = styled.div`
  width: 100vh;
  height: 100vh;
  background: url(${bgImage});
  background-repeat: repeat;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 30px;
  margin: 0 auto;
  max-width: 900px;

    aside {
        width: 100%
        max-width: 200px
        display: block;
        padding: 0 20px;
    }

`;
