export const t = {
  en: {
    // Team section
    meetTheTeam: 'Meet our Team CPK',
    teamSubtitle: 'The people behind the work — building, designing, and shipping together.',

    // Member profile
    backToTeam: 'Back to Team',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
  },
  th: {
    // Team section
    meetTheTeam: 'พบกับทีมงาน CPK',
    teamSubtitle: 'ผู้คนเบื้องหลังงาน — ร่วมสร้าง ออกแบบ และพัฒนาไปด้วยกัน',

    // Member profile
    backToTeam: 'กลับไปหน้าทีม',
    about: 'เกี่ยวกับ',
    skills: 'ทักษะ',
    projects: 'โปรเจกต์',
  },
} as const

export type Lang = keyof typeof t
