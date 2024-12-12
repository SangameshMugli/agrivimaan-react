const connection = require('../mysql/mysql');
const { body, validationResult } = require('express-validator');

const submitForm = [
  
  body('name').isLength({ min: 4 }).withMessage('Name is required').trim().escape(),
  body('email').isEmail().withMessage('Please enter a valid email address').normalizeEmail(),
  body('phone').isNumeric().withMessage('Phone number should contain only numbers').isLength({ min: 10, max: 10 }).withMessage('Phone number should be 10 digits long'),
  body('message').optional().trim().escape(),
  body('drone_type').isLength({ min: 1 }).withMessage('Drone type is required').trim().escape(),

  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, message, drone_type } = req.body;

    const query = 'INSERT INTO contact_form (name, email, phone, message, drone_type) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [name, email, phone, message, drone_type], (err, results) => {
      if (err) {
        console.error("Error in saving the data:", err);
        res.status(500).send("Error saving the data");
      } else {
        res.status(200).send("Data saved successfully");
      }
    });
  }
];


module.exports=submitForm