const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/', function(req,res){ res.render('index', {}); });
app.use("/searchCharacter", require('./require/searchCharacter.js'));
app.use("/InqueryCharacter", require('./require/InqueryCharacter.js'));
app.use("/showImage", require('./require/showImage.js'));
app.use("/timeline", require('./require/timeline.js'));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000);