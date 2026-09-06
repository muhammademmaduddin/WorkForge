import { type ReactNode, useState } from 'react';
import { Link, useLocation } from 'wouter';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Hammer,
  Menu,
  MessageCircle,
  Settings,
  ShieldCheck,
  Star,
  X,
} from 'lucide-react';
import type { Freelancer, Job } from '@/data/mock';

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 focus-ring" data-testid="link-logo">
      <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
        <Hammer size={18} strokeWidth={2.5} />
      </span>
      {!compact && (
        <span className="font-display text-[19px] font-bold tracking-[-.04em]">
          work<span className="text-secondary">forge</span>
        </span>
      )}
    </Link>
  );
}

export function Avatar({
  person,
  size = 'md',
}: {
  person: { initials: string; accent?: string };
  size?: 'sm' | 'md' | 'lg' | 'xl';
}) {
  const sizes = {
    sm: 'size-8 text-[11px]',
    md: 'size-11 text-sm',
    lg: 'size-20 text-xl',
    xl: 'size-28 text-3xl',
  };
  return (
    <span
      className={`${sizes[size]} ${person.accent ?? 'bg-[#d7e4ed]'} grid shrink-0 place-items-center rounded-2xl font-display font-bold text-foreground`}
      data-testid="img-avatar"
    >
      {person.initials}
    </span>
  );
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'quiet' | 'coral';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}) {
  const styles = {
    primary: 'bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-md',
    outline: 'border border-border bg-card text-foreground hover:border-primary hover:text-primary',
    quiet: 'text-muted-foreground hover:bg-muted hover:text-foreground',
    coral: 'bg-accent text-accent-foreground hover:-translate-y-0.5 hover:shadow-md',
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export function Badge({
  children,
  tone = 'muted',
}: {
  children: ReactNode;
  tone?: 'muted' | 'teal' | 'gold' | 'coral';
}) {
  const tones = {
    muted: 'bg-muted text-muted-foreground',
    teal: 'bg-[#d8eee6] text-[#176354]',
    gold: 'bg-[#f5e6bf] text-[#765a19]',
    coral: 'bg-[#f3d9d3] text-[#99463c]',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[.08em] ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function Stars({ rating }: { rating: number | string }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm font-semibold">
      <Star size={14} className="fill-secondary text-secondary" /> {rating}
    </span>
  );
}

export function Notice({
  children,
  tone = 'teal',
  onClose,
}: {
  children: ReactNode;
  tone?: 'teal' | 'gold' | 'coral';
  onClose?: () => void;
}) {
  const tones = {
    teal: 'bg-[#d8eee6] text-[#176354]',
    gold: 'bg-[#f5e6bf] text-[#765a19]',
    coral: 'bg-[#f3d9d3] text-[#99463c]',
  };
  return (
    <div className={`flex items-start justify-between gap-3 rounded-xl p-4 text-sm leading-6 ${tones[tone]}`} role="status">
      <div className="flex items-start gap-2">
        <Check size={17} className="mt-1 shrink-0" />
        <span>{children}</span>
      </div>
      {onClose && (
        <button className="focus-ring rounded-md p-1" aria-label="Dismiss notice" onClick={onClose}>
          <X size={15} />
        </button>
      )}
    </div>
  );
}

export function EmptyState({
  title,
  body,
  action,
  onClick,
  icon,
}: {
  title: string;
  body: string;
  action?: string;
  onClick?: () => void;
  icon?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center">
      <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-muted text-muted-foreground">
        {icon ?? <MessageCircle size={21} />}
      </span>
      <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
      <p className="mx-auto mt-2 max-w-[360px] text-sm leading-6 text-muted-foreground">{body}</p>
      {action && onClick && (
        <Button onClick={onClick} variant="outline" className="mt-6">
          {action}
        </Button>
      )}
    </div>
  );
}

export function LoadingState({ label = 'Getting things ready' }: { label?: string }) {
  return (
    <div className="grid gap-4" role="status" aria-label={label}>
      {[1, 2, 3].map((item) => (
        <div key={item} className="animate-pulse rounded-2xl border border-border bg-card p-6">
          <div className="h-3 w-28 rounded bg-muted" />
          <div className="mt-5 h-6 w-3/4 rounded bg-muted" />
          <div className="mt-3 h-4 w-full rounded bg-muted" />
          <div className="mt-6 h-3 w-1/2 rounded bg-muted" />
        </div>
      ))}
    </div>
  );
}

export function ErrorState({
  title = 'That did not come through',
  body = 'Try again, or head back to a place that is working.',
  onRetry,
}: {
  title?: string;
  body?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="rounded-2xl border border-[#e8b7ae] bg-[#fff4f1] px-6 py-14 text-center">
      <h3 className="font-display text-xl font-bold text-[#8c3f36]">{title}</h3>
      <p className="mx-auto mt-2 max-w-[360px] text-sm leading-6 text-[#99463c]">{body}</p>
      {onRetry && <Button onClick={onRetry} variant="coral" className="mt-6">Try again</Button>}
    </div>
  );
}

export function Topbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDashboard = location.startsWith('/dashboard') || location.startsWith('/workspace');
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-4 px-5 lg:px-8">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            <Link href="/jobs" className={`text-sm font-semibold transition-colors hover:text-primary ${location.startsWith('/jobs') ? 'text-primary' : 'text-muted-foreground'}`}>Find work</Link>
            <Link href="/freelancers" className={`text-sm font-semibold transition-colors hover:text-primary ${location.startsWith('/freelancers') || location.startsWith('/clients') ? 'text-primary' : 'text-muted-foreground'}`}>Find talent</Link>
            <Link href="/dashboard/freelancer" className={`text-sm font-semibold transition-colors hover:text-primary ${isDashboard ? 'text-primary' : 'text-muted-foreground'}`}>Workspace</Link>
          </nav>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/messages" className="focus-ring grid size-10 place-items-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" aria-label="Open messages"><MessageCircle size={19} /></Link>
          <Link href="/notifications" className="focus-ring relative grid size-10 place-items-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" aria-label="Open notifications"><span className="absolute right-2 top-2 size-1.5 rounded-full bg-accent" /><BellIcon /></Link>
          <Link href="/settings" className="focus-ring grid size-10 place-items-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" aria-label="Open settings"><Settings size={19} /></Link>
          <span className="mx-1 h-7 w-px bg-border" />
          <Link href="/dashboard/freelancer" className="flex items-center gap-2 rounded-xl p-1.5 pr-2 transition-colors hover:bg-muted" aria-label="Open Muhammad 
          profile">
            <Avatar person={{ initials: 'ME', accent: 'bg-[#d7efe7]' }} size="sm" />
            <span className="hidden text-sm font-semibold lg:inline">Muhammad Emmaduddin</span>
            <ChevronDown size={14} className="text-muted-foreground" />
          </Link>
        </div>
        <button className="focus-ring grid size-10 place-items-center rounded-xl border border-border md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}>
          {mobileOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-border bg-card px-5 py-4 md:hidden">
          <div className="grid gap-1">
            {[
              ['/jobs', 'Find work'],
              ['/freelancers', 'Find talent'],
              ['/dashboard/freelancer', 'Workspace'],
              ['/messages', 'Messages'],
              ['/notifications', 'Notifications'],
              ['/settings', 'Settings'],
            ].map(([href, label]) => (
              <Link key={href} onClick={() => setMobileOpen(false)} href={href} className="focus-ring rounded-lg p-3 text-sm font-semibold hover:bg-muted">{label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function BellIcon() {
  return (
    <span className="relative block size-5">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5">
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#23303c] text-[#e8e4d9]">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
        <div><Logo compact /><p className="mt-5 max-w-[250px] text-sm leading-6 text-[#aeb8b6]">Good work deserves a good place to begin.</p><p className="mt-8 font-mono text-[10px] uppercase tracking-[.15em] text-[#82928e]">© 2026 WorkForge</p></div>
        <div><p className="mb-4 font-mono text-[10px] uppercase tracking-[.16em] text-[#82928e]">Explore</p><div className="grid gap-3 text-sm text-[#d4d6cf]"><Link href="/jobs" className="hover:text-secondary">Find work</Link><Link href="/freelancers" className="hover:text-secondary">Find talent</Link><Link href="/post-job" className="hover:text-secondary">Post a job</Link></div></div>
        <div><p className="mb-4 font-mono text-[10px] uppercase tracking-[.16em] text-[#82928e]">WorkForge</p><div className="grid gap-3 text-sm text-[#d4d6cf]"><Link href="/about" className="hover:text-secondary">About & trust</Link><Link href="/help" className="hover:text-secondary">Help center</Link><Link href="/terms" className="hover:text-secondary">Terms</Link></div></div>
        <div><p className="mb-4 font-mono text-[10px] uppercase tracking-[.16em] text-[#82928e]">Your account</p><div className="grid gap-3 text-sm text-[#d4d6cf]"><Link href="/login" className="hover:text-secondary">Log in</Link><Link href="/signup" className="hover:text-secondary">Create account</Link></div></div>
      </div>
    </footer>
  );
}

export function Shell({ children, noFooter = false }: { children: ReactNode; noFooter?: boolean }) {
  return <div className="noise min-h-[100dvh]"><Topbar />{children}{!noFooter && <Footer />}</div>;
}

export function JobCard({ job, saved, onSave }: { job: Job; saved: boolean; onSave: (id: string) => void }) {
  return (
    <article className={`teal-stripe group relative rounded-2xl border border-border bg-card p-5 pl-7 transition duration-300 hover:-translate-y-1 hover:shadow-lift ${job.featured ? 'ring-1 ring-secondary/50' : ''}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2"><Badge tone={job.featured ? 'gold' : 'muted'}>{job.featured ? 'Featured' : job.type}</Badge><span className="font-mono text-[10px] text-muted-foreground">{job.posted}</span></div>
        <button onClick={() => onSave(job.id)} className={`focus-ring grid size-9 place-items-center rounded-lg transition ${saved ? 'bg-[#f5e6bf] text-[#765a19]' : 'text-muted-foreground hover:bg-muted'}`} aria-label={saved ? 'Remove saved job' : 'Save job'} aria-pressed={saved}><BookmarkIcon filled={saved} /></button>
      </div>
      <Link href={`/jobs/${job.id}`} className="mt-5 block">
        <h3 className="font-display text-xl font-bold leading-tight tracking-[-.035em] group-hover:text-primary">{job.title}</h3>
        <p className="mt-2 text-sm font-semibold text-muted-foreground">{job.company}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">{job.description}</p>
      </Link>
      <div className="mt-5 flex flex-wrap gap-1.5">{job.tags.map((tag) => <span key={tag} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">{tag}</span>)}</div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 text-xs text-muted-foreground"><span className="flex items-center gap-1.5 font-semibold text-foreground"><span className="text-primary">$</span>{job.budget}</span><span>{job.location}</span><span>{job.proposals} proposals</span></div>
    </article>
  );
}

export function TalentCard({ person, saved, onSave }: { person: Freelancer; saved: boolean; onSave: (id: string) => void }) {
  return (
    <article className="group rounded-2xl border border-border bg-card p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="flex items-start justify-between">
        <Link href={`/freelancers/${person.id}`} className="flex items-center gap-3">
          <Avatar person={person} />
          <div><h3 className="font-display font-bold group-hover:text-primary">{person.name}</h3><p className="mt-0.5 max-w-[180px] text-xs leading-4 text-muted-foreground">{person.role}</p></div>
        </Link>
        <button onClick={() => onSave(person.id)} className={`focus-ring grid size-9 place-items-center rounded-lg ${saved ? 'bg-[#f5e6bf] text-[#765a19]' : 'text-muted-foreground hover:bg-muted'}`} aria-label={saved ? 'Remove saved freelancer' : 'Save freelancer'} aria-pressed={saved}><HeartIcon filled={saved} /></button>
      </div>
      <div className="mt-5 flex items-center justify-between border-y border-border py-3 text-xs"><Stars rating={person.rating.toFixed(2)} /><span className="font-mono font-medium">{person.rate}</span></div>
      <p className="mt-4 line-clamp-2 text-sm leading-6 text-muted-foreground">{person.bio}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">{person.skills.slice(0, 3).map((skill) => <span key={skill} className="rounded-md bg-muted px-2 py-1 text-[11px] text-muted-foreground">{skill}</span>)}</div>
      <div className="mt-5 flex items-center justify-between"><span className={`text-xs font-semibold ${person.availabilityKey === 'now' ? 'text-primary' : 'text-muted-foreground'}`}><span className="mr-1.5 inline-block size-1.5 rounded-full bg-primary" />{person.availability}</span><Link href={`/freelancers/${person.id}`} className="text-xs font-bold text-primary opacity-0 transition group-hover:opacity-100">View profile <ArrowRight size={13} className="ml-1 inline" /></Link></div>
    </article>
  );
}

function BookmarkIcon({ filled }: { filled: boolean }) {
  return <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" className="size-[17px]"><path d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-3.5L6 21V4.75Z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function HeartIcon({ filled }: { filled: boolean }) {
  return <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" className="size-[17px]"><path d="M20.84 8.62a5.5 5.5 0 0 0-9.34-3.93L12 4.2l.5.49a5.5 5.5 0 0 0-9.34 3.93c0 6.1 8.84 10.72 8.84 10.72s8.84-4.62 8.84-10.72Z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}