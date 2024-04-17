// Import PouchDB as an ES module
import PouchDB from 'https://cdn.skypack.dev/pouchdb-browser';

// Initialize the database
const db = new PouchDB('my_database');
console.log('Database initialized', db);

// Export the database instance for use in other modules
export default db;
