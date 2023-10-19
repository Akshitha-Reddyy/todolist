const index = (req, res) => {
    res.render('index', { title: 'Docket'}); 
}

        module.exports = {
            index
        };