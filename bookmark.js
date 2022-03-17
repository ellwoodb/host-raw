function () {
  var bookmarkUrl = window.location;
  var applicationUrl = "http://192.168.178.108:9090/bookmarks/new";
  applicationUrl += "?url=" + encodeURIComponent(bookmarkUrl);
  applicationUrl += "&auto_close";
  window.open(applicationUrl);
};
