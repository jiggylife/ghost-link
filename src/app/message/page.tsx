"use client";
import React from "react";
import { NextPage } from "next";
import { FaXTwitter } from "react-icons/fa6";
import { MdSend } from "react-icons/md";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import styled from "styled-components";
import colors from "@/lib/colors";
import Button from "@/components/Button";

const MessagePage: NextPage = () => {
  return (
    <MessageStyled>
      <NavBar />
      <div className="body">
        <div className="intro">
          <div className="icon">
            <FaXTwitter />
          </div>
          <div>
            <p className="username">@ghostlinkHQ</p>
            <p className="text">Send an anonymous message</p>
          </div>
        </div>
        <div className="input-container">
          <textarea placeholder="Message here ..." draggable="false" />
          <div className="icon">
            <MdSend />
          </div>
        </div>
        <Button text="Get Your own Anonymous Message" />
      </div>
      <Footer />
    </MessageStyled>
  );
};

export default MessagePage;

const MessageStyled = styled.div`
  background: ${colors.grey300};
  background: #f4f4f4;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .icon {
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.white100};
  }

  .body {
    width: 600px;
    margin: 2rem auto 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .intro {
      display: flex;
      align-items: center;
      width: 100%;
      background: ${colors.white100};
      padding: 9px 16px;
      border-radius: 15px;

      .icon {
        width: 40px;
        height: 40px;
        background: ${colors.blue100};
        margin-right: 0.8rem;
      }

      .username {
        font-weight: 300;
        font-size: 0.8rem;
      }

      .text {
        font-weight: 500;
        font-size: 0.9rem;
      }
    }

    .input-container {
      width: 100%;
      height: 230px;
      margin: 2rem 0 4rem;
      position: relative;

      textarea {
        width: 100%;
        height: 100%;
        display: block;
        background: ${colors.white100};
        padding: 1.1rem;
        border-radius: 15px;
        resize: none;
        color: ${colors.black300};
      }

      .icon {
        width: 30px;
        height: 30px;
        background: ${colors.black200};
        position: absolute;
        bottom: 16px;
        right: 16px;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 500px) {
    display: block;

    .body {
      width: 92%;
    }
  }
`;
