export interface Header {
  title: string,
  icon: string,
  routeUrl: string
}

export interface Product {
  id?: number
  name: string
  price: number | null
}