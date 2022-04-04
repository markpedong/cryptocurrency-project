import "../Styles/Font.scss";
import styled from "styled-components";

export const ContainerStyled = styled.div`
  padding-block: 2rem;
`;

export const GlobalHeaderStyled = styled.p`
  margin-block-end: 0;
  color: var(--gray-9);
  font-size: 0.8rem;
  font-weight: 600;
`;

export const GlobalDescStyled = styled.p`
  color: blue;
  margin-block-end: 0;
  margin-inline-start: 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const CryptoHeaderDetailsStyle = styled.p`
  color: var(--gray-9);
  font-size: 1rem;
  font-weight: 800;
  margin-block: 0;
  max-width: 100%;
`;

export const CryptoDescDetailsStyle = styled.p`
  color: var(--gray-9);
  font-size: 0.8rem;
  font-weight: 600;
  max-width: 100%;
`;

export const GlobalMarketHeader = styled.p`
  color: var(--gray-9);
  font-size: 1.8rem;
  font-weight: 700;
  max-width: 100%;
  font-family: "Poppins", sans-serif;
`;

export const GlobalMarketDesc = styled.p`
  color: var(--gray-9);
  font-size: 1rem;
  font-weight: 300;
  max-width: 100%;
  font-family: "SF UI Display", sans-serif;
`;

export const TopCoinsHeader = styled.p`
  color: var(--gray-9);
  font-size: 1.2rem;
  font-weight: 800;
  max-width: 100%;
  margin-block-end: 0;
  padding-block-end: 1rem;
  font-family: "Poppins", sans-serif;
`;

export const MoreSpan = styled.p`
  align-self: center;
  justify-self: end;
  font-family: "Montserrat", sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: underline;
  color: blue;
  margin-block-end: 0;
  padding-block-end: 1rem;
`;

export const GlobalSpanStyled = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0rem;
  padding-inline: 0.5rem;
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  color: black;
`;

export const GlobalDescSpan = styled.div`
  font-weight: 800;
  margin-inline-start: 0.5rem;
  display: flex;
  align-items: baseline;

  svg {
    align-self: center;
  }
`;

export const GlobalDesc = styled.p`
  margin-block-end: 0;
`;

export const GlobalSpan = styled.span`
  margin-block-end: 0;
  font-weight: 800;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 1);
`;

export const CryptoHeader = styled.p`
  font-family: "Inter", sans-serif;
  margin-block-end: 0;
  text-align: center;
  font-weight: 800;
  font-size: 0.9rem;
`;

export const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
