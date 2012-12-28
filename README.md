# Introducing VideoBumpers.js
An easy-to-use jQuery plugin for adding in and out bumpers to HTML5 video.

## How Do I Use It?
Include jQuery 1.7+ and jquery.videobumpers.js in your layout and target your video's container with `videoBumpers()`.

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
    $("#element-containing-videos").videoBumpers(options);
  });
</script>
```

## Credits
@kieranmasterton