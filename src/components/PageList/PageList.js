import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import './PageList.css'

export default function PageList({ maxPage }) {
  const pageList = useMemo(
    () => (
      (new Array(maxPage))
        .fill(0)
        .map(
          (_, index) => (
            <PageButton
              key={`page=${index + 1}`}
              page={index + 1}
            />
          )
        )
    ), [maxPage])

  return (
    <div>
      <button>Previous</button>
      {pageList}
      <button>Next</button>
    </div>
  )
}

function PageButton({ page }) {
  return (
      <Link className="Page-button" to={`/pokedex?page=${page}`}>{page}</Link>
  )
}