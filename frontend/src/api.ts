import { User, Experience } from "./types/types";

const API_URL = import.meta.env.VITE_BACKEND_API_URL as string;
const API_KEY = import.meta.env.VITE_BACKEND_API_KEY as string;

const createHeaders = (): HeadersInit => {
  return {
    'Content-Type': 'application/json',
    'X-Frontend-Api-Key': API_KEY
  };
};

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${API_URL}/users`, {
          method: 'GET',
          headers: createHeaders()
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const fetchExperiences = async (): Promise<Experience[]> => {
  try {
    const response = await fetch(`${API_URL}/experiences`, {
          method: 'GET',
          headers: createHeaders()
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching experiences:', error);
    throw error;
  }
};
