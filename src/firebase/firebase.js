import * as firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage

let config = {
  apiKey: "AIzaSyDyJQ1GO4OhSKlI4GPVMvsWsqXzSi2YlFE",
  authDomain: "expensify-a5f88.firebaseapp.com",
  databaseURL: "https://expensify-a5f88.firebaseio.com",
  projectId: "expensify-a5f88",
  storageBucket: "expensify-a5f88.appspot.com",
  messagingSenderId: "1019101839262"
};

firebase.initializeApp(config);

let database = firebase.database();

// database.ref().once('value').then((snapshot) => {
//   let val = snapshot.val();
//   console.log(val)
// }).catch((e) => {
//   console.log(e)
// })

let onvaluChange = database.ref().on('value', (snapshot) => { 
  let val = snapshot.val();
  console.log(val)
}, (e) => {
  console.log(e)
})

database.ref().on('value', (snapshot) => {
  let val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
})

// setTimeout(() => {
//   database.ref('age').set(45)
// }, 3500)

// setTimeout(() => {
//   database.ref().off(onvaluChange)
// }, 7000)

// setTimeout(() => {
//   database.ref('age').set(49)
// }, 10500)

// database.ref().set({
//   name: 'Kanta Paul',
//   age: 24,
//   isSingle: true,
//   job: {
//     title: 'Software Developer',
//     company: 'My Company'
//   },
//   stressLabel: 9,
//   location: {
//     city: 'Dhaka',
//     country: 'Bangladesh'
//   }
// }).then((data) => {
//   console.log('data is saved')
// }).catch((error) => {
//   console.log(error)
// })

// database.ref().set('This is my data')

// database.ref('age').set(27);
// database.ref('location/city').set('Khulna');

// database.ref('attributes').set({
//   height: 5.9,
//   weight: 90
// }).then(() => {
//   console.log('second file add')
// }).catch((error) => {
//   console.log(error)
// });

// console.log('Data changed');

// data base remove
// database.ref()
//   .remove()
//   .then(() => {
//   console.log('data remove')
// }).catch((erroe) => {
//   console.log('data not remove')
// })

// another option data remove
// database.ref('isSingle').set(null)

// database.ref().update({
//   name: 'Pobon',
//   age: 26,
//   'job/title': 'Front End Developer',
//   isSingle: null,
//   stressLabel: 6,
//   'location/city': 'Jhenidah'
// })
