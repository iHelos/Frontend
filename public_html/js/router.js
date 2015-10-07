define([
    'backbone',
    'views/login',
    'views/manager',
    'views/main'
], function(
    Backbone,
    LoginScreen,
    Manager,
    MainMenu
){

    var Router = Backbone.Router.extend({
        routes: {
            'scoreboard': 'scoreboardAction',
            'game': 'gameAction',
            'login': 'loginAction',
            '*default': 'defaultActions'
        },
        initialize: function(){
            Manager.addView(LoginScreen);
            Manager.addView(MainMenu);
        },
        defaultActions: function () {
            MainMenu.show();
        },
        scoreboardAction: function () {
            // TODO
        },
        gameAction: function () {
            // TODO
        },
        loginAction: function () {
            LoginScreen.show();
        }
    });

    return new Router();
});