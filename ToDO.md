# TODO

## Priority

-  RED 🔴 ==> highest priority
-  YELLOW 🟡 ==> meduim priority
-  BLUE 🔵 ==> lowest priority

TODO:

-  create all the in-between sections 🔴
-  everything should be responsive 🟡
-  (in footer) make sure that whatsapp logo have a link 🔵
-  (in footer) make sure that you have a better ux (like having an animation or something on hover) 🔵
-  meta tags for SEO and social media link sharing 🔵

DONE:

-  the title and the icon on the browser tab DONE.
-  setup the project. DONE.
-  setup all the assets you need (fonts, colors, images, etc.) DONE.
-  create the navbar and the footer (in progress) DONE.
-  (in home section) "IoT KIDS" is not rendered the right way with arabic text DONE.

   -  Solution => i had to use a css property called direction cause arabic is a right to left written language and the default direction is set to the english language direction which is ltr.

   ```css
   p,
   h1,
   h2,
   h3,
   a {
      direction: rtl;
   }
   ```
