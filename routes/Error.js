import Exception from '../exception/index.js'

export const app_404 = function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
}

export const app_500 = function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json(Exception({ code: '000404' }));
}