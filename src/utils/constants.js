import { getRemoteConfigValue, fetchRemoteConfig } from './firebase';

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PHOTO_URL =
  "https://www.marstonstore.cl/cdn/shop/products/2023-01-0521.04.523009358344809793281_10366804028.jpg?v=1721522962&width=1445";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

// Function to get API keys - supports both development and production environments
export const getApiKey = async (keyName) => {
  // For development - use local environment variables
  if (process.env.NODE_ENV === 'development' && process.env.AUTHORIZATION_KEY) {
    return keyName === 'TMDB_API_KEY' 
      ? process.env.AUTHORIZATION_KEY 
      : process.env.GEMINI_KEY;
  }
  
  // For production - use Remote Config
  try {
    // Ensure Remote Config has been fetched
    await fetchRemoteConfig();
    
    // Get the key from Remote Config
    const key = getRemoteConfigValue(keyName);
    
    if (!key) {
      console.error(`API key not found in Remote Config: ${keyName}`);
      throw new Error(`Missing API key: ${keyName}`);
    }
    
    return key;
  } catch (error) {
    console.error(`Error getting API key ${keyName}:`, error);
    throw error;
  }
};

// Function to get API options for TMDB
export const getApiOptions = async () => {
  const apiKey = await getApiKey('TMDB_API_KEY');
  return {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };
};