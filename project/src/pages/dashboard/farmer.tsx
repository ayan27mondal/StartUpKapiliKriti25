import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { PlusCircle, Package, DollarSign, TrendingUp, MapPin, CloudSun, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

// Import Chart.js Components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart Components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const INITIAL_PRODUCTS = [
  { id: "1", name: "Organic Tomatoes", price: 50, status: "active" },
  { id: "2", name: "Fresh Spinach", price: 30, status: "inactive" },
  { id: "3", name: "Natural Honey", price: 150, status: "active" },
];

const SAMPLE_STATS = {
  totalSales: 12500,
  monthlyGrowth: Math.random() > 0.5 ? 25 : -10, // Random Growth Simulation (Up/Down)
};

const API_KEY = "58a903217da34fd428ed1e53464ee87b"; // Replace with your OpenWeatherMap API Key

export function FarmerDashboard() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [view, setView] = useState("dashboard"); // 'dashboard', 'allProducts', 
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [suggestedCrop, setSuggestedCrop] = useState("");

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price) return;
    setProducts([...products, { id: Date.now().toString(), name: newProduct.name, price: Number(newProduct.price), status: "active" }]);
    setNewProduct({ name: "", price: "" });
    setView("dashboard");
  };

  useEffect(() => {
    if (weather) suggestCrop();
  }, [weather]);

  const fetchWeather = async () => {
    if (!location) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const suggestCrop = () => {
    if (!weather) return;
    const temp = weather.main.temp;
    if (temp > 30) setSuggestedCrop("Rice 🌾");
    else if (temp > 20) setSuggestedCrop("Wheat 🌾");
    else if (temp > 15) setSuggestedCrop("Potatoes 🥔");
    else setSuggestedCrop("Barley 🌿");
  };

  // Growth Graph Data
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales Growth",
        data: [1000, 2500, 4000, 6000, 9000, SAMPLE_STATS.totalSales], // Sample growth data
        borderColor: SAMPLE_STATS.monthlyGrowth > 0 ? "rgb(34, 197, 94)" : "rgb(239, 68, 68)",
        backgroundColor: SAMPLE_STATS.monthlyGrowth > 0 ? "rgba(34, 197, 94, 0.5)" : "rgba(239, 68, 68, 0.5)",
        fill: true,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <motion.div 
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl font-bold text-gray-900">Farmer Dashboard</h1>
          <Button onClick={() => setView("addProduct")} className="flex items-center gap-2">
            <PlusCircle className="h-5 w-5" />
            Add New Product
          </Button>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div onClick={() => setView("allProducts")} className="cursor-pointer bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Products</p>
                <p className="text-2xl font-semibold text-gray-900">{products.length}</p>
              </div>
              <Package className="h-8 w-8 text-emerald-600" />
            </div>
          </div>

          <div onClick={() => setView("activeProducts")} className="cursor-pointer bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Listings</p>
                <p className="text-2xl font-semibold text-gray-900">{products.filter(p => p.status === "active").length}</p>
              </div>
              <Package className="h-8 w-8 text-emerald-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Sales</p>
                <p className="text-2xl font-semibold text-gray-900">₹{SAMPLE_STATS.totalSales}</p>
              </div>
              {/* <DollarSign className="h-8 w-8 text-emerald-600" /> */}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Growth</p>
                <p className="text-2xl font-semibold text-emerald-600">+{SAMPLE_STATS.monthlyGrowth}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-emerald-600" />
            </div>
          </div>
        </div>

        {/* View Logic */}
        {view === "addProduct" && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Product</h2>
            <input
              type="text"
              className="border p-2 w-full mb-2"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <input
              type="number"
              className="border p-2 w-full mb-2"
              placeholder="Price in ₹"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <Button onClick={handleAddProduct}>Add Product</Button>
          </div>
        )}

        {view === "allProducts" && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">All Products</h2>
            <ul>
              {products.map((product) => (
                <li key={product.id} className="border-b py-2">
                  {product.name} - ₹{product.price} ({product.status})
                </li>
              ))}
            </ul>
          </div>
        )}

        {view === "activeProducts" && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Products</h2>
            <ul>
              {products.filter(p => p.status === "active").map((product) => (
                <li key={product.id} className="border-b py-2">
                  {product.name} - ₹{product.price}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Growth Graph Section */}
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-sm mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Sales Growth</h2>
          <Line data={chartData} />
          <p className={`mt-4 text-lg font-bold ₹{SAMPLE_STATS.monthlyGrowth > 0 ? "text-green-600" : "text-red-600"}`}>
            {SAMPLE_STATS.monthlyGrowth > 0 ? `📈 Growth: +₹{SAMPLE_STATS.monthlyGrowth}%` : `📉 Decline: ₹{SAMPLE_STATS.monthlyGrowth}%`}
          </p>
        </motion.div>

        {/* Weather & Crop Suggestion Section */}
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-sm mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Weather & Crop Suggestion</h2>
          <div className="flex items-center gap-4">
            <MapPin className="h-8 w-8 text-blue-600" />
            <input
              type="text"
              placeholder="Enter your location"
              className="border p-2 w-full"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Button onClick={fetchWeather}>Check Weather</Button>
          </div>

          {weather && (
            <div className="bg-blue-100 p-4 rounded-lg mt-4">
              <div className="flex items-center gap-4">
                <CloudSun className="h-8 w-8 text-yellow-500" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">{weather.name}</h3>
                  <p className="text-gray-700">Temperature: {weather.main.temp}°C</p>
                  <p className="text-gray-700">Condition: {weather.weather[0].description}</p>
                </div>
              </div>
            </div>
          )}

          {suggestedCrop && (
            <div className="bg-green-100 p-4 rounded-lg mt-4 flex items-center gap-4">
              <Leaf className="h-8 w-8 text-green-700" />
              <p className="text-lg font-semibold text-green-800">
                Recommended Crop: {suggestedCrop}
              </p>
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
}
