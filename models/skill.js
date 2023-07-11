const skills = [
    {id: 125223, name: 'HTML', experience: 'some'},
    {id: 127904, name: 'CSS', experience: 'noob'},
    {id: 139608, name: 'Javascript', experience: 'moderate'},
    {id: 141414, name: 'Python', experience: 'beginner'},
    {id: 144233, name: 'Java', experience: 'moderate but that was years ago by now'},
    {id: 145678, name: 'C++', experience: 'some, but will I ever use it?'}
];

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

module.exports = {
    getAll,
    getOne
};