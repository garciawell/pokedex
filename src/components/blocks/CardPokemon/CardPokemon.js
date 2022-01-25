/* eslint-disable react/jsx-no-useless-fragment */
import Skeleton from '@material-ui/lab/Skeleton';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Creators as SharedActions } from '../../../store/modules/shared/actions';
import { formatTextToCapitalize, padDigits } from '../../../utils/tools';
import { Creators as PokemonsActions } from '../../../store/modules/pokemons/actions';
import TypesPokemon from '../TypesPokemon';
import { NumberStyled, Title, Wrapper } from './styles';

function CardPokemon({ data, loading }) {
  const dispatch = useDispatch();

  function getPrimaryColor(values) {
    const getPrimaryNameType = values.find((v) => v.slot === 1)?.type.name;

    return getPrimaryNameType;
  }

  const handleModalInf = useCallback(
    (val) => {
      if (loading === 'loading') {
        return;
      }
      dispatch(PokemonsActions.getInfPoke(val));
      dispatch(SharedActions.handleModal(true));
    },
    [dispatch, loading],
  );

  return (
    <Wrapper
      key={data.id}
      color={getPrimaryColor(data.types)}
      loading={loading}
      onClick={() => handleModalInf(data.id)}
    >
      <div>
        {loading === 'loading' ? (
          <Skeleton animation="wave" variant="text" width={50} height={25} />
        ) : (
          <NumberStyled># {data.id && padDigits(data.id)}</NumberStyled>
        )}

        {loading === 'loading' ? (
          <Skeleton animation="wave" variant="text" width={125} height={43} />
        ) : (
          <Title as="h2">{formatTextToCapitalize(data.name)}</Title>
        )}

        <TypesPokemon loading={loading} data={data.types} />
      </div>

      <div>
        {loading === 'loading' ? (
          <Skeleton animation="wave" variant="circle" width={96} height={96} />
        ) : (
          <>{data.img && <img src={data.img} alt={data.name} />}</>
        )}
      </div>
    </Wrapper>
  );
}

export default React.memo(CardPokemon);
