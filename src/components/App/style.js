import { styled } from 'styled-components'

export const ContainerApp = styled.div`
   
   width: 100%;
   background: #fb6b6b;
   padding-inline: 4.5rem;
   padding-top: 4.5rem;
   padding-bottom: ${({ hits }) => (hits === 8 ? '22rem' : '9.5rem')};

   display: flex;
   flex-direction: column;
   gap: 2.5rem;
`

export const HeaderApp = styled.header`
   display: flex;
   align-items: center;
   justify-content: center;
   padding-inline: 2.2rem;
   margin-bottom: 2.5rem;
   gap: 2.5rem;

   img {
      height: 6rem;
   }

   h1 {
      font-family: 'Righteous';
      font-weight: 400;
      font-size: 3.6rem;
      letter-spacing: -0.012em;
      color: #ffffff;
   }
`

export const FooterApp = styled.footer`
   width: 100%;
   min-height: 7rem;
   font-size: 18px;

   background: #ffffff;
   box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
   font-family: Recursive;

   position: fixed;
   left: 0;
   bottom: 0;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 1.4rem;

   padding: 1rem 5rem;

   div:first-child,
   div:last-child {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
   }

   div:first-child {
      gap: 1.4rem;
      flex-direction: column;
   }

   div:last-child {
      flex-direction: column;
      gap: 0.6rem;

      div {
         display: flex;
         flex-direction: row;
      }
   }

   span {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.2rem;
   }
`
