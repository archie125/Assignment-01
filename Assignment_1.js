const users = [
  {
    id: 1,
    username: 'elmer.datolayta@gmail.com',
    password: 'TempPassword101',
    roleId: 1,
  },
  {
    id: 2,
    username: 'john.doe@gmail.com',
    password: 'jhondoe1',
    roleId: 3,
  },
  {
    id: 3,
    username: 'josephine.doe@gmail.com',
    password: 'josephine123',
    roleId: 3,
  },
  {
    id: 4,
    username: 'ruby.doe@gmail.com',
    password: 'ruby101',
    roleId: 2,
  },
];
const roles = [
  {
    id: 1,
    label: 'Aministrator',
  },
  {
    id: 2,
    label: 'Student',
  },
  {
    id: 3,
    label: 'Instructor',
  },
];
const newUsers = users.reduce((users, user) => {
  const { id, username, roleId } = user;
  const label = roles.filter((role) => role.id == roleId);
  const newUser = {
    id: id,
    role: label[0].label,
    username: username,
  };
  return [...users, newUser];
}, []);
console.log(newUsers);
