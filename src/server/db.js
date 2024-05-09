import PouchDB from 'pouchdb';

import bcrypt from 'bcryptjs'; 


const db = new PouchDB('my_database');
console.log('Database initialized', db);

export default db;

export async function createUser(email, password) {
    try {
        await db.get(email);
        return { status: 'error', message: 'User already exists' };
    } catch (error) {
        if (error.name === 'not_found') {
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt);
            const newUser = {
                _id: email,
                password: hashedPassword,
                type: 'user'
            };
            const result = await db.put(newUser);
            return { status: 'success', message: 'User created successfully', data: result };
        } else {
            throw error;
        }
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

