const Ticket = require('../models/ticket');

module.exports = {
    create
}

// Ticket.create(newTicket, function (err, ticket))

// function create(req, res) {
//     for(let key in req.body) {
//       if(req.body[key] === '') delete req.body[key];
//     }
//     const flight = new Flight(req.body);
//     flight.save(function(err) {
//     if (err) return res.render('flights/new');
//     res.redirect('/flights');  
// });
// }