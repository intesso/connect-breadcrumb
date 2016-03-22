var urlBreadcrumb = require('url-breadcrumb');

// breadcrumb middleware
module.exports = function breadcrumb(opts) {

  // options
  opts = opts || {};
  opts.resAttribute = opts.resAttribute || 'breadcrumb';

  // middleware
  return function breadcrumbMiddleware(req, res, next) {
    var crumbs = urlBreadcrumb(req.url, opts);
    res.locals = res.locals || {};
    res.locals[opts.resAttribute] = res[opts.resAttribute] = crumbs;
    next();
  }
  
}