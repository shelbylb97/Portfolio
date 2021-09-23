const newFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#contact-email').value.trim();
    const name = document.querySelector('#contact-name').value.trim();
    const body = document.querySelector('#contact-body').value.trim();
  
    if (name && needed_funding && description) {
      const response = await fetch(`/api/contact`, {
        method: 'POST',
        body: JSON.stringify({ name, needed_funding, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/contactPage');
      } else {
        alert('Failed to save message');
      }
    }
  };
  
  document
    .querySelector('.new-contact-form')
    .addEventListener('submit', newFormHandler);
  
//   document
//     .querySelector('.contact-list')
//     .addEventListener('click', delButtonHandler);