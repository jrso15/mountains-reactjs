import { useState } from "react";
import MountainList from "../api/mountain-list.json";
import styles from "../styles/FeedList.module.scss";

const FeedList = () => {
  const [mountainData, setMountainData] = useState([...MountainList]);

  const sortList = (e) => {
    const options = {
      ascending: [...mountainData].sort((a, b) => (a.title < b.title ? -1 : 1)),
      descending: [...mountainData].sort((a, b) =>
        a.title < b.title ? 1 : -1
      ),
    };

    setMountainData(options[e.target.value]);
  };

  return (
    <div className={styles.feed_container}>
      <div className={styles.actions_wrapper}>
        <input type="text" className={styles.search} placeholder="Search" />

        <select onChange={sortList} className={styles.sort}>
          <option value="ascending">Sort a A - Z </option>
          <option value="descending">Sort a Z - A </option>
        </select>
      </div>

      <div className={styles.feed_wrapper}>
        {mountainData.map((mountain) => (
          <div key={mountain.id} className={styles.feed_wrapper__grid}>
            <div className={styles.thumbnail}>
              <img
                className={styles.thumbnail__image}
                src={mountain.image}
                alt={mountain.title}
              />
              <img
                className={styles.thumbnail__icon}
                src="../images/icon.png"
                alt="icon"
              />
            </div>
            <div className={styles.details}>
              <h2 className={styles.title}> {mountain.title} </h2>
              <p className={styles.description}> {mountain.description} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedList;
