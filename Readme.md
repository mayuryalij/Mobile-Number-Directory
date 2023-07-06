
# Mobile Number Directory Project

This project is a mobile number directory that allows users to add and view contact details. It is built using Node.js and Express framework.

## Features

- Add contact details with name, address, and phone number.
- Validate input fields before adding the data.
- View all contacts in the directory.

## Prerequisites

Before running the project, ensure you have the following:

- Node.js installed on your machine
- Required dependencies installed (specified in `package.json`)

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd mobile-number-directory
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   Create a `.env` file in the project root directory and provide the necessary configuration, if any.

5. Run the application:

   ```bash
   npm start
   ```

   The server will start running on `http://localhost:8000`.

6. Open your web browser and access the application at [http://localhost:8000](http://localhost:8000).

## Project Structure

The project structure is as follows:

- `index.html`: HTML template for the user interface.
- `server.js`: Express server setup and route handlers.
- `test.json`: JSON file for storing contact details.

## Usage

- Home Page (`/`): Displays the form to add contact details. The form validates the input fields before submitting the data.
- Add Contact (`/add`): Handles the POST request to add contact details. Validates the input and appends the data to the `test.json` file.
- View All Contacts (`/all`): Displays all the contact details stored in the `test.json` file.

Feel free to customize the project and add additional features as per your requirements.

