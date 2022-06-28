const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('bbdeluz88@gmail.com', 'success')
  })
}

const alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2')

const alert2 = (message2, type2) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type2} alert-dismissible" role="alert">`,
    `   <div>${message2}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder2.append(wrapper)
}

const alertTrigger2 = document.getElementById('liveAlertBtn2')
if (alertTrigger2) {
  alertTrigger2.addEventListener('click', () => {
    alert2('bbdeluz88@gmail.com', 'secondary')
  })
}
