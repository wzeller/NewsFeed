class EntriesController < ApplicationController
  def index
    feed = Feed.find(params[:feed_id])
    feed.reload
    render :json => feed.entries
  end

  private
  def entry_params
    params.require(:entry)
      .permit(:guid, :link, :published_at, :title, :json, :feed_id)
  end
end
