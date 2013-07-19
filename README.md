AGE v2.1
==========

Have you ever wanted a nice age verification for your site, but you were too lazy to do a complex one?
AGE is your solution!

AG-what?
----
AGE stands for **Another Great Environment**. That's exactly what it is — a great environment, to let you easily verify your user's age!
It uses pjdietz's [Freeow!](http://pjdietz.com/jquery-plugins/freeow/), a very nice plugin for jQuery to let your project have nice notification (OSX-like) notifications. Of course, it also uses jQuery.

How does it work?
----
It's very easy, even a Windows user can do this! 
You can go ahead and modify every single file (the CSS, for example), but to really *set it up* you just need to edit `age.js`. All the functions are nicely documented there, and the one that you want to edit is `checkAge()`. It's so intuitive, you'll see some `if`s and `else if`s there. That's where the verification is.

showClass? hideClass?
----
Ha! This is my favorite part. I don't really know if this is the good way to do this (I doubt it), but to help you not waste time I have included everything in a single HTML file.
That means that EVERYTHING is in the `age.html` file. The things that the user see before the verification, the things that the user see if the verification went OK... 
Here you have a detailed explanation of what each class is:
- `prevf` → The only thing visible when the page is loaded.
- `greatvf` → The header and div the user sees if he passed the verification.
- `badvf` → The header and div the user sees if he didn't pass the verification.
- `error` → The header an paragraph the user sees if there was an error (dammit).
- `order` → When the user buys a gun (see below).

Cookies!
----
Yes, since v2.0 there are cookies! That's how it works:

1. The page is loaded. 
2. jQuery looks for a `AGE_age` cookie.
3. If it exists, it sets `userAge` as its value. If it doesn't, it asks the user for his age and, if he entered something, it creates the cookie `AGE_age` with the value.
4. The age is verified as usual.

By default, the cookies are only valid for the session — they're deleted when the user closes the navigator. Look at the wiki to learn how to change this behaviour.

Guns? NOPE!
----
To make it more intuitive, I added some example things. Of course, I don't think you want to create a page to sell **guns**, so you'll want to replace everything inside the `greatvf`, and probably remove everything related to `order`. 
Again, the `order` class has nothing to do with AGE. It's just an example following the same philosophy; after entering what gun do you want **inside** the `greatvf`, hide everything and tell me how sweet the verification was.
And also, if you don't want to get fancy notifications like you do in the example, you can remove everything related to Freeow!.

Screenshots
----
We all love them. Click to see big!

### Initial verification (prevf) ###
[![Imgur](http://i.imgur.com/36tKlSPl.png)](http://i.imgur.com/36tKlSP.png)

### Verification passed (greatvf) ###
[![Imgur](http://i.imgur.com/uYe2BN6l.png)](http://i.imgur.com/uYe2BN6.png)

### Verification not passed (badvf) ###
[![Imgur](http://i.imgur.com/jCODOVGl.png)](http://i.imgur.com/jCODOVG.png)

### Error (error) ###
[![Imgur](http://i.imgur.com/vLtvsajl.png)](http://i.imgur.com/vLtvsaj.png)

### Order (order) ###
Since this is an example... You must download and try to see it!
