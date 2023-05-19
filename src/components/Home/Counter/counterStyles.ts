import styled from "styled-components";

const CounterText = styled.h5`
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.8pt;
`;

const CountersSection = styled.section`
  background-size: cover;
  background: no-repeat fixed center;
  position: relative;
`;

const SingleProject = styled.div<{ border: boolean }>`
  border-left: ${(props) =>
    props.border ? "1px solid rgba(255, 255, 255, 0.2)" : "none"};
`;
