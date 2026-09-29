import { eventCatalog, pharmacy, routes, students, type Student } from '@/data/orbit';
export function parseRoomCode(value: string) {
  const match = value.trim().toUpperCase().match(/^(SR|CV|V)([1-9])(\d{2})$/);
  if (!match) return null;
  return { code: match[0], block: `${match[1]} Block`, floor: Number(match[2]), room: match[3] };
}
export function getOrbitContext(student: Student) {
  return { student, currentLocation: student.preferences.location, nextClass: student.todayClasses[0] ?? null, bus: routes.find(route => route.id === student.assignedRoute) ?? null, deadlines: student.deadlines, events: eventCatalog.filter(event => student.events.includes(event.title)), placementNotices: student.placementNotices, campusLocations: ['V Block', 'SR Block', 'CV Block', 'SRM Campus Clinic', 'Main Gate 1'], health: { doctor: 'On rounds', expectedReturn: '2:30 PM', clinic: 'SRM Campus Clinic' }, pharmacy, notifications: student.notifications };
}
export type SearchResult = { category: string; title: string; subtitle: string; target: string; query?: string };
export function searchOrbit(query: string, student: Student): SearchResult[] {
  const q = query.trim().toLowerCase(); if (!q) return [];
  const results: SearchResult[] = [];
  const room = parseRoomCode(query); if (room) results.push({ category: 'ROOM', title: room.code, subtitle: `${room.block} · Floor ${room.floor} · Room ${room.room}`, target: 'Navigate', query: room.code });
  for (const block of ['V Block', 'SR Block', 'CV Block']) if (block.toLowerCase().includes(q)) results.push({ category: 'CAMPUS', title: block, subtitle: 'Explore floors and rooms', target: 'Navigate', query: block });
  for (const route of routes) {
    const stops = route.stops.filter(stop => stop.name.toLowerCase().includes(q));
    if (route.id.toLowerCase().includes(q) || stops.length || route.area.toLowerCase().includes(q)) results.push({ category: 'BUS', title: route.id, subtitle: stops.length ? `${stops[0].name} · ${stops[0].time} AM` : `${route.area} · ${route.stops.length ? `${route.stops.length} stops` : 'Details incomplete'}`, target: 'Transport', query: route.id });
  }
  for (const item of student.deadlines) if (`${item.course} ${item.task}`.toLowerCase().includes(q)) results.push({ category: 'DEADLINE', title: item.task, subtitle: `${item.course} · ${item.due}`, target: 'Academics' });
  for (const item of eventCatalog) if (`${item.title} ${item.venue}`.toLowerCase().includes(q)) results.push({ category: 'EVENT', title: item.title, subtitle: `${item.date} · ${item.venue}`, target: 'Events' });
  for (const item of student.placementNotices) if (item.toLowerCase().includes(q) || 'placement'.includes(q)) results.push({ category: 'PLACEMENT', title: item, subtitle: 'Personalized placement notice · demo', target: 'Placements' });
  for (const item of pharmacy) if (item.name.toLowerCase().includes(q) || 'pharmacy medicine stock'.split(' ').some(word => word.includes(q))) results.push({ category: 'PHARMACY', title: item.name, subtitle: `In stock · ${item.quantity} units`, target: 'Campus life' });
  if ('doctor clinic health pharmacy nearest pharmacy ors'.includes(q) && q.length > 2) results.push({ category: 'SERVICE', title: 'SRM Campus Clinic', subtitle: 'Doctor on rounds · returns 2:30 PM', target: 'Campus life' });
  if ('emergency security ambulance hostel'.includes(q) && q.length > 2) results.push({ category: 'SAFETY', title: 'Emergency contacts', subtitle: 'Contact numbers not configured', target: 'Campus life' });
  for (const item of student.todayClasses) if (`${item.course} ${item.room} ${item.instructor}`.toLowerCase().includes(q)) results.push({ category: 'CLASS', title: item.course, subtitle: `${item.time} · ${item.room}`, target: 'Academics' });
  if ('next class classes timetable'.includes(q) && q.length > 2 && student.todayClasses[0]) results.push({ category: 'CLASS', title: student.todayClasses[0].course, subtitle: `${student.todayClasses[0].time} · ${student.todayClasses[0].room}`, target: 'Academics' });
  if ('lost id card lost and found'.includes(q) && q.length > 2) results.push({ category: 'ACTION', title: 'Report a lost item', subtitle: 'Create a location-based demo alert', target: 'Campus life' });
  return results.slice(0, 12);
}
export const getStudentById = (id: string) => students.find(student => student.studentId === id) ?? students[0];
// External Helpdesk extension point: pass getOrbitContext(student) to the teammate's agent here.
export async function askExternalHelpdesk(_question: string, _context: ReturnType<typeof getOrbitContext>): Promise<null> { return null; }
