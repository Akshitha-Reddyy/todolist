const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task: String,
    status: String
});

mongoose.model('tasks', taskSchema);
const taskModel = mongoose.model('tasks');

const addtask = async (req, res) => {
    const { task, status } = req.body; // Retrieve the "task" and "status" fields from the form data

    try {
        // Create a new task document in the database using promises
        const newTask = await taskModel.create({
            task,
            status, // Set the status based on the form data
        });

        // Task created successfully
        console.log('Task created:', newTask);

        // Redirect or send a success response as needed
        res.redirect("/location");
    } catch (err) {
        console.error(err);
        // Handle the error, e.g., send an error response
        res.status(500).send('Error creating the task');
    }
};

module.exports = {
    addtask
};
