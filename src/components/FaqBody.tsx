import React, { FC } from "react";
import styled from "styled-components";
// @ts-ignore
import Faq from "react-faq-component";

import faqData from "@/lib/faqData";
import colors from "@/lib/colors";

const FaqBody: FC = () => (
  <FaqStyled>
    <h1 className="title">FAQ</h1>
    <p className="description">
      t is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-
    </p>
    <Faq data={faqData} />
  </FaqStyled>
);

export default FaqBody;

const FaqStyled = styled.section`
  width: 90%;
  margin: 10% auto;

  .title {
    font-size: 2.9rem;
    font-weight: 700;
    line-height: 133.5%;
    color: ${colors.black200};
    text-align: center;
  }

  .description {
    font-size: 1rem;
    font-weight: 500;
    line-height: 120.5%;
    color: ${colors.black200};
    width: 686px;
    text-align: center;
    margin: 10px auto 2rem;
  }

  .faq-row-wrapper {
    width: 60%;
    margin: auto;

    .faq-row {
      margin-bottom: 1.5rem;
      background: ${colors.orange200};
      border: 1px solid ${colors.grey100};
      padding-left: 1rem;
      border-radius: 10px;

      .row-title {
        font-weight: 700;
        font-size: 1.2rem;
        color: ${colors.black100};
      }

      .row-content {
        .row-content-text {
          opacity: 0.5 !important;
          padding-bottom: 1rem !important;
          padding-right: 1rem !important;
        }
      }
    }
  }
`;
