import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  {
    name: "Midnight AI",
    primary: "245 55% 28%",
    accent: "48 100% 62%",
    sky: "195 85% 70%",
    periwinkle: "245 70% 62%",
    colors: ["#1a1a6e", "#ffd633", "#5cc8e6", "#6366f1"],
  },
  {
    name: "Ocean Blue",
    primary: "200 70% 22%",
    accent: "175 80% 45%",
    sky: "190 75% 65%",
    periwinkle: "210 65% 55%",
    colors: ["#114455", "#1ab5a0", "#5bb8d4", "#4a7fbf"],
  },
  {
    name: "Royal Purple",
    primary: "270 55% 28%",
    accent: "280 70% 58%",
    sky: "300 50% 72%",
    periwinkle: "260 65% 60%",
    colors: ["#3b1a6e", "#9b59b6", "#c98fd9", "#7c5cbf"],
  },
  {
    name: "Emerald Growth",
    primary: "155 55% 22%",
    accent: "80 70% 50%",
    sky: "160 55% 65%",
    periwinkle: "140 50% 45%",
    colors: ["#1a5c3a", "#7ac142", "#6dc9a0", "#4d9966"],
  },
  {
    name: "Sunset Orange",
    primary: "20 70% 28%",
    accent: "35 95% 55%",
    sky: "30 85% 70%",
    periwinkle: "15 70% 60%",
    colors: ["#7a2e0a", "#ff8c42", "#ffc49b", "#ff6f3c"],
  },
  {
    name: "Cyber Neon",
    primary: "230 60% 18%",
    accent: "180 100% 50%",
    sky: "200 90% 60%",
    periwinkle: "250 80% 65%",
    colors: ["#0f172a", "#00ffff", "#38bdf8", "#8b5cf6"],
  },
  {
    name: "Luxury Gold",
    primary: "40 45% 20%",
    accent: "45 100% 55%",
    sky: "35 60% 70%",
    periwinkle: "50 80% 60%",
    colors: ["#3d2f14", "#d4af37", "#f1d27a", "#bfa14a"],
  },
  {
    name: "Rose Pink",
    primary: "340 60% 30%",
    accent: "330 80% 60%",
    sky: "350 70% 75%",
    periwinkle: "320 60% 65%",
    colors: ["#7a1f3d", "#ff4d8d", "#ff9ab6", "#c77dff"],
  },
  {
    name: "Indigo Tech",
    primary: "230 55% 28%",
    accent: "260 80% 60%",
    sky: "220 70% 65%",
    periwinkle: "240 65% 62%",
    colors: ["#1e2a78", "#7c3aed", "#60a5fa", "#6366f1"],
  },
  {
    name: "Dark Pro",
    primary: "220 20% 12%",
    accent: "210 90% 55%",
    sky: "215 40% 65%",
    periwinkle: "240 50% 60%",
    colors: ["#0f172a", "#3b82f6", "#94a3b8", "#6366f1"],
  },
];

const ThemeSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("themeIndex");
    if (saved) applyTheme(Number(saved));
  }, []);

  const applyTheme = (index: number) => {
    const t = themes[index];
    const root = document.documentElement;

    root.style.setProperty("--primary", t.primary);
    root.style.setProperty("--accent", t.accent);
    root.style.setProperty("--sky", t.sky);
    root.style.setProperty("--periwinkle", t.periwinkle);
    root.style.setProperty("--ring", t.primary);
    root.style.setProperty("--topbar", t.primary);

    setActive(index);
    localStorage.setItem("themeIndex", index.toString());
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="bg-card border border-border rounded-2xl shadow-xl p-4 space-y-3 w-[220px] max-h-[420px] overflow-y-auto"
          >

            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Premium Themes
            </p>

            {themes.map((t, i) => (
              <button
                key={t.name}
                onClick={() => applyTheme(i)}
                className={`flex items-center gap-3 w-full p-2 rounded-xl transition ${
                  active === i ? "bg-secondary" : "hover:bg-muted"
                }`}
              >

                <div className="flex -space-x-1">
                  {t.colors.map((c, j) => (
                    <span
                      key={j}
                      className="w-5 h-5 rounded-full border-2 border-white"
                      style={{ background: c }}
                    />
                  ))}
                </div>

                <span className="text-sm font-medium text-foreground">
                  {t.name}
                </span>

              </button>
            ))}

          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full gradient-accent text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Palette className="w-5 h-5" />
      </button>

    </div>
  );
};

export default ThemeSwitcher;