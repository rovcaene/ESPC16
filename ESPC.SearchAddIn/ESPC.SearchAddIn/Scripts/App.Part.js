// Check for U2U namespace
window.U2U = window.U2U || {};
U2U.Part = {
  senderId: '',
  init: function () {
    this.senderId = this.getQueryString("senderId");
    this.initSize();
    this.registerResize();
  },
  getQueryString: function(key){
    if (document.URL.indexOf('?') != -1) {
      var params = document.URL.split("?")[1].split("&");
      for (var i = 0; i < params.length; i = i + 1) {
        var param = params[i].split("=");
        if (param[0].toLowerCase() == key.toLowerCase())
          return decodeURIComponent(param[1]);
      }
    }
  },
  initSize: function () {
    if (!this.senderId)
      return;

    var resizeMessage = '<message senderId={Sender_ID}>resize(100%, 500)</message>';
    resizeMessage = resizeMessage.replace("{Sender_ID}", this.senderId);
    window.parent.postMessage(resizeMessage, "*");
  },
  registerResize: function(){
    // Resize if in WebPart
    window.addEventListener(
      'resize',
      function () {
        if (window.jQuery) {
          this.adjustSize($(".container"));
        }
      }.bind(this));
  },
  adjustSize: function (element) {
    if (!this.senderId || !element)
      return;

    var step = 30,
        newHeight,
        contentHeight = element.height(),
        resizeMessage = '<message senderId={Sender_ID}>resize({Width}, {Height})</message>';

    newHeight = (step * 2) + (step - (contentHeight % step)) + contentHeight;

    resizeMessage = resizeMessage.replace("{Sender_ID}", this.senderId);
    resizeMessage = resizeMessage.replace("{Height}", newHeight);
    resizeMessage = resizeMessage.replace("{Width}", "100%");

    window.parent.postMessage(resizeMessage, "*");
  }
};

U2U.Part.init();