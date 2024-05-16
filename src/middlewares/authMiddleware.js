const jwt = require('jsonwebtoken');

const TEACHER_SECRET_KEY = process.env.TEACHER_SECRET_KEY || "TEACHER_SECRET";
const STUDENT_SECRET_KEY = process.env.STUDENT_SECRET_KEY || "STUDENT_SECRET";

// const generateToken = (user, role) => {
//     // Select the appropriate secret key based on the role
//     const secretKey = role === 'teacher' ? TEACHER_SECRET_KEY : STUDENT_SECRET_KEY;

//     const payload = {
//         user: {
//             id: user.id,
//             email: user.email,
//             role: role
//         }
//     };
//     // Generate token using the selected secret key
//     const expiresIn = role === 'teacher' ? '6h' : '3h';
//     return jwt.sign(payload, secretKey, { expiresIn });
// };

const generateToken = (user, role) => {
    const secretKey = role === 'teacher' ? TEACHER_SECRET_KEY : STUDENT_SECRET_KEY;
    const expiresIn = role === 'teacher' ? '6h' : '3h';

    const payload = {
        user: {
            id: user.id,
            email: user.email,
            role: role
        }
    };
    return jwt.sign(payload, secretKey, { expiresIn });
};

module.exports = {
    generateToken
};
