

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        
    }

    getID = function() {
        return this.id;
    } 

    getEmail = function() {
        return this.email;
    }    
  };


module.exports= Employee;