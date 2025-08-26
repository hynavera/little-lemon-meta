import { createServer, Model} from "miragejs"

createServer({
  models: {
    dishes: Model,
  },

  seeds(server) {
    server.create("dish",
      {name: 'Bruschetta', price: '17.05', description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
        type: "1",
        image: 'https://cdn.pixabay.com/photo/2020/10/01/22/39/gourmet-5619887_1280.jpg'
      , id: "bruschetta",
      include: ["Garden Fresh", "Double Tomato Bruschetta", "Sun Dried Tomato"]},
    );
    server.create("dish",
      {name: 'Forestiere', price: '15.05', description: 'Classic French cuisine, the filling is made of mushrooms, pancetta and Emmenthal cheese, with a little cream and béchamel to make it smoother.',
        type: "4",
        image: "https://images.unsplash.com/photo-1565087170449-fa23854a6100?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      , id: "forestiere",
      include: ["Galette Bretonne", "Normandy Crepes", "Mexicaine"]},
    );
    server.create("dish",
      {name: 'Framboisine', price: '18.05', description: 'This is such a simple dessert using raspberry fool in a crepe with a scoop of vanilla ice cream, raspberry jam, whipped cream, and raspberry coulis.',
        type: "4",
        image: "https://images.unsplash.com/photo-1582995570162-9dee25247fda?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      , id: "framboisine",
      include: ["Chocolate", "Nuttella", "Creme de Marrons"]},
    );
    server.create("dish",
      {name: 'Greek Salad', price: '12.99', description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
        type: "1",
        image: "https://cdn.pixabay.com/photo/2017/06/22/14/20/salad-2430919_960_720.jpg"
      , id: "greek-salad",
      include: ["Greek Vegetarian", "Mediterranean Greek Salad", "Traditional Salad"]
      },);
    server.create("dish",
      {name: 'Grilled Fish', price: '23.05', description: 'Mix up your summertime dinner rotation with one of these easy recipes for grilled fish. No matter what you’re in the mood for.',
        type: "2",
        image: "https://images.unsplash.com/photo-1615044088186-a2342db7b272?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JpbGxlZCUyMGZpc2h8ZW58MHx8MHx8fDI%3D"
      , id: "grilled-fish",
      include: ["Ginger-Lime Swordfish", "Salmon With Lemon and Thyme", "Firecracker Salmon"]},
    );
    server.create("dish",
      {name: 'La Bergere', price: '20.99', description: 'Savory crêpes are made with buckwheat, a normal recipe includes using goat milk cheese, salad, honey, nuts, apples and fruit.',
        type: "4",
        image: "https://plus.unsplash.com/premium_photo-1673018258979-db6f6e2134b4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      , id: "bergere",
      include: ["Campagnarde", "Complete", "Jambon Gruyere"]},
    );
    server.create("dish",
      {name: 'Lemon Cake', price: '12.99', description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        type: "3",
        image: "https://images.unsplash.com/photo-1595438280062-bab772735ecb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVtb24lMjBwaWV8ZW58MHx8MHx8fDI%3D"
      , id: "lemon-dessert",
      include: ["Grandma's Meringue Pie", "Lemon-Buttermilk Pound Cake", "Greek Lemon Cake"]},
    );
    server.create("dish",
      {name: 'Mussels', price: '15.99', description: 'Mussels have it all sustainable, stuffed full of minerals and protein, and they can be very affordable. And totally delicious.',
        type: "2",
        image: "https://images.unsplash.com/photo-1589563340504-3d0eb8ee3697?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE11c3NlbHN8ZW58MHx8MHx8fDI%3D"
      , id: "mussels",
      include: ["Mussels in Light Broth", "Bouillabaisse", "Seafood risotto"]},
    );
    server.create("dish",
      {name: 'Pasta', price: '18.99', description: 'Made with flour, eggs, and water though the egg is omitted in many pasta types, and other ingredients such as rice flour or legumes are occasionally used.',
        type: "1",
        image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzdGF8ZW58MHx8MHx8fDI%3D"
      , id: "pasta",
      include: ["Angel Hair Pasta", "Bucatini Pasta", "Lasagna & Macaroni"]},
    );
    server.create("dish",
      {name: 'Roast Almonds', price: '12.99', description: 'Roasting in the oven, or in a skillet. It’s an easy way to bring out their natural flavor while adding a little extra crunch in the process.',
        type: "3",
        image: "https://images.unsplash.com/photo-1579293675810-e0d86727e7e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Um9hc3QlMjBBbG1vbmRzfGVufDB8fDB8fHwy"
      , id: "roast-almonds",
      include: ["Smoked Almonds", "Honey-Roasted Almonds", "Cinnamon-Roasted Almonds"]},
    );
    server.create("dish",
      {name: 'Steaks', price: '25.99', description: 'A steak is a thick cut of meat sliced across the muscle fibers, sometimes including a bone. It is normally grilled or fried.',
        type: "2",
        image: "https://images.unsplash.com/photo-1504973960431-1c467e159aa4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RlYWt8ZW58MHx8MHx8fDI%3D"
      , id: "steaks",
      include: ["Filet Mignon", "Santa Maria Steak", "Butcher's Steak"]},
    );
  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/dishes", (schema, request) => {
      return schema.dishes.all()
    })

    this.get("/dishes/:id", (schema, request) => {
      const id = request.params.id
      return schema.dishes.find(id)
    })

  },
})