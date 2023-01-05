# Oompa Loompas Web App

A web application to manage the Oompa Loompa's crew of Willy Wonka's chocolate factory.

The application consists of 2 views (list of workers and a detailed page of selected worker).

The list of workers has infinite scroll and a search input to filter workers by first and last name and the profession.

The list is cached for 24 hours with RTK query.

The character view displays the image, name, and description text (which might include html)

## Tools and environment

The project was created in CRA in plain JavaScript and CSS in Visual Studio Code and folders for components, pages (views), services to configure API with @reduxjs/toolkit. The routes are configured with React Router.

For the code formatter I configured a Prettier plugin in VScode.

## Run the project

To run the project in the development mode, run [`npm install`] and [`npm start`] in the terminal within the project folder.

To build the app for production to the `build` folder.\, run [`npm run build`]

# Styling

I used CSS to style the page. For the naming, I follow BEM (Blocks, Elements and Modifiers) methodology. I also added the styles for the mobile view. The styling follows the figma design but some minor details are missing.

I also use rem units for fonts and media queries to improve the accessibility.

## Testing

- Cross-browser testing

Tested in the Chrome browser and for the responsive view.

- Unit testing

I have not implemented the tests but the tests should be added to the components in order to improve the code quality, to ease maintenance of the codebase, and for the faster development. I would use React Testing Library in this app.
