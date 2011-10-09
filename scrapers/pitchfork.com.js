/**
 * Pitchfork Playgrub.source
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on any Pitchfork Track Review and Forkcast pages.
 */


Playgrub.source.url = 'http://.*\.pitchfork\.com';
Playgrub.source.error = 'Tomahawk currently supports the Track Reviews & Forkcast pages only. Please check your url.';
Playgrub.source.scrape = function() {
if (window.location.href.indexOf("pitchfork.com/forkcast") != -1) 
{ 
    $("h1.title").each(function () {
        var song_result = $($(this).children('a')[1]).text();
	song_result = song_result.replace('"', '');
	song_result = song_result.replace('"', '');
        var artist = $($(this).children('a')[0]).text();
        Playgrub.playlist.add_track(artist, song_result);
    });
} else if (window.location.href.indexOf("pitchfork.com/reviews/tracks") != -1) {
    $("div.review-tombstone").each(function () {
        var song_result = $.trim($(this).find('h2').text());
	song_result = song_result.replace('"', '');
	song_result = song_result.replace('"', '');
        var artist = $.trim($(this).find('h1').text());
        Playgrub.playlist.add_track(artist, song_result);
    });
    
} else if (window.location.href.indexOf("pitchfork.com/reviews/best/tracks") != -1) {
    $("div.review-tombstone").each(function () {
        var song_result = $.trim($(this).find('h2').text());
	song_result = song_result.replace('"', '');
	song_result = song_result.replace('"', '');
        var artist = $.trim($(this).find('h1').text());
        Playgrub.playlist.add_track(artist, song_result);
    });    
}

};

Playgrub.source.start();
