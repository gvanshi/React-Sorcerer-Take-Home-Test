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

