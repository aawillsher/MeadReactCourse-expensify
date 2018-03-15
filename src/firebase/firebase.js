import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// firebase.database().ref().set({
//     name: 'Andrew',
//     age: 33,
//     isTall: false,
//     location: {
//         city: 'Boston',
//         state: 'MA',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('data saved');
// }).catch((error) => {
//     console.log('failure: ', error);
// });

// database.ref('isTall')
//     .remove()
//     .then(() => {
//         console.log('data removed');
//     }).catch((e) => {
//     console.log('error: ', e);
// });

// database.ref().update({
//     job: 'Restaurant owner',
//     'location/city': 'Lowell'
// });

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('error fetching data: ', e)
//     })

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// database.ref('notes').push({
//     title: 'movies',
//     body: 'Hurricane Heist'
// });

// database.ref('expenses').push({
//     description: 'rent',
//     amount: 999,
//     createdAt: 10005,
//     note: 'test note'
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//       const expenses = [];
//       snapshot.forEach((childSnapshot) => {
//           expenses.push({
//               id: childSnapshot.key,
//               ...childSnapshot.val()
//           });
//       });
//       console.log(expenses);
//   });

// child removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });