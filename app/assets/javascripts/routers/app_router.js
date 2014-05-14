NewReader.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "feeds/:id": "show"
  },

  index: function () {
    var indexView = new NewReader.Views.FeedIndex();
    $('#content').html(indexView.$el);
  },

  show: function (id) {
    var feed = new NewReader.Models.Feed({id: id})
    var showView = new NewReader.Views.FeedShow({model: feed});
    $('#content').html(showView.$el);
  }

});