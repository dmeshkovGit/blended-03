import { Container, CountryList, Grid, Heading, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
const [countries, setCountries] = useState([])

  useEffect(() => {
    const getData = async () => {
    try {
      const data = await getCountries()
      setCountries(data)
    } catch (error) {
      
    }
    }
    getData();
  },[])

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
