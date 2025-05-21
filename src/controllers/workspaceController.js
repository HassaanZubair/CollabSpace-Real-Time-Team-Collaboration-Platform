const workspaceService = require('../models/workspace');

//create a new workspace
exports.createWorkspace = async (req, res) => {

    try {  
        const { name, description } = req.body;
        const workspace= await workspace.create({name, description});
        res.status(201).json(workspace);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating for creating workspace',error: error.message });
    }
};

// get all workspaces
exports.getAllWorkspaces = async (req, res) => {
    try {
        const workspaces = await workspace.findAll();
        res.status(200).json(workspaces);
    } catch (error) {
        res.status(500).json({ message: 'Error getting  workspaces', error: error.message });
    }
};

// get a workspace by id
exports.getWorkspaceById = async (req, res) => {
    try {
        const workspace = await workspace.findByPk(req.params.id);
        if (!workspace) {
            return res.status(404).json({ message: 'Workspace not found' });
        }

        res.status(200).json(workspace);
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error getting workspace', error: error.message });
    }
};

// update a workspace by id

exports.updateWorkspace = async (req, res) => {
    try {
        const { name, description } = req.body;
        const workspace = await workspace.findByPk(req.params.id);
        if (!workspace) {
            return res.status(404).json({ message: 'Workspace not found' });
        }

        workspace.name = name || workspace.name;
        workspace.description = description || workspace.description;

       await workspace.save();

        res.status(200).json(workspace);
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error updating workspace', error: error.message });
    }
};

// delete a workspace by id
exports.deleteWorkspace = async (req, res) => {
    try {
        const workspace = await workspace.findByPk(req.params.id);
        if (!workspace) {
            return res.status(404).json({ message: 'Workspace not found' });
        }

        await workspace.destroy();

        res.status(204).json({ message: 'Workspace deleted successfully' });
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error deleting workspace', error: error.message });
    }
};