import { useEffect, useState, React } from "react";
import Carausel from "../Carausel/Carausel";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";
import styles from "./Section.module.css";

export default function Section(props) {
  const [cards, setCards] = useState([]);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [isShowall, setIsShowall] = useState(false);

  useEffect(() => {
    props.datasource().then((data) => {
      setCards(data);
    });

    if (props.filtersource) {
      props.filtersource().then((response) => {
        // console.log(filterdata, "filter");
        const { data } = response;
        setFilters([...filters, ...data]);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredcards = cards.filter((card) =>
    selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card
  );
  // console.log(filters);
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
      {props.filtersource && (
        <Filters
          data={filters}
          selectedFilterIndex={selectedFilterIndex}
          setSelectedFilterIndex={setSelectedFilterIndex}
        />
      )}
      {isShowall ? (
        <div className={styles.cardwrapper}>
          {filteredcards.map((card) => (
            <Card
              albumlogo={card.image}
              follows={props.type === "album" ? card.follows : card.likes}
              cardtitle={card.title}
              type={props.type}
            />
          ))}
        </div>
      ) : (
        <div className={styles.cardwrapper1}>
          <Carausel
            data={filteredcards}
            renderComponent={(data) => (
              <Card
                albumlogo={data.image}
                follows={props.type === "album" ? data.follows : data.likes}
                cardtitle={data.title}
                type={props.type}
              />
            )}
          />
        </div>
      )}
    </div>
  );
}
