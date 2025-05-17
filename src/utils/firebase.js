// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getRemoteConfig, fetchAndActivate, getValue } from "firebase/remote-config";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB29riuuPdeS3B9-DdW3dlwwETp6ii5aHE",
  authDomain: "netflix-gpt-85139.firebaseapp.com",
  projectId: "netflix-gpt-85139",
  storageBucket: "netflix-gpt-85139.firebasestorage.app",
  messagingSenderId: "1053144912408",
  appId: "1:1053144912408:web:6593fd8f713aecbaeee96d",
  measurementId: "G-WJZ5HS3ZC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

// Initialize Remote Config with appropriate settings
const remoteConfig = getRemoteConfig(app);
// Set minimum fetch interval to enable frequent refreshes during development
remoteConfig.settings.minimumFetchIntervalMillis = process.env.NODE_ENV === 'development' ? 0 : 3600000; // 1 hour in production

// Fetch remote config values
export const fetchRemoteConfig = async () => {
  try {
    // Fetch and activate the fetched Remote Config
    await fetchAndActivate(remoteConfig);
    return true;
  } catch (error) {
    console.error("Error fetching remote config:", error);
    return false;
  }
};

// Get a value from Remote Config
export const getRemoteConfigValue = (key, defaultValue = null) => {
  try {
    const value = getValue(remoteConfig, key);
    return value.asString();
  } catch (error) {
    console.error(`Error getting remote config value for ${key}:`, error);
    return defaultValue;
  }
};