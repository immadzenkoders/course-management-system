const db = require('../config/connection');

const addCourse = async (req, res) => {
    const { name, description } = req.body;
    const teacherId = req.user.id; // Assuming teacher's ID is present in the token

    try {
        // Add course to database
        const result = await db.execute('INSERT INTO courses (name, description, teacher_id) VALUES (?, ?, ?)', [name, description, teacherId]);
        const courseId = result.insertId;
        
        // Respond with success message
        res.status(201).json({ message: 'Course added successfully', courseId: courseId });
    } catch (error) {
        console.error("Error adding course:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { addCourse };
