import * as React from 'react';
import MuiAvatar from '@mui/material/Avatar';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  const nameParts = name.split(' ');
  const firstLetter = nameParts[0][0];
  const secondLetter = nameParts[1] ? nameParts[1][0] : '';
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${firstLetter}${secondLetter}`,
  };
}

export default function Avatar({ name, imgHref }: { name: string; imgHref?: string }) {
  return <MuiAvatar alt={name} src={imgHref} {...stringAvatar(name)} />;
}
