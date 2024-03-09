import { Container, CountryInfo, Section } from 'components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';

export const Country = () => {
  const { countryId } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getCountriesData = async () => {
      try {
        const response = await fetchCountry(countryId);
        setInfo(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCountriesData();
  }, [countryId]);

  return (
    <Section>
      <Container>{info && <CountryInfo info={info} />}</Container>
    </Section>
  );
};
