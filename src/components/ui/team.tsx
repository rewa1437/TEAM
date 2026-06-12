'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Crown } from 'lucide-react'
import { members } from '@/lib/members-data'
import { useLanguage, LangTransition } from '@/components/ui/language-switcher'
import { t } from '@/lib/translations'

function sortWithLeadInCenter() {
  const lead = members.find((m) => m.isLead)
  const others = members.filter((m) => !m.isLead)
  if (!lead) return members
  const mid = Math.floor(others.length / 2)
  return [...others.slice(0, mid), lead, ...others.slice(mid)]
}

const sortedMembers = sortWithLeadInCenter()

export default function TeamSection() {
  const { lang } = useLanguage()
  const tx = t[lang]

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center px-6 py-32 bg-[#F8F7F4]">
      <div className="max-w-5xl mx-auto w-full">

        {/* Heading */}
        <div className="animate-fade-up text-center mb-5" style={{ animationDelay: '0ms' }}>
          <LangTransition>
            <h2 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-[-0.04em] text-zinc-900 leading-[1.02]">
              {tx.meetTheTeam}
            </h2>
          </LangTransition>
        </div>

        {/* Subtitle */}
        <div className="animate-fade-up text-center mb-24" style={{ animationDelay: '130ms' }}>
          <LangTransition>
            <p className="text-zinc-400 text-base sm:text-lg max-w-sm mx-auto leading-relaxed font-medium">
              {tx.teamSubtitle}
            </p>
          </LangTransition>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-5">
          {sortedMembers.map((member, index) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className="animate-fade-up group w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
              style={{ animationDelay: `${200 + index * 80}ms` }}
            >
              {/* Outer shell — Double-Bezel */}
              <div className="relative rounded-[2rem] bg-zinc-100/60 ring-1 ring-zinc-900/[0.04] p-1.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:ring-zinc-900/[0.09] group-hover:bg-zinc-100/90">
                {member.isLead && (
                  <div className="absolute -top-3 -right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] ring-1 ring-amber-200">
                    <Crown className="w-4 h-4 text-amber-400 fill-amber-400" />
                  </div>
                )}
                {/* Inner core */}
                <div className="rounded-[calc(2rem-6px)] bg-white p-8 flex flex-col items-center text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_12px_48px_rgba(0,0,0,0.07)]">

                  {/* Avatar — also double-bezeled */}
                  <div className="rounded-full bg-zinc-50 ring-1 ring-zinc-900/[0.05] p-1 mb-6 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.06]">
                    <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden">
                      <Image
                        src={member.avatar}
                        alt={member.name.en}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.08]"
                        sizes="72px"
                      />
                    </div>
                  </div>

                  <LangTransition>
                    <h3 className="font-bold text-[18px] tracking-[-0.02em] text-zinc-900">
                      {member.nickname[lang]}
                    </h3>
                    <p className="text-[11px] text-zinc-400 mt-0.5 truncate max-w-[140px]">
                      {member.name[lang]}
                    </p>
                    <p className="text-[12px] text-zinc-500 mt-2 font-medium">{member.role[lang]}</p>
                  </LangTransition>

                  {/* Arrow chip — reveals on hover */}
                  <div className="mt-6 flex items-center justify-center w-7 h-7 rounded-full bg-zinc-50 ring-1 ring-zinc-200/80 opacity-0 translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100 group-hover:translate-y-0">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="text-zinc-500">
                      <path d="M1.5 7.5L7.5 1.5M7.5 1.5H2.5M7.5 1.5V6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
