import React from 'react';
import { Header, MainSection, Card, SpecialDishesSection } from './components'; // Adjust the import path according to your project structure

function Page() {
  // Define your dishes data
  const dishes = [
    { name: "Dish 1", img: "dish1.jpg", description: "Description of Dish 1" },
    { name: "Dish 2", img: "dish2.jpg", description: "Description of Dish 2" },
    // Add more dish objects as needed
  ];

  return (
    <div>
      <Header />
      <MainSection />
      {/* Render Card component for each dish */}
      {dishes.map((dish, index) => (
        <Card key={index} dish={dish} />
      ))}
      <SpecialDishesSection dishes={dishes} />
    </div>
  );
}

export default Page;
