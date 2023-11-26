const { v4 } = require("uuid");

const contacts = [
  {
    id: v4(),
    name: "Matheus",
    email: "matheus@mail.com",
    phone: "242323432",
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
