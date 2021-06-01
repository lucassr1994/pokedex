import React from 'react'
import PageList from '../../components/PageList/PageList'
import PokeDexPage from '../../components/PokeDexPage/PokeDexPage'
import usePageNumber from '../../hooks/usePageNumber'

const TOTAL_POKEMONS = 151
const PAGE_SIZE = 20
const TOTAL_PAGES = Math.ceil(TOTAL_POKEMONS / PAGE_SIZE)

export default function PokeDex() {
  const page = usePageNumber(TOTAL_PAGES)
  const firstItem = (page - 1) * PAGE_SIZE + 1
  const lastItem = (page * PAGE_SIZE > 151) ? 151 : page * PAGE_SIZE
  return (
    <div>
      <PageList maxPage={TOTAL_PAGES} />
      <PokeDexPage firstItem={firstItem} lastItem={lastItem} />
    </div>
  );
}



