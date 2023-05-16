import { styled, css } from 'styled-components'

export const Flashcard = styled.div`
   box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
   border-radius: 5px;
   padding: 1rem 1.5rem;
   font-family: 'Recursive';

   ${({ face }) => {
      switch (face) {
         case 'firstFace':
            return css`
               height: 6.5rem;
               background: #ffffff;
               font-size: 1.6rem;
               ${({ result }) =>
                  result === 'failed'
                     ? css`
                          text-decoration-line: line-through;
                          font-weight: 700;
                          color: #ff3030;
                       `
                     : result === 'almost'
                     ? css`
                          text-decoration-line: line-through;
                          font-weight: 700;
                          color: #ff922e;
                       `
                     : result === 'remember'
                     ? css`
                          text-decoration-line: line-through;
                          font-weight: 700;
                          color: #2fbe34;
                       `
                     : css``};
            `
            break
         case 'secondFace':
            return css`
               height: 13rem;

               font-weight: 400;
               font-size: 1.8rem;
               line-height: 2.2rem;

               background: #ffffd5;
               color: #333333;
            `
            break
         default:
            return css`
               min-height: 13rem;

               font-weight: 400;
               font-size: 1.8rem;
               line-height: 2.2rem;

               background: #ffffd5;
               color: #333333;

               
            `
            break
      }
   }}

   .firstFace, .secondFace, .lastFace {
      display: flex;
      height: 100%;
      justify-content: space-between;
   }

   .firstFace {
      align-items: center;
      justify-content: space-between;
   }

   .secondFace {
      flex-direction: column;
      align-items: end;

      span {
         width: 100%;
         text-align: left;
      }
   }

   .lastFace {
      flex-direction: column;
      height: 13rem;
      div {
         display: flex;
         justify-content: center;

         gap: 0.8rem;
      }
   }
`

export const Button = styled.button`
   font-weight: 400;
   font-size: 1.2rem;
   line-height: 1.4rem;
   font-family: 'Recursive';
   color: #ffffff;
   width: 8.517rem;
   height: 3.717rem;
   border: none;
   border-radius: 5px;

   ${({ index }) => {
      switch (index) {
         case 'notRemember':
            return css`
               background: #ff3030;
            `
            break
         case 'almostNotRemember':
            return css`
               background: #ff922e;
            `
            break
         case 'remember':
            return css`
               background: #2fbe34;
            `
            break
         default:
            break
      }
   }}
`
