// Import PouchDB as an ES module
import PouchDB from 'https://cdn.skypack.dev/pouchdb-browser';

const db = new PouchDB('my_database');
console.log('Database initialized', db);

export default db;
