import styled from "styled-components";

export const Blog = styled.section<{ marginTop?: number }>`
  padding-top: ${(props) => props.marginTop || 90}px;
`;

export const SingleBlog = styled.div`
  padding-bottom: 30px;
`;

export const PostThumb = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 400px;
  }
`;
