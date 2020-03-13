import styled from "styled-components";

const HomeWrapper = styled.section`
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: row-reverse;
  -webkit-flex-direction: row-reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  -moz-transition: opacity 0.5s ease;
  -webkit-transition: opacity 0.5s ease;
  -ms-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
  margin: 0 auto;
  max-width: 100%;
  opacity: 1;
  padding: 2.5em;
  width: 90em;
  body.is-menu-visible & {
    opacity: 0.15;
  }
`;

export default HomeWrapper;
