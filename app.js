
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

/**
 * Configurations.
 */

// Configuration App
app.configure(function(){
  app.set('port', process.env.PORT || 80);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('less-middleware')({ 
    dest: __dirname + '/public/stylesheets',
    src: __dirname + '/src/less',
    prefix: '/stylesheets',
    compress: true
  }));
  app.use(express.static(path.join(__dirname, 'public')));
});


// Configuration Development
/*
app.configure('development', function(){
  app.use(express.errorHandler());
});
*/
app.configure('development', function(){
  app.use(express.logger({ format: ':method :uri' }));
  app.use(express.errorHandler());
});

app.configure('production', function() {
  app.use(express.logger());
  app.use(express.errorHandler()); 
});

app.configure('test', function() {
  app.use(express.logger());
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});


/**
 * Route Pages.
 */


app.get('/', function(req, res){
  res.render('index', { title: 'pert-lit' });
});

//app.get('/', routes.index);
app.get('/users', user.list);


http.createServer(app).listen(app.get('port'), function(){
  //console.log("Express server listening on port " + app.get('port'));
  console.log("Express server listening on port %d in %s mode http://localhost:%d/", app.get('port'), app.settings.env, app.get('port'));

});
