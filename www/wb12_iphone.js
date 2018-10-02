$(document).ready(function()
{
   $("#Carousel1").fullpage({
   afterLoad: function(anchorLink, index)
   {
      switch(index)
      {
         case 2:
            SetStyle('wb_Phone2', 'phone2');
            SetStyle('wb_Phone3', 'phone3');
            SetStyle('wb_Phone4', 'phone4');
            break;
         case 3:
            SetStyle('wb_PhoneYellow', 'phoneyellow');
            SetStyle('wb_PhoneRed', 'phonered');
            SetStyle('wb_PhoneBlue', 'phoneblue');
            break;
      }
   },
   onLeave: function(index, nextIndex, direction )
   {
      switch(nextIndex)
      {
         case 2:
            SetStyle('wb_Phone2', 'resettransform');
            SetStyle('wb_Phone3', 'resettransform');
            SetStyle('wb_Phone4', 'resettransform');
            break;
         case 3:
            SetStyle('wb_PhoneYellow', 'resettransform');
            SetStyle('wb_PhoneRed', 'resettransform');
            SetStyle('wb_PhoneBlue', 'resettransform');
            AnimateCss('wb_PhoneGreen', 'animate-fade-in-up', 500, 800);
            break;
         case 4:
            AnimateCss('wb_PhoneOne', 'slide-left-in', 500, 800);
            AnimateCss('wb_PhoneTwo', 'animate-fade-in', 200, 2000);
            break;
      }
   },
      anchors: ['slide-1','slide-2','slide-3','slide-4'],
      navigation: true,
      navigationPosition: 'right',
      scrollingSpeed: 500,
      sectionSelector: '.frame'
   });
});
