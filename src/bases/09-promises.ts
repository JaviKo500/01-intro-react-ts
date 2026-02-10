const myPromise = new Promise<number>(( resolve, reject ) => {
  setTimeout(() => {
    resolve(100);
    reject(new Error('My friendly error'));
  }, 2000); // 2 seconds
});


myPromise
  .then( (value) => console.log(value) )
  .catch( console.error )
  .finally( () => console.log('continue with my life') );

