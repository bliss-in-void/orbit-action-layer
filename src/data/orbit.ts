export type Stop = { name: string; time: string };
export type BusRoute = { id: string; area: string; bus: string; driver: string; stops: Stop[]; note?: string };

// Supplied transport-sheet transcription. Empty/incomplete rows are intentional.
const rawRoutes = `TN-1|TENALI|AP39 WH 0352|Mr V Sudheer|Vadlamudi X Road@7:10;Jagarlamudi@7:15;Angalakuduru@7:20;Sulthanabad@7:25;Chenchupeta@7:30;Nandivelugu@7:40;Thummapudi@7:50;SRM@8:45
TN-2|TENALI|AP39 UH 9613|Mr P Andand Babu|Sai Baba Temple@7:25;Tenali Bus Stand@7:30;Duggirala@7:40;Ravindrapadu@7:55;Pedavadlapudi@8:00;Ratnalacheruvu@8:05;SRM@8:45
TN-3|TENALI|AP39 UM 2725|Mr Salam|Chinnaravuri Park@7:10;Anjaneyaswamy Temple@7:15;Billal Hotel@7:20;KothaVanthana@7:25;Duggirala@7:40;Ravindrapadu (Jenda Chettu)@7:55;SRM@8:45
TN-4|TENALI|AP39 UM 2726|Mr Narendra|Sivaji Chowk@7:10;Mythri Hospital@7:15;Chakali Cheruvu@7:20;Lakshmi Theater@7:25;Kativaram@7:30;Duggirala Gas Godown@7:45;Machikalapudi@7:50;Mangalagiri Old Busstand@8:10;SRM@8:45
G-1|GUNTUR|AP39 WG 9908|Mr P Nagaraju|SVN Colony@7:30;Mouraya Convention@7:40
G-2|GUNTUR|AP39 UK 4004|Mr Ch Murali|Spencers@7:35;Vijetha@7:37;Rajendra Nagar 2nd Line@7:40;Hanumaiah Company@7:43;JKC College Road@7:47;RTO Office@7:50
G-3|GUNTUR|AP39 Y 8487|Mr P Prasanth|AC College@7:20;Nazz Center@7:30;Basavapunnaiah Hospital@7:35;S Convention@7:45;Kakani@7:50;Perecharla@7:20
G-4|GUNTUR|AP39 UJ 0164|Mr G Manoj|Housing Board (Janatha Bazar)@7:30;NGO Colony@7:40;Military Canteen@7:45
G-5|GUNTUR|AP39 UK 4009|Mr B Venkateswara Rao|Adapa Bazar@7:25;Nalla Cheruvu (Zero Line)@7:30;Lorry Stand@7:32;Bommala Center@7:35;Etukur Bypass@7:40
G-6|GUNTUR|AP39 UG 6458|Mr P Srinivasa Rao|Pedapalakaluru@7:10;Vignan College@7:15;Ratnagiri Nagar@7:17;Current Office@7:19;JKC College@7:25
G-7|GUNTUR|AP39 UK 4003|Mr N Manohar|Lodge Center@7:35;Mutyalareddy Nagar@7:40
G-8|GUNTUR|AP39 WG 9907|Mr Ch Venkateswara Rao|Ponnuru@7:00;Vellaluru@7:15;Manchala@7:20;Narakoduru@7:25;Budampadu@7:40
G-9|GUNTUR|AP39 WH 0343|Mr Somasekhar|Vidya Nagar 1st Line@7:30
G-10|GUNTUR|AP39 UJ 6194|Mr V Mannaiah|Bakers Fun@7:30;KFC@7:32;Reliance@7:35;Mannaiah Hollywood, Bollywood@7:38
G-11|GUNTUR|AP39 UG 3061|Mr Venu Babu|Medikonduru@7:10;MBTS College@7:25;Challavaripalem@7:30;Gujjanagundla@7:50
G-12|GUNTUR|AP39 WG 9887|Mr N Pitchaiah|Swamy Theater@7:25;Pattabhipuram@7:30;Sthambalagaruvu@7:35;Ushodaya@7:45
G-13|GUNTUR|AP39 WG 9901|Mr B Syam Babu|NTR Circle (Bus Stand)@7:35;Bus Stand@7:38;Bridge Down@7:45
G-14|GUNTUR|AP39 UG 6460|Mr Y Venkata Rao|Saibaba Road@7:30;Anjaneyaswamy Temple@7:38;Hussainmandir@7:45;Laam@7:55
G-15|GUNTUR|AP39 WH 0347|Mr N Sankar Rao|Ayyappaswamy Temple@7:30;Gardens Signal@7:32;Sitaramaiah High School@7:35;Ande Silks@7:38
G-16|GUNTUR|AP39 WG 9884|Mr K Suresh|Koritepadu@7:30;LVR Club@7:32;Priya Gardens@7:40;Nagaralu@7:43
G-17|GUNTUR|AP39 UG 3064|Mr M Moshe|Housing Board@7:15;At Agraharam@7:20;Collector Office@7:30
G-18|GUNTUR|AP39 UJ 6192|Mr Sk Azaruddin|Amaravathi Center@7:30;Museum@7:32;Amaravathi Bus Stand@7:35;Narakullapadu@7:40;Yendrai@7:45;Lemalla@7:50;14th Mail@7:55;Mothadaka@8:00;Thadikonda X Road@8:13;Thadikonda@8:15;Parimi@8:20
G-19|GUNTUR|AP39 UK 4705|Mr N Srinivasulu|Vasavi Complex@7:35;Reliance Petrol Bunk@7:40;Inner Ring Road (YSR Statue)@7:45
G-20|GUNTUR|AP39 WH 0353|Mr T Venkateswara Rao|Sangadigunta@7:30;Anandhpeta@7:33;NTR Circle (Bus Stand)@7:35
G-21|GUNTUR|AP39 UK 4007|Mr B Raju|Mirchi Yard@7:30;Sri Ram Nagar@7:35;ITC@7:40;Palm Springs@7:45;Old Bus Stand@7:55
G-22|GUNTUR|AP39 UG 3059|Mr Sk Karim Basha|
G-23|GUNTUR|AP39 UG 3063|Mr Y Nagaraju|
G-24|GUNTUR|AP39 WG 9890|Mr K Vinod|
V-1|VIJAYAWADA|Not supplied|SUNNY BABU|TIME HOSPITAL@7:30;CHOWDHARY PETA@7:30;POWER ONE MALL@7:30;OLD CHECK POST CENTER (AUTO NAGAR GATE)@7:35;SRM UNIVERSITY@8:45
V-2|VIJAYAWADA|Not supplied|Y.KIRAN|MACHAVARAM DOWN@7:30;MACHAVARAM ANJANEYA SWAMY TEMPLE@7:32;SRR and CVR COLLEGE@7:34;MARUTHI NAGAR (ELURU ROAD)@7:36;SITHARAMA PURAM@7:40;KOTHAVANTHENA CENTER@7:42;VIJAYA TALKIES (ELURU ROAD)@7:44;SRM UNIVERSITY@8:45
V-3|VIJAYAWADA|Not supplied|S.RAMESH|PENAMALURU CENTER@7:30;PRIYA (PORANKI)@7:32;RAMAPURAM COLONY (PORANKI)@7:33;PORANKI CENTER@7:35;SRM UNIVERSITY@8:45
V-4|VIJAYAWADA|Not supplied|B.PRAVEEN KUMAR|ATHUKURU PETROL BUNK@6:55;AVUTUPALLI (GANNAVARAM)@7:00;GANNAVARAM@7:15;VENKESWARA THEATRE (GANNAVARAM)@7:15;BHUDDAVARAM BUS STOP (GANNAVARAM)@7:20;KESARAPALLI BYPASS@7:25;GUDAVALLI@7:30;SRM UNIVERSITY@8:45
V-5|VIJAYAWADA|Not supplied|P.RAVI KUMAR|AGIRIPALLI@7:00;SURAMPALLI@7:15;NUNNA@7:20;NUNNA DMART@7:22;PAYAKAPURAM POLICE STATION@7:30;PRAKASH NAGAR (NEAR SINGH NAGAR)@7:30;SRM UNIVERSITY@8:45
V-6|VIJAYAWADA|Not supplied|SP.VIJAY KUMAR|GUNADALA ESI BUS STOP@7:30;GUNADALA VANTHENA@7:32;GUNADALA CENTER@7:35;PADAVALAREVU (GUNADALA)@7:37;MADHURANAGAR VANTHENA@7:39;BHANUNAGAR SIGNAL@7:45;CHUTTUGUNTA SIGNAL@7:45;SRM UNIVERSITY@8:45
V-7|VIJAYAWADA|Not supplied|SK.MOULALI|HML Road@7:10;KONDAPALLI@7:12;KILLA ROAD (KONDAPALLI)@7:12;B Colony (KONDAPALLI)@7:13;A Colony (KONDAPALLI)@7:18;THUMMALAPALEM@7:25;KAJI PETA@7:27;GUNTUPALLI@7:30;AYYAPPA SWAMY TEMPLE GOLLAPUDI@7:40;SRM UNIVERSITY@8:45
V-8|VIJAYAWADA|Not supplied|E.YAKOBU|VIDHYADHARAPURAM RTC WORK SHOP ROAD@7:30;S Convention (BHAVANI PURAM)@7:30;CHURCH CENTER (BHAVANIPURAM)@7:35;HB COLONY (BHAVANIPURAM)@7:40;GOLLAPUDI MARKET YARD@7:42;HIGH SCHOOL GOLLAPUDI@7:45;SRM UNIVERSITY@8:45
V-9|VIJAYAWADA|Not supplied|B.SRINIVASA RAO|AMMA KALYANAMANDAPAM (SUNNAPUBATTI CENTER)@7:30;PB SIDDHARTHA COLLEGE@7:33;JAMMI CHETTU CENTER@7:36;MADHU GARDEN@7:38;PUSHPA HOTEL@7:42;SRM UNIVERSITY@8:45
V-10|VIJAYAWADA|Not supplied|J.SURESH|SITARA CENTER@7:25;KABELA CENTER@7:30;MILK PROJECT (CHITTI NAGAR)@7:35;SAI RAM THEATRE@7:37;K L Rao Park (CHITTI NAGAR)@7:40;CHITTI NAGAR@7:40;SBI ATM CHITTINAGAR@7:40;CHITTINAGAR Center@7:45;MYLU RAI CENTRE (GOLLAPUDU)@7:55;SRM UNIVERSITY@8:45
V-11|VIJAYAWADA|Not supplied|BANDI SRINIVASA RAO|RAMAVARAPPADU CENTER@7:30;RAMAVARAPPADU (HYUNDAI SHOWROOM)@7:33;RAMAVARAPPADU RING@7:35;SRM UNIVERSITY@8:45
V-12|VIJAYAWADA|Not supplied|G.NARASIMHA RAO NAIK|AUTONAGAR TERMINAL@7:30;AUTONAGAR GATE (PATAMATA)@7:33;HIGH SCHOOL ROAD (PATAMATA)@7:35;SRM UNIVERSITY@8:45
V-13|VIJAYAWADA|Not supplied|S.YEDUKONDALU|PATAMATA CENTER@7:30;NTR CIRCLE (PATAMATA)@7:33;EENADU (PATAMATA)@7:35;SRM UNIVERSITY@8:45
V-14|VIJAYAWADA|Not supplied|P.VIJAY KUMAR|MAHANADU ROAD@7:30;NAC KALYANAMANDAPAM@7:35;GURUNANAK COLONY@7:37;FUNTIME ROAD (GURUNANAK COLONY)@7:40;SRM UNIVERSITY@8:45
V-15|VIJAYAWADA|Not supplied|A.RAMA KRISHNA|KALYAN JEWELLERES (BANDAR ROAD)@7:30;RADIO STATION (BANDAR ROAD)@7:32;INDIRA GANDHI MUNICIPAL STADIUM@7:33;DIMPLE BAR (LABBIPET)@7:35;PVP MALL (MG ROAD)@7:37;KANDARI HOTEL (FORTUNE MURALI PARK)@7:39;DV MANOR (MG ROAD)@7:40;P and T QUARTERS (BANDAR ROAD)@7:42;VARUN MOTORS (M G ROAD)@7:42;SRM UNIVERSITY@8:45
V-16|VIJAYAWADA|Not supplied|B.VENKATESWARA RAO|BANGARAIAH KOTTU CENTER@7:30;KBN COLLEGE (ONE TOWN)@7:32;KOTHAPETA FISH MARKET@7:35;PANJA CENTER@7:37;KR MARKET@7:40;SRM UNIVERSITY@8:45
V-17|VIJAYAWADA|Not supplied|D.RAJESH|TADEPALLI PETROL BUNK@7:40;JAGAN HOME (TADEPALLI)@7:45;VUNDAVALLI CENTER@7:50;NULAKAPETA@7:55;DOLASNAGAR@8:00;MANGALAGIRI OLD BUS STAND@8:10;SRM UNIVERSITY@8:45
V-18|VIJAYAWADA|Not supplied|D.SRINIVASA RAO|VR SIDDHARTHA ENG COLLEGE@7:30;KAMAIAH THOPU CENTER@7:33;SRM UNIVERSITY@8:45
V-19|VIJAYAWADA|Not supplied|N.PRASAD BABU|GOVERNMENT PRESS@7:30;SBI MUTYALAMPADU@7:32;FOOD JUNCTION (BRTS ROAD)@7:35;BABU RAO MEDA (FOOD JUNCTION)@7:37;SARADA COLLEGE (SN PURAM)@7:40;SRM UNIVERSITY@8:45
V-20|VIJAYAWADA|Not supplied|A.AYYAPPA|NIDAMANURU@7:30;ENIKEPADU@7:35;SCR CENTER (PRASADAM PADU)@7:38;PRASADAMPADU (TOYOTA)@7:40;PRASADAMPADU@7:40;BALLEEM VAARI VEEDI (RAMAVARAPADU)@7:42;SRM UNIVERSITY@8:45
V-21|VIJAYAWADA|Not supplied|A.VEERAIAH|VIJAYAWADA BUS STAND@7:30;KRISHNA LANKA POLICE STATION@7:31;KRISHNA LANKA@7:33;SATYAM GARI SHOP (KRISHNA LANKA)@7:33;FIRE STATION (KRISHNA LANKA)@7:34;KRISHNA LANKA FIRE STATION@7:34;VARADHI (DOWN)@7:36;MANIPAL HOSPITAL@7:41;TADEPALLI@7:43;KOLANUKONDA@7:50;KURAGALLU@8:35;SRM UNIVERSITY@8:45
V-22|VIJAYAWADA|Not supplied|D.PRABHAKARA RAO|NANDIGAMA CENTER@7:00;ITHAVARAM@7:05;KANCHIKACHERLA@7:15;PARITALA@7:20;KETHANAKONDA@7:25;MULAPADU@7:30;IBRAHIMPATNAM@7:40;SRM UNIVERSITY@8:45
V-23|VIJAYAWADA|Not supplied|K.RAMESH|TADIGADAPA CENTER@7:30;PAPPULA MILL CENTER (BANDAR ROAD)@7:35;SRM UNIVERSITY@8:45
V-24|VIJAYAWADA|Not supplied|G.VARA PRASAD|PIPULAROAD CENTER@7:30;SAI BABA TEMPLE PIPULA ROAD@7:32;SINGH NAGAR SAI BABA TEMPLE@7:35;SRM UNIVERSITY@8:45
V-25|VIJAYAWADA|Not supplied|S.RAMESH REDDY|VUNDAVALLI CENTER@7:30;VUNDAVALLI (VILLAGE)@7:35;PENUMAKA@7:40;KRISHTAYAPALEM@7:45;MANDHADAM@7:55;VELAGAPUDI@7:57;RAYAPUDI@8:00;TULLURU@8:10;SAKAMURU@8:15;SRM UNIVERSITY@8:45`;

export const routes: BusRoute[] = rawRoutes.split('\n').map(line => {
  const [id, area, bus, driver, stopText] = line.split('|');
  return { id, area, bus, driver, stops: stopText ? stopText.split(';').map(entry => { const at = entry.lastIndexOf('@'); return { name: entry.slice(0, at), time: entry.slice(at + 1) }; }) : [], note: ['G-22', 'G-23', 'G-24'].includes(id) ? 'Incomplete source data · route details available from transport sheet' : undefined };
});

export type OrbitClass = { course: string; time: string; room: string; instructor: string };
export type OrbitDeadline = { id: string; course: string; task: string; due: string; urgency: string };
export type OrbitNotification = { id: string; type: string; title: string; detail: string; time: string; action: string; priority: 'high' | 'medium' | 'low' };
export type Student = {
  studentId: string; name: string; email: string; department: string; year: string; studentType: 'Day scholar' | 'Hosteller'; hostel: string | null; homeStop: string | null; assignedRoute: string | null; todayClasses: OrbitClass[]; deadlines: OrbitDeadline[]; events: string[]; placementNotices: string[]; notifications: OrbitNotification[]; preferences: { focus: string; location: string };
};
const commonEvents = ['GDG Solution Hunt', 'Campus Design Jam'];
export const eventCatalog = [
  { id: 'gdg', title: 'GDG Solution Hunt', date: '29 Sept', time: '2:00 PM', venue: 'X-Lab Auditorium', category: 'Technology', description: 'A campus innovation event. Event details shown for demo.' },
  { id: 'design', title: 'Campus Design Jam', date: '2 Oct', time: '4:00 PM', venue: 'Demo venue · to be confirmed', category: 'Community', description: 'Demo event; venue and schedule are not verified.' },
];
export const students: Student[] = [
  { studentId: 's1', name: 'Aarav Reddy', email: 'aarav.reddy@demo.srmap.edu.in', department: 'CSE · AI & ML', year: 'Final year', studentType: 'Day scholar', hostel: null, homeStop: 'Mangalagiri Old Bus Stand', assignedRoute: 'V-17', todayClasses: [{ course: 'AI / Machine Learning', time: '10:00 AM', room: 'V502', instructor: 'Faculty details unavailable' }, { course: 'Software Engineering', time: '11:30 AM', room: 'SR204', instructor: 'Faculty details unavailable' }], deadlines: [{ id: 'ai', course: 'AI / Machine Learning', task: 'AI Assignment', due: 'Tonight · 11:59 PM', urgency: 'Due tonight' }, { id: 'se', course: 'Software Engineering', task: 'Sprint review', due: 'Tomorrow', urgency: 'Tomorrow' }], events: commonEvents, placementNotices: ['Software Engineer application closes tomorrow'], notifications: [{ id: 'n1', type: 'DEADLINE', title: 'AI Assignment due tonight', detail: 'AI / Machine Learning · 11:59 PM (demo)', time: '9:15 AM', action: 'Academics', priority: 'high' }, { id: 'n2', type: 'EVENT', title: 'GDG Solution Hunt starts at 2 PM', detail: 'X-Lab Auditorium · event demo', time: '8:50 AM', action: 'Events', priority: 'medium' }, { id: 'n3', type: 'PLACEMENT', title: 'Software Engineer application closes tomorrow', detail: 'Application deadline shown for demo', time: 'Yesterday', action: 'Placements', priority: 'high' }, { id: 'n4', type: 'HEALTH', title: 'ORS is currently in stock', detail: '42 units listed in the supplied prototype values', time: 'Yesterday', action: 'Campus life', priority: 'low' }, { id: 'n5', type: 'TRANSPORT', title: 'Your V-17 route is ready', detail: 'Mangalagiri Old Bus Stand · 8:10 AM', time: '7:00 AM', action: 'Transport', priority: 'low' }], preferences: { focus: 'commute', location: 'V Block entrance · simulated' } },
  { studentId: 's2', name: 'Meera Nair', email: 'meera.nair@demo.srmap.edu.in', department: 'Computer Science', year: 'Second year', studentType: 'Hosteller', hostel: 'Saraswati', homeStop: null, assignedRoute: null, todayClasses: [{ course: 'Data Structures', time: '10:00 AM', room: 'CV312', instructor: 'Faculty details unavailable' }, { course: 'Discrete Mathematics', time: '1:00 PM', room: 'SR305', instructor: 'Faculty details unavailable' }], deadlines: [{ id: 'ds', course: 'Data Structures', task: 'Lab record', due: 'Tomorrow', urgency: 'Tomorrow' }], events: commonEvents, placementNotices: [], notifications: [{ id: 'm1', type: 'EVENT', title: 'GDG Solution Hunt starts at 2 PM', detail: 'X-Lab Auditorium · event demo', time: '8:50 AM', action: 'Events', priority: 'medium' }, { id: 'm2', type: 'DEADLINE', title: 'Data Structures lab record due tomorrow', detail: 'Second-year coursework · demo', time: 'Yesterday', action: 'Academics', priority: 'medium' }, { id: 'm3', type: 'DELIVERY', title: 'Your food parcel is at Main Gate 1', detail: 'Simulated delivery alert', time: '9:30 AM', action: 'Campus life', priority: 'low' }], preferences: { focus: 'campus', location: 'Saraswati hostel · simulated' } },
  { studentId: 's3', name: 'Ishaan Varma', email: 'ishaan.varma@demo.srmap.edu.in', department: 'Electronics & Communication', year: 'Third year', studentType: 'Day scholar', hostel: null, homeStop: 'Lodge Center', assignedRoute: 'G-7', todayClasses: [{ course: 'Embedded Systems', time: '10:00 AM', room: 'SR401', instructor: 'Faculty details unavailable' }, { course: 'Signals & Systems', time: '2:00 PM', room: 'V303', instructor: 'Faculty details unavailable' }], deadlines: [{ id: 'emb', course: 'Embedded Systems', task: 'Circuit prototype', due: 'This week', urgency: 'This week' }], events: ['Campus Design Jam'], placementNotices: ['Internship profile review · demo'], notifications: [{ id: 'i1', type: 'TRANSPORT', title: 'G-7 departs Lodge Center at 7:35 AM', detail: 'Transport sheet timing', time: '7:00 AM', action: 'Transport', priority: 'medium' }, { id: 'i2', type: 'DEADLINE', title: 'Circuit prototype due this week', detail: 'Embedded Systems · demo', time: 'Yesterday', action: 'Academics', priority: 'medium' }, { id: 'i3', type: 'PLACEMENT', title: 'Internship profile review', detail: 'Demo placement notice', time: 'Yesterday', action: 'Placements', priority: 'low' }], preferences: { focus: 'projects', location: 'SR Block entrance · simulated' } },
];
export const hostels = ['Saraswati', 'Narmada', 'Ganga A', 'Ganga B', 'Vedavathi'];
export const pharmacy = [{ name: 'ORS', quantity: 42 }, { name: 'Paracetamol', quantity: 100 }];
