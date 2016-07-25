'use default';


let doctors = [{
    id: '1',
    name: 'Bones McCoy'
},{
    id: '2',
    name: 'Dr. Sherman Cottle'
},{
    id: '3',
    name: 'Dr. Who'
}];


class Doctors {
    findById(id){
        return doctors.find((doc) => doc.id === id);
    }
}

module.exports = Doctors;
