NewReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "feeds",

  entries: function(){
    if (!this._entries){
      this._entries = new NewReader.Collections.Entries([], {
        feed: this,
      });
    }
    return this._entries;
  },

  parse: function (resp) {
    if (resp.entries) {
      this.entries().set(resp.entries, {parse: true})
      delete resp.entries;
    }
    return resp
  }

});