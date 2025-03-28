CRUD App Development Report

Overview:
I developed a CRUD (Create, Read, Update, Delete) app using Express.js for the backend and React.js for the frontend. The app allows users to manage projects, storing data in an API-based backend. It is deployed on Vercel.

Development Steps:
1. **Setup:** Installed Node.js, created an Express server, and set up a React frontend.
2. **Backend:** Built API routes to handle CRUD operations and stored project data in an in-memory array.
3. **Frontend:** Designed UI with React, handled API calls using fetch, and updated project state dynamically.
4. **Deployment:** Hosted backend and frontend on Vercel for public accessibility.

Challenges Faced:
- **Local Storage vs API Sync:** Initially, the frontend used local storage instead of fetching data from the backend. Fixed by updating fetch requests.
- **State Management:** Ensuring project data updates correctly after add/delete operations.
- **Backend Persistence:** Since the backend stored data in-memory, it reset on every restart. Need to implement a database for long-term storage.
- **Deployment Issues:** Encountered CORS errors, resolved by adding middleware in Express.

Conclusion:
This project improved my understanding of full-stack development, API handling, and frontend-backend integration. Future improvements include database integration for persistent storage and better error handling.

