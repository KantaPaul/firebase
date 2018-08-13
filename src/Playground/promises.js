let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolve data'); // this is working perfectly
    // resolve('This is my resolve data 2'); this is not working promise igonerd this
    // resolve({
    //   name: 'Kanta',
    //   age: 24
    // })
    reject('Something went wrong!')
  }, 1500)
});

console.log('before')

promise.then((data) => {
  console.log(data)
}).catch((error) => {
  console.log('error', error)
})

console.log('after')
