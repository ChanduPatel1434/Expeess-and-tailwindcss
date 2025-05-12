const registerContacts = [];

exports.getContacts = (req, res, next) => {
  console.log(req.url, req.method);
  res.render('host/contact-us', { pageTitle: 'Contct-us', currentPage: 'contact-us' })
};


exports.postcontats = (req, res, next) => {
  console.log(registerContacts);
  registerContacts.push(req.body);
  res.render('host/contact-success', { pageTitle: 'contact-success', currentPage: 'contact-success' })
};






exports.registerContacts = registerContacts;