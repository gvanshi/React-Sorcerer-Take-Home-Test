# Draft.js Rich Text Editor

## Overview
This is a simple rich text editor built using **Draft.js** in React. It allows users to create formatted text and save it to local storage. The saved content is reloaded on page refresh.

## Features
- **Headings**: Type `#` followed by a space to create a heading.
- **Bold Text**: Type `*` followed by a space to toggle bold text.
- **Red Text**: Type `**` followed by a space to apply a red style.
- **Underline Text**: Type `***` followed by a space to underline text.
- **Save Functionality**: Save the content in the editor to local storage using the **Save** button. Saved content is reloaded automatically when the page is refreshed.

## Project Structure
src/ ├── components/ │ └── EditorComponent.js // Contains the main editor logic and UI ├── App.js // Main entry point of the app ├── index.js // React app bootstrapping ├── styles.css // Styling for the editor public/ ├── index.html // Main HTML template

bash
Copy code

## Getting Started

### Prerequisites
- Node.js and npm/yarn installed on your system.

### Installation
1. Clone the repository or download the project files.
   ```bash
   git clone https://github.com/your-repo-url.git
Navigate to the project directory.
bash
Copy code
cd draft-js-editor
Install the dependencies.
bash
Copy code
npm install
Running the App
To start the app in development mode:

bash
Copy code
npm start
Open http://localhost:3000 in your browser to see the app.

Deployment
The project is live and deployed on CodeSandbox. You can access it here: Live Demo

How to Use
Start typing in the editor.
Use the following special characters at the beginning of a line for formatting:
# + space → Heading
* + space → Bold text
** + space → Red text
*** + space → Underlined text
Click the Save button to store your content. Reload the page to see the saved content.
Technologies Used
React.js
Draft.js
HTML, CSS, JavaScript
Author
Vanshika Gupta

