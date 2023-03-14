import { useEffect, useState, React } from "react";
import Carausel from "../Carausel/Carausel";
import Card from "../Card/Card";
import styles from "./Section.module.css";

export default function Section(props) {
  const [cards, setCards] = useState([]);
  const [isShowall, setIsShowall] = useState(false);

  useEffect(() => {
    props.datasource().then((data) => {
      setCards(data);
    });
  }, [props]);

  const handleToggle = () => {
    setIsShowall((prevstate) => !prevstate);
  };
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div>{props.title}</div>
        <div id="showallbtn" onClick={handleToggle} className={styles.showall}>
          {isShowall ? "Collapse" : "Show all"}
        </div>
      </div>

      {isShowall ? (
        <div className={styles.cardwrapper}>
          {cards.map((card) => (
            <Card
              albumlogo={card.image}
              follows={card.follows}
              cardtitle={card.title}
            />
          ))}
        </div>
      ) : (
        <div className={styles.cardwrapper1}>
          <Carausel
            data={cards}
            renderComponent={(data) => (
              <Card
                albumlogo={data.image}
                follows={data.follows}
                cardtitle={data.title}
              />
            )}
          />
        </div>
      )}
    </div>
  );
}
