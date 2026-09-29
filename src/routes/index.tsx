import { createFileRoute } from '@tanstack/react-router';
import { OrbitApp } from '@/components/OrbitApp';
export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'SRM Orbit — The Contextual Campus OS' },
    { name: 'description', content: 'A contextual student-life prototype for SRM University-AP: ask, understand, contextualize, act.' },
    { property: 'og:title', content: 'SRM Orbit — The Contextual Campus OS' },
    { property: 'og:description', content: 'A contextual student-life prototype for SRM University-AP.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: OrbitApp,
});
