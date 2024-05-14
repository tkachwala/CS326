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

// Get user's bucket list
export async function getBucketList(username) {
    try {
        const userDoc = await db.get(username);
        return userDoc.bucketList || []; 
    } catch (error) {
        console.error('Error retrieving bucket list:', error);
        throw error;
    }
}

// Delete from the bucket list
export async function deleteBucketListItem(email, name) {
    try {
        const user = await db.get(email);
        user.bucketList = user.bucketList || [];
        user.bucketList = user.bucketList.filter(item => {
            return item.name !== name;
        });
        await db.put(user);
        return { status: 'success', message: 'Item deleted from bucket list' };
    } catch (error) {
        console.error('Error deleting item from bucket list:', error);
        throw error;
    }
}



export async function addBucketListItem(email, name, address) {
    try {
        const userDoc = await db.get(email);
        userDoc.bucketList = userDoc.bucketList || [];
        for (const item of userDoc.bucketList) {
            if (item.name === name && item.address === address) {
                return { status: 'error', message: 'Item already exists in bucket list' };
            }
        }
        userDoc.bucketList.push({ name, address });
        await db.put(userDoc);
        return { status: 'success', message: 'Item added to bucket list' };
    } catch (error) {
        console.error('Error adding item to bucket list:', error);
        throw error;
    }
}