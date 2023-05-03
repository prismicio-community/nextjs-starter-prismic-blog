import styled from 'styled-components';

const Number = styled.div`
  font-family: 'Athiti', sans-serif;
  color: #d6b161;
  margin-top: 25px;
  font-size: 26px;
`;

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

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  height: 100%;
  width: 100%;
`;

const SingleProject = styled.div<{ border: boolean }>`
  border-left: ${(props) => (props.border ? '1px solid rgba(255, 255, 255, 0.2)' : 'none')};
`;

export {
  Number, CounterText, CountersSection, Overlay, SingleProject,
};
