# Orbit Campus OS

Build a polished, highly interactive web prototype called:

SRM ORBIT

The Contextual Campus OS

This is a hackathon prototype for SRM University-AP based on PS05 — The Human–Machine Gap.

IMPORTANT:
This is a separate prototype/demo application. It does NOT need a production backend.
Use realistic seeded/mock data where live institutional APIs are unavailable.
The prototype must behave like a real application rather than looking like a collection of static screens.

Do NOT build a generic AI chatbot dashboard.

The product concept is:

ASK → UNDERSTAND → CONTEXTUALIZE → ACT

The core idea is that students should not have to search multiple portals, PDFs, WhatsApp messages, maps and offices to accomplish a task. Orbit should understand the student's context and turn information into a simple next action.

PRODUCT EXPERIENCE

The application should feel like a modern campus operating system.

It should feel:

futuristic

energetic

student-friendly

intelligent

practical

highly interactive

visually polished

fast

mobile-friendly

Avoid:

generic SaaS dashboard styling

excessive gradients

childish UI

meaningless charts

giant blocks of text

a conventional chatbot-only layout

Use:

strong visual hierarchy

contextual cards

smooth micro-interactions

subtle motion

animated state changes

hover effects

expandable cards

notification badges

smart empty states

loading/skeleton states

realistic transitions

Use the existing Orbit visual identity if existing project files are supplied.

PRIMARY USER MODEL

The prototype uses three seeded student personas.

Create a prominent Student/Profile Switcher.

Example:

[ Student 1 ]
[ Student 2 ]
[ Student 3 ]

Changing the selected student must dynamically change the entire experience.

The selected student controls:

name

profile

department

year

hostel/day-scholar state

home stop

assigned bus

classes

deadlines

events

placement notifications

personalized dashboard priorities

unread notifications

contextual recommendations

The app should feel as though each student has their own personal Orbit.

Create a centralized student data layer instead of scattering student data throughout the UI.

The data model should support:

studentId
name
email
department
year
studentType
hostel
homeStop
assignedRoute
todayClasses
deadlines
events
placementNotices
notifications
preferences

The student profiles are representative demo personas, not claims about real students.

DASHBOARD — AMBIENT ACTION DASHBOARD

The dashboard is the centerpiece.

Do not make it just:
"Welcome + 8 cards."

Instead ask:

"What matters to this student right now?"

Organize information using a contextual hierarchy such as:

NOW
NEXT
LATER

OR:

RIGHT NOW
UP NEXT
DON'T MISS

The dashboard should dynamically prioritize information based on the selected student.

Examples:

Day scholar:

next bus

commute

next class

nearest deadline

Hostel student:

next class

campus services

events

health/pharmacy

important alerts

Final-year student:

placement alerts

application deadlines

academic deadlines

upcoming events

Create a prominent contextual greeting such as:

"Good afternoon, [Name]. Here's what matters today."

Below that, show contextual cards such as:

NEXT CLASS
AI / Machine Learning
10:00 AM
AL Block

YOUR BUS
V-17
Mangalagiri Old Bus Stand
ETA: simulated
[TRACK ROUTE]

DEADLINE
AI Assignment
Due tonight
[VIEW]

PLACEMENT
Software Engineer application
Closes tomorrow
[VIEW]

EVENT
GDG Solution Hunt
X-Lab Auditorium
[VIEW]

HEALTH
Doctor currently on rounds
Expected return: 2:30 PM

GLOBAL ASK ORBIT INTERFACE

The application should have a highly visible universal search / Ask Orbit box.

Placeholder:

"What do you need?"

Examples:
"Where is V502?"
"I lost my ID card."
"Do you have ORS?"
"When is my next class?"
"Which bus do I take from Mangalagiri?"
"Show my placement deadlines."
"Where is the doctor?"
"Where is the nearest pharmacy?"

Display suggested prompts/chips under the input.

The Helpdesk AI is being built separately by another teammate.

IMPORTANT:
Do NOT create a second AI implementation.

Create the UI and integration boundary only.

The interface should visually support:

natural-language questions

contextual responses

action cards

navigation actions

reminders

service links

When the final AI agent is connected later, it should be able to receive the current student's context.

CAMPUS NAVIGATION

Build an interactive campus navigation experience.

Current academic blocks supplied for the prototype:

V Block

SR Block

CV Block

Also support other campus destinations as demo locations when explicitly provided.

ROOM CODE LOGIC:

A room such as V502 means:

V Block
Floor 5
Room 02

Create application logic that parses academic room codes.

Do NOT create an unnecessary database collection for room parsing.

Example:

Search:
V502

Result:

V BLOCK
Floor 5
Room 02

Then show an indoor-style route:

YOU ARE HERE
↓
Take Elevator B
↓
Go to Floor 5
↓
Turn Right
↓
Walk 30m
↓
V502

Also support:

search destination

building selection

floor selection

route preview

route steps

animated route line

destination details

"Navigate" button

Use a convincing pseudo-2.5D indoor campus visual even when real indoor mapping data is unavailable.

Do not falsely claim GPS accuracy.

HOSTELS

Support these hostel names from the project specification:

Saraswati

Narmada

Ganga A

Ganga B

Vedavathi

The UI should treat hostel information as contextual student information.

Example:

HOSTEL
Saraswati

Actions:
[HOSTEL INFO]
[EMERGENCY]
[VIEW CONTACT]

For emergency contacts, do NOT invent telephone numbers.

If phone data is unavailable, keep the action visually present but clearly marked as demo/unconfigured.

TRANSPORT / BUS SYSTEM

This section must use the supplied SRM transport sheet data rather than fabricated routes.

Build a transport interface with:

route search

route cards

home-stop selection

assigned route

stop list

stop timings

bus number

route area

driver information where appropriate

simulated live bus location

simulated ETA

route visualization

"Track Bus" action

The transport dataset contains three route groups:

TENALI

TN-1

TN-2

TN-3

TN-4

GUNTUR

G-1 through G-24

VIJAYAWADA

V-1 through V-25

Use the following supplied route data.

TENALI ROUTES

TN-1
Bus: AP39 WH 0352
Driver: Mr V Sudheer
Stops:
Vadlamudi X Road — 7:10
Jagarlamudi — 7:15
Angalakuduru — 7:20
Sulthanabad — 7:25
Chenchupeta — 7:30
Nandivelugu — 7:40
Thummapudi — 7:50
SRM — 8:45

TN-2
Bus: AP39 UH 9613
Driver: Mr P Andand Babu
Stops:
Sai Baba Temple — 7:25
Tenali Bus Stand — 7:30
Duggirala — 7:40
Ravindrapadu — 7:55
Pedavadlapudi — 8:00
Ratnalacheruvu — 8:05
SRM — 8:45

TN-3
Bus: AP39 UM 2725
Driver: Mr Salam
Stops:
Chinnaravuri Park — 7:10
Anjaneyaswamy Temple — 7:15
Billal Hotel — 7:20
KothaVanthana — 7:25
Duggirala — 7:40
Ravindrapadu (Jenda Chettu) — 7:55
SRM — 8:45

TN-4
Bus: AP39 UM 2726
Driver: Mr Narendra
Stops supplied:
Sivaji Chowk — 7:10
Mythri Hospital — 7:15
Chakali Cheruvu — 7:20
Lakshmi Theater — 7:25
Kativaram — 7:30
Duggirala Gas Godown — 7:45
Machikalapudi — 7:50
Mangalagiri Old Busstand — 8:10
SRM — 8:45

GUNTUR ROUTES

G-1
Bus: AP39 WG 9908
Driver: Mr P Nagaraju
Stops:
SVN Colony — 7:30
Mouraya Convention — 7:40

G-2
Bus: AP39 UK 4004
Driver: Mr Ch Murali
Stops:
Spencers — 7:35
Vijetha — 7:37
Rajendra Nagar 2nd Line — 7:40
Hanumaiah Company — 7:43
JKC College Road — 7:47
RTO Office — 7:50

G-3
Bus: AP39 Y 8487
Driver: Mr P Prasanth
Stops:
AC College — 7:20
Nazz Center — 7:30
Basavapunnaiah Hospital — 7:35
S Convention — 7:45
Kakani — 7:50
Perecharla — 7:20

G-4
Bus: AP39 UJ 0164
Driver: Mr G Manoj
Stops:
Housing Board (Janatha Bazar) — 7:30
NGO Colony — 7:40
Military Canteen — 7:45

G-5
Bus: AP39 UK 4009
Driver: Mr B Venkateswara Rao
Stops:
Adapa Bazar — 7:25
Nalla Cheruvu (Zero Line) — 7:30
Lorry Stand — 7:32
Bommala Center — 7:35
Etukur Bypass — 7:40

G-6
Bus: AP39 UG 6458
Driver: Mr P Srinivasa Rao
Stops:
Pedapalakaluru — 7:10
Vignan College — 7:15
Ratnagiri Nagar — 7:17
Current Office — 7:19
JKC College — 7:25

G-7
Bus: AP39 UK 4003
Driver: Mr N Manohar
Stops:
Lodge Center — 7:35
Mutyalareddy Nagar — 7:40

G-8
Bus: AP39 WG 9907
Driver: Mr Ch Venkateswara Rao
Stops:
Ponnuru — 7:00
Vellaluru — 7:15
Manchala — 7:20
Narakoduru — 7:25
Budampadu — 7:40

G-9
Bus: AP39 WH 0343
Driver: Mr Somasekhar
Stop supplied:
Vidya Nagar 1st Line — 7:30

G-10
Bus: AP39 UJ 6194
Driver: Mr V Mannaiah
Stops:
Bakers Fun — 7:30
KFC — 7:32
Reliance — 7:35
Mannaiah Hollywood, Bollywood — 7:38

G-11
Bus: AP39 UG 3061
Driver: Mr Venu Babu
Stops:
Medikonduru — 7:10
MBTS College — 7:25
Challavaripalem — 7:30
Gujjanagundla — 7:50

G-12
Bus: AP39 WG 9887
Driver: Mr N Pitchaiah
Stops:
Swamy Theater — 7:25
Pattabhipuram — 7:30
Sthambalagaruvu — 7:35
Ushodaya — 7:45

G-13
Bus: AP39 WG 9901
Driver: Mr B Syam Babu
Stops:
NTR Circle (Bus Stand) — 7:35
Bus Stand — 7:38
Bridge Down — 7:45

G-14
Bus: AP39 UG 6460
Driver: Mr Y Venkata Rao
Stops:
Saibaba Road — 7:30
Anjaneyaswamy Temple — 7:38
Hussainmandir — 7:45
Laam — 7:55

G-15
Bus: AP39 WH 0347
Driver: Mr N Sankar Rao
Stops:
Ayyappaswamy Temple — 7:30
Gardens Signal — 7:32
Sitaramaiah High School — 7:35
Ande Silks — 7:38

G-16
Bus: AP39 WG 9884
Driver: Mr K Suresh
Stops:
Koritepadu — 7:30
LVR Club — 7:32
Priya Gardens — 7:40
Nagaralu — 7:43

G-17
Bus: AP39 UG 3064
Driver: Mr M Moshe
Stops:
Housing Board — 7:15
At Agraharam — 7:20
Collector Office — 7:30

G-18
Bus: AP39 UJ 6192
Driver: Mr Sk Azaruddin
Stops:
Amaravathi Center — 7:30
Museum — 7:32
Amaravathi Bus Stand — 7:35
Narakullapadu — 7:40
Yendrai — 7:45
Lemalla — 7:50
14th Mail — 7:55
Mothadaka — 8:00
Thadikonda X Road — 8:13
Thadikonda — 8:15
Parimi — 8:20

G-19
Bus: AP39 UK 4705
Driver: Mr N Srinivasulu
Stops:
Vasavi Complex — 7:35
Reliance Petrol Bunk — 7:40
Inner Ring Road (YSR Statue) — 7:45

G-20
Bus: AP39 WH 0353
Driver: Mr T Venkateswara Rao
Stops:
Sangadigunta — 7:30
Anandhpeta — 7:33
NTR Circle (Bus Stand) — 7:35

G-21
Bus: AP39 UK 4007
Driver: Mr B Raju
Stops:
Mirchi Yard — 7:30
Sri Ram Nagar — 7:35
ITC — 7:40
Palm Springs — 7:45
Old Bus Stand — 7:55

G-22
Bus: AP39 UG 3059
Driver: Mr Sk Karim Basha
The supplied source did not preserve usable boarding-point/time information for this row.
Do not invent missing stops.
Display the route as "Route details available from transport sheet" or keep it out of detailed student search.

G-23
Bus: AP39 UG 3063
Driver: Mr Y Nagaraju
The supplied source did not preserve usable boarding-point/time information for this row.
Do not invent missing stops.

G-24
Bus: AP39 WG 9890
Driver: Mr K Vinod
The supplied source did not preserve a reliable mapping of stops to times.
Do not invent missing stop times.
If displayed, clearly label details as incomplete source data.

IMPORTANT:
The supplied extraction around G-22 to G-24 is structurally incomplete.
Never invent missing route information just to fill the UI.

VIJAYAWADA REGULAR ROUTES
Source date: 31 August 2026

All V routes in the supplied sheet arrive at SRM University at 8:45.

V-1
Bus/driver:
SUNNY BABU
Stops:
TIME HOSPITAL — 7:30
CHOWDHARY PETA — 7:30
POWER ONE MALL — 7:30
OLD CHECK POST CENTER (AUTO NAGAR GATE) — 7:35
SRM UNIVERSITY — 8:45

V-2
Y.KIRAN
Stops:
MACHAVARAM DOWN — 7:30
MACHAVARAM ANJANEYA SWAMY TEMPLE — 7:32
SRR and CVR COLLEGE — 7:34
MARUTHI NAGAR (ELURU ROAD) — 7:36
SITHARAMA PURAM — 7:40
KOTHAVANTHENA CENTER — 7:42
VIJAYA TALKIES (ELURU ROAD) — 7:44
SRM UNIVERSITY — 8:45

V-3
S.RAMESH
Stops:
PENAMALURU CENTER — 7:30
PRIYA (PORANKI) — 7:32
RAMAPURAM COLONY (PORANKI) — 7:33
PORANKI CENTER — 7:35
SRM UNIVERSITY — 8:45

V-4
B.PRAVEEN KUMAR
Stops:
VENKESWARA THEATRE (GANNAVARAM) — 7:15
BHUDDAVARAM BUS STOP (GANNAVARAM) — 7:20
KESARAPALLI BYPASS — 7:25
GUDAVALLI — 7:30
SRM UNIVERSITY — 8:45

The supplied source also shows:
ATHUKURU PETROL BUNK — 6:55
AVUTUPALLI (GANNAVARAM) — 7:00
GANNAVARAM — 7:15
before V-4.
Preserve these as part of the route sequence where appropriate.

V-5
P.RAVI KUMAR
Stops:
AGIRIPALLI — 7:00
SURAMPALLI — 7:15
NUNNA — 7:20
NUNNA DMART — 7:22
PAYAKAPURAM POLICE STATION — 7:30
PRAKASH NAGAR (NEAR SINGH NAGAR) — 7:30
SRM UNIVERSITY — 8:45

V-6
SP.VIJAY KUMAR
Stops:
GUNADALA ESI BUS STOP — 7:30
GUNADALA VANTHENA — 7:32
GUNADALA CENTER — 7:35
PADAVALAREVU (GUNADALA) — 7:37
MADHURANAGAR VANTHENA — 7:39
BHANUNAGAR SIGNAL — 7:45
CHUTTUGUNTA SIGNAL — 7:45
SRM UNIVERSITY — 8:45

V-7
SK.MOULALI
Stops:
HML Road — 7:10
KONDAPALLI — 7:12
KILLA ROAD (KONDAPALLI) — 7:12
B Colony (KONDAPALLI) — 7:13
A Colony (KONDAPALLI) — 7:18
THUMMALAPALEM — 7:25
KAJI PETA — 7:27
GUNTUPALLI — 7:30
AYYAPPA SWAMY TEMPLE GOLLAPUDI — 7:40
SRM UNIVERSITY — 8:45

V-8
E.YAKOBU
Stops:
VIDHYADHARAPURAM RTC WORK SHOP ROAD — 7:30
S Convention (BHAVANI PURAM) — 7:30
CHURCH CENTER (BHAVANIPURAM) — 7:35
HB COLONY (BHAVANIPURAM) — 7:40
GOLLAPUDI MARKET YARD — 7:42
HIGH SCHOOL GOLLAPUDI — 7:45
SRM UNIVERSITY — 8:45

V-9
B.SRINIVASA RAO
Stops:
AMMA KALYANAMANDAPAM (SUNNAPUBATTI CENTER) — 7:30
PB SIDDHARTHA COLLEGE — 7:33
JAMMI CHETTU CENTER — 7:36
MADHU GARDEN — 7:38
PUSHPA HOTEL — 7:42
SRM UNIVERSITY — 8:45

V-10
J.SURESH
Stops:
SITARA CENTER — 7:25
KABELA CENTER — 7:30
MILK PROJECT (CHITTI NAGAR) — 7:35
SAI RAM THEATRE — 7:37
K L Rao Park (CHITTI NAGAR) — 7:40
CHITTI NAGAR — 7:40
SBI ATM CHITTINAGAR — 7:40
CHITTINAGAR Center — 7:45
MYLU RAI CENTRE (GOLLAPUDU) — 7:55
SRM UNIVERSITY — 8:45

V-11
BANDI SRINIVASA RAO
Stops:
RAMAVARAPPADU CENTER — 7:30
RAMAVARAPPADU (HYUNDAI SHOWROOM) — 7:33
RAMAVARAPPADU RING — 7:35
SRM UNIVERSITY — 8:45

V-12
G.NARASIMHA RAO NAIK
Stops:
AUTONAGAR TERMINAL — 7:30
AUTONAGAR GATE (PATAMATA) — 7:33
HIGH SCHOOL ROAD (PATAMATA) — 7:35
SRM UNIVERSITY — 8:45

V-13
S.YEDUKONDALU
Stops:
PATAMATA CENTER — 7:30
NTR CIRCLE (PATAMATA) — 7:33
EENADU (PATAMATA) — 7:35
SRM UNIVERSITY — 8:45

V-14
P.VIJAY KUMAR
Stops:
MAHANADU ROAD — 7:30
NAC KALYANAMANDAPAM — 7:35
GURUNANAK COLONY — 7:37
FUNTIME ROAD (GURUNANAK COLONY) — 7:40
SRM UNIVERSITY — 8:45

V-15
A.RAMA KRISHNA
Stops:
KALYAN JEWELLERES (BANDAR ROAD) — 7:30
RADIO STATION (BANDAR ROAD) — 7:32
INDIRA GANDHI MUNICIPAL STADIUM — 7:33
DIMPLE BAR (LABBIPET) — 7:35
PVP MALL (MG ROAD) — 7:37
KANDARI HOTEL (FORTUNE MURALI PARK) — 7:39
DV MANOR (MG ROAD) — 7:40
P and T QUARTERS (BANDAR ROAD) — 7:42
VARUN MOTORS (M G ROAD) — 7:42
SRM UNIVERSITY — 8:45

V-16
B.VENKATESWARA RAO
Stops:
BANGARAIAH KOTTU CENTER — 7:30
KBN COLLEGE (ONE TOWN) — 7:32
KOTHAPETA FISH MARKET — 7:35
PANJA CENTER — 7:37
KR MARKET — 7:40
SRM UNIVERSITY — 8:45

V-17
D.RAJESH
Stops:
TADEPALLI PETROL BUNK — 7:40
JAGAN HOME (TADEPALLI) — 7:45
VUNDAVALLI CENTER — 7:50
NULAKAPETA — 7:55
DOLASNAGAR — 8:00
MANGALAGIRI OLD BUS STAND — 8:10
SRM UNIVERSITY — 8:45

V-18
D.SRINIVASA RAO
Stops:
VR SIDDHARTHA ENG COLLEGE — 7:30
KAMAIAH THOPU CENTER — 7:33
SRM UNIVERSITY — 8:45

V-19
N.PRASAD BABU
Stops:
GOVERNMENT PRESS — 7:30
SBI MUTYALAMPADU — 7:32
FOOD JUNCTION (BRTS ROAD) — 7:35
BABU RAO MEDA (FOOD JUNCTION) — 7:37
SARADA COLLEGE (SN PURAM) — 7:40
SRM UNIVERSITY — 8:45

V-20
A.AYYAPPA
Stops:
NIDAMANURU — 7:30
ENIKEPADU — 7:35
SCR CENTER (PRASADAM PADU) — 7:38
PRASADAMPADU (TOYOTA) — 7:40
PRASADAMPADU — 7:40
BALLEEM VAARI VEEDI (RAMAVARAPADU) — 7:42
SRM UNIVERSITY — 8:45

V-21
A.VEERAIAH
Stops:
VIJAYAWADA BUS STAND — 7:30
KRISHNA LANKA POLICE STATION — 7:31
KRISHNA LANKA — 7:33
SATYAM GARI SHOP (KRISHNA LANKA) — 7:33
FIRE STATION (KRISHNA LANKA) — 7:34
KRISHNA LANKA FIRE STATION — 7:34
VARADHI (DOWN) — 7:36
MANIPAL HOSPITAL — 7:41
TADEPALLI — 7:43
KOLANUKONDA — 7:50
KURAGALLU — 8:35
SRM UNIVERSITY — 8:45

V-22
D.PRABHAKARA RAO
Stops:
NANDIGAMA CENTER — 7:00
ITHAVARAM — 7:05
KANCHIKACHERLA — 7:15
PARITALA — 7:20
KETHANAKONDA — 7:25
MULAPADU — 7:30
IBRAHIMPATNAM — 7:40
SRM UNIVERSITY — 8:45

V-23
K.RAMESH
Stops:
TADIGADAPA CENTER — 7:30
PAPPULA MILL CENTER (BANDAR ROAD) — 7:35
SRM UNIVERSITY — 8:45

V-24
G.VARA PRASAD
Stops:
PIPULAROAD CENTER — 7:30
SAI BABA TEMPLE PIPULA ROAD — 7:32
SINGH NAGAR SAI BABA TEMPLE — 7:35
SRM UNIVERSITY — 8:45

V-25
S.RAMESH REDDY
Stops:
VUNDAVALLI CENTER — 7:30
VUNDAVALLI (VILLAGE) — 7:35
PENUMAKA — 7:40
KRISHTAYAPALEM — 7:45
MANDHADAM — 7:55
VELAGAPUDI — 7:57
RAYAPUDI — 8:00
TULLURU — 8:10
SAKAMURU — 8:15
SRM UNIVERSITY — 8:45

IMPORTANT TRANSPORT BEHAVIOR:

Do not show all 53 routes on the homepage.

Use:

route search

location search

"Find my bus"

assigned route card

expandable stop timeline

For the demo, make selected students use realistic routes such as:

G-7 / Lodge Center

V-17 / Mangalagiri Old Bus Stand

V-21 / Vijayawada Bus Stand

These are based on the supplied route data.

Live GPS is simulated.

Do not claim the prototype has real GPS hardware integration.

Simulate movement visually:

animated bus marker

changing ETA

changing distance

progress along route

"LIVE DEMO" or "SIMULATED" indicator

HEALTH & PHARMACY

Use the current campus service values already supplied for the prototype:

CAMPUS CLINIC
Doctor status:
On rounds

Expected return:
2:30 PM

Clinic:
SRM Campus Clinic

PHARMACY:
ORS
Status: IN STOCK
Quantity: 42

Paracetamol
Status: IN STOCK
Quantity: 100

Create:

medicine search

stock badges

doctor status card

return-time card

"Set Reminder"

service availability state

Do not invent additional medicine quantities.

EMERGENCY

Create an emergency section with large action-focused cards.

Include:

Campus Ambulance
Security Main Gate
Saraswati Hostel
Ganga/Yamuna or relevant hostel desk
Women's Safety / Medical support when configured

Use:
[CALL NOW]

Emergency UI should be visually different from normal dashboard content.

The goal is one-tap action, not information overload.

Do not invent phone numbers.
Use placeholders or existing configured data if phone values are provided separately.

LOST & FOUND

Create:

report lost item

item description

location

date/time

optional photo upload

status

found/lost states

location-based alert concept

Example:

BLACK SMARTWATCH
Last seen:
V Block / academic area

Target alert:
Students associated with that area

For the prototype:
simulate geofencing.

Do not claim actual geolocation unless implemented.

Show the conceptual flow:

REPORT
↓
LOCATION
↓
DATABASE
↓
AREA-BASED ALERT
↓
POTENTIAL MATCH

Leave the Gemini Vision matching integration as an extension point for the external AI agent.

TELUGU STAFF VOICE BRIDGE

Create a prominent translation card.

Example input:

"Room 312 tap is leaking."

Output:

Telugu translation

Then show:
[PLAY AUDIO]

Include reverse translation as an optional action.

The UI should make this feel like a real campus communication tool rather than a generic translator.

The AI implementation can be plugged in later.

ACADEMICS

Create an academic section containing:

TODAY'S CLASSES
UPCOMING DEADLINES
NOTICES
ROOM LOCATIONS
FACULTY DIRECTORY
CALENDAR ACTIONS

Deadlines should have:

course

task

due date

remaining time

urgency

action button

Use a timeline structure:

TODAY
Tomorrow
This Week
Later

Include:

[ADD TO GOOGLE CALENDAR]

This can be simulated in the prototype.

EVENTS

Create a campus events system.

Each event should have:

title

date

time

venue

category

registration state

action

Example event:

GDG Solution Hunt
29 Sept
X-Lab Auditorium

Actions:

[REGISTER NOW]
[VIEW DETAILS]
[ADD TO CALENDAR]

After registration:

✅ REGISTERED
[SHOW QR]

Generate a visually convincing demo QR/pass.

The event registration is simulated unless a real API is connected.

PLACEMENT HUB

Create a career/placement section.

Show:

PLACEMENT ALERTS
APPLICATION DEADLINES
ELIGIBILITY
PROFILE STATUS

Create a "Verified Campus Skill Card" concept.

Display:

CSE / AI & ML

GitHub ✓ Connected
LinkedIn ✓ Connected
LeetCode ✓ Connected

Skills:
Python
Java
Machine Learning
Git

Buttons:
[VIEW PROFILE]
[PROFILE SYNC]

For the prototype, external integrations are simulated.

Do NOT claim real GitHub, LinkedIn, LeetCode or CDC APIs are connected unless they actually are.

NOTIFICATION CENTER

Create one unified notification system.

Types:

DEADLINE
EVENT
PLACEMENT
TRANSPORT
HEALTH
DELIVERY
CAMPUS ALERT

Notification examples:

🔴
AI Assignment due tonight

🟡
GDG Solution Hunt starts at 2 PM

🔵
Software Engineer application closes tomorrow

🟢
ORS is currently in stock

Create:

unread count

read/unread state

mark all as read

filtering

priority

timestamps

expandable detail

contextual actions

The selected student's notifications must change with the profile.

The notification center should feel like the student's personal campus inbox.

DELIVERY NOTIFIER

Create a simple campus delivery notification flow.

Example:

🍔 DELIVERY ARRIVED

Your food parcel is ready.

LOCATION:
Main Gate 1

[VIEW LOCATION]

For the prototype, use simulated delivery state.

LIBRARY

Create a library card concept.

Example:

Artificial Intelligence
Due in 2 days

[RENEW FOR 7 DAYS]

For the prototype:

show due countdown

show potential fine as demo text if needed

allow a simulated renewal action

Do not invent a specific fine amount unless explicitly provided.

GPU / HATCHLAB

Create a conceptual AIPS/Hatchlab GPU queue interface.

Show:

GPU COMPUTE

Available GPUs
Queue length
Estimated start time
Job status

Actions:
[SUBMIT JOB]
[JOIN QUEUE]

For the prototype:
simulate the queue.

Do NOT imply actual campus GPU hardware is connected.

LAB KIT ESCROW

Create a hardware lending workflow.

Example:

ARDUINO KIT
Available

[REQUEST KIT]

Then:

REQUESTED
QR HANDSHAKE
RETURN DATE

Create a visually convincing QR escrow concept.

Simulate trust/return state.

Do not claim a real escrow/payment system exists.

CONTEXT ENGINE

The entire application should appear connected.

Create a central contextual state.

Example:

Current student:
Final-year CSE student

Current time:
9:42 AM

Next class:
10:00 AM

Classroom:
V502

Campus location:
Current simulated location

Bus:
V-17

Deadline:
AI Assignment tonight

Then Orbit can surface:

"You have 18 minutes before your next class.
V502 is in V Block, Floor 5."

and show:

[NAVIGATE TO CLASS]

This is the main differentiator.

The app is not simply showing data.
It is interpreting data into action.

SEARCH

Global search should search across:

rooms

blocks

faculty

buses

bus stops

events

deadlines

placement notices

services

pharmacy

emergency

Use smart result grouping.

For example:

Search:
"Mangalagiri"

Results:

BUS
V-17
Mangalagiri Old Bus Stand
8:10 AM

CAMPUS
V Block

ACTION
Track Bus

RESPONSIVE DESIGN

The application must work well on:

laptop

desktop

tablet

mobile

The dashboard should gracefully collapse into a mobile layout.

DEMO MODE

Add a subtle "Prototype Mode" indicator.

The demo mode should ensure predictable behavior.

Create deterministic simulated states for:

bus movement

notifications

event registration

deadlines

delivery

lost & found

GPU queue

library status

placement alerts

The demo should never fail because an external API is unavailable.

Where data is simulated, label it appropriately.

TECHNICAL CONSTRAINTS

Use a simple web stack.

Preferred:
HTML
CSS
JavaScript

Do NOT migrate to:
React
Next.js
Vue
Angular

unless absolutely required by the supplied project.

Keep dependencies minimal.

Prefer local structured data modules for prototype data.

Use a clear architecture such as:

/data
/services
/components
/utils
/styles

where appropriate.

Do not scatter data through dozens of UI event handlers.

Do not hard-code the same information in multiple places.

AI INTEGRATION BOUNDARY

Another teammate is separately developing the AI Helpdesk.

Do NOT build another competing AI backend.

Instead create a clean interface such as:

getOrbitContext()

which returns:

student
currentLocation
nextClass
bus
deadlines
events
placementNotices
campusLocations
health
pharmacy
notifications

The external Helpdesk Agent should eventually be able to consume this context.

The application should have a clearly defined hook where the external AI service can be connected.

GOOGLE TECHNOLOGY POSITIONING

The intended technology story for the full system is:

Gemini / Google AI
Google Maps Platform
Firebase
Google Calendar

The prototype may simulate integrations that are not configured.

Do not fabricate successful API calls.

Make the architecture visually and structurally ready for real Google integrations later.

VISUAL QUALITY BAR

This must look like a serious hackathon finalist prototype.

Use:

polished dashboard cards

subtle depth

smooth motion

modern typography

interactive maps

animated indicators

route progress

notification badges

polished modal dialogs

contextual empty states

realistic loading

hover micro-interactions

command/search experience

strong mobile behavior

The interface should look alive.

Examples:

bus marker moves

deadline countdown changes

notifications slide/fade in

cards respond to hover

registration changes state

route animates

search results appear dynamically

student switching updates the entire application

Do not over-animate.

DEMO SCENARIO

Build the prototype around this judge-friendly flow:

START

Student:
"I'm a day scholar and I have class soon."

Orbit:
Shows assigned bus and next class.

↓

Student searches:
"V502"

Orbit:
V BLOCK
Floor 5
Room 02

[SHOW ROUTE]

↓

Dashboard:
"AI assignment due tonight."

[VIEW DEADLINE]

↓

Notification:
"GDG Solution Hunt starts at 2 PM."

[VIEW EVENT]

↓

Placement:
"Software Engineer application closes tomorrow."

[VIEW PLACEMENT]

↓

Health:
Doctor is on rounds.
Returns at 2:30 PM.

↓

Pharmacy:
ORS — IN STOCK

↓

Emergency:
Saraswati Hostel
[CALL NOW]

↓

Transport:
V-17
Mangalagiri Old Bus Stand
8:10 AM

[TRACK BUS]

↓

Ask Orbit:
"I lost my ID card. What should I do?"

Display the AI response area using a clearly marked integration placeholder if the separate AI agent is not yet connected.

DATA HONESTY

Extremely important:

Do not invent institutional facts and present them as verified.

If information is supplied explicitly in this prompt, use it.

If information is not supplied:

use a demo value

label it as simulated

or leave it unconfigured

Do not invent:

emergency phone numbers

official fees

official office timings

live GPS

real placement API connections

actual student records

real Google Calendar synchronization

real CDC/SuperSet synchronization

FINAL GOAL

The finished application should communicate this idea immediately:

A traditional campus system says:

"Find the information yourself."

SRM Orbit says:

"What do you need?"

Then:

ASK
↓
UNDERSTAND
↓
CONTEXTUALIZE
↓
ACT

The student should feel that Orbit understands:
who they are,
where they need to go,
what they have coming up,
what matters now,
and what action they should take next.

The finished prototype should feel like:

"An operating layer for student life at SRM AP."

Not:

"Another AI chatbot."

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d37f7553-dc5c-4479-97ae-eca77917bdc5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
