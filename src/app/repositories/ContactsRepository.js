const { v4 } = require("uuid");

let contacts = [
  {
    id: v4(),
    name: "Matheus",
    email: "matheus@mail.com",
    phone: "242323432",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "Marcos",
    email: "marcos@mail.com",
    phone: "323131312",
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
