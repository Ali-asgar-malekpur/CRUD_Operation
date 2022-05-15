var CRUD_Operation = require('../models/CRUD_Operation');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Yes the test Controller is working!');
};

exports.CRUD_Operation_create = function (req, res) {
    var CRUD_Operation = new CRUD_Operation(
        {

            Description: req.body.Description,
            Completed: req.body.Completed
        }
    );

    CRUD_Operation.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Description is being Created successfully!')
    })
};

exports.CRUD_Operation_details = function (req, res) {
    CRUD_Operation.findById(req.params.id, function (err, CRUD_Operation) {
        if (err) return next(err);
        res.send(CRUD_Operation);
    })
};

exports.CRUD_Operation_update = function (req, res) {
    CRUD_Operation.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, CRUD_Operation) {
        if (err) return next(err);
        res.send('Updated Successfully!');
    });
};

exports.CRUD_Operation_delete = function (req, res) {
    CRUD_Operation.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};