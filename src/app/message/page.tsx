"use client";
import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import styled from "styled-components";
import colors from "@/lib/colors";
import Button from "@/components/Button";

const MessagePage: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [count, setCount] = useState("");

  const getCounts = () => {
    axios
      .get("https://ghostlink-api.vercel.app/stat")
      .then((res) => {
        setCount(res.data?.data?.clicks);

        // setCount()
      })
      .catch(() => {});
  };

  useEffect(() => {
    getCounts();
  }, []);

  const handleSubmit = () => {
    if (text) {
      setLoading(true);
      axios
        .post("https://ghostlink-api.vercel.app/message", { message: text })
        .then(() => {
          setLoading(false);
          setText("");
          getCounts();
          toast(
            "Ghostly transmission complete! Your message is now in the shadows."
          );
        })
        .catch((err) => {
          setLoading(false);
          getCounts();
          toast.error(
            err.response?.data?.message || "Network error, please try again"
          );
        });
    } else {
      toast("Kindly pop in your message real quick!!");
    }
  };

  return (
    <MessageStyled>
      <NavBar />
      <div className="body">
        <motion.div
          className="intro"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, stiffness: 100, delay: 0.6 }}
        >
          <div className="icon">
            <FaXTwitter />
          </div>
          <div>
            <p className="username">@ghostlinkHQ</p>
            <p className="text">Send an anonymous message</p>
          </div>
        </motion.div>
        <motion.div
          className="input-container"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, stiffness: 100, delay: 1.2 }}
        >
          <textarea
            placeholder="Message here ..."
            draggable="false"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, stiffness: 100, delay: 1.7 }}
        >
          <Button
            text="Send Message"
            isLoading={loading}
            onClick={handleSubmit}
          />
        </motion.div>
        <p className="count">{count}</p>
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
    }

    .count {
      margin-top: 2.5rem;
      font-weight: 500;
      font-size: 0.89rem;
    }
  }

  @media screen and (max-width: 500px) {
    display: block;

    .body {
      width: 92%;
    }
  }
`;
