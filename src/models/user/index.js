const User = class {
  constructor(id, username, name, email, address, phone, website, company) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.company = company;
  }
};

export default User;
