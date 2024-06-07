import React from 'react';
import './TourPage.css';

const TourPage = () => {
  // Data structure containing information about famous places in Kerala
  const places = [
    {
      name: "Munnar Tea Estates",
      imageUrl: "https://tse2.mm.bing.net/th?id=OIP.d8-CM0c1x2dZFgQo8-D8zwHaFj&pid=Api&P=0&h=180",
      activities: ["Drive past lush tea estates", "Visit tea factories", "Enjoy nature walks"],
    },
    {
      name: "Dreamland Adventure Park",
      imageUrl: "https://tse2.mm.bing.net/th?id=OIP.5Hwn5LekjWJKOXQofn4cpAHaFj&pid=Api&P=0&h=180",
      activities: ["Enjoy thrilling rides", "Participate in adventure sports", "Family-friendly entertainment"],
    },
    {
      name: "Dreamland Adventure Park",
      imageUrl: "https://tse4.mm.bing.net/th?id=OIP.YYQYoXpuQukVoRqhvIm6TAHaFj&pid=Api&P=0&h=180",
      activities: ["Enjoy thrilling rides", "Participate in adventure sports", "Family-friendly entertainment"],
    },
    {
      name: "Dreamland Adventure Park",
      imageUrl: "https://tse1.mm.bing.net/th?id=OIP.GUKVoRCpJMoY5_D4y4IlLgHaFj&pid=Api&P=0&h=180",
      activities: ["Enjoy thrilling rides", "Participate in adventure sports", "Family-friendly entertainment"],
    },
    {
      name: "Dreamland Adventure Park",
      imageUrl: "https://tse1.mm.bing.net/th?id=OIP.GUKVoRCpJMoY5_D4y4IlLgHaFj&pid=Api&P=0&h=180",
      activities: ["Enjoy thrilling rides", "Participate in adventure sports", "Family-friendly entertainment"],
    },
  ];

  // Data structure containing information about day plans
  const dayPlans = [
    {
      day: 1,
      activities: ["Morning: Breakfast at hotel", "Afternoon: Visit Munnar Tea Estates", "Evening: Relax at hotel"]
    },
    {
      day: 2,
      activities: ["Morning: Explore Dreamland Adventure Park", "Afternoon: Lunch at local restaurant", "Evening: Boating on Periyar Lake"]
    },
    {
      day: 3,
      activities: ["Morning: Visit local market", "Afternoon: Visit Elephant Junction", "Evening: Dinner at traditional Kerala restaurant"]
    },
    {
      day: 4,
      activities: ["Morning: Explore Fort Kochi", "Afternoon: Visit Mattancherry Palace", "Evening: Enjoy Kathakali Dance Show"]
    },
    {
      day: 5,
      activities: ["Morning: Visit Athirappilly Waterfalls", "Afternoon: Jungle Safari in Thekkady", "Evening: Shopping at local market"]
    },
    {
      day: 6,
      activities: ["Morning: Houseboat journey in Alleppey", "Afternoon: Relax on houseboat", "Evening: Experience local cuisine on houseboat"]
    },
    {
      day: 7,
      activities: ["Morning: Visit Kovalam Beach", "Afternoon: Water sports at the beach", "Evening: Farewell dinner at beachside restaurant"]
    },
    {
      day: "Last",
      activities: ["Enjoy your memories!", "Thank you for visiting Kerala!"]
    }
  ];

  return (
    <div className="tour-page">
      <div className="images">
        {/* Render images for each famous place */}
        {places.map((place, index) => (
          <img key={index} src={place.imageUrl} alt={place.name} />
        ))}
      </div>
      <div className="tour-container">
        <div className="left-div">
          {/* Your left div content */}
        </div>
        <div className="right-div">
          <h1>Set out on a memorable trip to Kerala</h1>
          <p>From driving past the lush tea estates of Munnar to fun rides at Dreamland Adventure Park, boating on Periyar Lake in Thekkady and a fun Hop-On, Hop-Off Houseboat Tour in Alleppey, there is a lot you can do on this epic getaway.</p>
          <p>Enjoy tour manager assistance throughout your trip.</p>

          <h2>What To Expect</h2>
          <p>Beat the heat in Kochi with a cold glass of fresh coconut water. Enjoy great discounts on hotels and less crowds in the city. Enjoy solitude and the lush environs in Munnar amidst lesser crowds.</p>
          <button className="read-more-btn">Read More</button>

          <h2>Things You Will Love</h2>
          <p>Off-season discounts and less crowd in Cochin and The soothing lush green sceneries and the discounted hotel deals in Thekkady. You will also like Escaping the crowds and heavy off-season discounts.</p>
          <button className="read-more-btn">Read More</button>

          <div className="day-plans">
            <h2>Day Plans</h2>
            {/* Render DayPlan component for each day */}
            {dayPlans.map((plan, index) => (
              <DayPlan key={index} day={plan.day} activities={plan.activities} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const DayPlan = ({ day, activities }) => {
  return (
    <div className="day-plan">
      <h3>{day === "Last" ? "Thank You!" : `Day ${day}`}</h3>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
      {day !== "Last" && <button className="view-btn">View</button>}
      {/* Add a modal or link to detailed description */}
    </div>
  );
};

export default TourPage;
