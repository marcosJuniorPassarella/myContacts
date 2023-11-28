const { response } = require("express");
const ContactsRepository = require("../repositories/ContactsRepository");

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    // Obter um registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: Not Found
      return response.status(404).json({ error: "User not found" });
    }
    response.json(contact);
  }

  async store(request, response) {
    // Criar novo registro
    const { name, email, phone, category_id } = request.body;
    if (!name) {
      return response
        .status(400)
        .json({ error: "Name is required" });
    }

    const contactExists = await ContactsRepository.findByEmail(email);
    if (contactExists) {
      return response
        .status(400)
        .json({ error: "This e-mail is already been taken" });
    }

    const contact = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id,
    });
    response.json(contact);
  }

  update() {
    // Editar um registro
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: Not Found
      return response.status(404).json({ error: "User not found" });
    }

    await ContactsRepository.delete(id);
    response.sendStatus(204); // 204 Deu tudo certo porém a resposta não tem conteúdo a ser retornado
  }
}

module.exports = new ContactController();
