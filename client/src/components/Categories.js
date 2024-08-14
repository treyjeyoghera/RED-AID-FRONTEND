import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Categories.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5); // Set initial visible categories to 5
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

  const handleShowMore = () => {
    setVisibleCount(visibleCount + 5); // Increase the visible count by 5 each time "Show More" is clicked
  };

  return (
    <div className="categories-container">
      <h2>Categories</h2>
      <div className="categories-grid">
        {categories.slice(0, visibleCount).map((category) => (
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
                <button onClick={() => handleUpdateCategory(editingCategory)}>Save</button>
                <button onClick={() => setEditingCategory(null)}>Cancel</button>
              </>
            ) : (
              <>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <button  className='Not'  onClick={() => handleDeleteCategory(category.id)}>Not Interested</button>
              </>
            )}
          </div>
        ))}
      </div>
      {visibleCount < categories.length && (
        <button className="view-more-button" onClick={handleShowMore}>
          Show More Categories
        </button>
      )}
    </div>
  );
};

export default Categories;
