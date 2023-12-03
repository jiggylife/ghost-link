import React, { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";

import colors from "@/lib/colors";

import Button from "./Button";
import Tweets from "@/svgs/Tweets";

const handleTwitterButtonClick = () => {
  window.location.href = 'https://twitter.com/ghostlinkHQ';
};

const TweetsSection: FC = () => (
  <TweetsSectionStyled>
    <div className="main-intro">
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, stiffness: 100 }}
        className="title"
      >
        WTF is <span>Ghostlink?</span>
      </motion.h1>
      <motion.p
        className="description"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, stiffness: 100 }}
      >
        t is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-
      </motion.p>
    </div>
    <div className="grouped-guys">
      <div className="texts">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, stiffness: 100 }}
          className="title"
        >
          We are on 𝕏
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, stiffness: 100 }}
          className="description"
        >
          Engage in conversations, share your thoughts, and make your voice heard among a global audience 🗣️
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, stiffness: 100 }}
          className="description"
        >
          Join us on Twitter now and experience a world of endless entertainment 💙
        </motion.p>
        <Button onClick={handleTwitterButtonClick}
          text="Follow @ghostlinkHQ on"
          icon={<FaXTwitter className="icon" />}
        />
      </div>
      <motion.div
        className="tweet"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4, stiffness: 100 }}
      >
        <Tweets />
      </motion.div>
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

  @media screen and (max-width: 830px) {
    .grouped-guys {
      display: block;
    }

    .main-intro {
      width: 85%;
      margin: 0 auto 5rem;
    }

    .tweet,
    .texts {
      width: 85%;
      margin: 4rem auto;
      text-align: center;
    }

    button {
      margin: auto;
    }

    .tweet {
      svg {
        width: 100%;
        height: auto;
      }
    }
  }

  @media screen and (max-width: 500px) {
    width: 92dvw;

    .tweet,
    .texts,
    .main-intro {
      width: 100%;
    }

    .main-intro {
      margin-bottom: 4rem;
    }

    .texts {
      margin: 0;
    }

    .title {
      font-size: 2.1rem;
    }

    .description {
      font-size: 1.1rem;
      font-weight: 300;
    }
  }
`;

export default TweetsSection;
