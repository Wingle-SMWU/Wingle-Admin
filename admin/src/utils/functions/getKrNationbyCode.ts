import { countryList } from '@global-states/countryList';

const getKrNationByCode = (code: string): string | undefined => {
  if (!code) return undefined;

  const country = countryList.find((country) => country.code === code);
  return country?.krNation;
};

export default getKrNationByCode;
