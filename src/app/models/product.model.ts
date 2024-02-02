import { colorTypes } from './index';

interface ProductModel {
  title: string;
  description: string;
}

export interface ProductDataModel extends ProductModel {
  type: colorTypes;
  products: ProductListModel[];
}

export interface ProductListModel extends ProductModel {
  id: string;
  role: string;
  redirect?: string;
  productSlides: string;
  buttonText: string;
  accessSend: boolean;
}
