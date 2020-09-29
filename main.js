class Contact {
  constructor(idnumber, name, phone) {
    this.idnumber = idnumber;
    this.name = name;
    this.phone = phone;
  }
}

class UserContact {
  static displayContacts() {
    const contacts = Store.getContacts();
    contacts.forEach((contact) => UserContact.addContactList(contact));
  }
  static addContactList(contact) {
    const client = document.getElementById("contact-list");
    const row = document.createElement("tr");
    row.innerHTML = `
                    <td>${contact.name}</td> 
                    <td>${contact.phone}</td>
                    <td>${contact.idnumber}</td>  
                    <td><a href="#" class="btn btn-danger delete"> Delete</a></td>`;
    client.appendChild(row);
  }

  static deleteContact(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
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

  static clearFields() {
    document.getElementById("idnumber").value = "";
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
  }
}
class Store {
  static getContacts() {
    let contacts;
    if (localStorage.getItem("contacts") === null) {
      contacts = [];
    } else {
      contacts = JSON.parse(localStorage.getItem("contacts"));
    }
    return contacts;
  }
  static addContact(contact) {
    const contacts = Store.getContacts();
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }

  static editContact() {
    const contacts = localStorage.getItem("contacts");
    if (typeof contacts === undefined || contacts === null) {
      contacts = JSON.stringify({ id: "", name: "", phone: "" });
      localStorage.setItem("contacts", contacts);
    }
    return JSON.parse(contacts);
  }
  static removeContact(idnumber) {
    const contacts = Store.getContacts();
    contacts.forEach((contact, index) => {
      if (contact.idnumber === idnumber) {
        contacts.splice(index, 1);
      }
    });

    localStorage.setItem("contacts", JSON.stringify(contacts));
  }
}

document.addEventListener("DOMContentLoaded", UserContact.displayContacts);

document.getElementById("add-form").addEventListener("submit", (e) => {
  e.preventDefault();
  var number = /^([+|\d])+([\s|\d])+([\d])$/;
  const idnumber = document.getElementById("idnumber").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  if (name === "" || phone === "" || idnumber === "") {
    UserContact.showAlert("please fill in all fields", "danger");
  } else if (!number.test(phone)) {
    UserContact.showAlert("You have entered an invalid phone number", "danger");
  } else {
    const contact = new Contact(idnumber, name, phone);
    UserContact.addContactList(contact);
    Store.addContact(contact);
    UserContact.showAlert("Contacted Added", "success");
    UserContact.clearFields();
  }
});

document.getElementById("contact-list").addEventListener("click", (e) => {
  UserContact.deleteContact(e.target);
  Store.removeContact(
    e.target.parentElement.previousElementSibling.textContent
  );
});
