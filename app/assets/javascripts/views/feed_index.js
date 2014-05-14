NewReader.Views.FeedIndex = Backbone.View.extend({

  template: JST["feed_index"],

  render: function() {
    var renderedContent = this.template({
      feeds: NewReader.Collections.feeds,
    });
    this.$el.html(renderedContent);
    return this;

  },

  initialize: function () {
    this.render();
    this.listenTo(NewReader.Collections.feeds, "add remove sync", this.render);
    NewReader.Collections.feeds.fetch();
  },
})