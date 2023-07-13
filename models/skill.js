const skills = [
    {id: 125223, name: 'HTML', experience: 'some'},
    {id: 127904, name: 'CSS', experience: 'noob'},
    {id: 139608, name: 'Javascript', experience: 'moderate'},
    {id: 141414, name: 'Python', experience: 'beginner'},
    {id: 144233, name: 'Java', experience: 'intermediate'},
    {id: 145678, name: 'C++', experience: 'some'}
];

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};