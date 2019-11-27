const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    index,
    show,
    new: newFlight,
    create
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights});
    }).sort('departs');
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets){
            if (err) res.send(err) // dont do this in production but its great for development
        res.render('flights/show', {title: 'Flight Details', flight, tickets} );
        })
})
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight'});
}
    
    
function create(req, res) {
    for(let key in req.body) {
      if(req.body[key] === '') delete req.body[key];
    }
    const flight = new Flight(req.body);
    flight.save(function(err) {
    if (err) return res.render('flights/new');
    res.redirect('/flights');  
});
}

  // remove empty strings so that that
  //default mongoose values
  //will see undefined instead of ''