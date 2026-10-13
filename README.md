# 🌸 Romantic Digital Scrapbook (Our Little World)

A timeless, interactive romantic digital scrapbook website made with **React + Tailwind CSS + Framer Motion + Swiper + Lucide React**.

Built with a Pinterest scrapbook aesthetic, Polaroid frames, washi tape, organic rotations, handwritten love notes, sealed wax envelope, and sweet interactive micro-animations.

---

## ✨ Features Included

1. **Hero Section ("Our Little World")**
   - Timeless romantic title: *"Just you, me & all our little moments."*
   - Large Polaroid with washi tape, organic tilt, and decorative floral stamps.
   - Smooth scroll CTA: *"Open our scrapbook →"*.

2. **Memory Carousel ("Our Favorite Little Moments")**
   - 3D Coverflow photo carousel powered by Swiper.
   - Polaroid cards with dates, captions, and tags.
   - Autoplay toggle button & fullscreen photo lightbox.

3. **Scrapbook Photo Wall**
   - Asymmetric scrapbook collage with washi tape and paper clips.
   - Fully customizable with an **"+ Add another memory ♡"** button.
   - Upload photos directly from phone/laptop with automatic `localStorage` persistence!

4. **"Our Story" Timeline ("How our little story happened")**
   - Handcrafted dashed vertical line connecting relationship milestones.
   - Chapters with dates, thumbnail photos, and heartfelt descriptions.

5. **Polaroid Desk Scatter ("Scattered On My Desk")**
   - Interactive card-stack swipe carousel simulating physical photos scattered across a desk.

6. **"Little Things I Love About You"**
   - Interactive 3D flip cards scattered on the screen.
   - Tap any card to flip it and reveal the hidden sweet reason, accompanied by confetti sparkles!

7. **A Sealed Love Letter 💌**
   - Realistic vintage wax-sealed envelope.
   - Tap the red wax seal to open: the letter unfolds upward in lined vintage stationery with full love letter message.

8. **"A Few Words For You"**
   - Torn paper sticky notes pinned to the page with handwritten romantic quotes.

9. **Pick a Mystery Memory ♡**
   - 5 cute mystery cards (Photo, Secret Note, Funny Memory, Heartfelt Moment, Sweet Promise).
   - Tap to unwrap a surprise note from the memory box with confetti.

10. **Final Cinematic Section ("Just Us")**
    - *"Here's to all the memories we've made... and all the ones we haven't made yet. ♡"*
    - Polaroid collage grid.
    - Interactive beating love heart button with an infinite love counter and confetti burst!

11. **Floating Music Player 🎵**
    - Vintage spinning vinyl disc player at bottom corner.
    - Play / Pause / Progress scrubber / Volume control.
    - Preloaded romantic ambient music + tooltip showing where to put your custom MP3!

12. **Full In-Browser Customization ("Edit Memories")**
    - Click **"Edit Memories"** in the top navigation to upload new photos, change captions, update names, or rewrite the love letter without touching code!

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser:
# http://localhost:5173
```

---

## 🎨 How to Personalize the Content

All editable text, photos, and quotes are located in a single file:
👉 `src/data/memories.js`

- **Couple Names & Subtitle**: Update `couple.partnerName`, `couple.yourName`, etc.
- **Photos**: Put your photos in `public/` and update `url: "/myphoto.jpg"` or upload them through the UI.
- **Song**: Put your audio file in `public/our-song.mp3` and update `couple.songUrl: "/our-song.mp3"`.
- **Love Letter**: Edit paragraphs in `loveLetter.paragraphs`.

---

## 📦 Downloadable ZIP

The complete project is packaged and ready to download in:
👉 [`romantic-digital-scrapbook.zip`](./romantic-digital-scrapbook.zip)
