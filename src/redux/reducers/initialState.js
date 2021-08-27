const initialState = {
  // reorder_level: 20,
  reorders: [
    {
    id: Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1),
    name: "Rice",
    quantity: 100,
    processed: false,
  },
  {
    id: Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1),
    name: "Cooking Oil",
    imageURL: "#",
    quantity: 100,
    price: 20,
    reorder_level: 20,
    processed: true,
  },
  {
    id: Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1),
    name: "Maize FLour",
    imageURL: "#",
    quantity: 100,
    price: 20,
    reorder_level: 20,
    processed: false,
  },
  {
    id: Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1),
    name: "Wheat FLour",
    imageURL: "#",
    quantity: 100,
    price: 20,
    reorder_level: 20,
    processed: true,
  },
  {
    id: Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1),
    name: "Sugar",
    imageURL: "#",
    quantity: 100,
    price: 20,
    reorder_level: 20,
    processed: true,
  },
  ],
  products: [
  {
    id: 1,
    name: "Rice",
    imageURL: "#",
    quantity: 100,
    price: 20,
    reorder_level: 20,
  },
  {
    id: 2,
    name: "Cooking Oil",
    imageURL: "#",
    quantity: 60,
    price: 20,
    reorder_level: 20,
  },
  {
    id: 3,
    name: "Maize FLour",
    imageURL: "#",
    quantity: 40,
    price: 20,
    reorder_level: 20,
  },
  {
    id: 4,
    name: "Wheat FLour",
    imageURL: "#",
    quantity: 40,
    price: 20,
    reorder_level: 20,
  },
  {
    id: 5,
    name: "Sugar",
    imageURL: "#",
    quantity: 40,
    price: 20,
    reorder_level: 20,
  },
],
};
export default initialState;