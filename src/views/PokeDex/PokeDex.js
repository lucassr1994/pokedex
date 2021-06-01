import React, { useEffect } from 'react'
import PageList from '../../components/PageList'
import useQuery from '../../hooks/useQuery'
import PokeDexPage from '../../components/PokeDexPage'

const TOTAL_POKEMONS = 151
const PAGE_SIZE = 20
const TOTAL_PAGES = Math.ceil(TOTAL_POKEMONS/PAGE_SIZE)

export default function PokeDex() {
  const page = useQuery().get('page') ?? 1
  const firstItem = (page - 1)*PAGE_SIZE + 1
  const lastItem = (page*PAGE_SIZE > 151)? 151:page*PAGE_SIZE
  return (
    <div>
      <PokeDexPage firstItem={firstItem} lastItem={lastItem}/>
      <PageList maxPage={TOTAL_PAGES}/>
    </div>
  );
}



