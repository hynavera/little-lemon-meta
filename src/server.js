import { createServer, } from "miragejs"

createServer({
  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/dishes", () => {
      return {
        dishes: [
          {name: 'Greek Salad', price: '12.99', description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
            type: "1",
            image: "https://cdn.pixabay.com/photo/2017/06/22/14/20/salad-2430919_960_720.jpg"
          },
          {name: 'Bruschetta', price: '7.99', description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
            type: "1",
            image: 'https://cdn.pixabay.com/photo/2020/10/01/22/39/gourmet-5619887_1280.jpg'
          },
          {name: 'Lemon Dessert', price: '5.99', description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
            type: "3",
            image: "https://images.unsplash.com/photo-1595438280062-bab772735ecb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVtb24lMjBwaWV8ZW58MHx8MHx8fDI%3D"
          },
          {name: 'Grilled Fish', price: '13.05', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            type: "2",
            image: "https://images.unsplash.com/photo-1615044088186-a2342db7b272?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JpbGxlZCUyMGZpc2h8ZW58MHx8MHx8fDI%3D"
          },
          {name: 'Pasta', price: '10.99', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            type: "1",
            image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzdGF8ZW58MHx8MHx8fDI%3D"
          },
          {name: 'Roast Almonds', price: '5.99', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            type: "3",
            image: "https://images.unsplash.com/photo-1579293675810-e0d86727e7e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Um9hc3QlMjBBbG1vbmRzfGVufDB8fDB8fHwy"
          },
          {name: 'Mussels', price: '5.99', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            type: "2",
            image: "https://images.unsplash.com/photo-1589563340504-3d0eb8ee3697?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE11c3NlbHN8ZW58MHx8MHx8fDI%3D"
          },
          {name: 'Steaks', price: '5.99', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            type: "2",
            image: "https://images.unsplash.com/photo-1504973960431-1c467e159aa4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RlYWt8ZW58MHx8MHx8fDI%3D"
          },
        ],
      }
    });
    
  },
})