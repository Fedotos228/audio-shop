export interface INavigation {
  id: number,
  title: string,
  href: string
}

export const navigation: INavigation[] = [
  {
    id: 1,
    title: 'Home',
    href: '#home'
  },
  {
    id: 2,
    title: 'New Products',
    href: '#new-products'
  },
  {
    id: 3,
    title: 'Gallery',
    href: '#gallery'
  }
]