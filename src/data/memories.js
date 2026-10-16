// =========================================================================
// ROMANTIC SCRAPBOOK PERSONAL DATA — ILHAM (DUMBO) & ICA (SENG)
// Special timeless scrapbook made with love for Ica ♡
// =========================================================================

export const initialScrapbookData = {
  couple: {
    partnerName: "Ica (Seng)",
    yourName: "Dumbo (Ilham)",
    relationshipStartDate: "20 Desember 2025",
    relationshipStartYear: "2025",
    subtitle: "Made with endless love, just for Seng ♡",
    heroHeading: "Just you, me & all our little moments, Seng.",
    heroSubheading: "Sebuah scrapbook kecil berisi tawa, perjuangan, melodi indah, dan cinta kita yang tak tergantikan.",
    songTitle: "Back At One",
    songArtist: "Brian McKnight (Lagu Kita ♡)",
    songUrl: "/song/back-at-one.mp3",
    videoUrl: "/video/ica-singing.mp4",
  },

  heroPhoto: {
    id: "hero-1",
    url: "/photos/ica-01.jpeg",
    caption: "Senyuman termanis yang selalu jadi duniaku, Seng ♡",
    date: "20 Desember 2025 — Selamanya",
    rotation: -2.5
  },

  // 2. Favorite Little Moments (Memory Carousel)
  carouselMemories: [
    {
      id: "cm-1",
      url: "/photos/ica-02.jpeg",
      caption: "Tiap kali liat kamu senyum, semua beban Dumbo langsung hilang.",
      date: "Momen Manis Kita",
      tag: "Senyum Ica"
    },
    {
      id: "cm-2",
      url: "/photos/ica-03.jpeg",
      caption: "Bersyukur banget Tuhan mempertemukan Dumbo sama Seng.",
      date: "Bahagia Sederhana",
      tag: "Kesayangan Dumbo"
    },
    {
      id: "cm-3",
      url: "/photos/ica-04.jpeg",
      caption: "Salah satu foto favorit yang selalu bikin kangen tiap hari.",
      date: "Detik-Detik Berharga",
      tag: "Bidadarinya Ilham"
    },
    {
      id: "cm-4",
      url: "/photos/ica-05.jpeg",
      caption: "Cuma kita berdua yang paham seberapa berharganya tiap momen ini.",
      date: "Hangatnya Bersamamu",
      tag: "Our Safe Place"
    },
    {
      id: "cm-5",
      url: "/photos/ica-06.jpeg",
      caption: "Nemenin kamu makan burger sambil ketawa bareng, surga kecilku hehehe 🍔",
      date: "Burger Time!",
      tag: "Happy Tummy"
    },
    {
      id: "cm-6",
      url: "/photos/ica-07.jpeg",
      caption: "Di matamu, Dumbo selalu menemukan rumah untuk pulang.",
      date: "Tetap Bersama",
      tag: "Forever Yours"
    }
  ],

  // 3. Scrapbook Photo Wall (Collage with polaroid tape & sticky notes)
  photoWall: [
    {
      id: "pw-1",
      url: "/photos/ica-08.jpeg",
      caption: "Cantik, teduh, dan selalu bikin hati adem liatnya ♡",
      date: "Kenangan Manis",
      size: "large",
      rotation: -1.8,
      tapeColor: "peach"
    },
    {
      id: "pw-2",
      url: "/photos/ica-09.jpeg",
      caption: "Gemasnya Seng pas lagi candid begini 🥺",
      date: "Candid Gemas",
      size: "small",
      rotation: 2.2,
      tapeColor: "rose"
    },
    {
      id: "pw-3",
      url: "/photos/ica-10.jpeg",
      caption: "Muka imut yang nggak pernah gagal bikin Dumbo salting!",
      date: "Silly & Cute",
      size: "small",
      rotation: -2.8,
      tapeColor: "lavender"
    },
    {
      id: "pw-4",
      url: "/photos/ica-11.jpeg",
      caption: "Genggaman tangan yang nggak akan pernah aku lepasin.",
      date: "Berdua Selalu",
      size: "medium",
      rotation: 1.5,
      tapeColor: "peach"
    },
    {
      id: "pw-5",
      url: "/photos/ica-12.jpeg",
      caption: "Tatapannya selalu penuh ketulusan dan doa.",
      date: "Ketulusan Cinta",
      size: "medium",
      rotation: -1.2,
      tapeColor: "rose"
    },
    {
      id: "pw-6",
      url: "/photos/ica-13.jpeg",
      caption: "Dari sekian juta orang di bumi, Tuhan pilihkan kamu untukku.",
      date: "Anugerah Terindah",
      size: "small",
      rotation: 2.7,
      tapeColor: "lavender"
    }
  ],

  // 4. "Our Story" Timeline
  storyTimeline: [
    {
      id: "st-1",
      date: "Babak Pertama",
      title: "Dipertemukan di Komunitas Date ♡",
      description: "Siapa sangka, di antara ramainya orang di komunitas Date, Tuhan punya rencana yang begitu indah untuk mempertemukan kita berdua. Dari awal sapaan malu-malu dan senyuman manismu, takdir kita mulai terangkai.",
      image: "/photos/ica-14.jpeg"
    },
    {
      id: "st-2",
      date: "Babak Kedua",
      title: "Sering Nongkrong Bareng Teman-Teman Date",
      description: "Dari kumpul dan nongkrong bareng teman-teman komunitas, perlahan obrolan kita jadi semakin nyambung dan akrab. Di setiap tawa dan canda malam itu, Dumbo mulai sadar kalau kehadiran Seng selalu yang paling ditunggu.",
      image: "/photos/ica-15.jpeg"
    },
    {
      id: "st-3",
      date: "Babak Ketiga",
      title: "First Date di One Satrio: Ultramen & Taman 🍜",
      description: "Kencan pertama kita yang nggak akan pernah terlupakan. Makan mangkok hangat Ultramen bareng sambil cerita dari hati ke hati, lalu jalan santai dan duduk di taman One Satrio menikmati angin malam berdua.",
      image: "/photos/ica-16.jpeg"
    },
    {
      id: "st-4",
      date: "Babak Keempat",
      title: "Melewati Segala Rintangan Bersama Tuhan Yesus",
      description: "Perjalanan cinta kita nggak selalu mudah, ada kerikil dan air mata yang menguji. Tapi di setiap rintangan, kita belajar saling menguatkan, saling memaafkan, dan percaya bahwa Tuhan Yesus selalu menjaga dan menuntun langkah kita.",
      image: "/photos/ica-17.jpeg"
    },
    {
      id: "st-5",
      date: "Babak Seterusnya",
      title: "Sampai Maut yang Memisahkan Kita Berdua ♡",
      description: "Dimulai resmi sejak 20 Desember 2025, doa Dumbo setiap hari cuma satu: semoga Tuhan terus jaga cinta kita, kuatkan langkah kita berdua, dan biarkan Dumbo mendampingi Seng sampai hari tua hingga maut memisahkan.",
      image: "/photos/ica-18.jpeg"
    }
  ],

  // 5. Desk Scattered Polaroids
  deskPolaroids: [
    {
      id: "dp-1",
      url: "/photos/ica-19.jpeg",
      caption: "kamu selalu keliatan lucu banget disini 🥹",
      rotation: -3
    },
    {
      id: "dp-2",
      url: "/photos/ica-20.jpeg",
      caption: "kesayangan Dumbo nomor satu di dunia ♡",
      rotation: 2.5
    },
    {
      id: "dp-3",
      url: "/photos/ica-21.jpeg",
      caption: "muka gemas yang selalu bikin hari jadi cerah 😂",
      rotation: -1.5
    },
    {
      id: "dp-4",
      url: "/photos/ica-22.jpeg",
      caption: "disimpan rapi di hati Dumbo selamanya ✨",
      rotation: 3.2
    },
    {
      id: "dp-5",
      url: "/photos/ica-23.jpeg",
      caption: "senyum termanis yang nggak akan pernah terganti 🌸",
      rotation: -2.2
    }
  ],

  // 6. Little Things I Love About You (Interactive Flip Cards)
  littleThings: [
    {
      id: "lt-1",
      preview: "Hobi Nyanyi Kamu 🎶",
      hidden: "Aku suka banget liat kamu nyanyi dengan tulus dan lepas. Dimanapun kamu berada, nyanyianmu selalu bawa kehangatan tersendiri.",
      color: "bg-[#FFF9F2]",
      rotation: -1.5
    },
    {
      id: "lt-2",
      preview: "Suaramu yang Merdu Banget 🕊️",
      hidden: "Suara merdu Seng itu ibarat obat penenang paling ampuh buat Dumbo. Pas lagi capek atau stres, denger suara kamu langsung bikin tenang.",
      color: "bg-[#FDF2F4]",
      rotation: 2
    },
    {
      id: "lt-3",
      preview: "Senyuman Manis Ica 🌸",
      hidden: "Senyum manismu yang tulus dan bikin matamu menyipit manis. Tiap liat kamu senyum, Dumbo selalu bersyukur Tuhan ciptakan kamu untukku.",
      color: "bg-[#F8F4FD]",
      rotation: -2
    },
    {
      id: "lt-4",
      preview: "Wanita yang Takut Akan Tuhan ✝️",
      hidden: "Ketaatanmu, doamu yang tulus, dan imanmu kepada Tuhan Yesus adalah hal yang paling Dumbo kagumi dan banggakan dari diri Seng.",
      color: "bg-[#FFF9F2]",
      rotation: 1.5
    },
    {
      id: "lt-5",
      preview: "SUKA MAKAN BURGER HEHEHE 🍔",
      hidden: "Ekspresi super bahagia kamu pas makan burger itu ngegemesin banget! Pokoknya siap anter Seng cari burger terenak di dunia kapan aja!",
      color: "bg-[#FDF2F4]",
      rotation: -2.5
    },
    {
      id: "lt-6",
      preview: "Know Everything About Me 🧸",
      hidden: "Kamu tahu semua hal tentang Dumbo—kebiasaanku, kekuranganku, bahkan apa yang aku rasakan tanpa perlu banyak bicara. Kamu rumah terbaikku.",
      color: "bg-[#F8F4FD]",
      rotation: 2.2
    },
    {
      id: "lt-7",
      preview: "Ketegaran Hatimu yang Luar Biasa ✨",
      hidden: "Meski perjalanan cinta kita penuh rintangan, Seng tetap tegar, sabar, dan setia menemani Dumbo. Terima kasih sudah sekuat ini ya, sayang.",
      color: "bg-[#FFF9F2]",
      rotation: -1.2
    },
    {
      id: "lt-8",
      preview: "Simply... Seng, My Whole World ♡",
      hidden: "Bukan cuma karena kelebihanmu, tapi dengan segala hal yang ada di dalam dirimu. Dumbo sayang banget sama Seng sampai maut memisahkan.",
      color: "bg-[#FDF2F4]",
      rotation: 1.8
    }
  ],

  // 7. Love Letter / Envelope Interaction
  loveLetter: {
    salutation: "Untuk Seng tersayang, belahan jiwaku,",
    date: "20 Desember 2025 — Hingga Keabadian",
    paragraphs: [
      "Semangat ya sayang... Dumbo tahu perjalanan yang kita lalui akhir-akhir ini tidak selalu mudah. Ada hari-hari yang terasa begitu berat, tantangan yang menguji, bahkan air mata yang mungkin sempat menetes di pipi manismu.",
      "Tapi di tengah semua rasa lelah itu, Dumbo ingin Seng selalu ingat satu hal yang pasti: Tuhan Yesus selalu bersama kita, menjaga kita, dan tidak pernah sekalipun meninggalkan kita. Dia yang mempertemukan langkah kita di komunitas Date, dan Dia juga yang memegang kendali atas masa depan kita berdua.",
      "Jangan pernah merasa berjuang sendirian ya, Seng. Kita jalanin semua ini bersama-sama—bergandengan tangan di setiap suka dan duka. Dumbo berjanji akan selalu ada di sampingmu, menghapus air matamu, mendengarkan suara merdumu bernyanyi, dan menemanimu makan burger kesukaanmu.",
      "Terima kasih sudah memilih untuk tetap bertahan dan mencintai Dumbo apa adanya. Semoga cinta kita terus bertumbuh dalam lindungan-Nya, sampai rambut kita memutih, sampai hari tua, dan sampai maut yang memisahkan kita berdua nanti."
    ],
    signOff: "Dengan segenap doa, cinta, dan pelukan hangat,",
    authorName: "Dumbo (Ilham) ♡",
    ps: "P.S. Jangan lupa tersenyum ya hari ini, Seng... senyumanmu itu alasan Dumbo selalu kuat menghadapi dunia!"
  },

  // 8. Torn Paper Quotes ("A Few Words For You")
  wordsForYou: [
    {
      id: "wf-1",
      quote: "Tuhan Yesus tidak pernah salah mempertemukan dua hati di waktu yang tepat. Bersamamu, aku menemukan damai.",
      date: "Doa di Setiap Malam",
      rotation: -1.5,
      bg: "bg-[#FFFDF8]"
    },
    {
      id: "wf-2",
      quote: "Rintangan sebesar apapun tidak akan meruntuhkan cinta yang fondasinya dibangun di dalam Tuhan dan doa bersama.",
      date: "Janji Setia Dumbo",
      rotation: 2.1,
      bg: "bg-[#FEF5F6]"
    },
    {
      id: "wf-3",
      quote: "Duduk di taman One Satrio bareng kamu, makan Ultramen, dan ketawa lepas adalah definisi bahagia yang paling sempurna.",
      date: "Kenangan First Date",
      rotation: -2.3,
      bg: "bg-[#F8F4FD]"
    },
    {
      id: "wf-4",
      quote: "Sampai maut memisahkan nanti, genggaman tanganku tidak akan pernah lepas dari tanganmu, Seng.",
      date: "Komitmen Seumur Hidup",
      rotation: 1.7,
      bg: "bg-[#FFFDF8]"
    }
  ],

  // 9. Memory of the Day / Mystery Surprise Cards
  mysteryCards: [
    {
      id: "my-1",
      icon: "📸",
      title: "Foto Rahasia Kita",
      preview: "Ketuk untuk membuka potret manis kesayangan",
      type: "photo",
      content: {
        url: "/photos/ica-24.jpeg",
        text: "Momen manis pas Seng lagi senyum tanpa sadar kamera. Pemandangan paling indah di mata Dumbo!"
      }
    },
    {
      id: "my-2",
      icon: "💌",
      title: "Pesan Doa Khusus",
      preview: "Pengingat manis saat kamu merasa lelah",
      type: "note",
      content: {
        text: "Filipi 4:13 — 'Segala perkara dapat kutanggung di dalam Dia yang memberi kekuatan kepadaku.' Jangan takut ya sayang, ada Tuhan Yesus dan ada Dumbo yang selalu ada buat Seng. ♡"
      }
    },
    {
      id: "my-3",
      icon: "🍔",
      title: "Burger Date Coupon!",
      preview: "Kupon spesial makan burger gratis!",
      type: "funny",
      content: {
        text: "Kupon berlaku seumur hidup: 'Satu porsi burger favorit Seng + minum + pelukan hangat dari Dumbo!' Bisa ditukar kapan aja Seng lapar hehehe 🍔🥰"
      }
    },
    {
      id: "my-4",
      icon: "🍜",
      title: "Kenangan Ultramen",
      preview: "Nostalgia kencan pertama kita",
      type: "moment",
      content: {
        text: "Inget nggak pas pertama kali kita makan Ultramen di One Satrio? Deg-degan tapi bahagia banget pas liat Seng tersenyum senang di seberang meja."
      }
    },
    {
      id: "my-5",
      icon: "✝️",
      title: "Janji Suci Kita",
      preview: "Janji cinta di hadapan Tuhan",
      type: "promise",
      content: {
        text: "Dumbo berjanji untuk selalu menjaga hati Seng, menghormati Seng, mendoakan Seng setiap hari, dan berjuang bersama sampai maut memisahkan kita berdua nanti. Amin."
      }
    }
  ],

  // 13. Final Section Content
  finalSection: {
    heading: "Di setiap langkah dan rintangan yang kita lalui...",
    subheading: "...Dumbo selalu memilih untuk menggenggam tangan Seng. ♡",
    note: "Terima kasih sudah lahir ke dunia dan menjadi jawaban atas doa-doa Dumbo.",
    signature: "Seng + Dumbo, 20 Desember 2025 — Selamanya.",
    collage: [
      "/photos/ica-25.jpeg",
      "/photos/ica-26.jpeg",
      "/photos/ica-27.jpeg",
      "/photos/ica-28.jpeg"
    ]
  }
};
