import { useState } from "react";
import axios from "axios";
import { FaPlus, FaTrash } from "react-icons/fa";

const AddMenu = () => {
  const [categoryName, setCategoryName] = useState("");
  const [items, setItems] = useState([
    { name: "", description: "", price: "", isPopular: false, isVegetarian: false },
  ]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const addNewItem = () => {
    setItems([
      ...items,
      { name: "", description: "", price: "", isPopular: false, isVegetarian: false },
    ]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/menu", {
        name: categoryName,
        items,
      });
      setMessage("Menu category added successfully!");
      setCategoryName("");
      setItems([
        { name: "", description: "", price: "", isPopular: false, isVegetarian: false },
      ]);
    } catch (err) {
      setMessage("Error adding menu. Please try again.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-serif font-bold text-[#1d3557] mb-6">
        Add New Menu Category
      </h1>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md space-y-6">
        {message && <p className="text-center text-green-600 font-medium">{message}</p>}

        <div>
          <label className="block font-semibold text-[#1d3557] mb-2">Category Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>

        <div className="space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg bg-gray-50 relative"
            >
              <h3 className="font-semibold text-[#1d3557] mb-2">Item {index + 1}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 rounded-lg px-3 py-2"
                  value={item.name}
                  onChange={(e) => handleItemChange(index, "name", e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Price"
                  className="border border-gray-300 rounded-lg px-3 py-2"
                  value={item.price}
                  onChange={(e) => handleItemChange(index, "price", e.target.value)}
                  required
                />
                <textarea
                  placeholder="Description"
                  className="col-span-2 border border-gray-300 rounded-lg px-3 py-2"
                  value={item.description}
                  onChange={(e) => handleItemChange(index, "description", e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center gap-4 mt-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={item.isPopular}
                    onChange={(e) => handleItemChange(index, "isPopular", e.target.checked)}
                  />
                  Popular
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={item.isVegetarian}
                    onChange={(e) => handleItemChange(index, "isVegetarian", e.target.checked)}
                  />
                  Vegetarian
                </label>
              </div>
              {items.length > 1 && (
                <button
                  type="button"
                  className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                  onClick={() => removeItem(index)}
                >
                  <FaTrash />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={addNewItem}
            className="flex items-center gap-2 px-4 py-2 bg-[#1d3557] text-white rounded-lg hover:bg-[#16324a] transition"
          >
            <FaPlus /> Add Item
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#e63946] text-white font-semibold rounded-lg hover:bg-[#d62839] transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMenu;
