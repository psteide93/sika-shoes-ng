# Sika Shoes: Routing and Services

### Deployed Link:
https://rococo-gingersnap-6f347a.netlify.app

![Shoe store](sika-shoes.png)

Add routing and a data service to the included Angular app. The routes:

* `/` should redirect to `/home`
* `/home` should render the `home-page` component
* `/about` should render the `about-page` component
* `/products` should render the `products-page` component
* `/products/:id` should render the relevant `product-page` component

Your service should handle the logic for fetching and storage for the products. The data is available in the `src/products.json` file and fetched from the url `products.json`.

Furthermore:

* The URL should update on navigation.
* The product routes should dynamically render the selected product.
* Navigating directly to a nested URL should render the appropriate view.
* The active page should be highlighted in the navigation bar (hint: give the relevant anchor tag a class of `active`)

## Rubric

* [ ] - URL updates on navigation, including individual products
* [ ] - No hard-coded data
* [ ] - Loading a nested URL directly renders the page
* [ ] - The current view is underlined in the navigation bar
* [ ] - Data logic is kept in a service
