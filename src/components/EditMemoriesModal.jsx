import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Plus, Trash2, Image, Heart, Check, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EditMemoriesModal({
  isOpen,
  onClose,
  data,
  onUpdateData,
  onResetData,
}) {
  const [activeTab, setActiveTab] = useState('add');
  const [newImagePreview, setNewImagePreview] = useState(null);
  const [newCaption, setNewCaption] = useState('');
  const [newDate, setNewDate] = useState('');
  const [targetCollection, setTargetCollection] = useState('photoWall'); // 'photoWall' or 'carouselMemories'
  const fileInputRef = useRef(null);

  // Editable Names & Letter states
  const [partnerName, setPartnerName] = useState(data.couple.partnerName);
  const [yourName, setYourName] = useState(data.couple.yourName);
  const [letterParagraphs, setLetterParagraphs] = useState(data.loveLetter.paragraphs.join('\n\n'));
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewImagePreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddMemory = (e) => {
    e.preventDefault();
    if (!newImagePreview) return;

    const newPhotoItem = {
      id: `custom-${Date.now()}`,
      url: newImagePreview,
      caption: newCaption || 'A special moment with you ♡',
      date: newDate || 'Today',
      size: 'medium',
      rotation: (Math.random() * 4 - 2).toFixed(1),
      tapeColor: ['peach', 'rose', 'lavender'][Math.floor(Math.random() * 3)],
    };

    const updatedCollection = [newPhotoItem, ...data[targetCollection]];
    onUpdateData({
      ...data,
      [targetCollection]: updatedCollection,
    });

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#C98291', '#F6D9D8', '#F3C7B7'],
    });

    // Reset fields
    setNewImagePreview(null);
    setNewCaption('');
    setNewDate('');
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleDeletePhoto = (collectionKey, photoId) => {
    const updated = data[collectionKey].filter((item) => item.id !== photoId);
    onUpdateData({
      ...data,
      [collectionKey]: updated,
    });
  };

  const handleSaveTextChanges = () => {
    const paragraphsArray = letterParagraphs.split('\n\n').filter((p) => p.trim().length > 0);
    onUpdateData({
      ...data,
      couple: {
        ...data.couple,
        partnerName,
        yourName,
      },
      loveLetter: {
        ...data.loveLetter,
        paragraphs: paragraphsArray,
        authorName: yourName,
      },
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4A3532]/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-2xl shadow-2xl border border-[#E8DDD4] overflow-hidden max-h-[90vh] flex flex-col text-scrapbook-brown"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-[#F0E4DB] flex items-center justify-between bg-gradient-to-r from-[#FFF8F2] to-[#FFFDF9]">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 fill-[#C98291] text-[#C98291]" />
              <h2 className="font-serif font-bold text-lg text-scrapbook-brown">
                Customize Scrapbook & Add Memories
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500 hover:text-scrapbook-brown transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-[#F0E4DB] px-6 bg-stone-50/50">
            <button
              onClick={() => setActiveTab('add')}
              className={`py-3 px-4 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition-colors ${
                activeTab === 'add'
                  ? 'border-scrapbook-rose text-scrapbook-rose'
                  : 'border-transparent text-stone-500 hover:text-scrapbook-brown'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
              Add New Memory
            </button>
            <button
              onClick={() => setActiveTab('manage')}
              className={`py-3 px-4 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition-colors ${
                activeTab === 'manage'
                  ? 'border-scrapbook-rose text-scrapbook-rose'
                  : 'border-transparent text-stone-500 hover:text-scrapbook-brown'
              }`}
            >
              <Image className="w-3.5 h-3.5" />
              Manage Photos
            </button>
            <button
              onClick={() => setActiveTab('text')}
              className={`py-3 px-4 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition-colors ${
                activeTab === 'text'
                  ? 'border-scrapbook-rose text-scrapbook-rose'
                  : 'border-transparent text-stone-500 hover:text-scrapbook-brown'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              Names & Love Letter
            </button>
          </div>

          {/* Tab Content Area */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1">
            {savedSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Changes saved to your scrapbook successfully! ♡</span>
              </div>
            )}

            {/* TAB 1: ADD MEMORY */}
            {activeTab === 'add' && (
              <form onSubmit={handleAddMemory} className="space-y-4">
                <p className="text-xs text-stone-600">
                  Upload a photo from your phone or laptop. It will instantly appear as an authentic Polaroid in your scrapbook and stay saved on this device.
                </p>

                {/* Upload Dropzone */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-[#E3B5C0] hover:border-scrapbook-rose bg-[#FFF9F6] rounded-xl p-6 text-center cursor-pointer transition-all hover:bg-[#FFF3EE] flex flex-col items-center justify-center gap-2"
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {newImagePreview ? (
                    <div className="relative w-40 h-40 rounded shadow-md overflow-hidden bg-stone-100 border-4 border-white">
                      <img
                        src={newImagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white text-xs font-medium">
                        Click to change photo
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="w-12 h-12 rounded-full bg-scrapbook-blush/40 flex items-center justify-center text-scrapbook-rose">
                        <Upload className="w-5 h-5" />
                      </div>
                      <p className="font-serif font-semibold text-sm text-scrapbook-brown">
                        Add another memory ♡
                      </p>
                      <p className="text-[11px] text-stone-500">
                        Click to browse or drop your favorite image here
                      </p>
                    </>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-scrapbook-brown mb-1">
                      Handwritten Caption
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. That random day that became my favorite"
                      value={newCaption}
                      onChange={(e) => setNewCaption(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-[#E8DDD4] bg-[#FFFDF9] focus:outline-none focus:ring-2 focus:ring-scrapbook-rose/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-scrapbook-brown mb-1">
                      Date or Tag (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. October golden hour"
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-[#E8DDD4] bg-[#FFFDF9] focus:outline-none focus:ring-2 focus:ring-scrapbook-rose/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-scrapbook-brown mb-1">
                    Display In Section
                  </label>
                  <div className="flex gap-4 text-xs">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="collection"
                        checked={targetCollection === 'photoWall'}
                        onChange={() => setTargetCollection('photoWall')}
                        className="accent-scrapbook-rose"
                      />
                      <span>Scrapbook Photo Wall</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="collection"
                        checked={targetCollection === 'carouselMemories'}
                        onChange={() => setTargetCollection('carouselMemories')}
                        className="accent-scrapbook-rose"
                      />
                      <span>Memories Carousel</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!newImagePreview}
                  className="w-full py-2.5 px-4 bg-scrapbook-rose hover:bg-scrapbook-roseDark disabled:bg-stone-300 text-white font-medium text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  <Plus className="w-4 h-4" />
                  Save Photo to Scrapbook
                </button>
              </form>
            )}

            {/* TAB 2: MANAGE PHOTOS */}
            {activeTab === 'manage' && (
              <div className="space-y-4">
                <p className="text-xs text-stone-600">
                  Manage the photos currently in your album. You can remove photos you don't want.
                </p>

                <h3 className="font-serif font-bold text-xs text-scrapbook-brown uppercase tracking-wider">
                  Photo Wall Memories ({data.photoWall.length})
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {data.photoWall.map((item) => (
                    <div
                      key={item.id}
                      className="relative group rounded-lg overflow-hidden border border-[#E8DDD4] bg-[#FFFDF9] p-2 shadow-sm"
                    >
                      <img
                        src={item.url}
                        alt="Photo"
                        className="w-full h-24 object-cover rounded"
                      />
                      <p className="font-handwriting text-xs truncate mt-1 text-scrapbook-brown">
                        {item.caption}
                      </p>
                      <button
                        onClick={() => handleDeletePhoto('photoWall', item.id)}
                        className="absolute top-2 right-2 p-1 bg-red-500/80 hover:bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Delete photo"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                <h3 className="font-serif font-bold text-xs text-scrapbook-brown uppercase tracking-wider pt-2">
                  Carousel Memories ({data.carouselMemories.length})
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {data.carouselMemories.map((item) => (
                    <div
                      key={item.id}
                      className="relative group rounded-lg overflow-hidden border border-[#E8DDD4] bg-[#FFFDF9] p-2 shadow-sm"
                    >
                      <img
                        src={item.url}
                        alt="Photo"
                        className="w-full h-24 object-cover rounded"
                      />
                      <p className="font-handwriting text-xs truncate mt-1 text-scrapbook-brown">
                        {item.caption}
                      </p>
                      <button
                        onClick={() => handleDeletePhoto('carouselMemories', item.id)}
                        className="absolute top-2 right-2 p-1 bg-red-500/80 hover:bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Delete photo"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: EDIT TEXT & NAMES */}
            {activeTab === 'text' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-scrapbook-brown mb-1">
                      Her Name / Nickname
                    </label>
                    <input
                      type="text"
                      value={partnerName}
                      onChange={(e) => setPartnerName(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-[#E8DDD4] bg-[#FFFDF9] focus:outline-none focus:ring-2 focus:ring-scrapbook-rose/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-scrapbook-brown mb-1">
                      Your Name / Sign-off
                    </label>
                    <input
                      type="text"
                      value={yourName}
                      onChange={(e) => setYourName(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-[#E8DDD4] bg-[#FFFDF9] focus:outline-none focus:ring-2 focus:ring-scrapbook-rose/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-scrapbook-brown mb-1">
                    Love Letter Message (Separate paragraphs with blank lines)
                  </label>
                  <textarea
                    rows={6}
                    value={letterParagraphs}
                    onChange={(e) => setLetterParagraphs(e.target.value)}
                    className="w-full text-xs p-3 rounded-lg border border-[#E8DDD4] bg-[#FFFDF9] focus:outline-none focus:ring-2 focus:ring-scrapbook-rose/30 font-serif leading-relaxed"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSaveTextChanges}
                  className="w-full py-2.5 px-4 bg-scrapbook-rose hover:bg-scrapbook-roseDark text-white font-medium text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Save Names & Letter
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-3 border-t border-[#F0E4DB] bg-stone-50 flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={onResetData}
              className="text-stone-400 hover:text-red-500 flex items-center gap-1 transition-colors"
              title="Reset scrapbook to default samples"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset to Sample Data</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 bg-stone-200 hover:bg-stone-300 text-scrapbook-brown rounded-lg font-medium transition-colors"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
