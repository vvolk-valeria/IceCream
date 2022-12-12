(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-our-locations-open]'),
    closeModalBtn: document.querySelector('[data-modal-our-locations-close]'),
    modal: document.querySelector('[data-modal-our-locations]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('sr-only');
  }
})();
