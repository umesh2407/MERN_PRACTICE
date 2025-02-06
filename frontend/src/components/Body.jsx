import React from "react";
import ResturantCard from "./ResturantCard";

const Body = () => {
  const resList = [
    {
      id: "1",
      name: "The Gourmet Kitchen",
      address: "123 Food Street, Flavor Town",
      city: "New York",
      rating: 4.5,
      cuisine: ["Italian", "Continental"],
      image_url: "https://example.com/images/gourmet-kitchen.jpg",
      price_range: "$$",
      is_open: true,
      opening_hours: "10:00 AM - 10:00 PM",
      contact_number: "+1 123-456-7890",
      reviews: 152,
      featured_dishes: ["Pasta Alfredo", "Grilled Salmon"],
      delivery_available: true,
    },
    {
      id: "2",
      name: "Spice Symphony",
      address: "456 Curry Lane, Spice City",
      city: "Los Angeles",
      rating: 4.2,
      cuisine: ["Indian", "Asian Fusion"],
      image_url: "https://example.com/images/spice-symphony.jpg",
      price_range: "$",
      is_open: false,
      opening_hours: "11:00 AM - 11:00 PM",
      contact_number: "+1 987-654-3210",
      reviews: 98,
      featured_dishes: ["Butter Chicken", "Paneer Tikka"],
      delivery_available: false,
    },
    {
      id: "3",
      name: "Sushi Paradise",
      address: "789 Ocean Avenue, Sushi Town",
      city: "San Francisco",
      rating: 4.8,
      cuisine: ["Japanese", "Seafood"],
      image_url: "https://example.com/images/sushi-paradise.jpg",
      price_range: "$$$",
      is_open: true,
      opening_hours: "12:00 PM - 9:00 PM",
      contact_number: "+1 555-123-4567",
      reviews: 234,
      featured_dishes: ["Dragon Roll", "Salmon Sashimi"],
      delivery_available: true,
    },
    {
      id: "4",
      name: "Burger Hub",
      address: "101 Patty Road, Grill Town",
      city: "Chicago",
      rating: 4.0,
      cuisine: ["American", "Fast Food"],
      image_url: "https://example.com/images/burger-hub.jpg",
      price_range: "$$",
      is_open: true,
      opening_hours: "9:00 AM - 11:00 PM",
      contact_number: "+1 321-654-0987",
      reviews: 145,
      featured_dishes: ["Cheeseburger", "Veggie Burger"],
      delivery_available: true,
    },
    {
      id: "5",
      name: "Green Garden",
      address: "234 Leaf Street, Vegan City",
      city: "Seattle",
      rating: 4.3,
      cuisine: ["Vegan", "Organic"],
      image_url: "https://example.com/images/green-garden.jpg",
      price_range: "$$",
      is_open: false,
      opening_hours: "8:00 AM - 8:00 PM",
      contact_number: "+1 222-333-4444",
      reviews: 120,
      featured_dishes: ["Vegan Bowl", "Quinoa Salad"],
      delivery_available: false,
    },
    {
      id: "6",
      name: "Taco Fiesta",
      address: "567 Salsa Avenue, Mexi Town",
      city: "Austin",
      rating: 4.7,
      cuisine: ["Mexican", "Street Food"],
      image_url: "https://example.com/images/taco-fiesta.jpg",
      price_range: "$",
      is_open: true,
      opening_hours: "10:00 AM - 2:00 AM",
      contact_number: "+1 456-789-1234",
      reviews: 310,
      featured_dishes: ["Tacos Al Pastor", "Burritos"],
      delivery_available: true,
    },
    {
      id: "7",
      name: "Pizza Palace",
      address: "890 Cheese Lane, Slice Town",
      city: "Boston",
      rating: 4.1,
      cuisine: ["Italian", "Pizza"],
      image_url: "https://example.com/images/pizza-palace.jpg",
      price_range: "$$",
      is_open: true,
      opening_hours: "11:00 AM - 11:00 PM",
      contact_number: "+1 789-654-3210",
      reviews: 205,
      featured_dishes: ["Margherita", "Pepperoni Pizza"],
      delivery_available: true,
    },
    {
      id: "8",
      name: "Steak House",
      address: "345 Grill Road, Meat City",
      city: "Houston",
      rating: 4.9,
      cuisine: ["Steakhouse", "BBQ"],
      image_url: "https://example.com/images/steak-house.jpg",
      price_range: "$$$",
      is_open: false,
      opening_hours: "5:00 PM - 11:00 PM",
      contact_number: "+1 111-222-3333",
      reviews: 180,
      featured_dishes: ["Ribeye Steak", "BBQ Ribs"],
      delivery_available: false,
    },
    {
      id: "9",
      name: "The Dessert Bar",
      address: "678 Sweet Lane, Dessert Town",
      city: "Miami",
      rating: 4.6,
      cuisine: ["Desserts", "Bakery"],
      image_url: "https://example.com/images/dessert-bar.jpg",
      price_range: "$",
      is_open: true,
      opening_hours: "10:00 AM - 9:00 PM",
      contact_number: "+1 333-444-5555",
      reviews: 275,
      featured_dishes: ["Chocolate Lava Cake", "Macarons"],
      delivery_available: true,
    },
    {
      id: "10",
      name: "Urban Deli",
      address: "912 City Square, Urban Center",
      city: "Denver",
      rating: 4.0,
      cuisine: ["Deli", "Healthy"],
      image_url: "https://example.com/images/urban-deli.jpg",
      price_range: "$$",
      is_open: true,
      opening_hours: "7:00 AM - 8:00 PM",
      contact_number: "+1 444-555-6666",
      reviews: 140,
      featured_dishes: ["Turkey Club", "Avocado Toast"],
      delivery_available: true,
    },
    {
      id: "11",
      name: "Mediterranean Bliss",
      address: "135 Olive Street, Med City",
      city: "San Diego",
      rating: 4.4,
      cuisine: ["Mediterranean", "Greek"],
      image_url: "https://example.com/images/mediterranean-bliss.jpg",
      price_range: "$$$",
      is_open: false,
      opening_hours: "11:00 AM - 10:00 PM",
      contact_number: "+1 555-666-7777",
      reviews: 190,
      featured_dishes: ["Gyros", "Falafel Wrap"],
      delivery_available: false,
    },
    {
      id: "12",
      name: "Café Mocha",
      address: "246 Brew Lane, Coffee Town",
      city: "Portland",
      rating: 4.3,
      cuisine: ["Cafe", "Bakery"],
      image_url: "https://example.com/images/cafe-mocha.jpg",
      price_range: "$",
      is_open: true,
      opening_hours: "6:00 AM - 8:00 PM",
      contact_number: "+1 666-777-8888",
      reviews: 230,
      featured_dishes: ["Cappuccino", "Blueberry Muffin"],
      delivery_available: true,
    },
    {
      id: "13",
      name: "The Thai Orchid",
      address: "357 Spice Road, Thai Town",
      city: "Orlando",
      rating: 4.5,
      cuisine: ["Thai", "Asian"],
      image_url: "https://example.com/images/thai-orchid.jpg",
      price_range: "$$",
      is_open: true,
      opening_hours: "11:30 AM - 9:30 PM",
      contact_number: "+1 777-888-9999",
      reviews: 150,
      featured_dishes: ["Pad Thai", "Green Curry"],
      delivery_available: true,
    },
    {
      id: "14",
      name: "French Delights",
      address: "468 Paris Street, Little France",
      city: "Philadelphia",
      rating: 4.7,
      cuisine: ["French", "Bakery"],
      image_url: "https://example.com/images/french-delights.jpg",
      price_range: "$$$",
      is_open: false,
      opening_hours: "9:00 AM - 6:00 PM",
      contact_number: "+1 888-999-0000",
      reviews: 180,
      featured_dishes: ["Croissants", "Crème Brûlée"],
      delivery_available: false,
    },
    {
      id: "15",
      name: "Korean Bites",
      address: "579 Seoul Lane, K-Town",
      city: "Las Vegas",
      rating: 4.6,
      cuisine: ["Korean", "BBQ"],
      image_url: "https://example.com/images/korean-bites.jpg",
      price_range: "$$",
      is_open: true,
      opening_hours: "12:00 PM - 10:00 PM",
      contact_number: "+1 999-000-1111",
      reviews: 210,
      featured_dishes: ["Bibimbap", "Korean Fried Chicken"],
      delivery_available: true,
    },
  ];

  return (
    <div>
      <div>
        <input
          className="border border-black rounded-lg p-1 px-8 bg-slate-900 text-white m-5 mt-5 mb-5 items-center"
          placeholder="Search"
        ></input>
      </div>
      <div className="grid grid-cols-5 items-center ">
        {resList.map((rest) => (<ResturantCard key={rest.id} resObj={rest} />))}
      </div>
    </div>
  );
};

export default Body;
