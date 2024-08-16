import React from "react";
import "./SuccessStories.css";

const App = () => {
  const stories = [
    {
      id: 1,
      title: "Title 1",
      subtext: "Subtext",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsor6hYKoA8-priKXGpZE5a3RRLCX7astztA&s"
    },
    {
      id: 2,
      title: "Title 2",
      subtext: "Subtext",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoHFyPa1-e2XX5CW-Qfuu019ZSggo0liHnzT0EOB9Jm9gRErT7hhJDvebNC8I3AIt9H0&usqp=CAU"
    },
    {
      id: 3,
      title: "Title 3",
      subtext: "Subtext",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34kfwt-GraHtsrNRKwNeHtT-T_n7mjzH5Xw&s"
    },
    {
      id: 4,
      title: "Title 4",
      subtext: "Subtext",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUVSciQuhktvNAXrhBMs8Ljy5yrU2MqD5Bg&s"
    },
    {
      id: 5,
      title: "Title 5",
      subtext: "Subtext",
      image: "https://www.shutterstock.com/image-photo/elementary-school-kids-having-fun-260nw-667950202.jpg"
    },
    {
      id: 6,
      title: "Title 6",
      subtext: "Subtext",
      image: "https://www.shutterstock.com/image-photo/happy-kids-260nw-288151562.jpg"
    }
  ];

  return (
    <div className="container">
      <section className="success-stories">
        <div className="main-story">
          <h2>By you It's happened</h2>
          <p>We funded and helped needy students who lacked education and basic needs...</p>
        </div>
        {stories.map(story => (
          <div key={story.id} className="story">
            <img src={story.image} alt={story.title} />
            <div className="story-title">
              <h3>{story.title}</h3>
              <p>{story.subtext}</p>
              <a href="#" className="know-more">Know more →</a>
            </div>
          </div>
        ))}
      </section>
      <section className="subscribe-section">
        <h3>Get updates on success stories</h3>
        {/* <p>Get directly in your email</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <input type="submit" value="Subscribe" />
        </form> */}
      </section>
    </div>
  );
};

export default App;