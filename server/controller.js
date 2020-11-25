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
    },

    getExp: (req, res) => {
        const {id} = req.params,
        db = req.app.get('db');
    
        db.get_exp(id)
        .then(post => res.status(200).send(post))
        .catch(err => res.status(500).send(err))
    },

    getCourse: (req, res) => {
        const {id} = req.params,
        db = req.app.get('db');
    
        db.get_course(id)
        .then(post => res.status(200).send(post))
        .catch(err => {
            res.status(500).send(err)})
    },

    editExp: (req, res) => {
        const {id} = req.params,
        {title, desc} = req.body,
        db = req.app.get('db');

        db.update_exp([title, desc, id])
        .then(()=>res.sendStatus(200))
        .catch(err=>res.status(500).send(err));
    },

    editCourse: (req, res) => {
        const {id} = req.params,
        {title, desc} = req.body,
        db = req.app.get('db');

        db.update_course([title, desc, id])
        .then(()=>res.sendStatus(200))
        .catch(err=>res.status(500).send(err));
    },

    newExp: (req, res) => {
        const {title, desc} = req.body,
        db = req.app.get('db');

        db.new_exp([title, desc])
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    newCourse: (req, res) => {
        const {title, desc} = req.body,
        db = req.app.get('db');

        db.new_course([title, desc])
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    deleteExp: (req, res) => {
        const {id} = req.params,
        db = req.app.get('db');

        db.delete_exp(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))

    },

    deleteCourse: (req, res) => {
        const {id} = req.params,
        db = req.app.get('db');

        db.delete_course(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))

    }    
}