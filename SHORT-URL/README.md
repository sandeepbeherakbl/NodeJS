# Modern URL Shortener Application

A full-featured URL shortening service built with Node.js, Express, and MongoDB, featuring a modern UI with glass-morphism effects.

## 🚀 Features

- Shorten long URLs into compact, shareable links
- Modern, responsive UI with glass-morphism effects
- Real-time click tracking and analytics
- Copy-to-clipboard functionality
- URL visit history
- Toast notifications for user feedback
- Mobile-friendly design

## 🛠️ Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **View Engine**: EJS
- **Frontend**: HTML5, CSS3, JavaScript
- **Authentication**: Cookie-based auth
- **Other Tools**: Cookie-parser, Middleware for authentication

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn package manager

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SHORT-URL
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure MongoDB**
   - Start your local MongoDB server or use MongoDB Atlas
   - Update the connection string in `connect.js` if needed

4. **Start the application**
   ```bash
   npm start
   ```
   The server will start on port 8001 (http://localhost:8001)

## 📁 Project Structure

```
SHORT-URL/
├── connect.js            # MongoDB connection setup
├── index.js             # Main application entry point
├── middlewares/         # Authentication middlewares
├── models/             
│   └── url.js          # URL schema and model
├── routes/
│   ├── staticRouter.js # Static page routes
│   ├── url.js         # URL shortening routes
│   └── user.js        # User authentication routes
└── views/
    └── home.ejs       # Main UI template
```

## 🔄 Application Flow

1. **URL Shortening Process**
   - User enters a long URL in the input field
   - Application generates a unique shortID
   - URL is stored in MongoDB with shortID and visit history
   - User receives the shortened URL

2. **URL Redirection**
   - When accessing a short URL
   - Application looks up the shortID in database
   - Updates visit history
   - Redirects to original URL

3. **Analytics**
   - Each visit is recorded with timestamp
   - Visit count is displayed in the history table
   - Real-time updates when URLs are accessed

## 🛣️ API Routes

### URL Operations
```
POST /url
- Purpose: Generate new short URL
- Body: { url: "long-url-here" }
- Returns: Shortened URL

GET /:shortID
- Purpose: Redirect to original URL
- Params: shortID
- Action: Redirects to original URL

GET /url/analytics/:shortID
- Purpose: Get URL analytics
- Params: shortID
- Returns: Click statistics
```

### User Operations
```
POST /user/signup
- Create new user account

POST /user/login
- Authenticate user
```

## 🔒 Authentication

The application uses cookie-based authentication with the following middleware:
- `restrictToLoggedInUserOnly`: Protects URL operations
- `checkAuth`: Checks authentication status

## 💅 UI Features

1. **Main Interface**
   - Clean, modern design with glass-morphism effects
   - Responsive layout for all device sizes
   - Toggle between URL shortening and history views

2. **URL Shortening**
   - Input field with validation
   - Copy to clipboard functionality
   - Visit button for quick access
   - Reset button for new operations

3. **History View**
   - Tabular display of shortened URLs
   - Click statistics
   - Action buttons for each URL
   - Truncated display of long URLs

## 🔧 Error Handling

- Input validation for URLs
- Error messages for invalid operations
- Fallback UI for missing data
- Toast notifications for user feedback

## 🚀 Performance Considerations

- Efficient database queries
- Optimized URL lookup
- Minimalistic frontend assets
- Responsive image handling

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details
