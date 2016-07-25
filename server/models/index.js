let Users = require('./users.js'),
    Patients = require('./patients.js'),
    Doctors = require('./doctors.js');

module.exports = {
    Users: new Users(),
    Patients: new Patients(),
    Doctors: new Doctors()
};