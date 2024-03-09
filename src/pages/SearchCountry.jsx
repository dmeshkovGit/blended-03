import { Container, CountryList, SearchForm, Section } from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [searchRegion, setSearchRegion] = useState('');

  useEffect(() => {
    const getCountriesData = async () => {
      try {
        const response = await fetchByRegion(searchRegion);
        setCountries(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCountriesData();
  }, [searchRegion]);

  const handleSearch = value => {
    setSearchRegion(value);
  };

  return (
    <Section>
      <Container>
        <SearchForm search={handleSearch} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
