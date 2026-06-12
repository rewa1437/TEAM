export type LocalizedString = {
  en: string
  th: string
}

export type Member = {
  name: LocalizedString
  nickname: LocalizedString
  role: LocalizedString
  avatar: string
  slug: string
  bio: LocalizedString
  isLead?: boolean
  skills: string[]
  socials: {
    github?: string
    linkedin?: string
    twitter?: string
  }
  projects: {
    title: string
    description: LocalizedString
    url?: string
  }[]
}

export const members: Member[] = [
  {
    name: { en: 'Anupap Pasakornhiran', th: 'อนุภาพ ภาสกรหิรัญ' },
    nickname: { en: 'Big', th: 'บิ๊ก' },
    slug: 'anupap-pasakornhiran',
    isLead: true,
    avatar: '/avatars/big.JPG',
    role: {
      en: 'Fullstack Developer',
      th: 'นักพัฒนาซอฟต์แวร์ฟูลสแตก',
    },
    bio: {
      en: 'A Software Engineering graduate from Thammasat University, Faculty of Engineering, with a strong passion for software development across both frontend and backend.',
      th: 'จบการศึกษาจากมหาวิทยาลัยธรรมศาสตร์ คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมซอฟต์แวร์ และมีความถนัดในด้านการพัฒนาซอฟต์แวร์ทั้งฝั่ง frontend และ backend',
    },
    skills: ['Python', 'Java', 'Rust', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'FastAPI', 'PostgreSQL', 'MySQL', 'Prisma', 'Docker', 'GitHub', 'Postman', 'Figma'],
    socials: {
      github: 'https://github.com/rewa1437',
    },
    projects: [
      {
        title: 'Bingsu AI',
        description: {
          en: 'An AI chatbot developed during an internship that uses RAG and LLM to answer questions, where I served as a fullstack developer with a focus on backend.',
          th: 'AI chatbot ที่พัฒนาในช่วงฝึกงาน ใช้ RAG และ LLM ในการตอบคำถาม โดยรับหน้าที่เป็น Fullstack Developer และดูแล backend เป็นหลัก',
        },
      },
      {
        title: 'SmartAudit',
        description: {
          en: 'A part-time project at SmartClick focused on organizational security, where I developed the web license and web admin panels as a fullstack web developer.',
          th: 'โปรเจกต์พาร์ทไทม์ที่ SmartClick เกี่ยวกับความปลอดภัยในองค์กร รับหน้าที่พัฒนาส่วน web license และ web admin ในฐานะ Fullstack Web Developer',
        },
      },
      {
        title: 'TSE Fongdi',
        description: {
          en: 'A university project in the third year inspired by Traffy Fondue for handling public complaints, where I was responsible for the design system, database design, and overall workflow planning.',
          th: 'โปรเจกต์วิชาปีที่ 3 ที่ได้แรงบันดาลใจจาก Traffy Fondue สำหรับรับเรื่องร้องเรียน รับหน้าที่ออกแบบ design system ฐานข้อมูล และวาง flow งานต่าง ๆ',
        },
      },
    ],
  },
    {
    "name": {th:"วรรธนะ รู้อ่าน",en:"wantana ruarn"},
    "nickname": { en: "Tonnam", th: "ต้นน้ำ" },
    "slug": "wantana-ruarn",
    "isLead": false,
    "avatar": "/avatars/tonnam.JPG",
    "role": {
      "en": "Full Stack Developer",
      "th": "นักพัฒนาซอฟต์แวร์ฟูลสแตก"
    },
    "bio": {
      "en": "Graduated from Thammasat University, Faculty of Engineering, majoring in Software Engineering. A Full Stack Developer interested in web application and backend development, with experience developing systems using React, Node.js, and MySQL. Passionate about designing practical systems and solving business problems with technology.",
      "th": "จบการศึกษาจากมหาวิทยาลัยธรรมศาสตร์ คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมซอฟต์แวร์ เป็น Full Stack Developer ที่สนใจการพัฒนา Web Application และระบบ Backend มีประสบการณ์พัฒนาระบบด้วย React, Node.js และ MySQL ชื่นชอบการออกแบบระบบที่ใช้งานได้จริงและแก้ปัญหาทางธุรกิจด้วยเทคโนโลยี"
    },
    "skills": [
      "Python",
      "React",
      "JavaScript",
      "Node.js",
      "MySQL",
      "Docker",
      "PostgreSQL",
      "Postman",
      "Figma",
      "GitHub",
      "FastAPI",
      "Linux"
    ],
    "socials": {},
    "projects": [
      {
        "title": "SmartAudit",
        "description": {
          "en": "A monitoring platform that records users' screens while they work, supports real-time screen viewing, replay, and user management.",
          "th": "โปรเจกต์สำหรับบันทึกหน้าจอขณะผู้ใช้ทำงาน สามารถดูหน้าจอแบบเรียลไทม์ ดูย้อนหลังได้ และมีระบบจัดการผู้ใช้งาน"
        }
      },
      {
        "title": "Automatic Document Form Generator",
        "description": {
          "en": "A system that generates document forms automatically from user-provided data, reuses the data across multiple document templates, and exports the result as a PDF file.",
          "th": "โปรเจกต์สร้างฟอร์มเอกสารอัตโนมัติจากข้อมูลที่ผู้ใช้กรอกไว้ สามารถนำข้อมูลไปใช้กับแบบฟอร์มเอกสารอื่นได้ และแสดงผลออกมาเป็นไฟล์ PDF ได้ทันที"
        }
      }
    ]
  },
    {
    "name": {th:"รชตะ ธีระประโภชน์ภาณุ",en:"rachata theerapraphotphanu"},
    "nickname": { en: "Tunny", th: "ตุน" },
    "slug": "rachata-theerapraphotphanu",
    "avatar": "/avatars/tunny.png",
    "role": {
      "en": "Backend Developer",
      "th": "นักพัฒนาแบ็กเอนด์"
    },
    "bio": {
      "en": "Digital Engineering (Data Science) undergraduate at SIIT with hands-on experience in data-driven web applications. A fast learner with a strong interest in Data Engineering.",
      "th": "นักศึกษาสาขาวิศวกรรมดิจิทัล (Data Science) จาก SIIT ที่มีประสบการณ์ลงมือปฏิบัติด้านการพัฒนาเว็บแอปพลิเคชันที่ขับเคลื่อนด้วยข้อมูล เรียนรู้ได้รวดเร็วและมีความสนใจอย่างแรงกล้าในด้าน Data Engineering"
    },
    "skills": ["MySQL", "PHP", "Figma", "Python", "HTML", "CSS", "Canva", "GitHub"],
    "socials": {
      "github": "https://github.com/Rachata506"
    },
    "projects": [
      {
        "title": "CartHub",
        "description": {
          "en": "A web application for renting carts in condos or dormitories, where users scan a QR code to borrow and return carts, backed by a secure database for authentication and data management.",
          "th": "เว็บแอปพลิเคชันสำหรับเช่ารถเข็นในคอนโดหรือหอพัก โดยผู้ใช้สแกน QR Code เพื่อยืมและคืนรถเข็น พร้อมระบบฐานข้อมูลที่ปลอดภัยสำหรับการสมัครสมาชิกและเข้าสู่ระบบ"
        }
      }
    ]
  },

]
