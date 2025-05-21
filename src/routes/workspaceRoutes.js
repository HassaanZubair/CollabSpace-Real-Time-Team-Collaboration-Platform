const express = require('express');
const router = express.Router();
const workspaceController = require('../controllers/workspaceController');
const auth = require('../middleware/auth');


//Protected routes
router.post('/', authencateToken, workspaceController.createWorkspace);
router.get('/', authencateToken, workspaceController.getAllWorkspaces);
router.get('/:id', authencateToken, workspaceController.getWorkspaceById);
router.put('/:id', authencateToken, workspaceController.updateWorkspace);
router.delete('/:id', authencateToken, workspaceController.deleteWorkspace);

module.exports = router;