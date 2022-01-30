const getEmployerRole = (employeeName, employees) => {
    return employees.filter(employees => employees.name === employeeName).map(employees => employees.role).toString();
};

module.exports = getEmployerRole;
