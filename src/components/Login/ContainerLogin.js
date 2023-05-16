import { styled } from 'styled-components'

export const ContainerLogin = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 15rem;

   div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3.5rem;
      margin-bottom: 10rem;
   }

   h1 {
      font-family: 'Righteous';
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      letter-spacing: -0.012em;
      color: #ffffff;
   }

   img {
      width: 13.6rem;
      height: 16.1rem;
   }

   button {
      width: 24.6rem;
      height: 5.4rem;

      background: #ffffff;
      border: 1px solid #d70900;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
      border-radius: 5px;

      font-family: 'Recursive';
      font-style: normal;
      font-weight: 400;
      font-size: 1.8rem;
      text-align: center;

      color: #d70900;
   }
`
