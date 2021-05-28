var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var logger = require('morgan');
var mongoose = require('mongoose');

// client side route files
var digitalMarketingRouter = require('./routes/user/digitalMarketing');
var humanResourceRouter = require('./routes/user/humanResource');
var itRouter = require('./routes/user/it');
var retailManagementRouter = require('./routes/user/retailManagement');
var travelManagementRouter = require('./routes/user/travelManagement');
var enrollNowRouter = require('./routes/user/enrollNow');
var facultyRouter = require('./routes/user/faculty');
var franchiseRouter = require('./routes/user/franchise');
var procedureRouter = require('./routes/user/procedure');
var studentRouter = require('./routes/user/student');
var accreditationRouter = require('./routes/user/accreditation');
var ourStoryRouter = require('./routes/user/ourStory');
var whyChooseUsRouter = require('./routes/user/whyChooseUs');
var careerRouter = require('./routes/user/career');
var internshipRouter = require('./routes/user/internship');
var placementRouter = require('./routes/user/placement');
var qaRouter = require('./routes/user/qa');
var contactRouter = require('./routes/user/contact');
var enquireNowRouter = require('./routes/user/enquireNow');
var termConditionRouter = require('./routes/user/termCondition');
var faqRouter = require('./routes/user/faq');
var feedbackRouter = require('./routes/user/feedback');
var usersRouter = require('./routes/user/users');
var indexRouter = require('./routes/user/index');

// admin side route files
var adminLoginRoute = require('./routes/admin/login');
var adminDashboardRoute = require('./routes/admin/dashboard');
var graphRouter = require('./routes/admin/graph');
var contactLeadRouter = require('./routes/admin/contactLead');
var studentLeadRouter = require('./routes/admin/studentLead');
var facultyLeadRouter = require('./routes/admin/facultyLead');
var addNewsRouter = require('./routes/admin/addNews');
var deleteNewsRouter = require('./routes/admin/deleteNews');
var updateNewsRouter = require('./routes/admin/updateNews');
var allNewsRouter = require('./routes/admin/allNews');
var broucherLeadRouter = require('./routes/admin/broucherLead');
var franchiseLeadRouter = require('./routes/admin/franchiseLead');

// initializing express app
var app = express();

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

let upload = multer({ storage: storage, limits: { fileSize: 2000000 } });

// creating database connections..
mongoose
  .connect(
    'mongodb+srv://girdhar_vikash:Syolodelhi1@syologroup.vu6tc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('database connected');
  })
  .catch((err) => {
    console.log('error in connecting database. err: ' + err);
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('./uploads'));
app.use('/admin/uploads', express.static('./uploads'));

// client side route
app.use('/digitalMarketing.html', digitalMarketingRouter);
app.use('/humanResource.html', humanResourceRouter);
app.use('/it.html', itRouter);
app.use('/retailManagement.html', retailManagementRouter);
app.use('/travelManagement.html', travelManagementRouter);
app.use('/enrollNow.html', enrollNowRouter);
app.use('/faculty.html', facultyRouter);
app.use('/franchise.html', franchiseRouter);
app.use('/procedure.html', procedureRouter);
app.use('/student.html', studentRouter);
app.use('/accreditation.html', accreditationRouter);
app.use('/ourStory.html', ourStoryRouter);
app.use('/whyChooseUs.html', whyChooseUsRouter);
app.use('/career.html', careerRouter);
app.use('/internship.html', internshipRouter);
app.use('/placement.html', placementRouter);
app.use('/quality&assurance.html', qaRouter);
app.use('/contactUs.html', contactRouter);
app.use('/enquireNow.html', enquireNowRouter);
app.use('/TermCondition.html', termConditionRouter);
app.use('/faqNew.html', faqRouter);
app.use('/feedback.html', feedbackRouter);
app.use('/users', usersRouter);
app.use('/', indexRouter);

// admin side routes
app.use('/admin/franchiseLead', franchiseLeadRouter);
app.use('/admin/contactLead', contactLeadRouter);
app.use('/admin/studentLead', studentLeadRouter);
app.use('/admin/facultyLead', facultyLeadRouter);
app.use('/admin/addNews', upload.single('imageUrl'), addNewsRouter);
app.use('/admin/deleteNews', deleteNewsRouter);
app.use('/admin/updateNews', updateNewsRouter);
app.use('/admin/allNews', upload.single('imageUrl'), allNewsRouter);
app.use('/admin/broucherLead', broucherLeadRouter);
app.use('/admin/dashboard', adminDashboardRoute);
app.use('/admin/graph', graphRouter);
app.use('/admin', adminLoginRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
