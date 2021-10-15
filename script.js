const scriptURL = 'https://script.google.com/macros/s/AKfycbw2BVS-6p3nITZyp0woNQRlZ286yTsZ9-TTi_6V7mIACcxnGv5464_N3AmTbLJpSYex/exec';
      const form = document.forms['wpu-contact-form'];
      const btnKirim = document.querySelector('.btn-kirim');
      const btnLoading = document.querySelector('.btn-loading');
      const myAlert = document.querySelector('.my-alert');

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then((response) => {
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            myAlert.classList.toggle('d-none');
            form.reset();
            console.log('Success!', response);
          })
          .catch((error) => console.error('Error!', error.message));
      });