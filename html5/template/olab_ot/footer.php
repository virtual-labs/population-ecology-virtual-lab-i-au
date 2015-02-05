   <footer id="tempFooter">
 <div class="g396 footer">
   <p class="labName"><?php echo $GLOBALS['copy_name']; ?></p>
  </div>
  <!-- end .g396 -->
  <div class="g396 footer">
    <p class="copyName"></p>
  </div>
    <div class="clear"></div>
    </footer> <!-- /footer -->
</div>
<?php
getWorksheet();
?>
</body>
</html>
<script>
function simFullScreenOlab(){
		var $ = function(selector,context){return(context||document).querySelector(selector)};
        var iframe = $("iframe"),
            domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');

            var fullscreen = function(elem){
            var prefix;
			
            // Mozilla and webkit intialise fullscreen slightly differently
            for ( var i = -1, len = domPrefixes.length; ++i < len; ) 
			{
              prefix = domPrefixes[i].toLowerCase();
              if ( elem[prefix + 'EnterFullScreen'] ) {
                // Webkit uses EnterFullScreen for video
                return prefix + 'EnterFullScreen';
                break;
              } else if( elem[prefix + 'RequestFullScreen'] ) {
                // Mozilla uses RequestFullScreen for all elements and webkit uses it for non video elements
                return prefix + 'RequestFullScreen';
                break;
              }
            }
            return false;
        }; 
        // Webkit uses "requestFullScreen" for non video elements
        var fullscreenother = fullscreen(document.createElement("iframe"));
        if(!fullscreen) {
            alert("Fullscreen won't work, please make sure you're using a browser that supports it and you have enabled the feature");
            return;
        }
		iframe[fullscreenother]();
		(this,this.document);
	    }

</script>