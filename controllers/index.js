exports.getHomePage = (req, res) => {
  try {
    res.render("index", { title: "Home" });
  } catch (err) {
    console.log(err);
  }
};

exports.getClassesPage = (req, res) => {
  try {
    res.render("classes", { title: "Classes" });
  } catch (err) {
    console.log(err);
  }
};

exports.getSchedulesPage = (req, res) => {
  try {
    res.render("schedules", { title: "Schedules" });
  } catch (err) {
    console.log(err);
  }
};

exports.getAboutPage = (req, res) => {
  try {
    res.render("about", { title: "About" });
  } catch (err) {
    console.log(err);
  }
};

exports.getContactPage = (req, res) => {
  try {
    res.render("contact", { title: "Contact" });
  } catch (err) {
    console.log(err);
  }
};
