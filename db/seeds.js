require("./connection");
const A = require("../models/A");
const B = require("../models/B");
const C = require("../models/C");

const seedFunction = async () => {
  await A.deleteMany({});
  await B.deleteMany({});
  await C.deleteMany({});
  A.insertMany([
    { entry: "A1", owner: "aman" },
    { entry: "A2", owner: "aman" },
    { entry: "A3", owner: "aman" },
    { entry: "A4", owner: "aman" },
    { entry: "A5", owner: "aman" },
  ]);
  B.insertMany([
    { entry: "B1", owner: "aman" },
    { entry: "B2", owner: "aman" },
    { entry: "B3", owner: "aman" },
    { entry: "B4", owner: "aman" },
    { entry: "B5", owner: "aman" },
  ]);
  C.insertMany([
    { entry: "C1", owner: "aman" },
    { entry: "C2", owner: "aman" },
    { entry: "C3", owner: "aman" },
    { entry: "C4", owner: "aman" },
    { entry: "C5", owner: "aman" },
  ]);
  return;
};

seedFunction();

// A.deleteMany({});
// B.deleteMany({});
// C.deleteMany({}).then(() => {
//   A.insertMany([
//     { entry: "A1", owner: "aman" },
//     { entry: "A2", owner: "aman" },
//     { entry: "A3", owner: "aman" },
//     { entry: "A4", owner: "aman" },
//     { entry: "A5", owner: "aman" },
//   ]).then(() => {
//     B.insertMany([
//       { entry: "B1", owner: "aman" },
//       { entry: "B2", owner: "aman" },
//       { entry: "B3", owner: "aman" },
//       { entry: "B4", owner: "aman" },
//       { entry: "B5", owner: "aman" },
//     ])
//       .then(() => {
//         C.insertMany([
//           { entry: "C1", owner: "aman" },
//           { entry: "C2", owner: "aman" },
//           { entry: "C3", owner: "aman" },
//           { entry: "C4", owner: "aman" },
//           { entry: "C5", owner: "aman" },
//         ]).then(() => {
//           C.bulkSave();
//         });
//       })
//       .catch((err) => console.error(err))
//       .finally(() => {
//         process.exit();
//       });
//   });
// });
