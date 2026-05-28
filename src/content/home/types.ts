export type Product = {
  title: string;
  description: string;
};

export type ProductCategory = {
  label: string;
  products: Product[];
};

export type FocusPoint = {
  title: string;
  text: string;
};
