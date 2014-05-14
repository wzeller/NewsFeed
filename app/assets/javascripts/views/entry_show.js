NewReader.Views.EntryShow = Backbone.View.extend({

  template: JST["entry_show"],

  render: function() {
    var renderedContent = this.template({
      entry: this.model,
    });
    this.$el.html(renderedContent);
    return this;
  },

  initialize: function () {
    this.render();
    this.listenTo(this.model, "sync", this.render);
    // this.model.fetch();
  },

})