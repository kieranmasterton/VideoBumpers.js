/*
 * VideoBumpers.js
 *
 * @author        Kieran Masterton
 * @copyright     (c) 2012 Kieran Masterton
 * @version 0.0.1
 * @requires jQuery
 * Released under the WTFPL license - http://www.wtfpl.net/
 */

(function ($) {

    $.fn.videoBumpers = function (options) {

        // Default values.
        var defaultVal = {

            inSrc: null,
            outSrc: null,
            
        };

        var obj = $.extend(defaultVal, options);
        
        return this.each(function () {
            // Get all videos.
            videos = this.getElementsByTagName('video');
            for(i=0, l=videos.length; i<l; i++) {
                
                // On video play event.
                videos[i].addEventListener('play', function(){
                    // If an in bumper has been defined.
                    if (null != obj.inSrc){
                        // As long as the video hasn't already been played.
                        if(this.hasAttribute('state')){
                            // Get current state
                            state = this.getAttribute('state');
                        }else{
                            var state = null;
                        }
                    
                        if(null == state){
                                // Set state to zero
                                state = 0;
                                this.setAttribute('state', state);
                        
                                // Loop through sources.
                                sources = this.getElementsByTagName('source');
                                  for(ii=0, ll=sources.length; ii<ll; ii++) {
                                     // Get the original video source.
                                     orig = sources[ii].getAttribute('src');
                                     // Set the original video source to a temp attribute so we can use it later.
                                     sources[ii].setAttribute('data-orig', orig);
                                     // Swap the video sources for the in bumper.
                                     sources[ii].setAttribute('src', orig.replace(/^(.*)\.(.*)$/, obj.inSrc + '.$2'));
                                  }
                                  this.load();
                                  this.play();
                            }
                    }
                }, false);
                
                // On video ended event.
                videos[i].addEventListener('ended', function(){
                    if(null != obj.outSrc){
                        // Get current state.
                        state = this.getAttribute('state');
                        
                        // Should we or shouldn't we play the video?
                        var play = false;
                        
                        // Get sources.
                        sources = this.getElementsByTagName('source');
                        for(ii=0, ll=sources.length; ii<ll; ii++) {
                            // Get the original video source.
                            orig = sources[ii].getAttribute('data-orig');
                            if(1 == state){
                                // Set the video source to the out bumper.
                                sources[ii].setAttribute('src', orig.replace(/^(.*)\.(.*)$/, obj.outSrc + '.$2'));
                                play = true;
                            }else{
                                // Load original video.
                                sources[ii].setAttribute('src', orig);
                                // Don't play if it's after the out bumper then don't play.
                                if(2 == state){
                                    play = false;
                                }else{
                                    play = true;
                                }
                            }
                        }
                    
                        // Incremenet state.    
                        if(2 != state){
                            state++;
                            this.setAttribute('state', state);
                        }else{
                            // Clean up after out bumper.
                            this.removeAttribute('state');
                            state = null;
                        }
                    
                        // Load video.
                        this.load();
                        if(true == play){
                            // Play video if required.
                            this.play();
                        }
                }else{
                    // Reload the video after play even if there's no bumpers.
                    this.load();
                }
                      
                }, false);
            }
        });
    }
})(jQuery);