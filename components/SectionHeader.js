import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding-bottom: 8px;
`;

const Label = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #888;
`;

const Title = styled.h1`
  margin: 4px 0 0;
  font-size: 1.4rem;
  font-weight: 600;
  color: #f5f5f7;;
`;

export default function SectionHeader({ label, title }) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Title>{title}</Title>
    </Wrapper>
  );
}