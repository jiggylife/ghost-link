import React, { FC } from "react";
import styled from "styled-components";
import { FaXTwitter } from "react-icons/fa6";

import colors from "@/lib/colors";

import Button from "./Button";
import Tweets from "@/svgs/Tweets";

const TweetsSection: FC = () => (
  <TweetsSectionStyled>
    <div className="main-intro">
      <h1 className="title">
        WTF is <span>Ghostlink?</span>
      </h1>
      <p className="description">
        t is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-
      </p>
    </div>
    <div className="grouped-guys">
      <div className="texts">
        <h1 className="title">Some Nice Tweets</h1>
        <p className="description">
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-
        </p>
        <Button
          text="Follow @ghostlinkHQ on"
          icon={<FaXTwitter className="icon" />}
        />
      </div>
      <div className="tweet">
        <Tweets />
      </div>
    </div>
  </TweetsSectionStyled>
);

const TweetsSectionStyled = styled.section`
  width: 90dvw;
  margin: auto;
  margin-bottom: 5%;

  .main-intro {
    text-align: center;
    width: 600px;
    margin: 0 auto 10rem;

    span {
      color: ${colors.orange100};
    }
  }

  .grouped-guys {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    font-size: 2.9rem;
    font-weight: 700;
    line-height: 133.5%;
    color: ${colors.black200};
  }

  .description {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 120.5%;
    color: ${colors.black200};
    margin: 10px 0 2rem;
  }

  .texts {
    width: 40%;
  }

  .tweets {
    width: 45%;
  }

  .icon {
    margin-left: 6px;
  }
`;

export default TweetsSection;
