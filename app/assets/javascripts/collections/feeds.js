NewReader.Collections.FeedsCollection = Backbone.Collection.extend({
  url: "feeds",
  model: NewReader.Models.Feed,

});

NewReader.Collections.feeds = new NewReader.Collections.FeedsCollection();