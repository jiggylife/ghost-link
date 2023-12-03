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
      Some questions we have answers to
    </p>
    <Faq data={faqData} />
    <p className="description">
      If you have any additional questions or concerns, feel free to reach out to our support team. We are here to assist you!
    </p>
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

  @media screen and (max-width: 789px) {
    width: 92%;
    margin: 7% auto 6%;

    .title {
      font-size: 2.3rem;
    }

    .faq-row-wrapper,
    .description {
      width: 87%;
    }

    .faq-row-wrapper .faq-row .row-title {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 500px) {
    margin: 10% auto;

    .description {
      font-weight: 300;
    }

    .faq-row-wrapper,
    .description {
      width: 95%;
    }
  }
`;
