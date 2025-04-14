import styles from "./bottomsection.module.css";
import sendButton from "./../../assets/send-btn.svg";
import { useState } from "react";
import axios from "axios";

export default function BottomSection({
  isLoading,
  setIsLoading,
  msgs,
  setMsgs,
}) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    const content = {
      message: text,
    };

    const user_content = {
      message: text,
      role: "user",
    };

    setMsgs([...msgs, user_content]);
    setIsLoading(true);
    axios
      .post("http://127.0.0.1:5000/chat/", content)
      .then((response) => {
        if (response.data.success) {
          const result = {
            message: response.data.result,
            role: "system",
          };
          setMsgs([...msgs, user_content, result]);
        } else {
          const result = {
            message: "Something went wrong! 💔",
            role: "error",
          };
          console.error(response.data.error);
          setMsgs([...msgs, user_content, result]);
        }
      })
      .catch((error) => {
        console.error(error);
        const result = {
          message: "Something went wrong! 💔",
          role: "error",
        };
        console.error(response.data.error);
        setMsgs([...msgs, user_content, result]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputText}>
          <input
            type="text"
            required={true}
            onChange={(e) => setText(e.target.value)}
            value={text}
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading}>
            <img src={sendButton} alt="" />
          </button>
        </div>
      </form>
    </div>
  );
}
