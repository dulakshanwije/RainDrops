import { useEffect, useRef } from "react";
import MessageBox from "../MessageBox/MessageBox";
import styles from "./topsection.module.css";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import PulseLoader from "react-spinners/PulseLoader";

export default function TopSection({ isLoading, msgs }) {
  const sRef = useRef(null);

  useEffect(() => {
    if (sRef.current) {
      const sEle = sRef.current.getScrollElement();
      sEle.scrollTop = sEle.scrollHeight;
    }
  }, [msgs]);

  return (
    <>
      <SimpleBar ref={sRef} className={styles.SimpleBar}>
        <div className={styles.container}>
          {msgs.map((msg, key) => (
            <MessageBox message={msg.message} role={msg.role} key={key} />
          ))}
        </div>
        {isLoading ? (
          <PulseLoader className={styles.PulseLoader} cssOverride={true} />
        ) : (
          ""
        )}
      </SimpleBar>
    </>
  );
}
