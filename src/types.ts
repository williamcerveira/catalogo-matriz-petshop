
export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Rações' | 'Brinquedos' | 'Acessórios' | 'Higiene';
  animalType: 'Cachorros' | 'Gatos' | 'Aves' | 'Peixes';
  brand: string;
  description: string;
  image: string;
  sku: string;
  technicalInfo?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  priceBase: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}
