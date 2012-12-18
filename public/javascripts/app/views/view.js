// view.js
// -------
define(['jquery', 'underscore', 'backbone', 'app/models/model', 'jade!app/templates/headings'],

    function ($, _, Backbone, Model, headingView){

        var View = Backbone.View.extend({

            // The DOM Element associated with this view
            el: ".example",
            quote: "",

            // View constructor
            initialize: function () {

                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {

            },

            getQuote: function () {
                // set your twitter id
                var user = 'Inspire_Us';
                this.quote = 'We must be the change we wish to see in the world. -Gandhi'
                // using jquery built in get json method with twitter api, return only one result
                $.getJSON('https://api.twitter.com/1/statuses/user_timeline.json?screen_name=' + user + '&count=1&callback=?', function(data) {
                    if(data) {
                        // result returned
                        this.quote = data[0].text
                    }
                    //console.log(this.quote); //DEBUG
                    $("p.main-quote").append(this.quote);
                });

                //return tweet;

                //$.getJSON('http://twitter.com/statuses/user_timeline.json?screen_name=' + user + '&count=1&callback=?', function(data) {});
                    

            },

            // Renders the view's template to the UI
            render: function () {

                // Setting the view's template property using the Underscore template method
                //this.template = _.template(template, {});
                // Dynamically updates the UI with the view's template
                //this.$el.html(this.template);
                
                this.$el.html("<span class='red'>Hello <b>Again</b></span>");
                this.$el.html(headingView());
                //console.log(headingView());
                this.getQuote();
                //$("p.main-quote").append(this.quote);
                //var temp = this.getQuote();

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return View;

    }

);