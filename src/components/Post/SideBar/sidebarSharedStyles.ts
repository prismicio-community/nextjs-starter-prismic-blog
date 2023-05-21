import styled from "styled-components";

export const SidebarTitle = styled.h3`
  color: #222222;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 700;
  border-right: 5px solid #d6b161;
  padding-right: 10px;
  letter-spacing: 0.5pt;
  text-align: right;
  direction: rtl;
`;

export const SidebarItem = styled.div<{ right?: boolean }>`
  margin-bottom: 48px;
`;
