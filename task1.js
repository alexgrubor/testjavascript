let profileData = {
  firstName: "John",
  lastName: "Smith",
  age: 34,
  city: "Berlin",
  details: function () {
    return `${this.firstName} ${this.lastName}  is ${this.age} years old and lives in ${this.city}`;
  },
};

console.log(profileData.details());
