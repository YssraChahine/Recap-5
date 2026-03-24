import styled from "styled-components";

export default function Color({ color }) {
  const ColorText = styled.span`
    visibility: hidden;
    width: 130px;
    background-color: black;
    color: #ffffff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
  `;

  const ColorElement = styled.div`
    background-color: ${color};
    width: 50px;
    height: 50px;
    border-radius: 50%;

    &:hover ${ColorText} {
      visibility: visible;
    }
  `;

  return (
    <ColorElement>
      <ColorText>{color}</ColorText>
    </ColorElement>
  );
}
