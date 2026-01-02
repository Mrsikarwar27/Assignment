class person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  getFullName() {
    return `${this.fname} ${this.lname}`;
  }
}
const p1 = new person("vijay", "sikarwar");
const p2 = new person("sambhavi ", "jain");

console.log(p1.getFullName());
console.log(p2.getFullName());

