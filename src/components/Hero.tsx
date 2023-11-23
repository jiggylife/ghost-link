import React, { FC } from "react";
import styled from "styled-components";

import colors from "@/lib/colors";

import Button from "./Button";
import StarGhost from "@/svgs/StarGhost";
import NiceGhost from "@/svgs/NiceGhost";
import RudeGhost from "@/svgs/RudeGhost";

const Hero: FC = () => (
  <HeroStyled>
    <h1 className="title">Ghostlink</h1>
    <p className="description">Say something anonymously</p>
    <Button text="Send Something Anonymously" />
    <StarGhost className="ghosts star" />
    <NiceGhost className="ghosts nice" />
    <RudeGhost className="ghosts rude" />
  </HeroStyled>
);

const HeroStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90dvw;
  height: 70dvh;
  margin: 3.5rem auto;
  position: relative;

  .title {
    font-size: 5.5rem;
    font-weight: 700;
    line-height: 133.5%;
    color: ${colors.black200};
  }

  .description {
    font-size: 4.1rem;
    font-weight: 500;
    line-height: 120.5%;
    color: ${colors.black200};
    width: 70%;
    margin: 10px auto 3rem;
    text-align: center;
  }

  .ghosts {
    position: absolute;
    width: 155px;
  }

  .star {
    left: 0;
  }

  .nice {
    right: 0;
    top: -25px;
  }

  .rude {
    right: 0;
    bottom: -50px;
    width: 175px;
  }
`;

export default Hero;
