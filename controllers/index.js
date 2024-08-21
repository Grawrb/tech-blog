// Import express router, api routes and home routes
const router = require('express').Router();
const apiRoutes = require('./api');
const mainRoutes= require('./mainRoutes');
const dashboardRoutes = require('./dashboardRoutes');
//Use the router to use the home routes and api routes. Then export router
router.use('/', mainRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
module.exports = router;