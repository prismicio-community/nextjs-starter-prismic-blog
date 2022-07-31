import { Container } from '@nextui-org/react';
import React from 'react';

const ImageWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => 
      <Container fluid css={{ width: '100%', 'img': { transition: 'all 0.3s ease-in-out' }, px: 0 }}>{children}</Container>
export default ImageWrapper;