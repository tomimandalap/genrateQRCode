let qrCode = select("img")
let qrText = select("textarea")
let qrButton = select("button")

qrButton.addEventListener('click', generateQR)

function generateQR() {
  let size = "1000x1000"
  let data = qrText.value
  let baseURL = "http://api.qrserver.com/v1/create-qr-code"

  if(data.length>0){
    let url = `${baseURL}?data=${data}&size=${size}`
    qrCode.src = url
  } else {
    alert('Please input data')
    qrCode.src = `img/QR.png`
  }
}

function select(element) {
  return document.querySelector(element)
}