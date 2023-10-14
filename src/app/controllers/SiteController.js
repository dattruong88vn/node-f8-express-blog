class SiteController {
  // GET news
  index(req, res) {
    res.render("home");
  }

  // GET search
  search(req, res) {
    res.render("search");
  }

  searchPost(req, res) {
    res.send("");
  }
}

module.exports = new SiteController();
