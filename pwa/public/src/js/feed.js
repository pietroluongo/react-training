const shareImageButton = document.querySelector('#share-image-button');
const createPostArea = document.querySelector('#create-post');
const closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

function openCreatePostModal() {
  createPostArea.style.display = 'block';
  if (deferredInstallPromptEvent) {
    deferredInstallPromptEvent.prompt();
    deferredInstallPromptEvent.userChoice.then((result) => {
      console.log(result.outcome);
      if (result.outcome === 'dismissed') {
        console.log('User cancelled installation');
      } else {
        console.log('User installed');
      }
    });
    deferredInstallPromptEvent = null;
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);
