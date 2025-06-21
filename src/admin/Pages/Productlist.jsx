import React, { useState } from "react";

function Productlist() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = () => {
    if (!name || (!imageFile && editId === null)) {
      alert("Please enter a name and select an image.");
      return;
    }

    if (editId !== null) {
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === editId
            ? {
                ...cat,
                name,
                image: imageFile ? URL.createObjectURL(imageFile) : cat.image,
              }
            : cat
        )
      );
    } else {
      const newCategory = {
        id: Date.now(),
        name,
        image: URL.createObjectURL(imageFile),
      };
      setCategories([...categories, newCategory]);
    }

    // Reset
    setName("");
    setImageFile(null);
    setEditId(null);
  };

  const handleEdit = (cat) => {
    setName(cat.name);
    setEditId(cat.id);
  };

  const handleDelete = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return (
    <div className="flex flex-col items-center my-10">
      {/* Category Cards */}
      <div className="w-[33rem] grid grid-cols-2 gap-4 bg-white p-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="border p-3 bg-white rounded shadow-md relative"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="h-28 w-full object-cover rounded"
            />
            <h3 className="font-semibold mt-2">{cat.name}</h3>
            <button
              onClick={() => handleEdit(cat)}
              className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(cat.id)}
              className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Form */}
      <div className="bg-white p-4 mt-8 rounded-lg shadow-md w-[33rem]">
        <h2 className="text-xl font-semibold mb-4">Add / Edit Category</h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="border p-1"
          />
          <input
            type="text"
            placeholder="Category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-1 rounded-md"
          />
          <button
            onClick={handleAddOrUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {editId !== null ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productlist;
