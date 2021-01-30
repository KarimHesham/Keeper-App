const router = require("express").Router();

let Note = require("../models/notes");

router.route("/notes/:username").get( async (req, res) => {
     Note.find({username: req.params.username})
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json("Error" + err));
     
});

router.route("/notes/:username/add").post((req, res) => {
    const username = req.params.username;
    const title = req.body.title;
    const content = req.body.content;
    const date = new Date();

    const newNote = new Note({
        username,
        title,
        content,
        date
    });

    newNote.save()
    .then((data) => res.send(data))
    .catch(err => res.status(400).json("Error" + err));
});

router.route("/notes/:username/:id").patch((req, res) => {
    Note.findById(req.params.id)
    .then(note => {
        note.username = req.params.username;
        note.title = req.body.title;
        note.content = req.body.content;
        note.date = Date.parse(req.body.date);

        note.save()
        .then(() => res.json("Note updated!"))
        .catch(err => res.status(400).json("Error" + err));
    })
    .catch(err => res.status(400).json("Error" + err));
});


router.route("/notes/:username/:id").delete((req, res) => {
    Note.findByIdAndDelete(req.params.id)
    .then(note => res.json("Note deleted!"))
    .catch(err => res.status(400).json("Error" + err));
});



module.exports = router;