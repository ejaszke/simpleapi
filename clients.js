var _ = require('lodash');

module.exports = function(app) {
    _clients = [];
    app.post('/clients', function (req, res) {
        _clients.push(req.body);
        res.json({info: 'client created'});
    });

    app.get('/clients', function (req, res) {
        res.send(_clients);
    });

    app.get('/clients/:id', function (req, res) {
        res.send(
            _.find(
                _clients,
                {
                    vatNumber: req.params.id
                }
            )
        );
    });

    app.put('/clients/:id', function (req, res) {
        var index = _.findIndex(
            _clients,
            {
                vatNumber: req.params.id
            }
        );
        _.merge(_clients[index], req.body);
        res.json({info: 'client updated'});
    });

    app.delete('/clients/:id', function (req, res) {
        _.remove(
            _clients,
            function(client) {
                return client.vatNumber === req.params.id;
            });
        res.json({info: 'client deleted'});
    });
};