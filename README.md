# zAccordions
This is custom Jquery plugin

### Options
* It has two mode accordion/toggle.
* You can easily customize classes name.
* You can also change current item class.
* It works only unordered lists items.

### JQuery Example

    <script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
    <script src="zAccordion.js"></script>
    <script type="text/javascript">
    	$(function () {
    		$('.cat').zAccordion();
    	})
    </script>

### CSS Example

    <link rel="stylesheet" type="text/css" href="zAccordion.css">

### HTML Example

    <ul class="yourclass">
    	<li>
    		<a href="#">link</a>
    		<ul>
    			<li>
    				<a href="#">Sublink</a>
    				<ul>
    					<li><a href="#">Sub Sublink</a></li>
    					<li><a href="#">Sub Sublink</a></li>
    					<li><a href="#">Sub Sublink</a></li>
    				</ul>
    			</li>
    			<li><a href="#">Sublink</a></li>
    		</ul>
    	</li>
    	<li><a href="#">link</a></li>
    </ul>
