import { notFound } from 'next/navigation'
import { members } from '@/lib/members-data'
import MemberProfile from '@/components/ui/member-profile'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return members.map((member) => ({ slug: member.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const member = members.find((m) => m.slug === slug)
  if (!member) return {}
  return {
    title: `${member.name.en} — ${member.role.en}`,
    description: member.bio.en,
  }
}

export default async function MemberPage({ params }: Props) {
  const { slug } = await params
  const member = members.find((m) => m.slug === slug)

  if (!member) notFound()

  return <MemberProfile member={member} />
}
