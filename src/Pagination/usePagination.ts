import { useReducer, useEffect } from 'react'
import { PaginationOptions, PaginationState, ReducerAction } from './types'

function paginate<T>({ rawData, page, limit }: PaginationOptions<T>) {
  const totalResultCount = rawData ? rawData.length : 0
  const totalPages = Math.ceil(totalResultCount / limit)
  let actualPage = page
  if (page && page + 1 > totalPages) {
    actualPage = totalPages - 1
  }
  const start = actualPage * limit
  const end = start + limit
  const hasMore = !(page + 1 === totalPages)
  const data = rawData.slice(start, end)
  return {
    data,
    meta: {
      totalResultCount,
      totalPages,
      hasMore,
      limit,
      page: actualPage
    }
  }
}

const NEXT = 'next'
const PREV = 'prev'
const SET = 'set'
function reducer<T>(
  state: PaginationState<T>,
  action: ReducerAction<T>
): PaginationState<T> {
  const { type, payload } = action

  let { page } = state

  if (type === NEXT) {
    page = state.page + 1
  }

  if (type === PREV) {
    page = page - 1 < 1 ? 0 : page - 1
  }

  if (type === SET) {
    // eslint-disable-next-line prefer-destructuring
    if (payload && payload.page !== undefined) page = payload.page
  }

  return { page, limit: state.limit }
}

const DEFAULT_LIMIT = 10
export function usePagination<T>(rawData: T[], limit = DEFAULT_LIMIT) {
  const [state, dispatch] = useReducer(reducer, {
    page: 0,
    limit
  })

  const { data, meta } = paginate({
    rawData,
    page: state.page,
    limit: state.limit
  })

  return {
    data,
    meta,
    next: () => dispatch({ type: NEXT }),
    prev: () => dispatch({ type: PREV }),
    set: (payload: any) => dispatch({ type: SET, payload })
  }
}
