const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {  
        return res.status(401).json({ message: 'Unauthorized' });

    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // attach the decoded user to the request object
        next();
    }

    catch (err) {
        return res.status(403).json({ message: 'Invalid Token' });
    }
};

module.exports = authenticateToken;