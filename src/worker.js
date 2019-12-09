self.addEventListener('message', e => {
  console.log('[worker] get message', e);

  self.postMessage('postMessage to main');

  console.log(self.location);
});
