// server.js
import express from 'express';
import bodyParser from 'body-parser';
import * as db from './db.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the API Server');
});

app.use(cors());
app.use(bodyParser.json());


db.createUser('user@example.com', 'pass')
// new user
// server.js

app.post('/api/users', async (req, res) => {
    const { email, password } = req.body;
    try {
        const newUser = await createUser(email, password);
        res.status(201).json({ message: 'User created successfully', data: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user', error: error.message });
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await authenticateUser(email, password);
        if (user) {
            res.json({ message: "Login successful", user: email });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ message: "Login failed", error: error.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// GET route to retrieve a user's bucket list
app.get('/bucketlist/:username', async (req, res) => {
    try {
        const bucketList = await db.getBucketList(req.params.username);
        res.status(200).json(bucketList);
    } catch (error) {
        res.status(404).send('User not found');
    }
});
