import React from 'react';

const PhoneNumberFormatter = (cell) => {
  // Ref https://stackoverflow.com/a/8358141
  const cleaned = (`${cell}`).replace(/\D/g, '');
  const match = cleaned.match(/^(1|91|)?(\d{3})(\d{3})(\d{4})$/);
  let formattedNumber = `${cell}`;
  if (match) {
    const intlCode = match[1] ? `+${match[1]} ` : '';
    formattedNumber = [
      intlCode,
      '(',
      match[2],
      ') ',
      match[3],
      '-',
      match[4],
    ].join('');
  }
  return <span>{formattedNumber}</span>;
};

export default PhoneNumberFormatter;
