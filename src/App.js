import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  margin: 21vh auto;
  padding: 1em;
  max-width: 30em;
  font-family: arial;
  color: #3a3a3a;
`;

const Title = styled.p`
  text-align: center;
  padding: 1em;
  font-size: 18px;
`;

const Link = styled.a`
  color: #3c75d1;
  text-decoration: none;
`;

const Social = styled.p`
  text-align: center;
  padding: 0.5em;
`;

const App = () => (
  <Wrapper>
    <Title>Gabriel Bussieres</Title>
    <p>
      I am a Software Engineer in Test on the iOS team at{" "}
      <Link href="https://flipp.com/" target="_blank">
        Flipp
      </Link>
    </p>
    <p>
      I studied computer science and psychology at{" "}
      <Link href="https://www.utoronto.ca/" target="_blank">
        University of Toronto
      </Link>
    </p>
    <p>
      My interests include front-end development, human-computer interaction,
      programming languages, and cognitive psychology.
    </p>
    <Social>
      <Link href="https://github.com/gabussieres" target="_blank">
        GitHub
      </Link>{" "}
      -{" "}
      <Link href="https://www.linkedin.com/in/gabrielbussieres" target="_blank">
        LinkedIn
      </Link>
      <br />
      gab.bussieres@gmail.com
    </Social>
  </Wrapper>
);

export default App;
