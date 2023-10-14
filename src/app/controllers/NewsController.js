class NewsController {
  // GET news
  index(req, res) {
    res.render("news");
  }

  // GET news/:id
  detail(req, res) {
    res.render("news-detail", { content: req.params.id });
  }
}

module.exports = new NewsController();
