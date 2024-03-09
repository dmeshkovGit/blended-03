import styles from './CountryInfo.module.css';

// {
// flag,
// capital,
// countryName,
// languages = [],
// population,
// }

export const CountryInfo = ({ info }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flag}>
        <img className={styles.img} src={info.flag} alt={info.countryName} />
      </div>
      <div className={styles.box}>
        <h3 className={styles.capital}>
          Capital: <span className={styles.accent}>{info.capital}</span>
        </h3>

        <h1 className={styles.title}>
          {info.countryName === 'Russian Federation'
            ? 'MORDOR'
            : info.countryName}
        </h1>

        <p className={styles.details}>
          Population: <span className={styles.accent}>{info.population}</span>
        </p>

        <p className={styles.details}>
          Languages:
          <span className={styles.accent}>{info.languages.join(', ')}</span>
        </p>
      </div>
    </div>
  );
};
