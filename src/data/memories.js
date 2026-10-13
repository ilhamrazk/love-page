// =========================================================================
// ROMANTIC SCRAPBOOK PERSONAL DATA
// You can edit all your photos, captions, love notes, and stories right here!
// =========================================================================

export const initialScrapbookData = {
  couple: {
    partnerName: "My Love",
    yourName: "Always Yours",
    relationshipStartYear: "2023",
    subtitle: "Made with love, just for you ♡",
    heroHeading: "Just you, me & all our little moments.",
    heroSubheading: "A little scrapbook of our laughter, silly talks, and timeless memories.",
    songTitle: "Our Sweet Melody",
    songArtist: "Soft Lofi & Acoustic",
    // You can replace this audio source with your own audio file url or /music.mp3 in public/ folder!
    songUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-ambient-111451.mp3"
  },

  heroPhoto: {
    id: "hero-1",
    url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
    caption: "My favorite human in the entire universe ♡",
    date: "A quiet golden afternoon",
    rotation: -2.5
  },

  // 2. Favorite Little Moments (Memory Carousel)
  carouselMemories: [
    {
      id: "cm-1",
      url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop",
      caption: "That random day that turned into my absolute favorite memory.",
      date: "Sunny Saturday afternoon",
      tag: "Pure Happiness"
    },
    {
      id: "cm-2",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
      caption: "Still the smile that makes my entire day brighter.",
      date: "Cozy coffee date",
      tag: "Your Laugh"
    },
    {
      id: "cm-3",
      url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop",
      caption: "We didn't know this moment would stay in my heart forever.",
      date: "Stargazing night",
      tag: "Unforgettable"
    },
    {
      id: "cm-4",
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
      caption: "Just us being us — quiet, peaceful, and totally at home.",
      date: "Rainy Sunday",
      tag: "Comfort"
    },
    {
      id: "cm-5",
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
      caption: "Caught you mid-laugh and fell in love all over again.",
      date: "Walk through the park",
      tag: "Golden Hour"
    }
  ],

  // 3. Scrapbook Photo Wall (Collage with polaroid tape & sticky notes)
  photoWall: [
    {
      id: "pw-1",
      url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000&auto=format&fit=crop",
      caption: "Your favorite view... and mine was looking right at you.",
      date: "October breeze",
      size: "large",
      rotation: -1.8,
      tapeColor: "peach"
    },
    {
      id: "pw-2",
      url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
      caption: "When you stole my jacket because you were 'cold' 🤭",
      date: "November evening",
      size: "small",
      rotation: 2.2,
      tapeColor: "rose"
    },
    {
      id: "pw-3",
      url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
      caption: "Silly faces only we understand 😂",
      date: "Late night road trip",
      size: "small",
      rotation: -2.8,
      tapeColor: "lavender"
    },
    {
      id: "pw-4",
      url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1000&auto=format&fit=crop",
      caption: "Golden hour glow on your cheeks. Perfection.",
      date: "Spring blossom",
      size: "medium",
      rotation: 1.5,
      tapeColor: "peach"
    },
    {
      id: "pw-5",
      url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
      caption: "Our first Polaroid together. Kept safe in my wallet.",
      date: "The beginning",
      size: "medium",
      rotation: -1.2,
      tapeColor: "rose"
    },
    {
      id: "pw-6",
      url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
      caption: "Looking at old memories thinking how lucky I am.",
      date: "Every single day",
      size: "small",
      rotation: 2.7,
      tapeColor: "lavender"
    }
  ],

  // 4. "Our Story" Timeline
  storyTimeline: [
    {
      id: "st-1",
      date: "Chapter 1",
      title: "Somehow, the universe brought us together ♡",
      description: "A random encounter, a shy hello, and a feeling that something wonderful was about to begin.",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "st-2",
      date: "Chapter 2",
      title: "The first endless conversation",
      description: "Talking until 3 AM about everything and nothing. Time stopped existing whenever I spoke to you.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "st-3",
      date: "Chapter 3",
      title: "Our very first date & coffee jitters",
      description: "You laughed at my nervous jokes. The iced coffee melted, but I didn't care because I couldn't stop looking at you.",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "st-4",
      date: "Chapter 4",
      title: "The day I knew you were the one",
      description: "A quiet moment when you held my hand without saying a word. In that second, my whole world felt complete.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "st-5",
      date: "Every Day Since",
      title: "More beautiful chapters still being written...",
      description: "From grocery runs and cooking disasters to quiet hugs and inside jokes, every chapter is sweeter with you.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop"
    }
  ],

  // 5. Desk Scattered Polaroids
  deskPolaroids: [
    {
      id: "dp-1",
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
      caption: "you looked so cute here 🥹",
      rotation: -3
    },
    {
      id: "dp-2",
      url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
      caption: "my favorite person in the world ♡",
      rotation: 2.5
    },
    {
      id: "dp-3",
      url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop",
      caption: "please tell me why we look this adorable 😂",
      rotation: -1.5
    },
    {
      id: "dp-4",
      url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop",
      caption: "one for the memory box ✨",
      rotation: 3.2
    },
    {
      id: "dp-5",
      url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=600&auto=format&fit=crop",
      caption: "forever my favorite smile 🌸",
      rotation: -2.2
    }
  ],

  // 6. Little Things I Love About You (Interactive Flip Cards)
  littleThings: [
    {
      id: "lt-1",
      preview: "Your laugh 🥹",
      hidden: "The way you crinkle your nose and laugh so genuinely that everyone in the room smiles.",
      color: "bg-[#FFF9F2]",
      rotation: -1.5
    },
    {
      id: "lt-2",
      preview: "Your sleepy voice ☕",
      hidden: "That soft, cozy morning whisper that makes waking up the best part of my day.",
      color: "bg-[#FDF2F4]",
      rotation: 2
    },
    {
      id: "lt-3",
      preview: "Random 2 AM texts 💌",
      hidden: "Sending me silly memes, random thoughts, or 'did you sleep yet?' when we should be asleep.",
      color: "bg-[#F8F4FD]",
      rotation: -2
    },
    {
      id: "lt-4",
      preview: "Your food dance 🍰",
      hidden: "The tiny little wiggle you do whenever your favorite dish arrives at the table.",
      color: "bg-[#FFF9F2]",
      rotation: 1.5
    },
    {
      id: "lt-5",
      preview: "How safe you make me feel 🧸",
      hidden: "Whenever you hold my hand or hug me after a long day, all my worries just disappear.",
      color: "bg-[#FDF2F4]",
      rotation: -2.5
    },
    {
      id: "lt-6",
      preview: "The way you care 🌸",
      hidden: "You always remember the tiny details I mention once, even when I forget myself.",
      color: "bg-[#F8F4FD]",
      rotation: 2.2
    },
    {
      id: "lt-7",
      preview: "Your cute little pout 🥺",
      hidden: "When you pretend to be mad for 3 seconds before breaking into a smile.",
      color: "bg-[#FFF9F2]",
      rotation: -1.2
    },
    {
      id: "lt-8",
      preview: "Simply... you ♡",
      hidden: "Not just the highlights, but every single imperfect, wonderful, gorgeous piece of who you are.",
      color: "bg-[#FDF2F4]",
      rotation: 1.8
    }
  ],

  // 7. Love Letter / Envelope Interaction
  loveLetter: {
    salutation: "Dear my favorite person,",
    date: "A quiet moment together",
    paragraphs: [
      "I don't know how to put everything I feel into words, but I wanted to make this digital scrapbook for you so you'd always have a place to come back to whenever you need a reminder of how deeply you are loved.",
      "You make ordinary days feel like poetry. The way you look at me when you think I'm not looking, the warmth of your laughter, and the quiet comfort of just sitting next to you doing nothing at all — these are my favorite moments in life.",
      "Thank you for being my sanctuary, my biggest cheerleader, and my favorite reason to smile. No matter where life takes us or how crazy the world gets, I'll always choose you, over and over again.",
    ],
    signOff: "Forever & always yours,",
    authorName: "Ilham ♡",
    ps: "P.S. You're still the cutest person I've ever known, and that will never change."
  },

  // 8. Torn Paper Quotes ("A Few Words For You")
  wordsForYou: [
    {
      id: "wf-1",
      quote: "Every day with you feels like discovering a new favorite melody.",
      date: "Written on a napkin",
      rotation: -1.5,
      bg: "bg-[#FFFDF8]"
    },
    {
      id: "wf-2",
      quote: "You turned ordinary days into my absolute favorite memories.",
      date: "Post-it note thought",
      rotation: 2.1,
      bg: "bg-[#FEF5F6]"
    },
    {
      id: "wf-3",
      quote: "I'd choose you in every single version of our story, across every universe.",
      date: "Late night whisper",
      rotation: -2.3,
      bg: "bg-[#F8F4FD]"
    },
    {
      id: "wf-4",
      quote: "Home was never a place until I found myself safe in your arms.",
      date: "Tucked between pages",
      rotation: 1.7,
      bg: "bg-[#FFFDF8]"
    }
  ],

  // 9. Memory of the Day / Mystery Surprise Cards
  mysteryCards: [
    {
      id: "my-1",
      icon: "📸",
      title: "A Hidden Photo",
      preview: "Tap to unwrap a golden moment",
      type: "photo",
      content: {
        url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop",
        text: "The sun was setting and you asked me to take a quick snap. It ended up being my phone wallpaper for months."
      }
    },
    {
      id: "my-2",
      icon: "💌",
      title: "A Secret Note",
      preview: "A sweet reminder just for you",
      type: "note",
      content: {
        text: "You are doing amazing, and I am so proud of everything you do. Take a deep breath, I'm always right here with you. ♡"
      }
    },
    {
      id: "my-3",
      icon: "😂",
      title: "A Funny Memory",
      preview: "Remember that one time?",
      type: "funny",
      content: {
        text: "That time we tried cooking together and almost burned the kitchen down, then just ended up ordering takeout and eating on the floor laughing!"
      }
    },
    {
      id: "my-4",
      icon: "🥹",
      title: "A Heartfelt Moment",
      preview: "A feeling I won't forget",
      type: "moment",
      content: {
        text: "When you held my hand when I was feeling down and didn't ask questions. Just your quiet presence made everything okay."
      }
    },
    {
      id: "my-5",
      icon: "✨",
      title: "A Sweet Promise",
      preview: "Looking towards tomorrow",
      type: "promise",
      content: {
        text: "I promise to always bring you snacks when you're tired, listen to your rambles, and hold your hand through every chapter ahead."
      }
    }
  ],

  // 13. Final Section Content
  finalSection: {
    heading: "Here's to all the memories we've made...",
    subheading: "...and all the ones we haven't made yet. ♡",
    note: "Thank you for being the sweetest part of my life.",
    signature: "Just you + me, always.",
    collage: [
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop"
    ]
  }
};
