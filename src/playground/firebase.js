// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });
// database.ref("expenses").push({
//   description: "Rent",
//   note: "",
//   amount: 109500,
//   createAt: 347637468347,
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }, (e) => {
//   console.log("Erroring fetching data: " + e);
// });

// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Erroring fetching data: " + e.message);
//   });

// database
//   .ref()
//   .set({
//     name: "Peng Dong",
//     age: 28,
//     stressLevel: 6,
//     job: {
//       title: "Software Engineer",
//       company: "Google",
//     },
//     location: {
//       city: "New Jersy",
//       country: "United State",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved!");
//   })
//   .catch(() => {
//     console.log("Something went wrong!");
//   });

// database
//   .ref()
//   .update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Seattle",
//   })
//   .then(() => {
//     console.log("Remove succeeded.");
//   })
//   .catch((e) => {
//     console.log("Remove failed: " + e.message);
//   });
