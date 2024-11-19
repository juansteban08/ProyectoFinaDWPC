import { useState } from "react";
import "./Menu.css";
import MenuDetails from "./MenuDetails.jsx";

const menuData = {
  ensaladas: {
    title: "Ensaladas",
    description: "Disfruta de una variedad de ensaladas frescas y saludables.",
    items: ["Ensalada César", "Ensalada Griega", "Ensalada Detox"],
  },
  smoothies: {
    title: "Smoothies",
    description: "Smoothies llenos de sabor y nutrientes.",
    items: ["Smoothie Tropical", "Smoothie de Fresa", "Smoothie Verde"],
  },
  quinoa: {
    title: "Quinoa",
    description: "Platos de quinoa perfectos para cualquier ocasión.",
    items: ["Quinoa con Verduras", "Quinoa Mediterránea", "Quinoa Oriental"],
  },
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCardClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCloseDetails = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="menu">
      <h2>Nuestro Menú</h2>
      <div className="menu-items">
        {Object.keys(menuData).map((key) => (
          <div
            key={key}
            className="menu-card"
            onClick={() => handleCardClick(key)}
          >
            <h3>{menuData[key].title}</h3>
            <p>{menuData[key].description}</p>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <MenuDetails
          data={menuData[selectedCategory]}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
};

export default Menu;
