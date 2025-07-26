import Profile from "../img/Profile.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Joel",
    lastName: "Adelugba",
    initials: "</joe>", // the example uses first and last, but feel free to use three or more if you like.
    position: "A FrontEnd Developer",
    selfPortrait: Profile, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by curiousity'
        },
        {
            emoji: '🌎',
            text: 'based in Nigeria'
        },
        {
            emoji: "💼",
            text: "still a student"
        },
        {
            emoji: "📧",
            text: "adelugba.joel@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://instagram.com/joe_adelugba/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Skibelem",
            icon: "fa fa-github",
            label: 'github'
        }
        

// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hi, I'm Joel a passionate student based in Nigeria.I enjoy solving problems with code, taking long walks to clear my mind, and playing soccer to stay active and inspired. I also use AI to speed up production and boost creativity in my projects. Always eager to learn, build, and grow, I'm currently exploring the world of web development and tech innovation.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap','tailwind', 'html5', 'css3',],
            exposedTo: ['nodejs', 'python']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'Footbal',
            emoji: '⚽'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Kiateka Signup Page",
            live: "https://kiateka.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/skibelem", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "First Portfolio",
            live: "https://skibelem.netlify.app/",
            source: "https://github.com/skibelem",
            image: mock2
        },
        {
            title: "Survey Cash Flow",
            live: "https://survnet.netlify.app/",
            source: "https://github.com/skibelem",
            image: mock3
        }
    ]
}