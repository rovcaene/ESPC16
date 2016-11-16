/// <reference path="App.Part.js" />

// Extend U2U.Part
(function () {
  // Keep reference to original logic
  var base = U2U.Part;
  var originalInit = base.init;

  // Create extension
  var extension = {
    element: null,
    appweburl: '',
    searchQueryString: '',
    fancyColors: ['Red', 'Blue-Grey', 'Pink', 'Purple', 'Deep-Purple', 'Indigo', 'Blue', 'Light-Blue', 'Cyan', 'Teal', 'Green', 'Light-Green', 'Lime', 'Yellow', 'Amber', 'Orange', 'Deep-Orange', 'Brown', 'Grey'],
    init: function (element) {
      // Original logic
      originalInit.call(base);
      
      // Initialize some variables
      this.searchQueryString =
        "/_api/search/query" 
        + "?querytext='*'" // Search for anything
        + "&querytemplate='{searchTerms} Responsible:{User}'" // Query variables
        + "&selectproperties='FullName%2cWorkCompany%2cComments%2cEmail%2cWebPage%2cPhoto'" // Managed properties to retrieve
        + "&clienttype='ContentSearchRegular'" // QueryLogClientType: tell the API where the query is sent from
        + "&properties='SourceLevel:SPWeb,SourceName:Contacts'"; // Restrict to our result source

      this.element = element;
      this.appweburl = base.getQueryString("SPAppWebUrl");
    },
    // Execute the search query
    loadData: function () {
      var searchQueryUrl = this.appweburl + this.searchQueryString;
      $.ajax(
          {
            url: searchQueryUrl,
            method: "GET",
            context: this,
            headers: {
              "accept": "application/json;odata=verbose"
            },
            success: this.onSuccess,
            error: this.onError
          }
      );
    },
    // Success handler
    onSuccess: function (data) {
      // Get the actual results
      var results = data.d.query.PrimaryQueryResult.RelevantResults.Table.Rows.results;

      // Generate HTML string
      var html ='<div class="row active-with-click">'+ this.renderItems(results) + '</div>';

      // Add to DOM
      this.element.html(html);

      // Add behavior
      Cards();

      // Trigger resize
      base.adjustSize(this.element);
    },
    // Error handler
    onError: function (err) {
      alert(JSON.stringify(err));
    },
    // Rendering all results
    renderItems: function (results) {
      var html = '';
      for (var i = 0; i < results.length; i++) {
        html += this.renderItem(results[i]);
      }
      return html;
    },
    // Render individual result
    renderItem: function (result) {
      var fieldValues = result.Cells.results;

      // Build item
      var item = {};
      item.fullName = this.getValue(fieldValues, 'FullName');
      item.company = this.getValue(fieldValues, 'WorkCompany');
      item.pictureUrl = this.getValue(fieldValues, 'Photo');
      if (item.pictureUrl)
        item.pictureUrl = item.pictureUrl.substring(0, item.pictureUrl.indexOf(','));
      item.comments = this.getValue(fieldValues, 'Comments');
      item.email = this.getValue(fieldValues, 'Email');
      item.webpageUrl = this.getValue(fieldValues, 'WebPage');
      if (item.webpageUrl)
        item.webpageUrl = item.webpageUrl.substring(0, item.webpageUrl.indexOf(','));
      item.color = this.fancyColors[Math.floor(Math.random() * this.fancyColors.length)];

      // Return html
      return '<div class="col-md-4 col-sm-6 col-xs-12"> \
      <div class="material-card ' + item.color + '"> \
        <h2> \
          <span>' + item.fullName + '</span> \
          <strong> \
            <i class="fa fa-fw fa-star"></i> \
            ' + item.company + ' \
          </strong> \
        </h2> \
        <div class="mc-content"> \
          <div class="img-container"> \
            <img class="img-responsive" src="' + item.pictureUrl + '"> \
          </div> \
          <div class="mc-description"> \
            ' + item.comments + ' \
          </div> \
        </div> \
        <a class="mc-btn-action"> \
          <i class="fa fa-bars"></i> \
        </a> \
        <div class="mc-footer"> \
          <h4> \
            Links \
          </h4> \
          <a class="fa fa-fw fa-envelope" href="mailto:' + item.email + '"></a> \
          <a class="fa fa-fw fa-globe" href="' + item.webpageUrl + '"></a> \
        </div> \
      </div> \
    </div>';
    },
    getValue: function (results, key) {
      for (var i = 0; i < results.length; i++) {
        var el = results[i];
        if (el.Key == key)
          return el.Value;
      }
      return undefined;
    }
  };

  // Extend original U2U.Part
  for (var prop in extension) {
    if (extension.hasOwnProperty(prop)) {
      U2U.Part[prop] = extension[prop];
    }
  }
})();