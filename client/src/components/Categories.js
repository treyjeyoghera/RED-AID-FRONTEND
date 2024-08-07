import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Categories.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const displayedCategories = showAll ? categories : categories.slice(0, 6);

  const handleCreateCategory = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/categories', newCategory);
      setCategories([...categories, response.data]);
      setNewCategory({ name: '', description: '' });
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  const handleUpdateCategory = async (category) => {
    try {
      await axios.put(`http://127.0.0.1:5000/categories/${category.id}`, category);
      setCategories(categories.map(cat => (cat.id === category.id ? category : cat)));
      setEditingCategory(null);
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/categories/${id}`);
      setCategories(categories.filter(category => category.id !== id));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div className="categories-container">
      <h2>Categories</h2>
      <div className="categories-grid">
        {displayedCategories.map((category) => (
          <div key={category.id} className="category-card">
            {editingCategory?.id === category.id ? (
              <>
                <input
                  type="text"
                  value={editingCategory.name}
                  onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                />
                <textarea
                  value={editingCategory.description}
                  onChange={(e) => setEditingCategory({ ...editingCategory, description: e.target.value })}
                />
                <button className="save-button" onClick={() => handleUpdateCategory(editingCategory)}>Save</button>
                <button className="cancel-button" onClick={() => setEditingCategory(null)}>Cancel</button>
              </>
            ) : (
              <>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <div className="card-buttons">
                  <button className="edit-button" onClick={() => setEditingCategory(category)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDeleteCategory(category.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      {categories.length > 6 && (
        <button className="view-more-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'View Less' : 'View More Categories'}
        </button>
      )}
      <div className="new-category-form">
        <h3>Add New Category</h3>
        <input
          type="text"
          placeholder="Name"
          value={newCategory.name}
          onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newCategory.description}
          onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
        />
        <button className="add-button" onClick={handleCreateCategory}>Add Category</button>
      </div>
    </div>
  );
};

export default Categories;
