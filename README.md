# Logistics App

This project is a React-based web application for a logistics company. It includes features like displaying services, an about us page, a contact page, and a FAQ page.

## Project Structure

The project is structured as follows:

-   **`index.html`**: The main HTML file that serves as the entry point for the application. It contains the root `div` where the React app is mounted.
-   **`package.json`**:  Contains project metadata, dependencies, and scripts for development and building.
-   **`src/`**: This directory holds all the source code for the application.
    -   **`main.jsx`**: The entry point for the React application. It sets up the React root and renders the main `App` component.
    -   **`App.jsx`**: The main application component, responsible for setting up routing using `react-router-dom`, and rendering the main layout.
        -   It includes a `Header` and `Footer` component, along with a `Routes` component that handles different page paths.
    -   **`components/`**: Contains reusable UI components, currently:
        -   `Header.jsx`
        -   `Footer.jsx`
    -   **`pages/`**:  Contains page-level components for different sections of the website:
        -   `HomePage.jsx`
        -   `ServicesPage.jsx`
        -   `AboutUsPage.jsx`
        -   `ContactUsPage.jsx`
        -    `FAQPage.jsx`
    -   **`index.css`**: Contains global CSS styles and imports Tailwind CSS directives.
    -    **`tailwind.config.js`**: Contains the configurations for Tailwind CSS, including custom colors.

## Technologies Used

-   **React**:  A JavaScript library for building user interfaces.
-   **React Router**: Used for handling navigation and routing within the app.
-    **React Helmet**: Used for managing HTML head elements for better SEO.
-   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-   **Flowbite**: A UI library that provides pre-built components styled with Tailwind CSS.
-   **Vite**: A build tool that provides a fast development experience.
-   **Remixicon**: Icons are used from this library for visual components
-   **ESLint**: For Javascript code linting to catch errors and maintain quality

## Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/WebCodedLab/logistics-app.git
    ```
2.  **Navigate to the project directory**:
    ```bash
    cd logistics-app
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```

## Development

To start the development server:

```bash
npm run dev
```

This will launch the application in your browser, typically at `http://localhost:5173`.

## Build

To build the application for production:

```bash
npm run build
```

This will generate an optimized build in the `dist` folder.

## Available Scripts

-   `dev`: Starts the development server.
-   `build`: Builds the project for production.
-   `lint`: Runs ESLint to check for code issues.
-   `preview`: Runs a production-like server for previewing the built app.

## Further Development and Notes
-   **Component Structure**:  The application is divided into components, making it modular and maintainable.
-   **Tailwind CSS**: The project uses Tailwind CSS for styling. You can customize the appearance by modifying the `tailwind.config.js` file and using Tailwind's utility classes within the JSX.
-   **Routing**: The `App.jsx` file handles routing.  You can add more routes by adding more `<Route>` elements inside the `<Routes>` component.

## Potential Areas for Collaboration

-   **UI/UX Design:** The UI can be refined and enhanced to improve the user experience.
-   **Component Development:** More components may need to be created, both for general and page specific use cases
-   **Testing:** Implement testing strategies to ensure the application is bug free
-   **API Integration:** Connect the front-end with back-end services to fetch or post data.

## Dependencies
-   **`autoprefixer`**, **`postcss`**, **`tailwindcss`**: Used for styling the website with Tailwind CSS
-   **`flowbite-react`**: Used for prebuilt UI components that are styled with Tailwind CSS.
-   **`react-helmet`**: Used to manage HTML head elements for better SEO
-   **`react-router-dom`**: Used for routing to different page components
-   **`remixicon`**:  A large library of icons to add visual components

##  Development Dependencies
- **`@eslint/js`**, **`eslint`**, **`eslint-plugin-react`**, **`eslint-plugin-react-hooks`**, **`eslint-plugin-react-refresh`**, **`globals`**: Used for linting and checking code quality during development

---
Feel free to ask any questions and open issues as needed.