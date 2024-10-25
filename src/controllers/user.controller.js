import { addNewUser, retrieveUser } from "../services/user.service.js";

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
  //Create user
  const user = retrieveUser();
  res.render("confirm", { user });
};

//When the user submits the data, it'll be redirected to the confirmation page
//No need to use req.params with the addition of services
const processData = (req, res) => {
  const userData = req.body;

  addNewUser(userData);

  res.redirect("/confirm");
};

export default { showHome, showForm, showConfirm, processData };
