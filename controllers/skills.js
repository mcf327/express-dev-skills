const Skill = require('../models/skill');

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
}

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new', {title: 'New Skill'});
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {
        title: 'Edit Skill',
        skill
    })
}

function update(req, res) {
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}/edit`);
}

module.exports = {
    index,
    show,
    create,
    new: newSkill,
    delete: deleteSkill,
    edit,
    update
}