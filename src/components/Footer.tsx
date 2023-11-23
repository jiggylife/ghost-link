import React, { FC } from "react";
import styled from "styled-components";
import { PiCopyrightLight } from "react-icons/pi";

import FooterLogo from "@/svgs/FooterLogo";
import colors from "@/lib/colors";

const Footer: FC = () => (
  <FooterStyled>
    <div className="top">
      <div className="left">
        <FooterLogo className="cursor-pointer" />
        <p>Have Fun,</p>
        <p>Get anonymous</p>
      </div>
      <div className="right">
        <h5>Subscribe</h5>
        <div className="input-group">
          <input type="email" name="" id="" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <p>
          By subscribing you agree to with our <a href="">Privacy Policy </a>
        </p>
      </div>
    </div>
    <hr />
    <div className="bottom">
      <div className="left">
        <a href="">Privacy Policy</a>
        <a href="">Terms of Service</a>
      </div>
      <p>
        <PiCopyrightLight />
        {new Date().getFullYear()}, All right reserved.
      </p>
    </div>
  </FooterStyled>
);

const FooterStyled = styled.footer`
  width: 100dvw;
  padding: 0 1.5rem;
  background-color: ${colors.grey300};

  a {
    text-decoration: underline;
    margin-right: 1.5rem;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;

    .left {
      font-size: 0.85rem;
      font-weight: 300;
    }

    .right {
      h5 {
        font-size: 1rem;
        font-weight: 500;
      }

      .input-group {
        display: flex;
        align-items: center;
        margin-top: 0.7rem;

        input {
          display: block;
          border: 1px solid ${colors.black200};
          background: transparent;
          height: 40px;
          padding: 12px;
          color: ${colors.black300};
        }

        button {
          display: flex;
          padding: 12px 24px;
          justify-content: center;
          height: 40px;
          align-items: center;
          background: transparent;
          margin-left: 1.5rem;
          font-weight: 500;
          border: 1px solid ${colors.black200};
          color: ${colors.black200};
          transition: transform 0.3s ease-in-out;
          transition: all 0.4s ease-in-out;

          &:hover {
            background: ${colors.black100};
            transform: scale(1.01);
            color: ${colors.white100};
          }
        }
      }

      p {
        font-size: 0.85rem;
        font-weight: 300;
        margin-top: 1rem;
      }
    }
  }

  hr {
    border: none;
    border-bottom: 1px solid ${colors.grey100};
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;

    .left {
      display: flex;
      align-items: center;
      font-size: 0.85rem;
      font-weight: 300;
    }

    p {
      display: flex;
      align-items: center;
      font-size: 0.85rem;
      font-weight: 300;
    }
  }
`;

export default Footer;
