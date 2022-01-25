import Skeleton from '@material-ui/lab/Skeleton';
import React from 'react';
import { Box, Label } from './styles';

function TypesPokemon({ data, loading }) {
  return (
    <Box>
      {data.map((item) => (loading === 'loading' ? (
        <Skeleton
          key={item.type.name}
          animation="wave"
          variant="rect"
          width={50}
          height={25}
        />
      ) : (
        <Label key={item.type.name} color={item.type.name}>
          {item.type.name}
        </Label>
      )))}
    </Box>
  );
}

export default TypesPokemon;
