# Form With Regex

A simple yet powerful web application showcasing the practical applications of regular expressions (regex) for searching, validating, and transforming data. This project serves as a hands-on tool for learning regex and demonstrating its use in real-world scenarios.

## 🚀 Features

- **Email Search**: Extract email addresses from a given text.
- **CPF Validation**: Validate Brazilian CPFs, ensuring they follow the correct format and logic.
- **Date Format Replacement**: Convert dates from `DD/MM/YYYY` to `YYYY-MM-DD` format while checking their validity.
- **Password Validation**: Check password strength against complex criteria (uppercase, lowercase, numbers, special characters).
- **Toggle Password Visibility**: Show or hide password input for enhanced usability.

## 🛠️ Technologies Used

- **HTML**: Provides the structure of the web page.
- **CSS**: Ensures a clean and user-friendly interface.
- **JavaScript**: Implements regex operations, input validation, and data manipulation.

## 🔍 Regex Examples Used

1. **Email Search**:
   ```javascript
   const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
   ```
2. **CPF Validation**:
   - Ensures 11 numeric digits.
   - Validates verification digits using a calculation logic.
3. **Date Format Replacement**:
   ```javascript
   const dateRegex = /\b(\d{2})\/(\d{2})\/(\d{4})\b/g;
   ```
4. **Password Validation**:
   ```javascript
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
   ```

## 🌟 Usage Instructions

1. Clone the repository and open the project in your IDE.
2. Open the `index.html` file in a browser.
3. Test the features by inputting text, CPF, dates, or passwords into the provided form fields.
4. Observe the results dynamically displayed on the page.

## 🤝 Contribution Guidelines

Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request. Ensure your code is clean and well-documented.


