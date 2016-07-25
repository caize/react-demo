'use default';

const DOCTOR_TYPE = 'Doctor',
    PATIENT_TYPE = 'Patient',
    TEMP_PASSWORD = 'Password123';

let users = [{
    id: '1',
    userName: 'bones@enterprise.com',
    type: DOCTOR_TYPE,
    doctorId: '1'
},{
    id: '2',
    userName: 'kirk@enterprise.com',
    type: PATIENT_TYPE,
    patientId: '1'
},{
    id: '3',
    userName: 'cottle@notacylon.net',
    type: DOCTOR_TYPE,
    doctorId: '2'
},{
    id: '4',
    userName: 'adama@battlestar.net',
    type: PATIENT_TYPE,
    patientId: '2'
},{
    id: '5',
    userName: 'drwho@tardis.net',
    type: DOCTOR_TYPE,
    doctorId: '3'
},{
    id: '6',
    userName: 'amypond@tardis.net',
    type: PATIENT_TYPE,
    patientId: '3'
}];


class Users {
    findById(id){
        return users.find((user) => user.id === id);
    }

    findOne(userName){
        userName = userName.toLowerCase();
        return users.find((user) => user.userName === userName);
    }

    verifyPassword(user, password){
        return (password === TEMP_PASSWORD);
    }
}

module.exports = Users;
