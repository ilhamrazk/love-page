import React, { useState, useEffect, useRef } from 'react';
import { initialScrapbookData } from './data/memories';

// Components
import ScrapbookBackground from './components/ScrapbookBackground';
import FloatingDecorations from './components/FloatingDecorations';
import HeartCursorEffect from './components/HeartCursorEffect';
import FloatingMusicPlayer from './components/FloatingMusicPlayer';
import Navigation from './components/Navigation';
import PhotoLightbox from './components/PhotoLightbox';
import EditMemoriesModal from './components/EditMemoriesModal';
import WelcomeGateModal from './components/WelcomeGateModal';

// Sections
import HeroSection from './sections/HeroSection';
import MemoryCarouselSection from './sections/MemoryCarouselSection';
import PhotoWallSection from './sections/PhotoWallSection';
import StoryTimelineSection from './sections/StoryTimelineSection';
import PolaroidDeskSection from './sections/PolaroidDeskSection';
import LittleThingsSection from './sections/LittleThingsSection';
import LoveLetterSection from './sections/LoveLetterSection';
import WordsForYouSection from './sections/WordsForYouSection';
import MysteryMemorySection from './sections/MysteryMemorySection';
import VideoSingingSection from './sections/VideoSingingSection';
import FinalSection from './sections/FinalSection';

const STORAGE_KEY = 'romantic_scrapbook_ica_ilham_v2';

export default function App() {
  const [scrapbookData, setScrapbookData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read localStorage:', e);
    }
    return initialScrapbookData;
  });

  // Lightbox modal state
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [lightboxPhotos, setLightboxPhotos] = useState([]);

  // Edit memories modal state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Welcome Gate & Music playback state
  const [showWelcomeGate, setShowWelcomeGate] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleOpenWithMusic = () => {
    setShowWelcomeGate(false);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsAudioPlaying(true);
      }).catch((err) => {
        console.warn('Audio play error:', err);
      });
    }
  };

  const handleOpenWithoutMusic = () => {
    setShowWelcomeGate(false);
  };

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(scrapbookData));
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
  }, [scrapbookData]);

  const handleOpenLightbox = (photo, list = []) => {
    setSelectedPhoto(photo);
    setLightboxPhotos(list.length > 0 ? list : [photo]);
  };

  const handleCloseLightbox = () => {
    setSelectedPhoto(null);
  };

  const handleNavigateLightbox = (direction) => {
    if (!lightboxPhotos.length || !selectedPhoto) return;
    const currentIndex = lightboxPhotos.findIndex((p) => p.url === selectedPhoto.url);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = lightboxPhotos.length - 1;
    if (nextIndex >= lightboxPhotos.length) nextIndex = 0;

    setSelectedPhoto(lightboxPhotos[nextIndex]);
  };

  const handleResetData = () => {
    if (window.confirm('Reset all memories and notes to default samples?')) {
      setScrapbookData(initialScrapbookData);
      localStorage.removeItem(STORAGE_KEY);
      setIsEditModalOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen text-scrapbook-brown font-sans overflow-x-hidden selection:bg-scrapbook-blush selection:text-scrapbook-brown">
      {/* Background & Subtle Floating Accents */}
      <ScrapbookBackground />
      <FloatingDecorations />
      <HeartCursorEffect />

      {/* Navigation */}
      <Navigation onOpenEditModal={() => setIsEditModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12 sm:space-y-20 pb-28">
        {/* 1. HERO SECTION */}
        <HeroSection
          heroPhoto={scrapbookData.heroPhoto}
          couple={scrapbookData.couple}
          onOpenLightbox={(photo) => handleOpenLightbox(photo, [photo])}
        />

        {/* 2. MEMORY CAROUSEL */}
        <MemoryCarouselSection
          memories={scrapbookData.carouselMemories}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 3. SCRAPBOOK PHOTO WALL */}
        <PhotoWallSection
          photos={scrapbookData.photoWall}
          onOpenLightbox={handleOpenLightbox}
          onOpenAddModal={() => setIsEditModalOpen(true)}
        />

        {/* 4. OUR STORY TIMELINE */}
        <StoryTimelineSection
          timeline={scrapbookData.storyTimeline}
          onOpenLightbox={(photo) => handleOpenLightbox(photo, [photo])}
        />

        {/* SPECIAL: ICA'S SINGING VIDEO SECTION */}
        <VideoSingingSection videoUrl={scrapbookData.couple.videoUrl || "/video/ica-singing.mp4"} />

        {/* 5. POLAROID DESK SCATTER */}
        <PolaroidDeskSection
          polaroids={scrapbookData.deskPolaroids}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 6. LITTLE THINGS I LOVE ABOUT YOU */}
        <LittleThingsSection items={scrapbookData.littleThings} />

        {/* 7. LOVE LETTER / ENVELOPE */}
        <LoveLetterSection letterData={scrapbookData.loveLetter} />

        {/* 8. WORDS FOR YOU / TORN PAPER */}
        <WordsForYouSection quotes={scrapbookData.wordsForYou} />

        {/* 9. MEMORY OF THE DAY / MYSTERY CARDS */}
        <MysteryMemorySection mysteryCards={scrapbookData.mysteryCards} />

        {/* 13. FINAL SECTION — JUST US */}
        <FinalSection
          finalData={scrapbookData.finalSection}
          onOpenLightbox={(photo) => handleOpenLightbox(photo, [photo])}
        />
      </main>

      {/* Welcome Gate Modal */}
      <WelcomeGateModal
        isOpen={showWelcomeGate}
        onOpenWithMusic={handleOpenWithMusic}
        onOpenWithoutMusic={handleOpenWithoutMusic}
      />

      {/* Floating Music Player */}
      <FloatingMusicPlayer
        songTitle={scrapbookData.couple.songTitle}
        songArtist={scrapbookData.couple.songArtist}
        songUrl={scrapbookData.couple.songUrl}
        isPlaying={isAudioPlaying}
        setIsPlaying={setIsAudioPlaying}
        externalAudioRef={audioRef}
      />

      {/* Fullscreen Photo Lightbox Modal */}
      <PhotoLightbox
        selectedPhoto={selectedPhoto}
        photos={lightboxPhotos}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />

      {/* Edit Memories & Customizer Modal */}
      <EditMemoriesModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        data={scrapbookData}
        onUpdateData={setScrapbookData}
        onResetData={handleResetData}
      />
    </div>
  );
}
