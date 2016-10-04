

Router.route('/', function () {
    this.render('dashboard');
});
Router.route('/cv', function () {
    this.layout('empty');
    this.render('cv');
});