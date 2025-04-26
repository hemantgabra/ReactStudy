import React, { useEffect, useState } from "react";
import axios from "axios";

function Contact() {
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [editingPostId, setEditingPostId] = useState(null);

  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  
  const fetchPosts = async () => {
    const res = await axios.get(API_URL);
    setPosts(res.data.slice(0, 5));
  };

  
  const handleSubmit = async () => {
    if (!newTitle.trim()) {
      alert("Title cannot be empty!");
      return;
    }

    if (editingPostId) {
      // Update
      const res = await axios.patch(`${API_URL}/${editingPostId}`, {
        id: editingPostId,
        title: newTitle,
        body: "Updated body",
        userId: 1,
      });

      setPosts(
        posts.map((post) => (post.id === editingPostId ? res.data : post))
      );
      setEditingPostId(null);
    } else {
      const res = await axios.post(API_URL, {
        title: newTitle,
        body: "This is a test body",
        userId: 1,
      });
      setPosts([res.data, ...posts]);
    }

    setNewTitle("");
  };

  
  const handleEdit = (post) => {
    setEditingPostId(post.id);
    setNewTitle(post.title);
  };

  
  const deletePost = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setPosts(posts.filter((p) => p.id !== id));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        CRUD with Axios & Dummy API
      </h2>

      <div className="flex items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter post title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSubmit}
          className={`${
            editingPostId ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
          } text-white px-4 py-2 rounded-md`}
        >
          {editingPostId ? "Update" : "Create"}
        </button>
      </div>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-4 bg-gray-100 rounded-md shadow flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="flex-1">
              <strong className="text-lg text-gray-700">{post.title}</strong>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(post)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => deletePost(post.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
