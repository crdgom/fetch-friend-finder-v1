// * UserServices.js

// * Name: UserServices
// * Description: Service for API calls to https://frontend-take-home-service.fetch.com
// * Since: Version 1.0.0
// * Author Name: Carlos Moctezuma ( @crdgom )
// * Author Email: crdgom[at]gmail[dot]com

// * Import modules

import axios from 'axios'

// * Creation of the main API service
// * The api call needs to be made with credentials to be able to get the cookies from the server
// * Fetch API uses HTTP-ONLY cookies to validate the user session

const APIService = axios.create({
  baseURL: 'https://frontend-take-home-service.fetch.com',
  withCredentials: true
})

// * Configuration of the several endpoints

// * Login endpoint
// * Method: POST
// * Endpoint: /auth/login
// * Description: Endpoint to login the user when we provide name and email, and the server will return a cookie with the session

export const login = (name, email) =>
  APIService.post('/auth/login', { name, email })

// * Logout endpoint
// * Method: POST
// * Endpoint: /auth/logout
// * Description: Endpoint to logout the user when we provide the cookie with the session

export const logout = () => APIService.post('/auth/logout')
