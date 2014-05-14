NewReader.Collections.Entries = Backbone.Collection.extend({
  url: function () {
    return "feeds/" + this.feed.id + "/entries";
  },
  model: NewReader.Models.Entry,
  initialize: function (models, options) {
    this.feed = options.feed;
  }

});