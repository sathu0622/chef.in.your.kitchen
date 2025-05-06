import { motion } from 'framer-motion';
import { FaLeaf, FaFire, FaStar } from 'react-icons/fa';

const MenuItem = ({ name, description, price, isPopular, isVegetarian }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="border-b border-gray-200 pb-6 last:border-b-0 group transition-all duration-300"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-serif font-semibold text-[#1d3557] flex items-center gap-2">
            {name}
            {isPopular && (
              <span className="flex items-center bg-[#e63946]/10 text-[#e63946] text-xs font-medium px-2 py-1 rounded-full">
                <FaStar className="mr-1" /> Popular
              </span>
            )}
            {isVegetarian && (
              <span className="flex items-center bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                <FaLeaf className="mr-1" /> Vegetarian
              </span>
            )}
          </h3>
          <p className="text-gray-600 mt-1 text-sm group-hover:text-gray-800 transition-colors">
            {description}
          </p>
        </div>
        <p className="text-[#e63946] font-bold text-lg min-w-max">{price}</p>
      </div>
    </motion.div>
  );
};

const Menu = () => {
  const menuCategories = [
    {
      name: "Starters",
      items: [
        {
          name: "Truffle Arancini",
          description: "Crispy risotto balls with black truffle and mozzarella",
          price: "$14",
          isPopular: true
        },
        {
          name: "Burrata Salad",
          description: "Fresh burrata with heirloom tomatoes and basil",
          price: "$16"
        },
        {
          name: "Seared Scallops",
          description: "With cauliflower purée and truffle oil",
          price: "$18",
          isPopular: true
        }
      ]
    },
    {
      name: "Main Courses",
      items: [
        {
          name: "Filet Mignon",
          description: "8oz grass-fed beef with red wine reduction and roasted vegetables",
          price: "$38",
          isPopular: true
        },
        {
          name: "Pan-Seared Salmon",
          description: "With lemon beurre blanc and asparagus",
          price: "$32"
        },
        {
          name: "Mushroom Risotto",
          description: "Arborio rice with wild mushrooms and parmesan",
          price: "$26",
          isVegetarian: true
        },
        {
          name: "Duck Confit",
          description: "With cherry reduction and potato gratin",
          price: "$34"
        }
      ]
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Chocolate Soufflé",
          description: "With vanilla bean ice cream",
          price: "$12",
          isPopular: true
        },
        {
          name: "Crème Brûlée",
          description: "Classic vanilla with caramelized sugar top",
          price: "$10"
        },
        {
          name: "Seasonal Fruit Tart",
          description: "With crème pâtissière",
          price: "$11"
        }
      ]
    },
    {
      name: "Beverages",
      items: [
        {
          name: "Craft Cocktails",
          description: "Ask your server about our seasonal offerings",
          price: "$14"
        },
        {
          name: "Wine Selection",
          description: "Extensive list available",
          price: "$12-$25/glass"
        },
        {
          name: "Artisanal Coffee & Tea",
          description: "Locally roasted coffee and premium loose-leaf teas",
          price: "$5-$7"
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1d3557] mb-4">
            Culinary Creations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our seasonal menu crafted with passion and precision
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {menuCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-16 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1d3557]">
                  {category.name}
                </h2>
                <div className="ml-4 h-px bg-gradient-to-r from-[#1d3557] to-transparent flex-1"></div>
              </div>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <MenuItem 
                    key={itemIndex}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    isPopular={item.isPopular}
                    isVegetarian={item.isVegetarian}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#e0ecf3] p-8 rounded-xl max-w-5xl mx-auto shadow-sm border border-[#a8dadc]"
        >
          <h3 className="text-2xl font-serif font-semibold text-[#1d3557] mb-4 flex items-center">
            <FaFire className="text-[#e63946] mr-2" /> Special Requests
          </h3>
          <p className="text-gray-700 mb-3">
            We accommodate dietary restrictions and allergies whenever possible. Please inform your server 
            of any special requirements.
          </p>
          <p className="text-gray-700 text-sm">
            Our menu changes seasonally to feature the freshest ingredients. Some items may not be available 
            on the day of your visit.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default Menu;


// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";
// import { FaLeaf, FaFire, FaStar } from "react-icons/fa";

// const MenuItem = ({ name, description, price, isPopular, isVegetarian }) => {
//   return (
//     <motion.div 
//       whileHover={{ y: -5 }}
//       className="border-b border-gray-200 pb-6 last:border-b-0 group transition-all duration-300"
//     >
//       <div className="flex justify-between items-start gap-4">
//         <div className="flex-1">
//           <h3 className="text-xl font-serif font-semibold text-[#1d3557] flex items-center gap-2">
//             {name}
//             {isPopular && (
//               <span className="flex items-center bg-[#e63946]/10 text-[#e63946] text-xs font-medium px-2 py-1 rounded-full">
//                 <FaStar className="mr-1" /> Popular
//               </span>
//             )}
//             {isVegetarian && (
//               <span className="flex items-center bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
//                 <FaLeaf className="mr-1" /> Vegetarian
//               </span>
//             )}
//           </h3>
//           <p className="text-gray-600 mt-1 text-sm group-hover:text-gray-800 transition-colors">
//             {description}
//           </p>
//         </div>
//         <p className="text-[#e63946] font-bold text-lg min-w-max">{price}</p>
//       </div>
//     </motion.div>
//   );
// };

// const Menu = () => {
//   const [menuCategories, setMenuCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/menu");
//         setMenuCategories(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch menu:", err);
//         setLoading(false);
//       }
//     };
//     fetchMenu();
//   }, []);

//   return (
//     <section className="py-24 bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef]">
//       <div className="container mx-auto px-4 sm:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1d3557] mb-4">
//             Culinary Creations
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Our seasonal menu crafted with passion and precision
//           </p>
//         </motion.div>

//         <div className="max-w-5xl mx-auto">
//           {loading ? (
//             <p className="text-center text-gray-500">Loading menu...</p>
//           ) : (
//             menuCategories.map((category, index) => (
//               <motion.div 
//                 key={category._id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="mb-16 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className="flex items-center mb-6">
//                   <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1d3557]">
//                     {category.name}
//                   </h2>
//                   <div className="ml-4 h-px bg-gradient-to-r from-[#1d3557] to-transparent flex-1"></div>
//                 </div>
//                 <div className="space-y-6">
//                   {category.items.map((item, itemIndex) => (
//                     <MenuItem 
//                       key={itemIndex}
//                       {...item}
//                     />
//                   ))}
//                 </div>
//               </motion.div>
//             ))
//           )}
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           viewport={{ once: true }}
//           className="mt-16 bg-[#e0ecf3] p-8 rounded-xl max-w-5xl mx-auto shadow-sm border border-[#a8dadc]"
//         >
//           <h3 className="text-2xl font-serif font-semibold text-[#1d3557] mb-4 flex items-center">
//             <FaFire className="text-[#e63946] mr-2" /> Special Requests
//           </h3>
//           <p className="text-gray-700 mb-3">
//             We accommodate dietary restrictions and allergies whenever possible. Please inform your server 
//             of any special requirements.
//           </p>
//           <p className="text-gray-700 text-sm">
//             Our menu changes seasonally to feature the freshest ingredients. Some items may not be available 
//             on the day of your visit.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Menu;
