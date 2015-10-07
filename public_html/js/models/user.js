/**
 * Created by iHelo on 07.10.2015.
 */
define([
    'backbone'
], function(
    Backbone
) {

    var UserModel = Backbone.Model.extend({

        url: "/",

        signupCompleteEvent: 'signupCompleteEvent',


        logged_in: false,
        name: "",
        password: "",
        email: ""

    });

    return new UserModel();

});