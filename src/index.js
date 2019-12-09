const worker = new Worker('./worker.js');
worker.addEventListener('message', e => {
  console.log('get message from worker: ', e.data);
});

worker.postMessage('hello world');
