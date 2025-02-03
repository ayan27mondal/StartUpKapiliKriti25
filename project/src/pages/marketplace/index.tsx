import React, { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const SAMPLE_PRODUCTS = [
  {
    id: "1",
    name: "Organic Tomatoes",
    description: "Fresh, locally grown organic tomatoes",
    price: 4.99,
    unit: "kg",
    imageUrl: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    farmer: { name: "John Smith", location: "California, USA" }
  },
  {
    id: "2",
    name: "Fresh Carrots",
    description: "Crunchy, organic carrots packed with nutrients",
    price: 3.49,
    unit: "kg",
    imageUrl: "https://images.unsplash.com/photo-1582515082743-9844ea1c050d",
    farmer: { name: "Emma Brown", location: "Texas, USA" }
  }
];

export function MarketplacePage({ cart, setCart }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Marketplace</h1>
          <Button onClick={() => navigate("/cart")} className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" /> Cart ({cart.length})
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_PRODUCTS.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          ).map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <p className="text-md font-semibold text-emerald-600">₹{product.price}/{product.unit}</p>
                <p className="text-sm text-gray-500">👨‍🌾 {product.farmer.name}</p>
                <Button className="w-full mt-4" onClick={() => addToCart(product)}>Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
