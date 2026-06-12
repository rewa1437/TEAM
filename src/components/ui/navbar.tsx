import LanguageSwitcher from '@/components/ui/language-switcher'

export default function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-5 z-50 flex items-center justify-between px-6">
      {/* Logo */}
      <div className="pointer-events-auto">
      </div>
      {/* Language switcher pill */}
      <div className="pointer-events-auto rounded-full border border-zinc-900/[0.06] bg-white/80 backdrop-blur-2xl px-1 py-1 shadow-[0_2px_24px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]">
        <LanguageSwitcher />
      </div>
    </header>
  )
}
