import React from 'react';
import './Article.css';

const BlogList = () => {
  const blogs = [
    {
      title: "How Azar become doctor",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      imageUrl: "https://www.shutterstock.com/image-photo/african-boy-text-book-studio-260nw-166569221.jpg"
    },
    {
      title: "Azar is fine now",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2wtttLi8F4dlMKgWKoDY-eOXeb3sZRQs7g&s"
    },
    {
      title: "Donate Azar",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-agVwiAGo9pte1guGozlGudeWY6ckVCL0Q&s"
    }
  ];

  return (
    <div className="blog-list">
      <div className="blog-list-header">
        <span className="blog-list-category">BLOGS</span>
        <h2 className="blog-list-title">Look our latest articles</h2>
      </div>
      <div className="blog-list-cards">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.imageUrl} alt={blog.title} className="blog-card-image" />
            <div className="blog-card-content">
              <span className="blog-card-category">Education</span>
              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-card-description">{blog.description}</p>
              <a href="#" className="blog-card-link">
                Know more <span className="arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
