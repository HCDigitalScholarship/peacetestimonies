
/**
 * @package     omeka
 * @subpackage  neatline
 * @copyright   2014 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

$(function() {

  var map = $('#neatline-map');
  var exhibit = $('#neatline');
  var body = $('body');

  //body.css('margin-top', 50);
  exhibit.detach();
  body.empty();
  body.append(

"<div id='primary-nav' style='width:100%;z-index:10;'><ul class='navigation'><li><a href='/lancasterproject/'>Home</a></li><li><a href='http://ds.haverford.edu/lancasterproject/neatline/fullscreen/arcades'>Saunter Down Lancaster Avenue</a></li><li><a href='/lancasterproject/items/tags/'>Browse Tags</a></li><li><a href='/lancasterproject/items/browse'>Items</a></li></ul></div>");
  $('body').append(exhibit);


  var position = function() {
    map.css('height', $(window).height());
    Neatline.execute('MAP:updateSize');
  }

  $(window).resize(position);
  position();
});
