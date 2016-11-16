(function (window, undefined) {
  var $ = window.jQuery;
  var document = window.document;

  // SPHostUrl parameter name
  var SPHostUrlKey = "SPHostUrl";

  // Gets SPHostUrl from the current URL and appends it as query string to the links which point to current domain in the page.
  $(document).ready(function () {
    ensureSPHasRedirectedToSharePointRemoved();

    appendQueryStringToAnchors();
  });

  // Appends SPHostUrl as query string to all the links which point to current domain.
  function appendQueryStringToAnchors() {
    $("a")
      .each(function () {
        if (this.search.length > 0) {

        }
        else {
          this.search = window.location.search;
        }
      });
  }

  // If SPHasRedirectedToSharePoint exists in the query string, remove it.
  // Hence, when user bookmarks the url, SPHasRedirectedToSharePoint will not be included.
  // Note that modifying window.location.search will cause an additional request to server.
  function ensureSPHasRedirectedToSharePointRemoved() {
    var SPHasRedirectedToSharePointParam = "&SPHasRedirectedToSharePoint=1";

    var queryString = window.location.search;

    if (queryString.indexOf(SPHasRedirectedToSharePointParam) >= 0) {
      window.location.search = queryString.replace(SPHasRedirectedToSharePointParam, "");
    }
  }
})(window);
