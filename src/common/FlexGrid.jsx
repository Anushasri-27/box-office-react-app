import styled from 'styled-components';

export const FlexGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  animation: fadein 0.3s ease-in forwards;

  @keyframes fadein {
   0%{
    opacity: 0;
   }
   50%{
    opacity: 0.4;
   }
   70%{
    opacity: 0.8;
   }
   100%{
    opacity: 1;
   }
  }
`;