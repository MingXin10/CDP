'https://dailyview.tw/Daily/2022/03/25'

const script = document.createElement('script')
script.type = 'text/javascript'
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
document.body.appendChild(script)

function getActiveElement(element = document.activeElement) {
  const shadowRoot = document.activeElement.shadowRoot
  const contentDocument = element.contentDocument

  if (shadowRoot && shadowRoot.activeElement) {
    return getActiveElement(shadowRoot.activeElement)
  }

  if (contentDocument && contentDocument.activeElement) {
    return getActiveElement(contentDocument.activeElement)
  }
  return element
} //必須手動getActiveElement()，也只能觸發一次

var detector = setInterval(function () {
  var elem = document.activeElement
  if (elem && elem.tagName == 'IFRAME') {
    console.log('123')
    clearInterval(detector)
  }
}, 100) //只能觸發一次

window.setTimeout(function () {
  if (document.activeElement instanceof HTMLIFrameElement) {
    console.log('iframe click')
  }
}, 0) //只能觸發一次
