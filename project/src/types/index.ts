export interface User {
  id: string;
  name: string;
  email: string;
  role: 'farmer' | 'buyer' | 'ambassador';
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  unit: string;
  imageUrl: string;
  isOrganic: boolean;
  certificationUrl?: string;
  farmerId: string;
  farmer: User;
  createdAt: Date;
}

export interface Order {
  id: string;
  productId: string;
  product: Product;
  buyerId: string;
  buyer: User;
  quantity: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}