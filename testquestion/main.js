const addForm = document.getElementById("add-form");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const idNumber = document.getElementById("idNumber");
const addBtn = document.getElementById("add-btn");
const editbtn = document.getElementById("edit-contact");
const tableBody = document.querySelector("#tablelist");

class Contact {
  constructor(id, name, phone) {
    this.id = id;
    this.name = name;
    this.phone = phone;
  }
  addContact() {
    Contact.showElements(this.id, this.name, this.phone);
    return this;
  }

  saveContact() {
    const contactList = JSON.parse(localStorage.getItem("contacts")) ?? [];
    contactList.push({
      id: this.id,
      name: this.name,
      phone: this.phone,
    });
    localStorage.setItem("contacts", JSON.stringify(contactList));
  }

  static showContacts() {
    if (localStorage.getItem("contacts")) {
      JSON.parse(localStorage.getItem("contacts")).forEach((item) => {
        Contact.showElements(item.id, item.name, item.phone);
      });
    }
  }
  updateContact(id) {
    const newContact = { id: id, name: this.name, phone: this.phone };
    const updateData = JSON.parse(localStorage.getItem("contacts")).map(
      (item) => {
        if (item.id == id) {
          return newContact;
        }
        return item;
      }
    );
    localStorage.setItem("contacts", JSON.stringify(updateData));
  }
  static showElements(id, name, phone) {
    const row = document.createElement("tr");
    row.innerHTML = `
                      <tr role="row" class="odd">
                          <td>${name}</td> 
                          <td>${phone}</td>
                          <td><a href="#" class="btn btn-danger edit" data-id=${id}>Edit</a></td>
                          <td><a href="#" class="btn btn-success delete" data-id=${id}>Delete</a></td>
                      </tr>`;
    tableBody.appendChild(row);
  }
  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#add-form");
    container.insertBefore(div, form);
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
}

Contact.showContacts();

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!editbtn.value || !addBtn.value) {
    let id = Math.floor(Math.random() * 1000000);
    const contact = new Contact(id, name.value, phone.value);
    contact.addContact().saveContact();
  } else {
    const id = editbtn.value;
    const contact = new Contact(id, name.value, phone.value);
    contact.updateContact(id);
    addBtn.value = "Add Contact";
    tableBody.innerHTML = "";
    Contact.showContacts();
  }
  name.value = "";
  phone.value = "";
});

tableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const id = +e.target.getAttribute("data-id");
    const deleteControl = JSON.parse(localStorage.getItem("contacts"));
    const newData = deleteControl.filter((item) => item.id !== id);
    localStorage.setItem("contacts", JSON.stringify(newData));

    e.target.parentElement.parentElement.remove();
  }

  if (e.target.classList.contains("edit")) {
    const id = +e.target.getAttribute("data-id");
    const editControl = JSON.parse(localStorage.getItem("contacts")).find(
      (item) => item.id === id
    );
    name.value = editControl.name;
    phone.value = editControl.phone;
    editbtn.value = id;
    addBtn.value = "Edit Contact";
  }
});
