//Show home page
const showHome = (req, res) => {
  res.render("home");
};

//Render form
const showForm = (req, res) => {
  res.render("form");
};

//render confirm page
const showConfirm = (req, res) => {
  const { name, age, email } = req.query;
  res.render("confirm", { name, age, email });
};

//When the user submits the data, it'll be redirected to the confirmation page
const processData = (req, res) => {
  const { name, age, email } = req.body;
  res.redirect(
    `/confirm?name=${encodeURIComponent(name)}&age=${encodeURIComponent(
      age
    )}&email=${encodeURIComponent(email)}`
  );
};

export default { showHome, showForm, showConfirm, processData };
