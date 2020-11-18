module.exports = {
    getAllExperiences: (req, res) => {
        const db = req.app.get('db');
    
        db.get_experiences()
        .then(experiences => res.status(200).send(experiences))
        .catch(err => res.status(500).send(err))
    },

    getAllCoursework: (req, res) => {
        const db = req.app.get('db');
    
        db.get_coursework()
        .then(coursework => res.status(200).send(coursework))
        .catch(err => res.status(500).send(err))
    }
}