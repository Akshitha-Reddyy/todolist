// const mongoose = require('mongoose');
// const tasks = mongoose.model('tasks');
/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', {
      title: 'Docket',
      pageHeader: {
        title: 'Docket',
      },
      locations: [{
        name: 'Add task',
        facilities: ['What are you going to do today?'],
      },{
        name: 'View List',
        facilities: ['Display the tasks'],
      }]
    });
  };
/* GET 'Location info' page */
const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
};

/* GET 'Add review' page */
const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review' });
};
// const addtask = async  (req,res) => {
  // console.log(req.body.task);
  // tasks.insertOne({
    // task:req.body.task,
    // statuc:req.body.status
  // });
  // res.redirect('/location');
// }
module.exports = {
    homelist,
    locationInfo,
    addReview,
    // addtask
};