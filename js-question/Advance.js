// TODO: Use structuredClone to create a deep copy of an object and demonstrate that changes to the copy do not affect the original object. ye modern method js ka ab yahi use krte hai !!
// const original = {
//   name: "Vijay",
//   skills: ["JS", "Linux"],
//   meta: { level: 1 },
//   created: new Date(),
//   data: new Map([["lang", "Hindi-English"]])
// };

// const copy = structuredClone(original);

// copy.skills.push("MongoDB");
// copy.meta.level = 2;
// copy.data.set("x", 50);

// console.log(original);  // untouched
// console.log(copy)


// FIXME:  ye hai old method deep copy krne ka jo ab purana ho chuka hai !! json stringify and parse wala method !! warning ye functions aur dates , map, ko sahi se handle nhi krta hai !!

// const user = {
//   name: "Vijay",
//   skills: ["JS", "Linux"],
//   meta: { level: 1 }
// };

// const deep = JSON.parse(JSON.stringify(user));

// deep.skills.push("MongoDB");
// deep.meta.level = 2;

// console.log(user);   // no change
// console.log(deep);   // independent


