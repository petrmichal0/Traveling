# Traveling

## Project Title and Description
Traveling is a user-friendly web application that helps users create and manage packing lists for their vacations. Users can easily add items to their lists, filter them, check them off as they are packed, remove items, and clear the entire list when needed.

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Quick Look
<img src="https://github.com/user-attachments/assets/478544d2-9be4-4121-af72-09f896c1cb7f" width="700"  alt="Traveling App Demo">

## Table of Content
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Demo (link)](#demo-link)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Third-Party Libraries](#third-party-libraries)
- [License](#license)

## Features
- Create and manage packing lists
- Filter items in the list
- Check off packed items
- Remove individual items
- Clear the entire list

## Installation

### Prerequisites
- Node.js (v12 or higher)
- npm (v6 or higher)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/petrmichal0/Traveling.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Traveling
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
To start the application, run the following command:
```bash
npm start
```

After starting, go to [http://localhost:3000](http://localhost:3000) in your web browser.

## Screenshots

<table>
  <tr>
    <th>Homepage</th>
    <th>Manage Details</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <img src="https://github.com/user-attachments/assets/2af0a439-f8aa-4890-bf83-0407d1a0d018" width="300" height="300" alt="Homepage">   
    </td>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <img src="https://github.com/user-attachments/assets/745a3558-32dd-400a-8c65-b5e7c01a12f4" width="300" height="300" alt="Destination Details">
    </td>
  </tr>

</table>

## Demo (link)

Check out the live demo of the application [here](https://travelinglist.netlify.app/).

## Project Structure

```css
Traveling/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Form.js
│   │   ├── Item.js
│   │   ├── Logo.js
│   │   ├── PackingList.js
│   │   ├── Stats.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── README.md
├── package-lock.json
└── package.json
```

## Technologies Used

[![React Badge](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)](#)

## Third-Party Libraries

* React Router

## License

This project is licensed under the MIT License - see the LICENSE file for details.

