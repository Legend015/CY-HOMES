const express = require('express');
const router = express.Router();
const User = require('../models/User');

// @route   POST api/users/register
// @desc    Register user
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ 
      $or: [{ email }, { username }] 
    });

    if (user) {
      return res.status(400).json({ 
        errors: [{ 
          msg: 'User already exists' 
        }] 
      });
    }

    // Create new user
    user = new User({
      username,
      email,
      password
    });

    // Save user to database
    await user.save();

    // TODO: Generate JWT token
    // const token = generateToken(user);

    res.status(201).json({ 
      message: 'User registered successfully' 
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ 
      message: 'Server error during registration' 
    });
  }
});

module.exports = router;