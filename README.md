# Netflix GPT

# Impoertant Note (TMDB is Banned in India) : Go to your Browser Settings then Search DNS enable it the in the customize choose Google(Public DNS)

## Templates

### Template | Should You Use It? | Why

- react-client | perfect match for a dynamic SPA like Netflix-GPT | Fully browser-based React app. Great for user interactions, API integration, routing, etc.

- react-server | Not needed unless you're doing Server-Side Rendering (SSR) | Overkill for SPA unless you're optimizing SEO or page speed on first load

- react-static | Not ideal for dynamic UIs or APIs | Best for static blogs or landing pages — not suited for dynamic React apps like GPT/chat/video UIs

- vanilla | Only if you're doing everything from scratch (no React) | Not recommended here since you're using React and need SPA capabilities

- Create React App
- Configured TailwindCSS 
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign out 
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscibed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Regiter TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- usePopularMovies Custom hook
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language Feature in our App)
- Get Open AI Api Key 
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Resused Movie List component to make movie suggestion container
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive

# Features
- Login/Sign Up
    - Sign In /Sign up Form
    - redirect to Browse Page
- Browse (after authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title & Description
        - MovieSuggestions
            - MovieLists * N 
- NetflixGPT
    - Search Bar
    - Movie Suggestions



# Project Setup
- Before starting the project please add .env file and add TMDB and OPENAI KEY into it.
