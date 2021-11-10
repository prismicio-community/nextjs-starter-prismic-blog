import css from "styled-jsx/css";

export const loaderStyles = css.global`
  .loader {
    position: fixed;
    top: 50%;
    left: 50%;
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .ldsRipple {
    width: 64px;
    height: 64px;
  }
  .ldsRipple:before, .ldsRipple:after {
    content: '';
    position: absolute;
    border: 4px solid #333;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .ldsRipple:after {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
`;
