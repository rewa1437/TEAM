'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Link2, Briefcase, X, ExternalLink } from 'lucide-react'
import { useLanguage, LangTransition } from '@/components/ui/language-switcher'
import { t } from '@/lib/translations'
import type { Member } from '@/lib/members-data'

type Props = { member: Member }

export default function MemberProfile({ member }: Props) {
  const { lang } = useLanguage()
  const tx = t[lang]

  return (
    <div className="min-h-[100dvh] bg-[#F8F7F4]">

      {/* Back button */}
      <div className="animate-fade-up max-w-5xl mx-auto px-6 pt-28" style={{ animationDelay: '0ms' }}>
        <Link
          href="/#team"
          className="group inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-[12px] font-semibold text-zinc-500 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-zinc-300 hover:bg-white hover:text-zinc-800 hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)]"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-x-0.5" />
          <LangTransition><span>{tx.backToTeam}</span></LangTransition>
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10">

          {/* Avatar — Double-Bezel */}
          <div
            className="animate-scale-in shrink-0"
            style={{ animationDelay: '60ms' }}
          >
            <div className="rounded-[2rem] bg-zinc-100/60 ring-1 ring-zinc-900/[0.05] p-1.5">
              <div className="relative w-36 h-36 rounded-[calc(2rem-6px)] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                <Image
                  src={member.avatar}
                  alt={member.name.en}
                  fill
                  className="object-cover"
                  sizes="144px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Name / Role / Socials */}
          <div className="animate-fade-up text-center sm:text-left" style={{ animationDelay: '120ms' }}>

            {/* Role eyebrow */}
            <LangTransition>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold text-zinc-400 mb-4">
                {member.role[lang]}
              </span>
            </LangTransition>

            <LangTransition>
              <div className="flex items-baseline gap-3 flex-wrap justify-center sm:justify-start">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-zinc-900 leading-[1.04]">
                  {member.nickname[lang]}
                </h1>
                <span className="text-lg text-zinc-400 font-medium tracking-[-0.01em]">
                  {member.name[lang]}
                </span>
              </div>
            </LangTransition>

            {/* Social links */}
            <div className="flex items-center justify-center sm:justify-start gap-2.5 mt-6">
              {member.socials.github && (
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-zinc-200 bg-white/70 text-zinc-400 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-zinc-300 hover:bg-white hover:text-zinc-700 hover:shadow-[0_4px_14px_rgba(0,0,0,0.07)]"
                >
                  <Link2 className="w-3.5 h-3.5" />
                </a>
              )}
              {member.socials.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-zinc-200 bg-white/70 text-zinc-400 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-zinc-300 hover:bg-white hover:text-zinc-700 hover:shadow-[0_4px_14px_rgba(0,0,0,0.07)]"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                </a>
              )}
              {member.socials.twitter && (
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-zinc-200 bg-white/70 text-zinc-400 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-zinc-300 hover:bg-white hover:text-zinc-700 hover:shadow-[0_4px_14px_rgba(0,0,0,0.07)]"
                >
                  <X className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hairline divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      </div>

      {/* Content grid */}
      <section className="max-w-5xl mx-auto px-6 py-16 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left */}
          <div className="flex flex-col gap-8">

            {/* About */}
            <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
              <LangTransition>
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-zinc-400 mb-4">{tx.about}</p>
                <p className="text-zinc-600 leading-[1.8] text-[15px]">{member.bio[lang]}</p>
              </LangTransition>
            </div>

            {/* Skills */}
            <div className="animate-fade-up" style={{ animationDelay: '270ms' }}>
              <LangTransition>
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-zinc-400 mb-4">{tx.skills}</p>
              </LangTransition>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-white/70 px-3.5 py-1.5 text-[12px] font-medium text-zinc-600 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-zinc-300 hover:bg-white hover:shadow-[0_3px_10px_rgba(0,0,0,0.06)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Projects */}
          <div className="animate-fade-up" style={{ animationDelay: '340ms' }}>
            <LangTransition>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-zinc-400 mb-4">{tx.projects}</p>
            </LangTransition>
            <div className="flex flex-col gap-4">
              {member.projects.map((project, i) => (
                <div
                  key={project.title}
                  className="animate-fade-up"
                  style={{ animationDelay: `${400 + i * 70}ms` }}
                >
                  {/* Project — Double-Bezel card */}
                  <div className="rounded-2xl bg-zinc-100/50 ring-1 ring-zinc-900/[0.04] p-1 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-zinc-900/[0.08] hover:bg-zinc-100/80">
                    <div className="rounded-[calc(1rem-4px)] bg-white px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_6px_28px_rgba(0,0,0,0.06)]">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-semibold text-[14px] tracking-[-0.01em] text-zinc-900">{project.title}</h3>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title}`}
                            className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-zinc-200 text-zinc-400 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-zinc-300 hover:text-zinc-700 hover:shadow-[0_2px_8px_rgba(0,0,0,0.07)]"
                          >
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <LangTransition>
                        <p className="text-[13px] text-zinc-400 leading-relaxed">{project.description[lang]}</p>
                      </LangTransition>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
