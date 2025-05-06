import { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const ManageMenus = () => {
  const [menus, setMenus] = useState([]);
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMenus = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/menu");
      setMenus(res.data);
    } catch (err) {
      console.error("Failed to load menus", err);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  const toggleExpand = (id) => {
    setExpandedCategoryId(expandedCategoryId === id ? null : id);
  };

  const handleDeleteCategory = async (id) => {
    if (!window.confirm("Are you sure to delete this category?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/menu/${id}`);
      fetchMenus();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleDeleteItem = async (categoryId, itemId) => {
    try {
      await axios.delete(`http://localhost:5000/api/menu/${categoryId}/item/${itemId}`);
      fetchMenus();
    } catch (err) {
      console.error("Delete item failed", err);
    }
  };

  const handleEditStart = (categoryId, item = null) => {
    setEditing({
      categoryId,
      item: item || null,
      newName: item?.name || "",
      newPrice: item?.price || "",
      newDesc: item?.description || "",
    });
  };

  const handleEditSubmit = async () => {
    setLoading(true);
    try {
      const { categoryId, item, newName, newPrice, newDesc } = editing;
      if (!item) {
        await axios.put(`http://localhost:5000/api/menu/${categoryId}`, { name: newName });
      } else {
        await axios.put(`http://localhost:5000/api/menu/${categoryId}/item/${item._id}`, {
          name: newName,
          description: newDesc,
          price: newPrice,
        });
      }
      setEditing(null);
      fetchMenus();
    } catch (err) {
      console.error("Edit failed", err);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-[#1d3557] mb-8 font-serif">Manage Menus</h1>

      {menus.map((menu) => (
        <div
          key={menu._id}
          className="bg-white p-5 mb-6 rounded-xl shadow-md border border-gray-200"
        >
          <div className="flex justify-between items-center mb-4">
            {editing?.categoryId === menu._id && !editing.item ? (
              <input
                className="text-xl font-semibold border rounded px-2 py-1 w-1/2"
                value={editing.newName}
                onChange={(e) => setEditing({ ...editing, newName: e.target.value })}
              />
            ) : (
              <h2 className="text-xl font-semibold text-[#1d3557]">{menu.name}</h2>
            )}

            <div className="flex gap-3">
              {editing?.categoryId === menu._id && !editing.item ? (
                <>
                  <button
                    onClick={handleEditSubmit}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                    disabled={loading}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditing(null)}
                    className="bg-gray-400 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEditStart(menu._id)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(menu._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </>
              )}
              <button
                onClick={() => toggleExpand(menu._id)}
                className="ml-3 text-sm text-[#1d3557] underline"
              >
                {expandedCategoryId === menu._id ? "Collapse" : "Expand"}
              </button>
            </div>
          </div>

          {expandedCategoryId === menu._id && (
            <div className="space-y-4 mt-4">
              {menu.items.map((item) => (
                <div
                  key={item._id}
                  className="border-t pt-4 flex flex-col md:flex-row md:items-center justify-between"
                >
                  {editing?.item?._id === item._id ? (
                    <div className="w-full space-y-2">
                      <input
                        className="w-full border px-3 py-1 rounded"
                        value={editing.newName}
                        onChange={(e) =>
                          setEditing({ ...editing, newName: e.target.value })
                        }
                      />
                      <input
                        className="w-full border px-3 py-1 rounded"
                        value={editing.newPrice}
                        onChange={(e) =>
                          setEditing({ ...editing, newPrice: e.target.value })
                        }
                      />
                      <textarea
                        className="w-full border px-3 py-1 rounded"
                        value={editing.newDesc}
                        onChange={(e) =>
                          setEditing({ ...editing, newDesc: e.target.value })
                        }
                      />
                      <div className="flex gap-3 mt-2">
                        <button
                          onClick={handleEditSubmit}
                          className="bg-green-600 text-white px-3 py-1 rounded"
                          disabled={loading}
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditing(null)}
                          className="bg-gray-400 text-white px-3 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#1d3557]">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <p className="text-sm text-gray-700 font-semibold">${item.price}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-2 md:mt-0">
                        <button
                          onClick={() => handleEditStart(menu._id, item)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteItem(menu._id, item._id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ManageMenus;
