import TopSection from "../TopSection/TopSection";
import BottomSection from "../BottomSection/BottomSection";
import styles from "./mainsection.module.css";
import { useState } from "react";

export default function MainSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [msgs, setMsgs] = useState([
    {
      message:
        '👋 Hello, I am "RainDrops", your weather assistant. How can I help you today?',
      role: "system",
    },
  ]);

  return (
    <div className={styles.container}>
      <TopSection isLoading={isLoading} msgs={msgs} />
      <BottomSection
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        msgs={msgs}
        setMsgs={setMsgs}
      />
    </div>
  );
}
