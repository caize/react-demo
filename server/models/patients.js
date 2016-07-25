'use strict';

let patients = [{
    id: '1',
    name: 'James T Kirk',
    birthdate: '3/22/1978',
    street: '51 W. 1st St.',
    state: 'IA',
    zip: '52327',
    country: 'US',
    doctorId: '1', 
    city: 'Riverside'
},{
    id:'2',
    name: 'William Adama',
    birthdate: '2/24/1947',
    street: '333 S Hope St',
    state: 'CA',
    zip: '90022',
    country: 'US',
    doctorId: '2', 
    city: 'East Los Angeles'
},{
    id:'3',
    name: 'Amy Pond',
    street: '818 East 38th Street',
    birthdate: '11/28/1987',
    state: 'NY',
    city: 'New York City',
    country: 'US',
    zip: '11210',
    doctorId: '3'
}];

class Patients {
    findById(id){
        return patients.find((patient) => patient.id === id);
    }

    findByDoctorId(doctorId){
        return patients.filter((patient) => patient.doctorId === doctorId);
    }
}

module.exports = Patients;
