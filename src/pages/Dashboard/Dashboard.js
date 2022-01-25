import { Box, Grid } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as SharedActions } from '../../store/modules/shared/actions';
import { Creators as PokeActions } from '../../store/modules/pokemons/actions';
import { ModalDetailPokemon, SearchPokemon } from '../../components/blocks';
import CardPokemon from '../../components/blocks/CardPokemon';
import { Modal } from '../../components/elements';
import {
  Box as BoxStyled,
  Container,
  Header,
  PaginationStyled,
  TitleStyled,
  WrapperBg,
} from './styles';

function Dashboard() {
  const pokes = useSelector(
    (state) => state.pokemons.pokes,
  );

  const statusModal = useSelector(
    (state) => state.shared.modal,
  );
  const pagination = useSelector(
    (state) => state.pokemons.pages,
  );

  const loading = useSelector(
    (state) => state.pokemons.loadingStatus,
  );

  const isSearchFilled = useSelector(
    (state) => state.pokemons.isSearchFilled,
  );

  const notFoundItems = useSelector(
    (state) => state.pokemons.error,
  );

  const dispatch = useDispatch();

  const actionGetPokes = useCallback(() => {
    dispatch(PokeActions.getPokes(1));
  }, [dispatch]);

  useEffect(() => {
    actionGetPokes();
  }, [actionGetPokes]);

  const handlePagination = (
    event,
    value,
  ) => {
    dispatch(PokeActions.getPokes(value));
  };

  const handleCloseModal = useCallback(() => {
    dispatch(PokeActions.getInfPoke('CLEAR'));
    dispatch(SharedActions.handleModal(false));
  }, [dispatch]);

  return (
    <>
      <WrapperBg>
        <Container>
          <Header container>
            <Grid item xs={12} md={7}>
              <TitleStyled variant="h2" size="h3">
                Pokedéx
              </TitleStyled>

              <p>
                Search for Pokémon by name or using the National Pokédex number
              </p>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box mt={2} />
              <SearchPokemon />
            </Grid>
          </Header>
          <BoxStyled>
            {pokes.map((data) => (
              <CardPokemon key={data.id} data={data} loading={loading} />
            ))}
          </BoxStyled>
          {notFoundItems && <h2>Nenhum Resultado Encontrado</h2>}
          {!isSearchFilled && (
            <PaginationStyled
              showFirstButton
              showLastButton
              count={Math.ceil(pagination / 20)}
              onChange={handlePagination}
              disabled={loading === 'loading'}
            />
          )}
        </Container>
      </WrapperBg>
      <Modal open={statusModal} handleClose={handleCloseModal}>
        <ModalDetailPokemon />
      </Modal>
    </>
  );
}

export default Dashboard;
