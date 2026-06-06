import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Globe } from "lucide-react";

// 🌍 FULL LANGUAGE LIST (Google supported)
const languages = [
  { code: "af", label: "Afrikaans" },
  { code: "sq", label: "Albanian" },
  { code: "am", label: "Amharic" },
  { code: "ar", label: "Arabic" },
  { code: "hy", label: "Armenian" },
  { code: "az", label: "Azerbaijani" },
  { code: "eu", label: "Basque" },
  { code: "be", label: "Belarusian" },
  { code: "bn", label: "Bengali" },
  { code: "bs", label: "Bosnian" },
  { code: "bg", label: "Bulgarian" },
  { code: "ca", label: "Catalan" },
  { code: "ceb", label: "Cebuano" },
  { code: "ny", label: "Chichewa" },
  { code: "zh-CN", label: "Chinese (Simplified)" },
  { code: "zh-TW", label: "Chinese (Traditional)" },
  { code: "co", label: "Corsican" },
  { code: "hr", label: "Croatian" },
  { code: "cs", label: "Czech" },
  { code: "da", label: "Danish" },
  { code: "nl", label: "Dutch" },
  { code: "en", label: "English" },
  { code: "eo", label: "Esperanto" },
  { code: "et", label: "Estonian" },
  { code: "tl", label: "Filipino" },
  { code: "fi", label: "Finnish" },
  { code: "fr", label: "French" },
  { code: "fy", label: "Frisian" },
  { code: "gl", label: "Galician" },
  { code: "ka", label: "Georgian" },
  { code: "de", label: "German" },
  { code: "el", label: "Greek" },
  { code: "gu", label: "Gujarati" },
  { code: "ht", label: "Haitian Creole" },
  { code: "ha", label: "Hausa" },
  { code: "haw", label: "Hawaiian" },
  { code: "he", label: "Hebrew" },
  { code: "hi", label: "Hindi" },
  { code: "hmn", label: "Hmong" },
  { code: "hu", label: "Hungarian" },
  { code: "is", label: "Icelandic" },
  { code: "ig", label: "Igbo" },
  { code: "id", label: "Indonesian" },
  { code: "ga", label: "Irish" },
  { code: "it", label: "Italian" },
  { code: "ja", label: "Japanese" },
  { code: "jw", label: "Javanese" },
  { code: "kn", label: "Kannada" },
  { code: "kk", label: "Kazakh" },
  { code: "km", label: "Khmer" },
  { code: "ko", label: "Korean" },
  { code: "ku", label: "Kurdish" },
  { code: "ky", label: "Kyrgyz" },
  { code: "lo", label: "Lao" },
  { code: "la", label: "Latin" },
  { code: "lv", label: "Latvian" },
  { code: "lt", label: "Lithuanian" },
  { code: "lb", label: "Luxembourgish" },
  { code: "mk", label: "Macedonian" },
  { code: "mg", label: "Malagasy" },
  { code: "ms", label: "Malay" },
  { code: "ml", label: "Malayalam" },
  { code: "mt", label: "Maltese" },
  { code: "mi", label: "Maori" },
  { code: "mr", label: "Marathi" },
  { code: "mn", label: "Mongolian" },
  { code: "my", label: "Myanmar" },
  { code: "ne", label: "Nepali" },
  { code: "no", label: "Norwegian" },
  { code: "ps", label: "Pashto" },
  { code: "fa", label: "Persian" },
  { code: "pl", label: "Polish" },
  { code: "pt", label: "Portuguese" },
  { code: "pa", label: "Punjabi" },
  { code: "ro", label: "Romanian" },
  { code: "ru", label: "Russian" },
  { code: "sm", label: "Samoan" },
  { code: "gd", label: "Scots Gaelic" },
  { code: "sr", label: "Serbian" },
  { code: "st", label: "Sesotho" },
  { code: "sn", label: "Shona" },
  { code: "sd", label: "Sindhi" },
  { code: "si", label: "Sinhala" },
  { code: "sk", label: "Slovak" },
  { code: "sl", label: "Slovenian" },
  { code: "so", label: "Somali" },
  { code: "es", label: "Spanish" },
  { code: "su", label: "Sundanese" },
  { code: "sw", label: "Swahili" },
  { code: "sv", label: "Swedish" },
  { code: "ta", label: "Tamil" },
  { code: "te", label: "Telugu" },
  { code: "th", label: "Thai" },
  { code: "tr", label: "Turkish" },
  { code: "uk", label: "Ukrainian" },
  { code: "ur", label: "Urdu" },
  { code: "uz", label: "Uzbek" },
  { code: "vi", label: "Vietnamese" },
  { code: "cy", label: "Welsh" },
  { code: "xh", label: "Xhosa" },
  { code: "yi", label: "Yiddish" },
  { code: "yo", label: "Yoruba" },
  { code: "zu", label: "Zulu" },
];

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [selectedLanguageCode, setSelectedLanguageCode] = useState<string>("en");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const optionRefs = useRef<Array<HTMLDivElement | null>>([]);

  const changeLanguage = (lang: string) => {
    let attempts = 0;
    const interval = setInterval(() => {
      const select = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement | null;

      attempts += 1;
      if (!select) {
        if (attempts >= 20) {
          clearInterval(interval);
        }
        return;
      }

      select.value = lang;
      select.dispatchEvent(new Event("change", { bubbles: true }));
      setTimeout(() => {
        select.dispatchEvent(new Event("change", { bubbles: true }));
      }, 100);

      clearInterval(interval);
    }, 250);
  };

  const filtered = languages.filter((l) =>
    l.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setHighlightedIndex(0);
  }, [search]);

  useEffect(() => {
    if (!open) return;
    const option = optionRefs.current[highlightedIndex];
    option?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [highlightedIndex, open]);

  useEffect(() => {
    if (!open) return;

    const onClickOutside = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("touchstart", onClickOutside);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("touchstart", onClickOutside);
    };
  }, [open]);

  const closeDropdown = () => {
    setOpen(false);
    setSearch("");
    setHighlightedIndex(0);
    inputRef.current?.blur();
  };

  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguageCode(lang);
    changeLanguage(lang);
    closeDropdown();
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (filtered.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleLanguageSelect(filtered[highlightedIndex].code);
    } else if (e.key === "Escape") {
      closeDropdown();
    }
  };

  return (
    <div ref={containerRef} className="relative notranslate" translate="no">
      <div
        onClick={() => {
          if (open) {
            closeDropdown();
          } else {
            setOpen(true);
            setSearch("");
            setHighlightedIndex(0);
          }
        }}
        className="flex items-center gap-2 border rounded-xl px-3 py-1.5 cursor-pointer"
      >
        <Globe className="w-4 h-4 text-green-600" />
        <span className="notranslate" translate="no">
          {languages.find((l) => l.code === selectedLanguageCode)?.label ?? "English"}
        </span>
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-64 max-h-80 overflow-y-auto bg-white shadow-lg rounded-xl p-2 z-[9999]">
          <input
            ref={inputRef}
            className="w-full mb-2 px-2 py-1 border rounded"
            placeholder="Search language..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleInputKeyDown}
            autoFocus
          />

          {filtered.map((lang, i) => {
            const isHighlighted = i === highlightedIndex;
            const isSelected = lang.code === selectedLanguageCode;

            return (
              <div
                ref={(el) => (optionRefs.current[i] = el)}
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                onMouseEnter={() => setHighlightedIndex(i)}
                role="option"
                aria-selected={isSelected}
                className={`flex items-center justify-between px-2 py-2 rounded cursor-pointer text-sm transition-colors notranslate ${
                  isHighlighted ? "bg-blue-100 text-blue-900" : isSelected ? "bg-green-50 text-green-700" : "hover:bg-gray-100"
                }`}
                translate="no"
              >
                <span>{lang.label}</span>
                {isSelected && <span className="text-xs text-green-700 font-semibold">  Selecte language</span>}
              </div>
            );
          })}
        </div>
        
      )}

    </div>
  );
}