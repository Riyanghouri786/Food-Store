"use client";
import { useState, useEffect } from "react";

export default function Services() {
  const [isHydrated, setIsHydrated] = useState(false);
  const categories = ["Pizza", "Burgers", "Pasta", "Salads", "Desserts"];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);

  // This effect only runs once when the component mounts
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Skip rendering until hydration is complete
  if (!isHydrated) return null;

  const foodItems = {
    Pizza: [
      {
        id: 1,
        name: "Pepperoni Pizza",
        price: 12.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4wo2epNEDYfOwyLfohc6Ry_z_K8wYIg8qwA&s",
        rating: 4.5,
      },
      {
        id: 2,
        name: "Margherita Pizza",
        price: 10.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMAUhmEis51pRGhC_T8cZdCjLArX6a516Sug&s",
        rating: 4.7,
      },
      {
        id: 3,
        name: "BBQ Chicken Pizza",
        price: 13.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaTnD0_B1mZiOEc38C62n5oimw7Ii1nlsAaw&s",
        rating: 4.6,
      },
      {
        id: 4,
        name: "Hawaiian Pizza",
        price: 11.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqakTwkvCPcZxzPqM6ZmXnVdbFwcPz6uFHDg&s",
        rating: 4.3,
      },
      {
        id: 5,
        name: "Vegetarian Pizza",
        price: 10.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOkjtZKOVD0w71iba4yCXH-86bnzS5oDHuGg&s",
        rating: 4.5,
      },
      {
        id: 6,
        name: "Meat Lover's Pizza",
        price: 14.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhdgytl-kJhJeNpDtElgNjtxXBPCqF5APlQ&s",
        rating: 4.8,
      },
      {
        id: 7,
        name: "Buffalo Chicken Pizza",
        price: 13.99,
        image:
          "https://copykat.com/wp-content/uploads/2024/06/Dominos-Buffalo-Chicken-Pizza-Pin-2.jpg",
        rating: 4.4,
      },
      {
        id: 8,
        name: "Pesto Pizza",
        price: 11.99,
        image:
          "https://cdn.loveandlemons.com/wp-content/uploads/2022/07/pesto-pizza-1.jpg",
        rating: 4.6,
      },
      {
        id: 9,
        name: "Four Cheese Pizza",
        price: 12.99,
        image:
          "https://uk.ooni.com/cdn/shop/articles/FourCheese_Resized.jpg?crop=center&height=800&v=1598453116&width=800",
        rating: 4.9,
      },
      {
        id: 10,
        name: "White Pizza",
        price: 11.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkbVor1aoUa5Ey4c6dK2onPNiLuue23C2CSA&s",
        rating: 4.7,
      },
      {
        id: 11,
        name: "Sicilian Pizza",
        price: 14.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OaCRjGtw977KkHMJJfY0YMhzjD6v8UQoyA&s",
        rating: 4.8,
      },
      {
        id: 12,
        name: "Caprese Pizza",
        price: 11.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtButZUvJVD1CTjtCK58u50nJ81mvrI33SQ&s",
        rating: 4.6,
      },
      {
        id: 13,
        name: "Meatball Pizza",
        price: 12.99,
        image:
          "https://lisasdinnertimedish.com/wp-content/uploads/2014/09/Meatball-Pizza-24-480x480.jpg",
        rating: 4.5,
      },
      {
        id: 14,
        name: "Taco Pizza",
        price: 13.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdEhnTDPIVFbid8pUKZ61_Bd5jvcLlf6kCMg&s",
        rating: 4.4,
      },
      {
        id: 15,
        name: "Spinach and Feta Pizza",
        price: 11.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXNPsH6rt9K7zwXOYZBVwPKEssMz9trlO2w&s",
        rating: 4.6,
      },
      {
        id: 16,
        name: "Philly Cheese Steak Pizza",
        price: 13.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTm8UaVMSvSlPzcsZLyAxE9bfu2rFpcRCiGw&s",
        rating: 4.7,
      },
      {
        id: 17,
        name: "Alfredo Chicken Pizza",
        price: 12.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwSSJ67veJlBgJ07XruvCLTxlQ3xpPhZBng&s",
        rating: 4.5,
      },
      {
        id: 18,
        name: "Truffle Mushroom Pizza",
        price: 14.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJgCoTkjlGdjviyT4sZ2E2E9zeOmyTcwuGQ&s",
        rating: 4.8,
      },
      {
        id: 19,
        name: "Clam Pizza",
        price: 15.99,
        image:
          "https://allwaysdelicious.com/wp-content/uploads/2021/05/white-clam-pizza-la-horiz-3.jpg",
        rating: 4.4,
      },
      {
        id: 20,
        name: "Clam Pizza",
        price: 15.99,
        image:
          "https://allwaysdelicious.com/wp-content/uploads/2021/05/white-clam-pizza-la-horiz-3.jpg",
        rating: 4.4,
      },
    ],

    Burgers: [
      {
        id: 3,
        name: "Cheeseburger",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
        rating: 4.4,
      },
      {
        id: 4,
        name: "Veggie Burger",
        price: 7.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQVrO9FKarrAGq08vByBi6iEz-wLoEUi7c_g&s",
        rating: 4.6,
      },
      {
        id: 5,
        name: "Bacon Burger",
        price: 9.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6isLhEmC0563sFX3Y-9kJbzDf6PfhPCE7lg&s",
        rating: 4.7,
      },
      {
        id: 6,
        name: "Mushroom Swiss Burger",
        price: 10.49,
        image:
          "https://sweetsavoryandsteph.com/wp-content/uploads/2020/09/IMG_2461-scaled.jpg",
        rating: 4.6,
      },
      {
        id: 7,
        name: "BBQ Burger",
        price: 9.49,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLdFmf55mVpX-P3G_V6dS9curApERp4R45w&s",
        rating: 4.5,
      },
      {
        id: 8,
        name: "Spicy Jalapeño Burger",
        price: 10.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRufvcC7zpKOKecp-VKOcF4NU6SLbG7tHLonQ&s",
        rating: 4.4,
      },
      {
        id: 9,
        name: "Blue Cheese Burger",
        price: 11.49,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhP4c2exuSrBhkRNGJkhs8QmCJ9ioWR72Wg&s",
        rating: 4.8,
      },
      {
        id: 10,
        name: "Double Burger",
        price: 12.99,
        image:
          "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-tall-FS-38.webp",
        rating: 4.5,
      },
      {
        id: 11,
        name: "Turkey Burger",
        price: 9.99,
        image:
          "https://hips.hearstapps.com/hmg-prod/images/turkey-burger-index-64873e8770b34.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
        rating: 4.6,
      },
      {
        id: 12,
        name: "Fish Burger",
        price: 10.49,
        image:
          "https://www.kitchensanctuary.com/wp-content/uploads/2014/01/Crispy-Fish-Burger-with-Shoestring-Fries-Recipe-square-FS.jpg",
        rating: 4.4,
      },
      {
        id: 13,
        name: "Hawaiian Burger",
        price: 10.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS912EPSMLQzKomOVGkRChJsC4JRe1eOjq0og&s",
        rating: 4.6,
      },
    ],
    Pasta: [
      {
        id: 1,
        name: "Spaghetti Carbonara",
        price: 12.99,
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg?quality=90&resize=440,400",
        rating: 4.6,
      },
      {
        id: 2,
        name: "Fettuccine Alfredo",
        price: 11.99,
        image:
          "https://assets.bonappetit.com/photos/57e2c3599f19b4610e6b79f6/1:1/w_3260,h_3260,c_limit/fettuccine-alfredo.jpg",
        rating: 4.7,
      },
      {
        id: 3,
        name: "Penne Arrabbiata",
        price: 10.49,
        image:
          "https://tastesbetterfromscratch.com/wp-content/uploads/2020/03/Penne-Arrabbiata-1-2-500x500.jpg",
        rating: 4.5,
      },
      {
        id: 4,
        name: "Lasagna",
        price: 13.49,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdvTxeDfrVXcv9SwPx3gtLqam3MbgXjHsTng&s",
        rating: 4.8,
      },
      {
        id: 5,
        name: "Pesto Pasta",
        price: 11.49,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZc_5akz38TdUNmI6Pvpq-vqr3fKpt4p1-w&s",
        rating: 4.6,
      },
      {
        id: 6,
        name: "Baked Ziti",
        price: 12.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJ2jtv6ftKLDq-Oq8F5sscJNL_jE-1d-xCg&s",
        rating: 4.5,
      },
      {
        id: 7,
        name: "Linguine with Clam Sauce",
        price: 14.49,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXni28NZ8Wlhj5yEfxnuCJd2NtuNznTORlQ&s",
        rating: 4.7,
      },
      {
        id: 8,
        name: "Macaroni and Cheese",
        price: 10.99,
        image:
          "https://www.allrecipes.com/thmb/e8uotDI18ieXNBY0KpmtGKbxMRM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/238691-Simple-Macaroni-And-Cheese-mfs_008-4x3-6ed91ba87a1344558aacc0f9ef0f4b41.jpg",
        rating: 4.4,
      },
      {
        id: 9,
        name: "Ravioli",
        price: 13.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRH78iyKbe5aB0yBj2rTyIF9DFN4BxtBJyGQ&s",
        rating: 4.6,
      },
      {
        id: 10,
        name: "Penne Vodka",
        price: 12.49,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28NZD1W3cXqldktGc9FLa1ma0imAEN-Zyvw&s",
        rating: 4.5,
      },
      {
        id: 11,
        name: "Penne Vodka",
        price: 12.49,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28NZD1W3cXqldktGc9FLa1ma0imAEN-Zyvw&s",
        rating: 4.5,
      },
    ],
    Salads: [
      {
        id: 1,
        name: "Caesar Salad",
        price: 9.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5z2qMsPeOYqa5MJ_epJ075j9vTmUqeCl5Rg&s",
        rating: 4.5,
      },
      {
        id: 2,
        name: "Greek Salad",
        price: 8.99,
        image:
          "https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
        rating: 4.6,
      },
      {
        id: 3,
        name: "Caprese Salad",
        price: 10.49,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwMD4GYPs8ewStXoWKzPJQNs2dUewZQryIGw&s",
        rating: 4.7,
      },
      {
        id: 4,
        name: "Garden Salad",
        price: 7.99,
        image:
          "https://natashaskitchen.com/wp-content/uploads/2023/02/House-Garden-Salad-SQ.jpg",
        rating: 4.4,
      },
      {
        id: 5,
        name: "Spinach Salad",
        price: 9.49,
        image:
          "https://cdn.loveandlemons.com/wp-content/uploads/2023/11/spinach-salad.jpg",
        rating: 4.6,
      },
      {
        id: 6,
        name: "Fruit Salad",
        price: 8.49,
        image:
          "https://images.themodernproper.com/billowy-turkey/production/posts/2022/FruitSalad_Shot4_20.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1654019861&s=abb0af9baa0039bf1e91942aa34af247",
        rating: 4.5,
      },
      {
        id: 7,
        name: "Cobb Salad",
        price: 11.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-y78P_uNE-U9W8lrI_nOjnrTXPjiC-JwhQ&s",
        rating: 4.8,
      },
      {
        id: 8,
        name: "Quinoa Salad",
        price: 10.99,
        image:
          "https://cdn.loveandlemons.com/wp-content/uploads/2020/08/quinoa-salad.jpg",
        rating: 4.7,
      },
      {
        id: 9,
        name: "Pasta Salad",
        price: 9.99,
        image:
          "https://www.allrecipes.com/thmb/LUZ2ZXjuWFO-6c_dVuV2y_TUhUQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14385-pasta-salad-mfs-62-2cbb356b049740e7832e4bbb899881de.jpg",
        rating: 4.5,
      },
      {
        id: 10,
        name: "Asian Sesame Salad",
        price: 10.49,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarxss1uQB-1LPWlls7gB9degnQZ1DSW_5hw&s",
        rating: 4.6,
      },
      {
        id: 10,
        name: "Asian Sesame Salad",
        price: 10.49,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarxss1uQB-1LPWlls7gB9degnQZ1DSW_5hw&s",
        rating: 4.6,
      },
    ],
    Desserts: [
      {
        id: 1,
        name: "Chocolate Cake",
        price: 4.99,
        image:
          "https://scientificallysweet.com/wp-content/uploads/2020/09/IMG_4117-feature.jpg",
        rating: 4.8,
      },
      {
        id: 2,
        name: "Tiramisu",
        price: 5.49,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwKZtoPfrp-Le01UzH_OxJXccfRP3cZIeRg&s",
        rating: 4.7,
      },
      {
        id: 3,
        name: "Cheesecake",
        price: 6.99,
        image:
          "https://cakesbymk.com/wp-content/uploads/2023/11/Template-Size-for-Blog-Photos-24.jpg",
        rating: 4.9,
      },
      {
        id: 4,
        name: "Apple Pie",
        price: 4.49,
        image: "https://www.recipetineats.com/tachyon/2022/11/Apple-Pie_8.jpg",
        rating: 4.6,
      },
      {
        id: 5,
        name: "Brownies",
        price: 3.99,
        image:
          "https://gimmethatflavor.com/wp-content/uploads/2023/08/Sprinkle-Brownies-41.jpg",
        rating: 4.8,
      },
    ],
  };

  const filteredItems = (foodItems[activeCategory] || []).filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((cartItem) => cartItem.id !== itemId));
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-600 md:text-4xl">
          Our Food Menu
        </h2>
        <p className="mt-2 mb-10 text-center text-gray-600">
          Explore our delicious food categories and featured dishes!
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            className="w-full max-w-md p-2 border border-gray-300 rounded-lg"
            placeholder="Search food items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Food Categories */}
        <div className="flex justify-center mb-8 space-x-2 sm:space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-white text-purple-600"
              } shadow-md hover:bg-purple-500`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Food Items */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden transition duration-300 transform bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-48 sm:h-56 md:h-64"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-purple-600 sm:text-2xl">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500">
                      {"★".repeat(Math.round(item.rating))}
                    </span>
                    <span className="ml-2 text-gray-600">({item.rating})</span>
                  </div>
                  <button
                    className="px-3 py-1 mt-4 text-white transition-colors duration-300 bg-purple-600 rounded-full sm:px-4 sm:py-2 hover:bg-purple-500"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No items found in this category.
            </p>
          )}
        </div>

        {/* Cart Section */}
        <div className="mt-12">
          <h3 className="mb-4 text-2xl font-bold text-center text-purple-600 sm:text-3xl">
            Your Cart
          </h3>
          {cart.length > 0 ? (
            <div className="p-4 bg-white rounded-lg shadow-lg sm:p-6">
              <ul>
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between mb-4"
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-purple-600 sm:text-xl">
                        {item.name}
                      </h4>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-gray-600">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-4 text-lg font-semibold">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <button
                className="px-3 py-1 mt-4 text-white transition-colors duration-300 bg-green-600 rounded-full sm:px-4 sm:py-2 hover:bg-green-500"
                onClick={() =>
                  alert("Proceeding to checkout please wait . . . . ")
                }
              >
                Checkout
              </button>
            </div>
          ) : (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          )}
        </div>
      </div>
    </section>
  );
}
