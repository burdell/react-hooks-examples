export interface PaginationOptions<T> {
  rawData: T[]
  page: number
  limit: number
}

export interface Meta {
  totalResultCount: number
  totalPages: number
  hasMore: boolean
  limit: number
  page: number
}

export interface PaginationState<T> {
  page: number
  limit: number
}

export interface ReducerAction<T> {
  type: string
  payload?: {
    page?: number
    data?: T[]
  }
}

export interface Person {
  name: string
  age: number
  job: string
  pictureUrl: string
}
