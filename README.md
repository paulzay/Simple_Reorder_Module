## SRM

> Kefis is a simple store that deals in FMCG

## Project

The client desires a simple application that tracks inventory and makes automated reorders to their off-site warehouse when the stock level hits a predefined quantity. The warehouse attendant can see all reorders coming in and dispatch them to the store. Processed reorders are marked as such. Both the retailer and the warehouse can see pending and processed reorders.

## Built with

- Node.js
- React
- React-DOM
- React-Create-App
- Redux
- npm
- CSS
- ES6

## Getting Started

- Clone the project to your local machine;
- `cd` into the project directory;
- Run `npm install` to install the necessary modules;
- Run `npm start`, the page will automatically load on [localhost:3000](localhost:3000).
- RUn `npm test` to run the tests.

## Applicant Section

### Hosted App Link

    Paste your hosted application url here: [Live](https://compassionate-blackwell-37ebbc.netlify.app/)

### Comments

    - The project was full-stack as opposed to being frontend focused, which is what my application was for..
    - I used redux to seed mock data for products and reorders.
    - There are 2 tabs; for the store and for the warehouse.
    - The store has products that have a button for selling items(not functional at the moment)
    - If the number of items of a product goes below the reorder_level a function for reordering is called.
    - The ware house has 2 sections for processed and unprocessed orders from the store
    - The reorders are colored green for processed and red for pending.
    - Functionality for automatically ordering more stock and dispatching stock yet to be completed.
