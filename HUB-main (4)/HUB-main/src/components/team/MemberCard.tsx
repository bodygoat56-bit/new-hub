import { User, Mail, GitFork as Github, Globe, Link as Linkedin, Pencil, Trash2 } from 'lucide-react'
import type { TeamMember } from '../../types'

interface Props {
  member: TeamMember
  onEdit: (member: TeamMember) => void
  onDelete: (id: string) => void
}

export function MemberCard({ member, onEdit, onDelete }: Props) {
  const initials = member.name
    .split(' ')
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className="card-surface-hover group relative overflow-hidden">
      <div className="h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0" />

      <div className="p-6">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          {/* Profile image */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden flex-shrink-0 border border-navy-600 bg-navy-850 flex items-center justify-center">
            {member.photo ? (
              <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-3xl font-bold text-cyan-400/60 font-mono">
                {initials || <User size={32} />}
              </span>
            )}
          </div>

          {/* All info — no truncation */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-white">
              {member.name || 'Unnamed Member'}
            </h3>
            {member.role && (
              <p className="text-sm text-cyan-400/80 font-mono mt-1">{member.role}</p>
            )}
            {member.bio && (
              <p className="text-sm text-slate-400 mt-3 leading-relaxed">{member.bio}</p>
            )}

            <div className="flex flex-wrap items-center gap-3 mt-4">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  <Mail size={15} /> {member.email}
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  <Github size={15} /> GitHub
                </a>
              )}
              {member.website && (
                <a
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  <Globe size={15} /> Website
                </a>
              )}
            </div>
          </div>

          {/* Edit/delete actions */}
          <div className="flex sm:flex-col items-center gap-1 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onEdit(member)}
              className="p-2 rounded-lg text-slate-500 hover:text-cyan-300 hover:bg-navy-800/50 transition-all"
              title="Edit"
            >
              <Pencil size={16} />
            </button>
            <button
              onClick={() => onDelete(member.id)}
              className="p-2 rounded-lg text-slate-500 hover:text-red-400 hover:bg-navy-800/50 transition-all"
              title="Delete"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
