const workspaceService = require('../models/workspace');

//create a new workspace
exports.createWorkspace = async (req, res) => {

    try {  
        const { name, description } = req.body;
        const newworkspace= await workspaceService.create({name, description});
        res.status(201).json(newworkspace);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating workspace',error: error.message });
    }
};

// get all workspaces
exports.getAllWorkspaces = async (req, res) => {
    try {
        const workspacesAll = await workspaceService.findAll();
        res.status(200).json(workspacesAll);
    } catch (error) {
        res.status(500).json({ message: 'Error getting  workspaces', error: error.message });
    }
};

// get a workspace by id
exports.getWorkspaceById = async (req, res) => {
    try {
        const foundworkspaceById = await workspaceService.findByPk(req.params.id);
        if (!foundworkspaceById) {
            return res.status(404).json({ message: 'Workspace not found' });
        }

        res.status(200).json(foundworkspaceById);
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error getting workspace', error: error.message });
    }
};

// update a workspace by id

exports.updateWorkspace = async (req, res) => {
    try {
        const { name, description } = req.body;
        const workspaceToUpdate = await workspaceService.findByPk(req.params.id);
        if (!workspaceToUpdate) {
            return res.status(404).json({ message: 'Workspace not found' });
        }

        workspaceToUpdate.name = name || workspaceToUpdate.name;
        workspaceToUpdate.description = description || workspaceToUpdate.description;

       await workspaceToUpdate.save();

        res.status(200).json(workspaceToUpdate);
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error updating workspace', error: error.message });
    }
};

// delete a workspace by id
exports.deleteWorkspace = async (req, res) => {
    try {
        const workspaceToDelete = await workspaceService.findByPk(req.params.id);
        if (!workspaceToDelete) {
            return res.status(404).json({ message: 'Workspace not found' });
        }

        await workspaceToDelete.destroy();

        res.status(204).json({ message: 'Workspace deleted successfully' });
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error deleting workspace', error: error.message });
    }
};