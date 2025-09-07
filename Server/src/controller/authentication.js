import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const passwordValidation = (password) => {
    if (!password) {
        return { message: 'Password is required', success: false };
    }
    try {
        if (password.length < 6 || password.length > 100) {
            return { message: 'Password must be between 6 and 100 characters', success: false };
        }
        if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
            return { message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number', success: false };
        }
    } catch (error) {
        console.error('Error during password validation:', error);
        return { message: 'Error during password validation', success: false };
    }
};

const registration = async (req, res) => {
    console.log('Registration request received:', req.body);
    const { FullName, Email, Password } = req.body;
    try {
        if (!FullName || !Email || !Password) {
            return res.status(400).json({ message: 'All fields are required', success: false });
        }
        // Validate password
        const passwordError = passwordValidation(Password);
        if (passwordError) {
            return res.status(400).json({ message: passwordError.message, success: false });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ where: { email: Email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists', success: false });
        }

        const hashedPassword = bcrypt.hashSync(Password, 10);

        const newUser = await User.create({
            fullName: FullName,
            email: Email,
            password: hashedPassword
        });
        if (!newUser) {
            return res.status(500).json({ message: 'User registration failed', success: false });
        }
        res.status(201).json({ message: 'User registered successfully', success: true, user: newUser });

    } catch (error) {
        res.status(500).json({ message: 'Error during registration', success: false });
        console.error('Error during registration:', error);
    }
};


const login = async (req, res) => {
    const { Email, Password } = req.body;
    try {
        if (!Email || !Password) {
            return res.status(400).json({ message: 'All fields are required', success: false });
        }
        const user = await User.findOne({ where: { email: Email } });
        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }

        const isPasswordValid = bcrypt.compareSync(Password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password', success: false });
        }

        // Here you would typically generate a token and send it back to the user
        const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // set token in cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 3600000
        });

        res.status(200).json({ message: 'Login successful', success: true, token: token });

    } catch (error) {
        res.status(500).json({ message: 'Error during login', success: false, error: error.message });
        console.error('Error during login:', error);
    }
}


const getallUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({ message: 'Users fetched successfully', success: true, users: users });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', success: false });
        console.error('Error fetching users:', error);
    }
}

export { registration, login, getallUsers };