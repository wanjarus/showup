/**
 * jQuery Showup Plugin
 * @version 1.0.1
 * @author Andrey Kostenko
 * @license MIT
 * @copyright Andrey Kostenko 2016
 */
(function( window, $ ) {
    "use strict";

    var elements = [],

        /**
         * A callback that fires on 'scroll' and 'resize' window events
         */

        eventsCallback = function() {
            var i = 0;

            for ( ; i < elements.length; i++ ) {
                if ( isShownUp( elements[i] ) ) {

                    // Executing the callback
                    $( elements[i] ).data( 'showup_callback' ).call( elements[i] );

                    // Removing callback and element references to avoid it firing again and again.
                    $( elements[i] ).data( 'showup_callback', null );
                    elements.splice( i, 1 );
                }
            }
        },

        /**
         * Checks is some part of the element in the viewport
         * @param {Element} element
         * @returns {boolean}
         */

        isShownUp = function( element ) {
            var rect = element.getBoundingClientRect();
            return window.innerHeight - rect.top > 0 && rect.bottom > 0;
        };

    $.fn.extend({
        /**
         * @param {Function} cb
         * @returns {jQuery}
         */
        showup: function( cb ) {
            return this.each(function(){

                // Check is the element already visible

                if ( isShownUp( this ) ) {
                    cb.call( this );
                    return;
                }

                // Saving reference to the callback function to use it when the element has shown up

                $(this).data( 'showup_callback', cb );
                elements.push( this );
            });
        }
    });

    $(window).on( 'scroll resize', eventsCallback );

})( window, jQuery );