function hashCorrection() {

	

	var hash = window.location.hash.substring(1);
	if(hash) {
		$('html, body').animate({
		
			scrollTop:($('#'+hash).offset().top-$('#gt-header').height())
		}, 800, function() {

		});
	}
}


function loadParallaxBgs() {
	$('.js-parallax').each(function() {
		$(this).css('background-image', 'url('+$(this).data('background-image')+')');
	});
}


;(function( $ ) {
	"use strict";


    $(document).ready(function() {
	
		$('a.gt-back-to-top-button').click(function() {
			$('html, body').animate({
		
				scrollTop:0
			}, 800, function() {

			});
		});
     
     
		$('.gt-chart').each(function(i, obj){
		
		    var obj = $(obj);
    		obj.waypoint(function( direction ) {
    
    			if ( ! obj.data( 'animated' ) ) {
				    $(obj).easyPieChart({
						size: 140,
						scaleColor: false,
						trackColor: '#eaebec',
						barColor: '#47b4d3',
						lineWidth: 7,
						lineCap: 'butt',
						easing: 'easeIn',
						onStep: function(from, to, percent) {
							$(this.el).find('span').text(Math.round(percent)+'%');
						}
					});
    				obj.data( 'animated', true );
    			};
    			
    		}, { offset: 'bottom-in-view' });
	
		});         
     
    	$( '.js-progress-bar' ).each(function( i, obj ) {
    
    		var obj = $( obj ), value = obj.data( 'value' ), $inner = $(obj).find('.gt-progress-bar-inner'), $value=$(obj).find('.gt-progress-bar-value');        
            $value.html('0%');
			if(obj.data('color')) {
				obj.find('.gt-progress-bar-inner').css('background', obj.data('color'));
				//alert(obj.data('color'));
			}
    		obj.waypoint(function( direction ) {
    
    			if ( ! obj.data( 'animated' ) ) {
    				$({ progress: 0 }).animate({ progress: value }, {
    					duration: 1000,
    					step: function( now, tween ) {
    					    $value.html(Math.round(now)+'%');
    					    $value.css( 'left', (now)+'%');
    						$inner.css( 'width', now + '%' );
    					},
    				});
    				obj.data( 'animated', true );
    			};
    			
    		}, { offset: 'bottom-in-view' });
    
    	}); 
        function number_format(number, decimals, dec_point, thousands_sep) {
        
          number = (number + '')
            .replace(/[^0-9+\-Ee.]/g, '');
          var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            s = '',
            toFixedFix = function(n, prec) {
              var k = Math.pow(10, prec);
              return '' + (Math.round(n * k) / k)
                .toFixed(prec);
            };
          // Fix for IE parseFloat(0.55).toFixed(0) = 0;
          s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
            .split('.');
          if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
          }
          if ((s[1] || '')
            .length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1)
              .join('0');
          }
          return s.join(dec);
        }
           
    	
    	$('.js-counter').each(function(i, e) {
    		var obj = $(e), value = obj.data('count'), $counter = $(e).find('.gt-icon-counter-count');
    
            $counter.html('0');
    		obj.waypoint(function( direction ) {
    
    			if ( ! obj.data( 'counted' ) ) {
    				$({ progress: 0 }).animate({ progress: value }, {
    					duration: 1500,
    					step: function( now, tween ) {
    					   $counter.html(number_format(Math.round(now),0,'',' '));
    					},
    				});
    				obj.data( 'counted', true );
    			};
    			
    		}, { offset: 'bottom-in-view' });        
        
        });
        
    
        if ( $.fn.parallax ) {	
    		$( window ).on( 'load', function() {
    			$( '.js-parallax' ).parallax( '50%', 0.5 );
    		});
    	};       
    
    
        $('.gt-team-member').hover(function() {
            $(this).find('.gt-team-member-contact').stop().animate({opacity:1}, 200);    
        }, function() {
            $(this).find('.gt-team-member-contact').stop().animate({opacity:0}, 200);     
        });
        
        
      
    	
    
        
    	$('.gt-map-launcher').click(function() {
    		$('#'+$(this).data('launch-id')).slideToggle('slow');
    		if($(this).data('open')==true) {
    			$(this).data('open', false);
    			$(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-down');			
    		} else {
    			$(this).data('open', true);	
    			$(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
    		}
    	});
    	
    	$('#contact-map').gmap3({
    		 map: {
    			options: {
    			  maxZoom: 14,
    			  scrollwheel: false,
    			  mapTypeId: "gt-style",
    			mapTypeControl:false,		
    			} 
    		 },
    			styledmaptype:{
    			  id: "gt-style",
    			  options:{
    				name: "Mr UX Style"
    			  },
    			  styles: [
    		  {
    			  "featureType": "road.highway",
    			  "elementType": "geometry",
    			  "stylers": [
    				{ "saturation": -100 },
    				{ "lightness": -8 },
    				{ "gamma": 1.18 }
    			  ]
    		  }, {
    			  "featureType": "road.arterial",
    			  "elementType": "geometry",
    			  "stylers": [
    				{ "saturation": -100 },
    				{ "gamma": 1 },
    				{ "lightness": -24 }
    			  ]
    		  }, {
    			  "featureType": "poi",
    			  "elementType": "geometry",
    			  "stylers": [
    				{ "saturation": -100 }
    			  ]
    		  }, {
    			  "featureType": "administrative",
    			  "stylers": [
    				{ "saturation": -100 }
    			  ]
    		  }, {
    			  "featureType": "transit",
    			  "stylers": [
    				{ "saturation": -100 }
    			  ]
    		  }, {
    			  "featureType": "water",
    			  "elementType": "geometry.fill",
    			  "stylers": [
    				{ "saturation": -100 }
    			  ]
    		  }, {
    			  "featureType": "road",
    			  "stylers": [
    				{ "saturation": -100 }
    			  ]
    		  }, {
    			  "featureType": "administrative",
    			  "stylers": [
    				{ "saturation": -100 }
    			  ]
    		  }, {
    			  "featureType": "landscape",
    			  "stylers": [
    				{ "saturation": -100 }
    			  ]
    		  }, {
    			  "featureType": "poi",
    			  "stylers": [
    				{ "saturation": -100 }
    			  ]
    		  }, {
    		  }
    					]
    			}, 
    		 
    		 marker:{
    			address: $('#contact-map').data('address'),
    			options: {
    			 icon: new google.maps.MarkerImage(
    			   "images/google-marker.png",
    			   new google.maps.Size(113, 120, "px", "px")
    			 )
    			}
    		 }
    		},
    		"autofit");
    	
    	$('.js-ajax-popup').click(function() {
    		$('body').append('<div id="gt-popup"><div id="gt-popup-loading"><i class="fa fa-spinner fa-spin"></i></div></div>');
    		$('body').css('overflow','hidden');
    
    		$('#gt-popup').animate({opacity:0.7}, 300);
    		$.get($(this).attr('href'), function(data) {
    			$('#gt-popup-loading').animate({opacity:0}, 300, function() {
    				$(this).remove();
    				$('#gt-popup').html(data);
					loadParallaxBgs();
    				$('#gt-popup').animate({opacity:1}, 300);
                    if($('.right-gray-left').length>0) {
                        //alert('aa');
                        $('.right-gray').remove();
                        //alert($('.right-gray-left'));
                        //$('.right-gray-left').css('background','#ce0000');
                        var left=$('.right-gray-left').offset().left+30+$('.right-gray-left').width();
                        var right=($('.right-gray-right').offset().left+15);
                        $('.right-gray-left').parents('.gt-section').before('<div class="right-gray" style="z-index: -10; left: '+(left+((right-left)/2-8))+'px;"></div>'); 
             			//$('body').children().first().before('<div class="right-gray" style="left: '+(left+((right-left)/2-8))+'px;"></div>');                         
                    }       				
    			});
    			
    
    		});
    		return false;		
    	});
    	
    	$(document).on('click', '.js-close-popup', function() {
    		$('body').css('overflow', 'auto');		
    		$('#gt-popup').animate({opacity:0}, 500, function() {
    	
    			$(this).remove();
    
    		});
    		return false;
    	});
    	
    	$(document).on('click', '#gt-next-project a, #gt-prev-project a', function() {
    		var ob=$(this);
    		$('#gt-popup *').animate({opacity:0}, 300, function() {
    		
    			$('#gt-popup').html('<div id="gt-popup-loading"><i class="fa fa-spinner fa-spin"></i></div>');
    			$('#gt-popup-loading').animate({opacity:1}, 300, function() {
    				$.get(ob.attr('href'), function(data) {
    					$('#gt-popup-loading').animate({opacity:0}, 300, function() {
    						$(this).remove();
    						$('#gt-popup').html(data);
    						$('#gt-popup').animate({opacity:1}, 300);
    					});
    					
    
    				});
    			});
    			
    		});
    		
    		return false;
    	});
    
            
    	
    	$('.floater').waypoint(function( direction ) {
    
    		var $header = $( '#gt-header' );
    
    		if ( direction == 'down' ) {
    			$(this).css('height', '73px');
    			$header.css( 'top', $( 'body' ).offset().top ).addClass( 'floating' );
    		} else if ( direction == 'up' ) {
    			$(this).css('height', '0');
    			$header.css( 'top', '0').removeClass( 'floating' );
    		};
    	}, { offset: $( 'body' ).offset().top });	
    	
        
        $('ul#main-menu li a[href]').click(function(e) {
            e.preventDefault();    	
    
            var object=$(this);
    		$('ul#main-menu li').removeClass('active');
    		$(this).parent().addClass('active');
    		if($(this).attr('href').substr(0,1)=='#') {
    
    	
    			$('html, body').animate({
    			
    				scrollTop:($(object.attr('href')).offset().top-$('#gt-header').height())
    			}, 800, function() {
    			});
    		
    		} else {
    
    			document.location=$(this).attr('href');
    		}
            return false;
            
        });
    	
    	$('a.gt-button-top[href]').click(function(e) {
            e.preventDefault();    
            var object=$(this);
            $('html, body').animate({
                scrollTop:($(object.attr('href')).offset().top-$('#top-menu').height())
            }, 800);
            return false;	
    	});
        
    
    
        
          
    	$('body').jpreLoader({
    	   showPercentage:true,
    	   loaderVPos:"50%",
    	   splashVPos: 0,
    	}, function() {
    		$('.gt-map-content').toggle(0);
    	});
    	
    	
    	
    	// js hero slider
    	$('.js-hero-slider li').css({
            opacity: 0,
            position: 'absolute',
            top: 0,
            display: 'none'
        });
        $('.js-hero-slider li.gt-top-slider-pager-outer').css({'display':'table', 'opacity': 1});
        $('.js-hero-slider li').first().css('display', 'block').animate({'opacity':1}, 500);
        
        $('.js-hero-slider li.gt-top-slider-pager-outer a').click(function() {
            $('.js-hero-slider li.gt-top-slider-pager-outer a').removeClass('pager-active');
            $(this).addClass('pager-active');
            var object=$(this);
            $('.js-hero-slider li.gt-slide:not(.js-hero-slider li.gt-slide:nth-child('+$(this).data('slide')+'))').animate({'opacity':0}, 500, function() {
                $('.js-hero-slider li.gt-slide:not(.js-hero-slider li.gt-slide:nth-child('+object.data('slide')+'))').css('display', 'none');
            });
            $('.js-hero-slider li.gt-slide:nth-child('+$(this).data('slide')+')').css('display', 'block').animate({'opacity':1}, 500);
        });
    	        
    	         
    	         

    	var tweet_template='<div class="gt-twitter-date">{{date}}</div><div class="gt-twitter-tweet">{{tweet}}</div><div class="gt-twitter-links"><a href="https://twitter.com/intent/tweet?in_reply_to={{id}}"><i class="fa fa-reply"></i>Reply</a><a href="https://twitter.com/intent/retweet?tweet_id={{id}}"><i class="fa fa-retweet"></i>Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id={{id}}"><i class="fa fa-star"></i>Favorite</a></div>';
        $('.js-twitter-feed').twittie({
            apiPath: 'tweetie/api/tweet.php',
            username: $('.js-twitter-feed').data('username'),
            dateFormat: '%b. %d, %Y',
            template: tweet_template,
            count: $('.js-twitter-feed').data('max-items'),
        }, function () {
            $('.js-twitter-feed ul').cycle({
                slides:"> li",
                pager:".gt-twitter-pager"        
            });

        });	
    	
    	
    	function section_scroller() {
    		//alert('scroll');
    	}
    

    
    	
    	var cur_object='';
    	$(window).scroll(function() {
    		var fnd=0;
    		var new_object=null;
    		$('section').each(function() {
    			if($(this).position().top-80 >$(document).scrollTop()) {
    				new_object=$(this).prev().attr('id');
    				fnd=1;
    				return false;
    			}
    		});
    		if(!fnd) {
    			new_object=$('section').last().attr('id');
    		}
    		if(new_object!=cur_object) {
    			cur_object=new_object;
    		}
    		$('ul#main-menu li').removeClass('active');
    		$('ul#main-menu li a[href=#'+new_object+']').parents('li').addClass('active');
    	});
    	
    });
    
    
    $(document).ready(function() {
		$('ul.gt-tabs-content li').click(function() {
			$(this).parent().find('li').removeClass('active');
			$(this).addClass('active');
			$(this).parents('.gt-tab-container').find('.gt-tab-content').css('display', 'none');
			$('.gt-tab-content[data-tab='+$(this).data('display')+']').css('display','block');
		});
		
		$('.gt-tab-container').each(function() {
			$(this).find('ul.gt-tabs-content li').first().trigger('click');
		});
     	
        if($('.right-gray-left').length>0) {
            $('.right-gray').remove();
            var left=$('.right-gray-left').offset().left+30+$('.right-gray-left').width();
            var right=($('.right-gray-right').offset().left+15);
            $('.right-gray-left').parents('.gt-section').before('<div class="right-gray" style="z-index: -10; left: '+(left+((right-left)/2-8))+'px;"></div>');                      
        }     
        
        
    
               	

	});
	
	$(window).resize(function() {
        if($('.right-gray-left').length>0) {
            $('.right-gray').remove();
            var left=$('.right-gray-left').offset().left+30+$('.right-gray-left').width();
            var right=($('.right-gray-right').offset().left+15);
            $('.right-gray-left').parents('.gt-section').before('<div class="right-gray" style="z-index: -10; left: '+(left+((right-left)/2-8))+'px;"></div>'); 
 			//$('body').children().first().before('<div class="right-gray" style="left: '+(left+((right-left)/2-8))+'px;"></div>');                         
        }    
    });
	  
    
    
    $(window).load(function() {

		

    
        $('.js-masonry').masonry({  
          itemSelector : '.gt-blog-item-outer',
          gutter: 0, 
        });
    	
        $('.gt-section-logos').each(function() {
            var height=0, tmp_height=0;
            $(this).find('.gt-logo').each(function() {
                tmp_height=$(this).find('img').height();
                if(tmp_height>height) height=tmp_height;      
            });
            $(this).find('.gt-logo').each(function() {
                $(this).find('img').css('margin-top', Math.round((height-$(this).find('img').height())/2)+'px');        
            });
        });		
    
    
        $('.gt-projects').isotope();
        
        $('.isotope-filter li a').click(function() {
            $(this).parents('ul').find('li').removeClass('active');
            $(this).parent().addClass('active');
            $('#'+$(this).parents('ul').data('filter-id')).isotope({filter:$(this).data('filter') });
            return false;    
        });
    	
    
    
    
    
    
    
    	
    	setTimeout("hashCorrection()", 300);
    
    	
    	$('ul.gt-top-slider').css('height', $(window).height()+'px');	
    }); 
    
    $(window).resize(function() {
    
    	$('ul.gt-top-slider').css('height', $(window).height()+'px');
    
    });
	
	
	
	$(document).ready(function() {
		loadParallaxBgs();
		
		$('ul.gt-features-expandable').each(function() {
			$(this).find('p').toggle();
		});
		
		$('ul.gt-features-expandable li').click(function() {
			$(this).parent().find('li').removeClass('active');
			$(this).addClass('active');
			$(this).parent().find('i.fa').removeClass('fa-minus').addClass('fa-plus');
			$(this).parent().find('p').toggle(false);
			$(this).find('i.fa').addClass('fa-minus').removeClass('fa-plus');			
			$(this).find('p').toggle('fast');
		});
		
		$('ul.gt-features-expandable').each(function() {
			$(this).find('li').first().trigger('click');
		});
		
	});
    

})( jQuery );