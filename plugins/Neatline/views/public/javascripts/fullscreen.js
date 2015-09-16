
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

  body.css('margin', 0);

  exhibit.detach();
  $('body').empty()
  body.append("<nav id='top-nav' role='navigation'>  <ul class='navigation'>    <li>   <a href='/peacetestimonies/about-project'>About</a>   <ul>   <li>  <a href='/peacetestimonies/acknowledgements'>Acknowledgements</a>   </li>   <li>  <a href='/peacetestimonies/curatorial'>Curatorial Statement</a>   </li>   </ul>    </li>    <li>   <a href='/peacetestimonies/homepage'>Networks of Annotations by Artist</a>   <ul>   <li>  <a href='/peacetestimonies/network-of-annotations-hughes'>Langston Hughes</a>   </li>   <li>  <a href='/peacetestimonies/network-of-annotationspicasso'>Pablo Picasso</a>   </li>   <li>  <a href='/peacetestimonies/network-of-annotations-rukeyser'>Muriel Rukeyser</a>   </li>   <li>  <a href='/peacetestimonies/network-of-annotations-woolf'>Virginia Woolf</a>   </li>   </ul>    </li>    <li>   <a href='/peacetestimonies/posters'>Posters</a>   <ul>   <li>  <a href='/peacetestimonies/art-as-a-way-of-spreading-ideas'>Art as a Way of Spreading Ideas</a>   </li>   <li>  <a href='/peacetestimonies/definitions-of-pacifism'>Definitions of Pacifism</a>   </li>   <li>  <a href='/peacetestimonies/feminism-virginia-woolf'>Feminism: Virginia Woolf</a>   </li>   <li>  <a href='/peacetestimonies/pacifism-woolf'>Pacifism: Virgina Woolf</a>   </li>   <li>  <a href='/peacetestimonies/poetry-and-peace-ruykeser'>Poetry and Peace: Ruykeser</a>   </li>   <li>  <a href='/peacetestimonies/positive-peace-the-quakers-in-spain'>Positive Peace: the Quakers in Spain</a>   </li>   <li>  <a href='/peacetestimonies/total-war-picasso'>Total War: Picasso</a>   </li>   </ul>    </li>    <li>   <a href='https://ds-omeka.haverford.edu/peacetestimonies/neatline/fullscreen/mindmap2'>Annotations Map</a>    </li></ul>   </nav>")
  $('body').append(exhibit);

  var position = function() {
    map.css('height', $(window).height());
    Neatline.execute('MAP:updateSize');
  }

  $(window).resize(position);
  position();

});
