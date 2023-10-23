# CrudCo Url Shortener


## Requirements

Users can submit a long URL.
URLs are saved in a database.
Unique IDs are generated for each URL.
The short url is available via a list when a user logs in

## Tech Stack

- PostgreSQL - Database
- Djangao + Django Rest Framework + Simple JWT - Backend
- React - Frontend

## Workflow

## Frontend
- User submits URL
- Url is shortend (How? What Library)
- Long and short URL are saved with User ID associated
- User gts list of URl titles with links to short version

## UI / Frontend
- Require title, and url
- optional: short url(limited characters), generated automatically if not provided.

## Backend
- Short version is sent to the API
 - Api takes ID of short version to find long version
 - Site is redirected to the long Url after clicking the short URL link

## Data Models

## Tables 
-Users
- Id -> Primary Key(auto generated)
- Username 
- Password 
- Token
-Urls
-Id -> Primary Key (auto generated)
- Title 
- Long URL's 
- Short Url's 
- Url ID - Foreign Key

## Relationship

-Users (many) -> Urls (one)

