/**
 * Rollin Realms - Content Architecture & Media Registry
 *
 * NOTE FOR PRODUCTION DEPLOYMENT:
 * To replace placeholders with your Cloudflare R2 / local assets,
 * update the individual URLs or arrays below.
 */

export const MEDIA_BASE_URL = 'https://pub-d95811991a9341d5908853e7ea3d1edd.r2.dev';

export const MEDIA = {
  // Slide 1: Hero Visuals & Logotype Image
  heroStill1: `${MEDIA_BASE_URL}/MAGGI BAUL.webp`,
  heroStill2: `${MEDIA_BASE_URL}/SEYLON MASTER.webp`,

  heroLogotype: `${MEDIA_BASE_URL}/logotype.svg`,
  heroLogotypeFallback: '/logotype.svg',
  brandLogoMark: `${MEDIA_BASE_URL}/logomark.svg`,
  brandLogoMarkFallback: '/logo-mark.svg',
  laurelIcon: `${MEDIA_BASE_URL}/laurel.svg`,
  laurelIconFallback: '/laurel.svg',
  
  // Slide 2: About
  aboutFounders: `${MEDIA_BASE_URL}/founders.webp`,
  aboutPoster: `${MEDIA_BASE_URL}/SFTS_ABOUT.webp`,
  aboutCommercialShot: `${MEDIA_BASE_URL}/ABOUT.webp`,

  // Slide 3: Mission Full Bleed
  missionVisual: `${MEDIA_BASE_URL}/MISSION.webp`,

  // Slide 4: Vision Full Bleed
  visionVisual: `${MEDIA_BASE_URL}/VISION.webp`,

  // Slide 5: Services Banner
  servicesCollage: `${MEDIA_BASE_URL}/TVC.webp`,

  // Slides 6 & 7 & 8: Shared Background Image for Commercial & Reel Snaps with gradient from top
  commercialSnapsBackdrop: `${MEDIA_BASE_URL}/TVC.webp`,
  commercialSnapsBackdropFallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNvqApoM8GvedmQ1NNv9oR0MkSLDcCR9cv6Q_kA8wIxj2aR4fzkwSil2fY9-4YmJXAz5bXsAsOl_hYIzkRPMFuVzEg9P_DXWZaEV5o9NnsV-71o5LrUaR_bkAyOaQiugTfvk3g3DJti8jDxa6sJ7qoW59hEnkKK6ryb_UJ-HFXcmYdirvoAovXS88Xbn3IeFUgCLGCDDEuXLG_p1z7C_Gn2oJOPkI-_11YV6OqHk1xS8P7NkEI6X9-CIb-6uIk4XBJ6g',
  commercialSnaps1: `${MEDIA_BASE_URL}/OVC.webp`,
  commercialSnaps1Fallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNvqApoM8GvedmQ1NNv9oR0MkSLDcCR9cv6Q_kA8wIxj2aR4fzkwSil2fY9-4YmJXAz5bXsAsOl_hYIzkRPMFuVzEg9P_DXWZaEV5o9NnsV-71o5LrUaR_bkAyOaQiugTfvk3g3DJti8jDxa6sJ7qoW59hEnkKK6ryb_UJ-HFXcmYdirvoAovXS88Xbn3IeFUgCLGCDDEuXLG_p1z7C_Gn2oJOPkI-_11YV6OqHk1xS8P7NkEI6X9-CIb-6uIk4XBJ6g',
  commercialSnaps2: `${MEDIA_BASE_URL}/MV.webp`,
  commercialSnaps2Fallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmjL7_GWoETPWrGT9BrobCtZgFN28XViTx9qwetaFQbCAymjs20lLdkLimdQdrF75Zby0_brmKPRKCmLeHn40kVKJ2ojvIaGKuxuEctNXbNdSZvxU-CFGQRlat2stoeggXDQeVmKc_Fy9gAp6owGbe47VcJnA_vsBqDh3muN3c2PKmmIyiyXxOdrzYywTUO1OETeW-zhIdfPxyGF5YenykbxfQaY_8kZjeSCEL7B7KBIhAPgzezAOO9oU3rufeJGnQAA',

  // Slide 8: Reel Snaps (9:16 Vertical Storytelling)
  reelSnapsBackdrop: `${MEDIA_BASE_URL}/TVC.webp`,
  reelSnaps: `${MEDIA_BASE_URL}/TVC.webp`,
  reelSnapsFallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaiRILiYa9ELg3U8reX4wUW4rnjFe61Yv0RD6MdugMS8vjkpondUFYPEsDEvXL2eDX6u5pI4UX4Ty9Z8M7JT9yi2yxGlVunhxmGwkxviRpSoOGXttK79c74kjuU_F8-Ng6o4dtMzuXBxBpMzTDE3DKjgJVlMTKOCK186iQ0VBpLiJZQfMJb1lPZpiBsz8XVPmSstCQrWL9Dl9lbMctDTxvX4DTWfQ1q8FDEIJyFKToNvAC6IOMlnaGOkoX8jiNQ_iceA',

  // Slide 9: Originals Full Page Background & The Three Posters
  originalsBackdrop: `${MEDIA_BASE_URL}/ORIGINALS.webp`,
  originalsBackdropFallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsvLmtCvpTvCQWIb1rDx73GSom7yxRy2xQgKFoX-cjvOps1vtjlu8ekTpANHIkoGclXqQUPgg5fvf2YOjV1lEgVr3SlYmm2J8mFgur5uEOYwyb5xiWq0g7xYs5HHqArmbWzYIVYC4K43aCVGS0_bg2IRLaqV0rxqhmdzzyKUH8DILUELMW5lekV8TLwMGXHj0wneZhwj-0H5_Ihp5pi6NdMGaJhyAoA_EIBT-0QCHD4q6rDxm5BHlHwnxXIBVYKK3uGQ',
  songFromTheSouthPoster: `${MEDIA_BASE_URL}/SFTS.webp`,
  songFromTheSouthPosterFallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsvLmtCvpTvCQWIb1rDx73GSom7yxRy2xQgKFoX-cjvOps1vtjlu8ekTpANHIkoGclXqQUPgg5fvf2YOjV1lEgVr3SlYmm2J8mFgur5uEOYwyb5xiWq0g7xYs5HHqArmbWzYIVYC4K43aCVGS0_bg2IRLaqV0rxqhmdzzyKUH8DILUELMW5lekV8TLwMGXHj0wneZhwj-0H5_Ihp5pi6NdMGaJhyAoA_EIBT-0QCHD4q6rDxm5BHlHwnxXIBVYKK3uGQ',
  ekhaneRajnoitikPoster: `${MEDIA_BASE_URL}/ERAJ.webp`,
  ekhaneRajnoitikPosterFallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf3ds1pCAh_VSidl-mRKKTM6jzBD4UW2qhjve3Umz8JVKZ2Dld_HiHdYcrYxygNrfI6xk0Jdii_Q2KeTdJL8Foo8S6UF3cq__vw11JFBCh2CZk_xI256sMgzKkqcy5lrkOnlgDsgvXrwVFTgBDOFDTjs3T57jcyQB8vZ3Mqx4ditcivcA40tSliDRZI_94wvnH4cA9Tj6d6kwnFh992eq-jIo7tjZWmjGgj0OI2UlfXe8dLCJ1SkJhfCD9Isaib3xkMw',
  amraHotoPoster: `${MEDIA_BASE_URL}/amra hoyto.webp`,
  amraHotoPosterFallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNvqApoM8GvedmQ1NNv9oR0MkSLDcCR9cv6Q_kA8wIxj2aR4fzkwSil2fY9-4YmJXAz5bXsAsOl_hYIzkRPMFuVzEg9P_DXWZaEV5o9NnsV-71o5LrUaR_bkAyOaQiugTfvk3g3DJti8jDxa6sJ7qoW59hEnkKK6ryb_UJ-HFXcmYdirvoAovXS88Xbn3IeFUgCLGCDDEuXLG_p1z7C_Gn2oJOPkI-_11YV6OqHk1xS8P7NkEI6X9-CIb-6uIk4XBJ6g',

  // Slide 10: Events
  eventsBackdrop: `${MEDIA_BASE_URL}/Events.webp`,
  eventsBackdropFallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM7j9lG3BpqlymUG43Xl7v6XcasQcwjYDK-Y_GSHGhB1GiP1G_UwyMxuUElglvqHlQPJCG_PpZtER2Nd5rHEmTFc-e0qksRvYUGYp0EAaJw3-D1xkmLubuBg-W4nV_MYAT5sa0M2MHTg9qtLwKzeIoG0YzuLxInYYFHE-z1oI0cUZvq31-0Q1U8tNOtAYQUKkxL21ERnYbw1wpN_Jgq5_a5wA-fN6hxrDgzkt7Ehk9ppUefNK0Zi7IomvSb75mC0hpmw',
  eventsCollage: `${MEDIA_BASE_URL}/amra hoyto.webp`,
  eventsCollageFallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM7j9lG3BpqlymUG43Xl7v6XcasQcwjYDK-Y_GSHGhB1GiP1G_UwyMxuUElglvqHlQPJCG_PpZtER2Nd5rHEmTFc-e0qksRvYUGYp0EAaJw3-D1xkmLubuBg-W4nV_MYAT5sa0M2MHTg9qtLwKzeIoG0YzuLxInYYFHE-z1oI0cUZvq31-0Q1U8tNOtAYQUKkxL21ERnYbw1wpN_Jgq5_a5wA-fN6hxrDgzkt7Ehk9ppUefNK0Zi7IomvSb75mC0hpmw',

  eventSnap1: `${MEDIA_BASE_URL}/event-1.webp`,
  eventSnap1Fallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM7j9lG3BpqlymUG43Xl7v6XcasQcwjYDK-Y_GSHGhB1GiP1G_UwyMxuUElglvqHlQPJCG_PpZtER2Nd5rHEmTFc-e0qksRvYUGYp0EAaJw3-D1xkmLubuBg-W4nV_MYAT5sa0M2MHTg9qtLwKzeIoG0YzuLxInYYFHE-z1oI0cUZvq31-0Q1U8tNOtAYQUKkxL21ERnYbw1wpN_Jgq5_a5wA-fN6hxrDgzkt7Ehk9ppUefNK0Zi7IomvSb75mC0hpmw',

  eventSnap2: `${MEDIA_BASE_URL}/event-2.webp`,
  eventSnap2Fallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNvqApoM8GvedmQ1NNv9oR0MkSLDcCR9cv6Q_kA8wIxj2aR4fzkwSil2fY9-4YmJXAz5bXsAsOl_hYIzkRPMFuVzEg9P_DXWZaEV5o9NnsV-71o5LrUaR_bkAyOaQiugTfvk3g3DJti8jDxa6sJ7qoW59hEnkKK6ryb_UJ-HFXcmYdirvoAovXS88Xbn3IeFUgCLGCDDEuXLG_p1z7C_Gn2oJOPkI-_11YV6OqHk1xS8P7NkEI6X9-CIb-6uIk4XBJ6g',

  eventSnap3: `${MEDIA_BASE_URL}/event-3.webp`,
  eventSnap3Fallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmjL7_GWoETPWrGT9BrobCtZgFN28XViTx9qwetaFQbCAymjs20lLdkLimdQdrF75Zby0_brmKPRKCmLeHn40kVKJ2ojvIaGKuxuEctNXbNdSZvxU-CFGQRlat2stoeggXDQeVmKc_Fy9gAp6owGbe47VcJnA_vsBqDh3muN3c2PKmmIyiyXxOdrzYywTUO1OETeW-zhIdfPxyGF5YenykbxfQaY_8kZjeSCEL7B7KBIhAPgzezAOO9oU3rufeJGnQAA',

  eventSnap4: `${MEDIA_BASE_URL}/event-4.webp`,
  eventSnap4Fallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsvLmtCvpTvCQWIb1rDx73GSom7yxRy2xQgKFoX-cjvOps1vtjlu8ekTpANHIkoGclXqQUPgg5fvf2YOjV1lEgVr3SlYmm2J8mFgur5uEOYwyb5xiWq0g7xYs5HHqArmbWzYIVYC4K43aCVGS0_bg2IRLaqV0rxqhmdzzyKUH8DILUELMW5lekV8TLwMGXHj0wneZhwj-0H5_Ihp5pi6NdMGaJhyAoA_EIBT-0QCHD4q6rDxm5BHlHwnxXIBVYKK3uGQ',

  // Slide 11: Clients Grid
  clientsGrid: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbttR9HJYDXsVnOT-SuiNDLHV1CVDZoFSxGsfKrYG4K7Eu7pqUkRtYU3ehLWJRiqoZFi24Chp9AaNnGg4XD609vrq_xr20py4gH4YtgigiFFCiR0k5wfBNyIkjncVAwy2u4fw5dP7XkFZLiaWpJqxiUd7fVxaZht7WjAcXETfj_gLVJBaQr4kAe0iFTNOMgeaalYYb599Mqb0lOqy4LDOWBQYWnYoaXjEv4gf8ZedP0_nJYy07WN6vHLtdKxtB8FsvwA',

  // Slide 12: Founders
  founderSunny: `${MEDIA_BASE_URL}/AHS.webp`,
  founderKhalid: `${MEDIA_BASE_URL}/KHR2.webp`,
  founderSibat: `${MEDIA_BASE_URL}/ST2.webp`,

  // Slide 13: Team Members
  teamMember1: `${MEDIA_BASE_URL}/team-1.webp`,
  teamMember2: `${MEDIA_BASE_URL}/team-2.webp`,
  teamMember3: `${MEDIA_BASE_URL}/team-3.webp`,
  teamMember4: `${MEDIA_BASE_URL}/team-4.webp`,
  teamMember5: `${MEDIA_BASE_URL}/team-5.webp`,

  // Slide 14: Portfolio / Showreels
  showreelSunny: `${MEDIA_BASE_URL}/commercial snap 1.webp`,
  showreelTazwar: `${MEDIA_BASE_URL}/commercial snap 2.webp`,
  showreelAditto: `${MEDIA_BASE_URL}/aditto-showreeel.webp`,

  // Slides 15, 16, 17: BTS Galleries
  btsVol1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQy5v4ra7g8k-TFp-424QIUdYgmF5wCNEx8tcqDFnbNfAa0NlxuTET5TaMBRasCHQzn__aSvOdOTqbertszYTOL1JMHMp32KAyWpGPvwtDzq346Z_hjsLvFaLrl5uuc-__WiJDpAO-SWseMHMJeVkxCnF7MvjBSLiOYdujIYGkaonfMavUnhiaR82NoXAW8EDxdwY5UsvtJCCsUGebFTEtaDv6GkZw9bV7jR5CXjKqt3JJT3Z3i1Ot9HumM44pGzemFg',
  btsVol2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_KL8YApjJWNFQDt0NIhIxxbpXjg1en8GLzSztOfp24-v_rb1MweiRk3B9-tPTRwf1V15fSU2ntZhSeRRRbcycWh3fIFRpC0elzLU4uG1O-GMCO3t_pYuUuNt-8p7ltINBxbdqgPJzonNYuvbLpyba26mE5nAssxmDAC1B56QUKcYMr-WDcBVEHP8ShVAAekoPgstjEWqnsE0qbFKeXLTOY3b-BoRa7NcL37C9y67SI2oEEanDySF_ABu0IqtGj7Hh0g',
  btsVol3: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrnIUDyFbvCEnFK4bnpcq4QHIeh8P4C7eNAGBNhigTI-3ocu1oWnMpwE7TwmHXnDRo4jBr8wyCZ2vqKs0zIMbtP-VReyeYrUJQ2MoBmBRZdNO0vjfBuWZAPV8WM98eVpth2Su26EpJsJ_D0xmBNqIca8xw6qZr_gxfQwtuZKY4QccaTt3C5OcxdqAqPcHBvrxHwJSBuAB3WVO4qsb5vIO3k1caAJGljgVi_c5vySofuAh3Gj_VGipy2Z7U3V7o0AiOUw',

  // Slide 19: Contact Still Montage
  contactStill1: `${MEDIA_BASE_URL}/contact 1.webp`,
  contactStill2: `${MEDIA_BASE_URL}/contact 2.webp`,
  contactStill3: `${MEDIA_BASE_URL}/contact 3.webp`,
};

// 32 Pure Image Slots for Commercial Snaps 4x8 Gallery
export const COMMERCIAL_SNAPS_32 = Array.from({ length: 32 }, (_, i) => ({
  id: i + 1,
  image: `${MEDIA_BASE_URL}/commercial snap ${i + 1}.webp`,
  fallbackImage: i < 16 ? MEDIA.commercialSnaps1Fallback : MEDIA.commercialSnaps2Fallback,
}));

// 12 Pure Image Slots for Reel Snaps 6x2 Gallery (9:16 portrait)
export const REEL_SNAPS_12 = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  image: `${MEDIA_BASE_URL}/reel snap ${i + 1}.webp`,
  fallbackImage: MEDIA.reelSnapsFallback,
}));

// Originals (Slide 9 Reference)
export const ORIGINALS = [
  {
    id: 'song-from-the-south',
    title: 'Song from the South',
    bnTitle: 'সং ফরম দ্যা সাউথ',
    director: 'Ahmed Hasan Sunny',
    writers: 'Ahmed Hasan Sunny, Khalid H. Rakib',
    cinematography: 'Rollin Realms Unit',
    editing: 'Sibat Tazwar',
    music: 'Original Film Score',
    category: 'Independent Cinema',
    status: 'Official Selection - Lisboa Indie Film Fest 2025',
    image: MEDIA.songFromTheSouthPoster,
    fallbackImage: MEDIA.songFromTheSouthPosterFallback,
    permalink: '#originals?film=song-from-the-south',
    logline:
      'A poignant cinematic journey exploring delta life, quiet human grief, and memory across the tranquil rivers of southern Bengal.',
  },
  {
    id: 'ekhane-rajnoitik-alap-joruri',
    title: 'Ekhane Rajnoitik Alap Joruri',
    bnTitle: 'এখানে রাজনৈতিক আলাপ জরুরী',
    director: 'Ahmed Hasan Sunny',
    writers: 'Sibat Tazwar',
    cinematography: 'Rollin Realms Unit',
    editing: 'Ahmed Hasan Sunny',
    music: 'Original Atmospheric Score',
    category: 'Narrative Short',
    status: 'Festival Panorama Selection',
    image: MEDIA.ekhaneRajnoitikPoster,
    fallbackImage: MEDIA.ekhaneRajnoitikPosterFallback,
    permalink: '#originals?film=ekhane-rajnoitik-alap-joruri',
    logline:
      'A high-tension ideological dialogue between two urban companions confronting unspoken political fractures in contemporary Dhaka.',
  },
  {
    id: 'amra-hoto',
    title: 'Amra Hoyto',
    bnTitle: 'আমরা হয়তো',
    director: 'Ahmed Hasan Sunny',
    writers: 'Ahmed Hasan Sunny',
    cinematography: 'Rollin Realms Unit',
    editing: 'Rollin Realms Post',
    music: 'Original Musical Composition',
    category: 'Musical Cinema',
    status: 'Festival Release & Streaming',
    image: MEDIA.amraHotoPoster,
    fallbackImage: MEDIA.amraHotoPosterFallback,
    permalink: '#originals?film=amra-hoto',
    logline:
      'An intimate visual hymn contemplating youth, longing, artistic ambition, and the unspoken warmth of companionship.',
  },
];

// Events Data (Slide 10 Reference: 4 distinct snapshots and the 2 event cards)
export const EVENTS_DATA = {
  snapshots: [
    {
      id: 1,
      image: MEDIA.eventSnap1,
      fallbackImage: MEDIA.eventSnap1Fallback,
      title: 'Anjan Dutt Live on Stage',
    },
    {
      id: 2,
      image: MEDIA.eventSnap2,
      fallbackImage: MEDIA.eventSnap2Fallback,
      title: 'Intimate Auditoria Crowd',
    },
    {
      id: 3,
      image: MEDIA.eventSnap3,
      fallbackImage: MEDIA.eventSnap3Fallback,
      title: 'Artists Against Genocide Solidarity',
    },
    {
      id: 4,
      image: MEDIA.eventSnap4,
      fallbackImage: MEDIA.eventSnap4Fallback,
      title: 'Humanitarian Awareness Concert',
    },
  ],
  eventCards: [
    {
      id: 'anjan-in-metropolis',
      title: 'Anjan in Metropolis',
      accent: 'Anjan',
      rest: ' in Metropolis',
      badge: '2,500+ Attendees',
      description:
        'Anjan in Metropolis was one of our most successful shows, bringing legend Anjan Dutt to Bangladesh for a solo performance in an intimate, cozy setting for the very first time. The event drew around 2,500 attendees and received an overwhelming response from the audience. Due to popular demand, a second edition of the show was organized as well, making it one of our biggest successes.',
    },
    {
      id: 'to-gaza-from-dhaka',
      title: 'To Gaza from Dhaka',
      accent: 'To Gaza',
      rest: ' from Dhaka',
      badge: '700,000 BDT Raised',
      description:
        'To Gaza from Dhaka was organized in collaboration with Artists Against Genocide, a platform founded to raise awareness and mobilize support for Palestine during the ongoing conflict between Israel and Palestine. The event focused on spreading awareness, encouraging solidarity, and ensuring humanitarian aid could reach people in need in Palestine. As a crowdfunding initiative, the program successfully raised approximately 700,000 BDT in support of humanitarian relief efforts.',
    },
  ],
};

export const CLIENT_CUSTOM_LOGOS: Record<string, string> = {
};


export const CLIENT_LOGOS_35 = [
  'BSRM', 'Colin', 'Robi', 'Maggi', 'Monalisa', 'GPH Ispat', 'Banglalink',
  'Seylon Tea', 'Kumarika', 'Square', 'Pushti', 'Lizol', 'Shah Cement', 'Surf Excel',
  'AKIJ', 'Avonee Pants', 'Meril', 'Airtel', 'Toffee', 'SMC', 'Apex',
  'bKash', 'BRAC', 'REDX', 'Natura Care', 'Berger', 'Nijera Kori', 'itel',
  'skitto', 'Kumon', 'ENO', 'Prime Bank', 'ZeroCal', 'alteryouth', 'Symphony'
].map((name, i) => ({
  id: i + 1,
  name,
  logoUrl: CLIENT_CUSTOM_LOGOS[name] || `${MEDIA_BASE_URL}/client-${i + 1}.webp`,
}));

// 27 Pure Image URLs for 3x9 Gallery
export const BTS_GALLERY_27 = Array.from({ length: 27 }, (_, i) => ({
  id: i + 1,
  image: `${MEDIA_BASE_URL}/bts-${i + 1}.webp`,
  fallbackImage: i < 9 ? MEDIA.btsVol1 : i < 18 ? MEDIA.btsVol2 : MEDIA.btsVol3,
}));

// The 8 Core Services with Individual Image Slots
export const SERVICES = [
  {
    id: 'tvc',
    title: 'Television Video Commercial (TVC)',
    short: 'TVC',
    category: 'Commercial Broadcast',
    description: 'High-production 35mm/digital commercial cinema scaled for television networks and prime-time spots with rich art direction and storytelling.',
    align: 'left',
    image: `${MEDIA_BASE_URL}/TVC.webp`,
    fallbackImage: MEDIA.commercialSnaps1Fallback,
  },
  {
    id: 'ovc',
    title: 'Online Video Commercial (OVC)',
    short: 'OVC',
    category: 'Digital Native',
    description: 'High-impact digital commercials optimized for high click-through rates, platform nuances, and modern audiences across YouTube, Meta, and streaming.',
    align: 'left',
    image: `${MEDIA_BASE_URL}/OVC.webp`,
    fallbackImage: MEDIA.commercialSnaps2Fallback,
  },
  {
    id: 'corporate-av',
    title: 'Corporate AV',
    short: 'AV',
    category: 'Institutional',
    description: 'Cinematic corporate documentaries, executive profiles, investor reels, and brand origin films that elevate brand prestige and corporate identity.',
    align: 'right',
    image: `${MEDIA_BASE_URL}/Corporate AV.webp`,
    fallbackImage: MEDIA.btsVol1,
  },
  {
    id: 'music-video',
    title: 'Music Video',
    short: 'MV',
    category: 'Musical Cinema',
    description: 'Visceral musical narratives, auteur visual poetry, choreographed performances, and cutting-edge color grading for leading recording artists.',
    align: 'right',
    image: `${MEDIA_BASE_URL}/MV.webp`,
    fallbackImage: MEDIA.amraHotoPosterFallback,
  },
  {
    id: 'training-videos',
    title: 'Training Videos',
    short: 'Training',
    category: 'Educational & Internal',
    description: 'Engaging, narrative-driven institutional training content that communicates complex corporate procedures with cinematic clarity.',
    align: 'left',
    image: `${MEDIA_BASE_URL}/Training Video.webp`,
    fallbackImage: MEDIA.btsVol2,
  },
  {
    id: 'event-management',
    title: 'Event Management',
    short: 'Events',
    category: 'Live & Culture',
    description: 'End-to-end concert production, staging, lighting design, multi-camera live broadcast, and humanitarian cultural solidarity programs.',
    align: 'left',
    image: `${MEDIA_BASE_URL}/Event Management.webp`,
    fallbackImage: MEDIA.eventsCollageFallback,
  },
  {
    id: 'feature-film',
    title: 'Feature Film',
    short: 'Feature',
    category: 'Independent Cinema',
    description: 'Narrative feature-length cinema focusing on authentic South Asian human stories, psychological depth, and international festival release.',
    align: 'right',
    image: `${MEDIA_BASE_URL}/Feature Film.webp`,
    fallbackImage: MEDIA.songFromTheSouthPosterFallback,
  },
  {
    id: 'short-film',
    title: 'Short Film',
    short: 'Shorts',
    category: 'Festival & Auteur',
    description: 'Experimental and narrative short cinema authored by our in-house directors, exhibited at international film festivals globally.',
    align: 'right',
    image: `${MEDIA_BASE_URL}/Short Film.webp`,
    fallbackImage: MEDIA.ekhaneRajnoitikPosterFallback,
  },
];

export const FOUNDERS = [
  {
    id: 'sunny',
    name: 'Ahmed Hasan Sunny',
    role: 'Director',
    subtitle: 'DIRECTOR',
    image: MEDIA.founderSunny,
    bio: 'Filmmaker and creative director behind national commercial campaigns, narrative cinema, and award-winning festival selections.',
  },
  {
    id: 'khalid',
    name: 'Khalid H. Rakib',
    role: 'Producer',
    subtitle: 'PRODUCER',
    image: MEDIA.founderKhalid,
    bio: 'Lead producer managing large-scale studio productions, live cultural events, talent, and executive agency partnerships.',
  },
  {
    id: 'sibat',
    name: 'Sibat Tazwar',
    role: 'Director',
    subtitle: 'DIRECTOR',
    image: MEDIA.founderSibat,
    bio: 'Auteur director and visual stylist focusing on high-concept fiction, evocative lighting, and compelling modern storytelling.',
  },
];

export const TEAM_MEMBERS = [
  { id: 1, name: 'Aditto MB', role: 'Director', label: 'DIRECTOR', image: MEDIA.teamMember1 },
  { id: 2, name: 'Shojib Hossen', role: 'Accounts', label: 'ACCOUNTS', image: MEDIA.teamMember2 },
  { id: 3, name: 'Ivan Almas', role: "Director's Assistant", label: 'DIRECTORS ASSISTANT', image: MEDIA.teamMember3 },
  { id: 4, name: 'Amit Hasan Rudra', role: 'Assistant Director', label: 'ASSISTANT DIRECTOR', image: MEDIA.teamMember4 },
  { id: 5, name: 'Hasnain Ahmed Alvi', role: 'Assistant Director', label: 'ASSISTANT DIRECTOR', image: MEDIA.teamMember5 },
];

export const AWARDS = [
  {
    title: 'Commward Silver',
    description: 'Awarded Silver for Music/Jingle category.',
    year: '2023',
  },
  {
    title: 'Digital Marketing Award Bronze',
    description: 'Recognized for Best Video campaign.',
    year: '2024',
  },
  {
    title: 'Lisboa Indie Film Festival',
    description: 'International selection of "Song from the South".',
    year: '2025',
  },
  {
    title: '24th Dhaka International Film Festival',
    description: 'Bangladesh Panorama Section (Talent).',
    year: '2026',
  },
  {
    title: 'Short Film Market Picks 2026',
    description: 'Clermont-Ferrand Short Film Market.',
    year: '2026',
  },
  {
    title: 'Ethereal Bloom',
    description: "Jahangirnagar Film Festival '26 honor.",
    year: '2026',
  },
];

export const SHOWREELS = [
  {
    id: 'sunny',
    title: 'AHMED HASAN SUNNY',
    role: 'SHOWREEL',
    image: MEDIA.showreelSunny,
    link: 'https://tinyurl.com/rr-sunny'
  },
  {
    id: 'tazwar',
    title: 'SIBAT TAZWAR',
    role: 'SHOWREEL',
    image: MEDIA.showreelTazwar,
    link: 'https://tinyurl.com/rr-sibat'
  },
  {
    id: 'aditto',
    title: 'ADITTO MB',
    role: 'SHOWREEL',
    image: MEDIA.showreelAditto,
    link: 'https://tinyurl.com/rr-aditto'
  },
  {
    id: 'channel',
    title: 'ROLLIN REALMS',
    role: 'OFFICIAL YOUTUBE',
    isChannel: true,
    link: 'https://tinyurl.com/rollinrealms'
  },
];

export const CONTACT_INFO = {
  address: 'https://maps.app.goo.gl/UShLpAL7jeRUcPrU8',
  phone: '+880 1771 760946',
  email: 'rollinrealms@gmail.com',
  facebook: 'https://tinyurl.com/rollinrealmsfacebook',
  instagram: 'https://tinyurl.com/rollinrealmsinstagram',
  youtube: 'https://tinyurl.com/rollinrealms',
};
