function SendMail() {
  var params = {
    from_name: document.getElementById('name').value,
    email_id: document.getElementById('email').value,
    number: document.getElementById('number').value,
    message: document.getElementById('message').value,
  }
  emailjs
  .send('service_x9brz6p', 'template_6h19u0j', params,'a_pLoJAQafIsoji22b1U8')

  .then(function (res) {
    alert('Success! ' + res.status)
  })
}