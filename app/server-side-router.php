<?php
/**
 * Server side router
 *
 * Queries the WordPress API based on request_uri slug.
 *
 * Sets a 200 OK Header if a slug corresponds to a published post or page,
 * sets a 404 Not Found otherwise.
 *
 *
 * @TODO:
 * - Is the existence of a published slug a strict enough check? URLs with valid slugs
 * could still be invalid. We really need to query by taxonomy and slug. To do that, need to match
 * URL patterns to taxonomy.
 * - Write unit tests
 */

// Settings

$enabled_post_types = array(
  'post',
  'page'
);

$wordpress_url = 'http://wordpress.local/';
$api_basepath = '/wp-json/wp/v2/';

// End settings


$request_uri = $_SERVER['REQUEST_URI'];

// @TODO: force trailing slash?

$request_uri_parts = explode('/', $request_uri);

$slug = $request_uri_parts[count($request_uri_parts) - 2];

$route_exists = false;

// Assume homepage exists!
if(empty($slug)):
  $route_exists = true;
endif;

// Assume post archives exist
foreach($enabled_post_types as $post_type):
  if(strpos($request_uri, '/' . $post_type . 's/') === 0):
    $route_exists = true;
  endif;
endforeach;

if(!$route_exists):
  // Query the WordPress API for the slug.
  // We have to query once for each enabled post type.
  foreach($enabled_post_types as $post_type):
    $api_query = $post_type . 's?filter[name]=' . $slug;
    $json = file_get_contents($wordpress_url . $api_basepath . $api_query);
    $obj = json_decode($json);

    if(count($obj) !== 0):
      $route_exists = true;
      break;
    endif;
  endforeach;
endif;

if($route_exists):
  header("HTTP/1.1 200 OK");
else:
  header("HTTP/1.0 404 Not Found");
endif;

require_once('index.html');