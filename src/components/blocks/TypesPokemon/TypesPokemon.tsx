import React from 'react';
import { IPokeTypes } from 'store/modules/pokemons/models';
import Skeleton from '@material-ui/lab/Skeleton';
import { Label, Box } from './styles';

interface ITypesProps {
  data: IPokeTypes[];
  loading?: string;
}

const TypesPokemon: React.FC<ITypesProps> = ({ data, loading }) => {
  return (
    <Box>
      {data.map((item) => {
        return loading === 'loading' ? (
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
        );
      })}
    </Box>
  );
};

export default TypesPokemon;
