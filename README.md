<<<<<<< HEAD
# Draft.js Rich Text Editor

## Overview
This project is a rich text editor built with **Draft.js** and React. It supports text formatting, saving content to local storage, and reloading the saved content upon page refresh.

## Features
- **Headings**: Type `#` followed by a space to format a line as a heading.
- **Bold Text**: Type `*` followed by a space to apply bold formatting.
- **Red Text**: Type `**` followed by a space to apply a red text style.
- **Underlined Text**: Type `***` followed by a space to apply underlined text.
- **Save Functionality**: Save the content to local storage using the **Save** button. Saved content automatically reloads when the page is refreshed.

## Project Structure
```
src/
├── components/
│   └── EditorComponent.js  // Editor logic and UI
├── App.js                  // Main app component
├── index.js                // React app entry point
├── styles.css              // Styling for the editor

public/
└── index.html              // Main HTML template
```

## Getting Started

### Prerequisites
- **Node.js** and **npm/yarn** should be installed on your system.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url.git
   ```
2. Navigate to the project directory:
   ```bash
   cd draft-js-editor
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

### Running the App
Start the application in development mode:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser to access the editor.

## How to Use
1. Start typing in the editor.
2. Use these formatting shortcuts at the beginning of a line:
   - `#` + space → Heading
   - `*` + space → Bold text
   - `**` + space → Red text
   - `***` + space → Underlined text
3. Click the **Save** button to save your content to local storage.
4. Reload the page to see the saved content loaded back into the editor.

## Deployment
The project is deployed and available on **CodeSandbox**.  
Access it here: [Live Demo](https://codesandbox.io/p/sandbox/magical-sara-4dymv6?workspaceId=ws_FuoYR4Tr6CMp6bDrmgH2qD)

## Technologies Used
- **React.js**
- **Draft.js**
- HTML, CSS, JavaScript

## Author
**Vanshika Gupta**  
A passionate developer enthusiastic about building user-centric applications.  
Feel free to connect or provide feedback!

---

*Enjoy creating rich text content!*

=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 5f20d63 (Initial commit)
