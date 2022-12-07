export interface Product {
  id: string | number;
  image: string;
  price: number;
  category: string;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
  description?: string;
}
