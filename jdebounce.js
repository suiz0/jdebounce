/**
* Yet Another Debounce implementations
* @author Cesar Iduarte
* @version 0.1
*/

if (typeof Function.debounce === 'undefined') {
    /**
    * Debounce definition
    *
    * @param {Function} fn  - Method to execute
    * @param {Number} delay - Milliseconds to posponed the execution of fn
    * @param {Boolean} now  - Flag to specify if the fn will be executed immediately
    *
    * @return {Function}
    */
    Function.prototype.debounce = function(fn, delay, now) {
        var timer = null;

        return function() {
            var context = this, args = arguments;

            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(function() {
                timer = null;
                fn.apply(context, args);
            }, delay);

            if (now) fn.apply(context, args);
        };
    };
}

if (typeof window.JQuery !== 'undefined') {
    jQuery.fn.debounce = Function.debounce;
}
