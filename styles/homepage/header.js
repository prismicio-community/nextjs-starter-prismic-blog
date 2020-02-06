import css from "styled-jsx/css";

export const headerStyles = css.global`
  .home {
    text-align: center;
    max-width: 700px;
    margin: auto;
  }

  .blog-avatar {
    height: 140px;
    width: 140px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    margin: 1em auto;
  }

  .blog-description {
    font-size: 18px;
    color: #9a9a9a;
    line-height: 30px;
    margin-bottom: 3rem;
    padding-bottom: 3rem;
    font-family: "Lato", sans-serif;
    border-bottom: 1px solid #dadada;
  }
`;
