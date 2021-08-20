const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey ;)');
    } else {
      reject('Whoops :/ ');
    }
  });
};

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.log(err));

const somethingWillHappen2 = () => new Promise((resolve, reject) => true ? setTimeout(() => resolve('True'), 5000) : reject(error)
);

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.log(err));

// Para correr todas las promesas tenemos el método Promise.all() que nos retornara un array con la respuesta de todas las promesas que pasemos como parametro.

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => console.log(response))
  .catch(err => console.log(err))