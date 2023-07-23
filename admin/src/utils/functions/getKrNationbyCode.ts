import { countryList } from '@global-states/countryList';

const getKrNationByCode = (code: string): string | undefined => {
  if (!code) return undefined;

  const country = countryList.find((country) => country.code === code);
  const countryTwo = countryList.find((country) => country.enNation === code);

  return country?.krNation || countryTwo?.krNation;
};

export default getKrNationByCode;
