// View.js
// -------
define(["jquery", "backbone", "app/models/model"],

    function ($, Backbone, Model){

        var View = Backbone.View.extend({

            // The DOM Element associated with this view
            el: ".example",

            // View constructor
            initialize: function () {

                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            render: function () {

                // Setting the view's template property using the Underscore template method
                //this.template = _.template(template, {});

                // Dynamically updates the UI with the view's template
                this.$el.html("<span class='red'>Hello <b>Again</b></span>");

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return View;

    }

);