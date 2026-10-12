/**
 * CineScope Movie Database (Local Sample Data)
 * 100% Frontend-Only. No backend, no API keys, no external database required.
 * Each entry provides complete cinematic metadata, verified artwork, and trailer embeds.
 */

export const GENRES = [
  "All",
  "Action",
  "Sci-Fi",
  "Adventure",
  "Drama",
  "Animation",
  "Crime",
  "Comedy",
  "Fantasy",
  "Thriller"
];

export const MOVIES = [
  {
    id: 1,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
    genre: "Action",
    allGenres: ["Action", "Crime", "Drama"],
    year: 2008,
    releaseDate: "July 18, 2008",
    duration: "2h 32m",
    director: "Christopher Nolan",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    cast: [
      { name: "Christian Bale", role: "Bruce Wayne / Batman" },
      { name: "Heath Ledger", role: "Joker" },
      { name: "Aaron Eckhart", role: "Harvey Dent" },
      { name: "Michael Caine", role: "Alfred Pennyworth" },
      { name: "Gary Oldman", role: "Jim Gordon" }
    ],
    trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
    isTrending: true,
    isPopular: true,
    isTopRated: true,
    isUpcoming: false,
    mediaType: "movie",
    reviews: [
      {
        id: "r1",
        author: "Sarah Jenkins",
        rating: 10,
        date: "2 days ago",
        comment: "Heath Ledger's performance as the Joker is legendary. The gold standard for comic book cinema!"
      },
      {
        id: "r2",
        author: "Marcus Vance",
        rating: 9.5,
        date: "1 week ago",
        comment: "Gripping storytelling and breathtaking cinematography. A gritty masterpiece by Nolan."
      }
    ]
  },
  {
    id: 2,
    title: "Inception",
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
    genre: "Sci-Fi",
    allGenres: ["Sci-Fi", "Action", "Adventure"],
    year: 2010,
    releaseDate: "July 16, 2010",
    duration: "2h 28m",
    director: "Christopher Nolan",
    overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets, is offered a chance to regain his old life as payment for a task considered to be impossible: 'inception', the implantation of another person's idea into a target's subconscious.",
    cast: [
      { name: "Leonardo DiCaprio", role: "Dom Cobb" },
      { name: "Joseph Gordon-Levitt", role: "Arthur" },
      { name: "Elliot Page", role: "Ariadne" },
      { name: "Tom Hardy", role: "Eames" },
      { name: "Ken Watanabe", role: "Saito" }
    ],
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    isTrending: true,
    isPopular: true,
    isTopRated: true,
    isUpcoming: false,
    mediaType: "movie",
    reviews: [
      {
        id: "r3",
        author: "David Chen",
        rating: 9.0,
        date: "3 days ago",
        comment: "Mind-bending concept executed to perfection. Hans Zimmer's score elevates every scene."
      }
    ]
  },
  {
    id: 3,
    title: "Interstellar",
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    genre: "Sci-Fi",
    allGenres: ["Sci-Fi", "Adventure", "Drama"],
    year: 2014,
    releaseDate: "November 5, 2014",
    duration: "2h 49m",
    director: "Christopher Nolan",
    overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage to save humanity.",
    cast: [
      { name: "Matthew McConaughey", role: "Joseph Cooper" },
      { name: "Anne Hathaway", role: "Dr. Amelia Brand" },
      { name: "Jessica Chastain", role: "Murphy Cooper" },
      { name: "Michael Caine", role: "Professor Brand" }
    ],
    trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
    isTrending: true,
    isPopular: true,
    isTopRated: true,
    isUpcoming: false,
    mediaType: "movie",
    reviews: [
      {
        id: "r4",
        author: "Astrid Lind",
        rating: 10,
        date: "Yesterday",
        comment: "An emotional and scientific triumph. The docking sequence gives me chills every time!"
      }
    ]
  },
  {
    id: 4,
    title: "Spider-Man: Across the Spider-Verse",
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    genre: "Animation",
    allGenres: ["Animation", "Action", "Adventure"],
    year: 2023,
    releaseDate: "June 2, 2023",
    duration: "2h 20m",
    director: "Joaquim Dos Santos, Kemp Powers",
    overview: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
    cast: [
      { name: "Shameik Moore", role: "Miles Morales" },
      { name: "Hailee Steinfeld", role: "Gwen Stacy" },
      { name: "Oscar Isaac", role: "Miguel O'Hara" },
      { name: "Jake Johnson", role: "Peter B. Parker" }
    ],
    trailerUrl: "https://www.youtube.com/embed/cqGjhVJWtEg",
    isTrending: true,
    isPopular: true,
    isTopRated: true,
    isUpcoming: false,
    mediaType: "movie",
    reviews: [
      {
        id: "r5",
        author: "Chloe Bennett",
        rating: 9.0,
        date: "5 days ago",
        comment: "Every single frame is a work of art! The animation styles blend together seamlessly."
      }
    ]
  },
  {
    id: 5,
    title: "Dune: Part Two",
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s520DRq.jpg",
    genre: "Sci-Fi",
    allGenres: ["Sci-Fi", "Adventure", "Drama"],
    year: 2024,
    releaseDate: "March 1, 2024",
    duration: "2h 46m",
    director: "Denis Villeneuve",
    overview: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.",
    cast: [
      { name: "Timothée Chalamet", role: "Paul Atreides" },
      { name: "Zendaya", role: "Chani" },
      { name: "Rebecca Ferguson", role: "Lady Jessica" },
      { name: "Javier Bardem", role: "Stilgar" },
      { name: "Austin Butler", role: "Feyd-Rautha" }
    ],
    trailerUrl: "https://www.youtube.com/embed/Way9Dexny3w",
    isTrending: true,
    isPopular: true,
    isTopRated: true,
    isUpcoming: false,
    mediaType: "movie",
    reviews: [
      {
        id: "r6",
        author: "Noah Sterling",
        rating: 9.5,
        date: "1 day ago",
        comment: "A monumental cinematic achievement. Denis Villeneuve created pure sci-fi majesty on Arrakis."
      }
    ]
  },
  {
    id: 6,
    title: "Oppenheimer",
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/fm6K9vYqq0YeQZ1wfTmz1GQ3Spb.jpg",
    genre: "Drama",
    allGenres: ["Drama", "History"],
    year: 2023,
    releaseDate: "July 21, 2023",
    duration: "3h 00m",
    director: "Christopher Nolan",
    overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II, examining the tension between groundbreaking scientific genius and ethical dread.",
    cast: [
      { name: "Cillian Murphy", role: "J. Robert Oppenheimer" },
      { name: "Emily Blunt", role: "Katherine Oppenheimer" },
      { name: "Matt Damon", role: "Leslie Groves" },
      { name: "Robert Downey Jr.", role: "Lewis Strauss" }
    ],
    trailerUrl: "https://www.youtube.com/embed/uYPbbksJxIg",
    isTrending: true,
    isPopular: true,
    isTopRated: true,
    isUpcoming: false,
    mediaType: "movie",
    reviews: [
      {
        id: "r7",
        author: "Anthony Russo",
        rating: 8.5,
        date: "3 days ago",
        comment: "Cillian Murphy gives the performance of a lifetime. The Trinity test sequence is unforgettable."
      }
    ]
  },
  {
    id: 7,
    title: "The Batman",
    rating: 7.8,
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
    genre: "Action",
    allGenres: ["Action", "Crime", "Drama"],
    year: 2022,
    releaseDate: "March 4, 2022",
    duration: "2h 56m",
    director: "Matt Reeves",
    overview: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    cast: [
      { name: "Robert Pattinson", role: "Bruce Wayne / Batman" },
      { name: "Zoë Kravitz", role: "Selina Kyle / Catwoman" },
      { name: "Paul Dano", role: "The Riddler" },
      { name: "Jeffrey Wright", role: "Lt. James Gordon" }
    ],
    trailerUrl: "https://www.youtube.com/embed/mqqft2x_Aa4",
    isTrending: false,
    isPopular: true,
    isTopRated: false, // Rating <= 8 (Demonstrating conditional rendering!)
    isUpcoming: false,
    mediaType: "movie",
    reviews: [
      {
        id: "r8",
        author: "Lucas Gray",
        rating: 8.0,
        date: "4 days ago",
        comment: "A truly atmospheric detective neo-noir thriller. Robert Pattinson brought fantastic brooding intensity."
      }
    ]
  },
  {
    id: 8,
    title: "Avatar: The Way of Water",
    rating: 7.6,
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/198vrF8k7mfQ49emMDZwMe3gNt5.jpg",
    genre: "Sci-Fi",
    allGenres: ["Sci-Fi", "Adventure", "Action"],
    year: 2022,
    releaseDate: "December 16, 2022",
    duration: "3h 12m",
    director: "James Cameron",
    overview: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
    cast: [
      { name: "Sam Worthington", role: "Jake Sully" },
      { name: "Zoe Saldaña", role: "Neytiri" },
      { name: "Sigourney Weaver", role: "Kiri" }
    ],
    trailerUrl: "https://www.youtube.com/embed/d9MyW72ELq0",
    isTrending: false,
    isPopular: true,
    isTopRated: false, // Rating <= 8
    isUpcoming: false,
    mediaType: "movie",
    reviews: [
      {
        id: "r9",
        author: "Ethan Wright",
        rating: 8.0,
        date: "1 week ago",
        comment: "Visual effects are beyond belief. The underwater ecosystem of Pandora is purely magical."
      }
    ]
  },
  {
    id: 9,
    title: "Avengers: Endgame",
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    genre: "Action",
    allGenres: ["Action", "Adventure", "Sci-Fi"],
    year: 2019,
    releaseDate: "April 26, 2019",
    duration: "3h 01m",
    director: "Anthony Russo, Joe Russo",
    overview: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    cast: [
      { name: "Robert Downey Jr.", role: "Tony Stark / Iron Man" },
      { name: "Chris Evans", role: "Steve Rogers / Captain America" },
      { name: "Mark Ruffalo", role: "Bruce Banner / Hulk" },
      { name: "Chris Hemsworth", role: "Thor" }
    ],
    trailerUrl: "https://www.youtube.com/embed/TcMBFSGVi1c",
    isTrending: true,
    isPopular: true,
    isTopRated: true,
    isUpcoming: false,
    mediaType: "movie",
    reviews: [
      {
        id: "r10",
        author: "Kelly Adams",
        rating: 9.0,
        date: "2 weeks ago",
        comment: "An epic, satisfying culmination of over 10 years of storytelling. The portal scene made cinema history!"
      }
    ]
  },
  {
    id: 10,
    title: "Parasite",
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
    genre: "Drama",
    allGenres: ["Drama", "Thriller", "Comedy"],
    year: 2019,
    releaseDate: "November 8, 2019",
    duration: "2h 12m",
    director: "Bong Joon-ho",
    overview: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident that completely derails their scheme.",
    cast: [
      { name: "Song Kang-ho", role: "Kim Ki-taek" },
      { name: "Lee Sun-kyun", role: "Park Dong-ik" },
      { name: "Cho Yeo-jeong", role: "Choi Yeon-gyo" }
    ],
    trailerUrl: "https://www.youtube.com/embed/5xH0R_uie14",
    isTrending: false,
    isPopular: true,
    isTopRated: true,
    isUpcoming: false,
    mediaType: "movie",
    reviews: [
      {
        id: "r11",
        author: "Mia Chen",
        rating: 9.5,
        date: "3 weeks ago",
        comment: "Flawlessly paced and packed with sharp social critique. Every twist keeps you on the edge of your seat."
      }
    ]
  },
  {
    id: 11,
    title: "Fast X",
    rating: 5.8,
    poster: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
    genre: "Action",
    allGenres: ["Action", "Crime", "Thriller"],
    year: 2023,
    releaseDate: "May 19, 2023",
    duration: "2h 21m",
    director: "Louis Leterrier",
    overview: "Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes, who has spent 12 years formulating a plan to destroy Dom and everyone he loves.",
    cast: [
      { name: "Vin Diesel", role: "Dominic Toretto" },
      { name: "Michelle Rodriguez", role: "Letty Ortiz" },
      { name: "Jason Momoa", role: "Dante Reyes" }
    ],
    trailerUrl: "https://www.youtube.com/embed/32RAq6JzY-w",
    isTrending: false,
    isPopular: true,
    isTopRated: false, // Rating <= 8 (No Top Rated Badge)
    isUpcoming: false,
    mediaType: "movie",
    reviews: [
      {
        id: "r12",
        author: "Jason Cole",
        rating: 6.0,
        date: "5 days ago",
        comment: "Over-the-top popcorn entertainment! Jason Momoa completely steals the entire show."
      }
    ]
  },
  {
    id: 12,
    title: "Gladiator II",
    rating: 7.4,
    poster: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/euYIwmwkmz95mnXvufEmbL6ovhA.jpg",
    genre: "Action",
    allGenres: ["Action", "Adventure", "Drama"],
    year: 2024,
    releaseDate: "November 22, 2024",
    duration: "2h 28m",
    director: "Ridley Scott",
    overview: "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius must enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist.",
    cast: [
      { name: "Paul Mescal", role: "Lucius" },
      { name: "Pedro Pascal", role: "Marcus Acacius" },
      { name: "Denzel Washington", role: "Macrinus" },
      { name: "Connie Nielsen", role: "Lucilla" }
    ],
    trailerUrl: "https://www.youtube.com/embed/4rgYUipGJNo",
    isTrending: true,
    isPopular: true,
    isTopRated: false, // Rating <= 8
    isUpcoming: true,
    mediaType: "movie",
    reviews: [
      {
        id: "r13",
        author: "Roman Historian",
        rating: 7.5,
        date: "Upcoming Release",
        comment: "Massive scale and brutal colosseum battles. Denzel Washington commands every second on screen."
      }
    ]
  },
  {
    id: 13,
    title: "Deadpool & Wolverine",
    rating: 7.7,
    poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
    genre: "Comedy",
    allGenres: ["Comedy", "Action", "Sci-Fi"],
    year: 2024,
    releaseDate: "July 26, 2024",
    duration: "2h 08m",
    director: "Shawn Levy",
    overview: "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit up with an even more reluctant Wolverine.",
    cast: [
      { name: "Ryan Reynolds", role: "Wade Wilson / Deadpool" },
      { name: "Hugh Jackman", role: "Logan / Wolverine" },
      { name: "Emma Corrin", role: "Cassandra Nova" }
    ],
    trailerUrl: "https://www.youtube.com/embed/73_1biulkYk",
    isTrending: true,
    isPopular: true,
    isTopRated: false, // Rating <= 8
    isUpcoming: true,
    mediaType: "movie",
    reviews: [
      {
        id: "r14",
        author: "Marvelite99",
        rating: 8.0,
        date: "2 weeks ago",
        comment: "Non-stop laughs, brutal action, and Hugh Jackman back in yellow spandex! Pure fan service done right."
      }
    ]
  },
  // TV Shows
  {
    id: 101,
    title: "Stranger Things",
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    genre: "Sci-Fi",
    allGenres: ["Sci-Fi", "Drama", "Mystery"],
    year: 2016,
    releaseDate: "July 15, 2016",
    duration: "4 Seasons (34 Episodes)",
    director: "The Duffer Brothers",
    overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl with telekinetic powers.",
    cast: [
      { name: "Millie Bobby Brown", role: "Eleven" },
      { name: "Finn Wolfhard", role: "Mike Wheeler" },
      { name: "Winona Ryder", role: "Joyce Byers" },
      { name: "David Harbour", role: "Jim Hopper" }
    ],
    trailerUrl: "https://www.youtube.com/embed/b9EkMc79ZSU",
    isTrending: true,
    isPopular: true,
    isTopRated: true,
    isUpcoming: false,
    mediaType: "tv",
    reviews: [
      {
        id: "r15",
        author: "RetroFan",
        rating: 9.0,
        date: "1 month ago",
        comment: "The 80s nostalgia, synth soundtrack, and lovable cast make this one of Netflix's best shows ever."
      }
    ]
  },
  {
    id: 102,
    title: "Breaking Bad",
    rating: 8.9,
    poster: "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    genre: "Crime",
    allGenres: ["Crime", "Drama", "Thriller"],
    year: 2008,
    releaseDate: "January 20, 2008",
    duration: "5 Seasons (62 Episodes)",
    director: "Vince Gilligan",
    overview: "Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of two years left to live. He enters the dangerous world of crystal meth-making to secure his family's financial future.",
    cast: [
      { name: "Bryan Cranston", role: "Walter White" },
      { name: "Aaron Paul", role: "Jesse Pinkman" },
      { name: "Anna Gunn", role: "Skyler White" },
      { name: "Giancarlo Esposito", role: "Gus Fring" }
    ],
    trailerUrl: "https://www.youtube.com/embed/HhesaQXLuRY",
    isTrending: true,
    isPopular: true,
    isTopRated: true,
    isUpcoming: false,
    mediaType: "tv",
    reviews: [
      {
        id: "r16",
        author: "CinephileX",
        rating: 10,
        date: "3 weeks ago",
        comment: "Television at its absolute peak. The transformation of Walter White is Shakespearean."
      }
    ]
  },
  {
    id: 103,
    title: "Arcane",
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/fq294wL7r39Yl1Gv995Y3B0u5l0.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/rkB4LyZHo1NHXSTXYZaCRRhFuDg.jpg",
    genre: "Animation",
    allGenres: ["Animation", "Sci-Fi", "Action"],
    year: 2021,
    releaseDate: "November 6, 2021",
    duration: "2 Seasons (18 Episodes)",
    director: "Christian Linke, Alex Yee",
    overview: "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and incompatible convictions.",
    cast: [
      { name: "Hailee Steinfeld", role: "Vi" },
      { name: "Ella Purnell", role: "Jinx" },
      { name: "Katie Leung", role: "Caitlyn" }
    ],
    trailerUrl: "https://www.youtube.com/embed/fXmAurh012s",
    isTrending: true,
    isPopular: true,
    isTopRated: true,
    isUpcoming: false,
    mediaType: "tv",
    reviews: [
      {
        id: "r17",
        author: "ArtEnthusiast",
        rating: 9.5,
        date: "2 weeks ago",
        comment: "Groundbreaking animation, tear-jerking sibling drama, and an incredible soundtrack."
      }
    ]
  }
];

// Helper to get a movie by its ID (supporting numeric or string matching)
export function getMovieById(id) {
  const numId = Number(id);
  return MOVIES.find((m) => m.id === numId) || null;
}
