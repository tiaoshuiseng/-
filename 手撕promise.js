class MyPromise {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';
  constructor(func) {
    this.promiseState = MyPromise.PENDING;
    this.promiseResult = null;
    try {
      func(this.resolve.bind(this),this.reject.bind(this));
    } catch (error) {
      this.reject(error)
    }
    
  }
  resolve(result) {
    if(this.promiseState === MyPromise.PENDING) {
      this.promiseState = MyPromise.FULFILLED;
      this.promiseResult = result;
    }
  }
  reject(result) {
    if(this.promiseState === MyPromise.PENDING) {
      this.promiseState = MyPromise.REJECTED;
      this.promiseResult = result
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
       onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason;
        };
    if(this.promiseState === MyPromise.FULFILLED) {
      onFulfilled(this.promiseResult)
    }
    if(this.promiseState === MyPromise.REJECTED) {
      onRejected(this.promiseResult)
    }
  }
}
let newPromise = new MyPromise((resolve, reject) => {
  throw new Error('白嫖不成功')
});
newPromise.then(
  res => {
    console.log(res)
  },
  rej => {
    console.log(rej);
  }
)