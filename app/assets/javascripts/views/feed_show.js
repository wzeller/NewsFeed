NewReader.Views.FeedShow = Backbone.View.extend({

  template: JST['feed_show'],

  render: function() {
    var view = this;
    var renderedContent = this.template({
      feed: this.model,
    });
    this.$el.html(renderedContent);
    this.model.entries().each (function(entry) {
      var entryView = new NewReader.Views.EntryShow({
        model: entry,
      });
      view.$el.find(".entries").append(entryView.$el);
    })
    return this;
  },

  initialize: function () {
    this.render();
    this.listenTo(this.model, "sync", this.render);
    this.model.fetch();
    NewReader.Collections.feeds.add(this.model);
  },

})