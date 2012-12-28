# Introducing VideoBumpers.js
An easy-to-use jQuery plugin for adding in and out bumpers to HTML5 video.

## How Do I Use It?
Include jQuery 1.7+ and jquery.videobumpers.js in your layout and target your video's container with `videoBumpers()`. Here's the basics:

1. Create your ogv, webm and mp4 files. Make sure they all have the same file name for example my-cat-video.ogv, my-cat-video.mp4, my-cat-video.webm and place them together in a folder.
2. Do the same for you in and out bumper videos.
3. Using the head example below amend the inSrc and outSrc to the path of your in and out roll bumpers, note, do not add the extension just the name of the file.
4. Amend the path to jQuery and VideoBumpers.js as needed.
5. Using the body example below amend the source tags to the path of your video.
6. You're done, the in and out bumpers should now play before and after your video.

### Head example

```html
<script src="path/to/jquery.min.js"></script>
<script src="path/to/jquery.videobumpers.js"></script>
<script>
  $(document).ready(function(){
	// Define VideoBumpers options.
	var options = {

          inSrc: 'videos/bumper-in', // In roll bumper path note: no extension.
          outSrc: 'videos/bumper-out', // Out roll bumper path note: no extension.

      };
	
    // Target your .container, .wrapper, .post, etc.
    $("#element-containing-video").videoBumpers(options);
  });
</script>
```

### Body example
```html
<div id="element-containing-video">
	<video width="480" height="272" controls>
		<source src="videos/88mph.mp4" type="video/mp4" />
		<source src="videos/88mph.webm" type="video/webm" />
		<source src="videos/88mph.ogv" type="video/ogg" />
	</video>
</div>
```

## Credits
@kieranmasterton