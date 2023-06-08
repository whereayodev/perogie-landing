export interface VarenikItem {
  translateX: number
  translateY: number
  rotation: number
}

export interface MenuCard {
  productName: string
  productSpecs: string
  productPrice: string
  productLink: string
  images: Picture[]
}

export interface Picture {
  filename: string
  alt?: string
}
