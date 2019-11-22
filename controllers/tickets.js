const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

function create(req, res) {
    req.body.flight = req.params.id 
    Ticket.create(req.body, (err, ticket) => {
        console.log(ticket);
        res.redirect(`/flights/${ticket.flight}`);
    });
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      res.render('tickets/new', {title: 'Add Ticket', flight});
    });
  }
  



