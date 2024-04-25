// Import PouchDB as an ES module
import PouchDB from 'https://cdn.skypack.dev/pouchdb-browser';

// Initialize PouchDB database
const db = new PouchDB('my_database');
console.log('Database initialized', db);

// Export the PouchDB database instance
export default db;
