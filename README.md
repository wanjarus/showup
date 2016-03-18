# jQuery.showup

This plugin lets you execute your code after a certain element appears in the viewport.

jQuery.showup can be used, for instance, to add some visual effects as user scrolls down the page to improve user experience.

## Demo

Check out the demo <a href="http://acostcc.github.com/showup.html" target="_blank">here</a>.

## Usage

The usage is pretty simple.

### Installation

You can install the plugin with bower like so:

    bower install jquery-showup

### Including stuff

Then you should include jQuery and plugin in your HTML:

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <script src="jquery.showup.min.js"></script>

And here we go! It's now ready to use.

### How to use it?

As I said before it's quite simple.

Plugin adds `showup` method to jQuery. To execute some function after element's appearance you must pass that function as an argument of `showup`.

Here is an example.

    // First we need to be sure that DOM is ready.

    $(document).ready(function() {

        // After that we use 'showup' method on the element that we are tracking.

        $('#orange-box').showup(function(){

            /*  As user starts to see #orange-box,
                we change #black-box text to "Bar". */

            $('#black-box').html('Bar');
        });

    });

If you want to see this in action, <a href="http://acostcc.github.com/showup.html" target="_blank">go to the demo</a>.

# Issues

> “Anyone who has never made a mistake has never tried anything new.”
&mdash; _Albert Einstein_.

If you found an error, I'm always waiting for you <a href="https://github.com/acostcc/showup/issues">here</a>.

# License

> Licensed under <a href="http://opensource.org/licenses/MIT">MIT license</a>.
>
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without
> restriction, including without limitation the rights to use,
> copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the
> Software is furnished to do so, subject to the following
> conditions:
>
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
> HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
> FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.