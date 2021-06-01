import React, { useMemo } from 'react'
import { Link } from 'react-router-dom';

export default function PageList({ maxPage }) {
    const pageList = useMemo(
      () => (
        (new Array(maxPage))
          .fill(0)
          .map(
            (_, index) => (
              <PageButton
                key={`page=${index+1}`}
                page={index+1}
              />
            )
          )
      ), [maxPage])
  
    return (
      <ul>
        {pageList}
      </ul>
    )
  }
  
  function PageButton({ page }) {
    return (
      <li>
        <Link to={`/pokedex?page=${page}`}>{page}</Link>
      </li>
    )
  }