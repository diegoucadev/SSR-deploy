//Variable to store the user
let buffer;

class User {
  constructor(name, age, email) {
    (this.name = name), (this.age = age), (this.email = email);
  }
}

const createUser = (user) => {
  buffer = user;
  return buffer;
};

const getUser = () => {
  return buffer;
};

export { User, createUser, getUser };
