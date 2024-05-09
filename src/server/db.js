import PouchDB from 'pouchdb';

import bcrypt from 'bcryptjs'; 


const db = new PouchDB('my_database');
console.log('Database initialized', db);

export default db;


// this is taken from the lecture slides for pouchdb
// Create a user using pouchdb 
// CRUD POST
export async function createUser(email, password) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    try {
        const result = await db.put({
            _id: email,
            password: hashedPassword,
            type: 'user',
            bucket: []
        });
        return result;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;  // Rethrow to handle it in server.js
    }
}

// Authenticate a user using bcrypt 
export async function authenticateUser(email, password) {
    try {
        const user = await db.get(email);
        const isMatch = await bcrypt.compare(password, user.password);
        return isMatch ? user : null;
    } catch (error) {
        console.error('Authentication failed:', error);
        return null;
    }
}

// export async function addToBucketList(username, item) {
//     const userDoc = await db.get(username);
//     userDoc.bucketList.push(item);
//     return db.put(userDoc);
// }

// // Get user's bucket list
// export async function getBucketList(username) {
//     const userDoc = await db.get(username);
//     return userDoc.bucketList;
// }

