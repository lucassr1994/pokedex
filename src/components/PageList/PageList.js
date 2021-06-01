import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import usePageNumber from '../../hooks/usePageNumber'

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
      <DecrementButton />
      {pageList}
      <IncrementButton maxPage={maxPage} />
    </div>
  )
}

function PageButton({ page }) {
  return (
      <Link className="Page-button" to={`/pokedex?page=${page}`}>{page}</Link>
  )
}

function IncrementButton({ maxPage }) {
  const page = usePageNumber(maxPage)
  
  if (page === maxPage) {
    return null
  }

  return (
    <PaginationButton
      paginateBy={1}
    >
      Next
    </PaginationButton>
  )
}

function DecrementButton() {
  const page = usePageNumber()

  if (page === 1) {
    return null
  }

  return (
    <PaginationButton
      paginateBy={-1}
    >
      Previous
    </PaginationButton>
  )
}

function PaginationButton({ children, paginateBy }) {
  const page = usePageNumber()
  
  return (
    <button>
      <Link to={`/pokedex?page=${page + paginateBy}`}>
        {children}
      </Link>
    </button>
  )
}