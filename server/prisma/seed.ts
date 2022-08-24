import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const moviesData: Prisma.MovieCreateInput[] = [
  {
    title: "Stranger Things",
    trailer: "https://www.youtube.com/watch?v=sBEvEcpnG7k",
    picture:
      "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UY562_CR35,0,380,562_.jpg",
    rating: 8.7,
    totalRatings: "1.1M",
    releaseYear: 2016,
    popularity: 1,
    popularityChange: 0,
    description:
      "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    tags: ["Drama", "Fantasy", "Horror"],
  },
  {
    title: "The Boys",
    trailer: "https://www.youtube.com/watch?v=M1bhOaLV4FU",
    picture:
      "https://m.media-amazon.com/images/M/MV5BMTY2NDY5MTYzOF5BMl5BanBnXkFtZTgwMTcyNTM0NjM@._V1_QL75_UY562_CR35,0,380,562_.jpg",
    rating: 8.3,
    totalRatings: "398K",
    releaseYear: 2019,
    popularity: 2,
    popularityChange: 0,
    description:
      "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
    tags: ["Action", "Crime", "Drama"],
  },
  {
    title: "Everything Everywhere All at Once",
    trailer: "https://www.youtube.com/watch?v=wxN1T1uxQ2g",
    picture:
      "https://m.media-amazon.com/images/M/MV5BYjhmNzA0YjItODc3OC00MzdiLThlNDctNmIwODcxNzUzOTQwXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_QL75_UX380_CR0,0,380,562_.jpg",
    rating: 8.3,
    totalRatings: "133K",
    releaseYear: 2022,
    popularity: 12,
    popularityChange: -5,
    description:
      "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.",
    tags: ["Action", "Adventure", "Comedy"],
  },
  {
    title: "The Black Phone",
    trailer: "https://www.youtube.com/watch?v=yfJ6YNvVSn0",
    picture:
      "https://m.media-amazon.com/images/M/MV5BOWVmNTBiYTUtZWQ3Yi00ZDlhLTgyYjUtNzBhZjM3YjRiNGRkXkEyXkFqcGdeQXVyNzYyOTM1ODI@._V1_QL75_UX380_CR0,57,380,562_.jpg",
    rating: 7.3,
    totalRatings: "17K",
    releaseYear: 2021,
    popularity: 8,
    popularityChange: 15,
    description:
      "After being abducted by a child killer and locked in a soundproof basement, a 13-year-old boy starts receiving calls on a disconnected phone from the killer's previous victims.",
    tags: ["Horror", "Thriller"],
  },
  {
    title: "The Batman",
    trailer: "https://www.youtube.com/watch?v=1NxzG7IGyhQ",
    picture:
      "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    rating: 7.9,
    totalRatings: "528K",
    releaseYear: 2022,
    popularity: 20,
    popularityChange: 1,
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    tags: ["Action", "Crime", "Drama"],
  },
  {
    title: "Man vs. Bee",
    trailer: "https://www.youtube.com/watch?v=YQ1vN_91KO0",
    picture:
      "https://m.media-amazon.com/images/M/MV5BMGExOWU4YmItMjkxOC00NjdjLTk2ZWEtZGViMGM1ZGFhZmQxXkEyXkFqcGdeQXVyODQyOTY2OTA@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    rating: 7.0,
    totalRatings: "13K",
    releaseYear: 2022,
    popularity: 30,
    popularityChange: 518,
    description:
      "A man finds himself at war with a bee while housesitting a luxurious mansion. Who will win, and what irreparable damage will be done in the process?",
    tags: ["Short", "Comedy", "Family"],
  },
  {
    title: "The Umbrella Academy",
    trailer: "https://www.youtube.com/watch?v=hs6alRuY1UU",
    picture:
      "https://m.media-amazon.com/images/M/MV5BMjE2NjYwOTY5OV5BMl5BanBnXkFtZTgwMDE0NDg0NjM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    rating: 8.0,
    totalRatings: "217K",
    releaseYear: 2019,
    popularity: 4,
    popularityChange: 34,
    description:
      "A family of former child heroes, now grown apart, must reunite to continue to protect the world.",
    tags: ["Action", "Adventure", "Comedy"],
  },
  {
    title: "Spider-Man: No Way Home",
    trailer: "https://www.youtube.com/watch?v=PUTab3vP8MI",
    picture:
      "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    rating: 8.3,
    totalRatings: "667K",
    releaseYear: 2021,
    popularity: 33,
    popularityChange: 6,
    description:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    tags: ["Action", "Adventure", "Fantasy"],
  },
  {
    title: "Moon-Knight",
    trailer: "https://www.youtube.com/watch?v=x7Krla_UxRg&t=25s",
    picture:
      "https://m.media-amazon.com/images/M/MV5BYTc5OWNhYjktMThlOS00ODUxLTgwNDQtZjdjYjkyM2IwZTZlXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    rating: 7.4,
    totalRatings: "182K",
    releaseYear: 2022,
    popularity: 41,
    popularityChange: -6,
    description:
      "Steven Grant discovers he's been granted the powers of an Egyptian moon god. But he soon finds out that these newfound powers can be both a blessing and a curse to his troubled life.",
    tags: ["Action", "Adventure", "Fantasy"],
  },
  {
    title: "Breaking Bad",
    trailer: "https://www.youtube.com/watch?v=HhesaQXLuRY",
    picture:
      "https://m.media-amazon.com/images/M/MV5BODFhZjAwNjEtZDFjNi00ZTEyLThkNzUtMjZmOWM2YjQwODFmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    rating: 9.5,
    totalRatings: "1.8M",
    releaseYear: 2008,
    popularity: 15,
    popularityChange: 3,
    description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    tags: ["Crime", "Drama", "Thriller"],
  },
  {
    title: "The Northman",
    trailer: "https://www.youtube.com/watch?v=oMSdFM12hOw",
    picture:
      "https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    rating: 7.2,
    totalRatings: "133K",
    releaseYear: 2022,
    popularity: 19,
    popularityChange: -3,
    description:
      "From visionary director Robert Eggers comes The Northman, an action-filled epic that follows a young Viking prince on his quest to avenge his father's murder.",
    tags: ["Action", "Adventure", "Drama"],
  },
  {
    title: "The Unbearable Weight of Massive Talent",
    trailer: "https://www.youtube.com/watch?v=x2YHPZMj8r4",
    picture:
      "https://m.media-amazon.com/images/M/MV5BNDM2ODNiMWItOWRkNS00ODE3LWE2OGYtNTZkMDJkOWI1ODMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    rating: 7.1,
    totalRatings: "48K",
    releaseYear: 2022,
    popularity: 22,
    popularityChange: -5,
    description:
      "In this action-packed comedy, Nicolas Cage plays Nick Cage, channeling his iconic characters as he's caught between a superfan (Pedro Pascal) and a CIA agent (Tiffany Haddish).",
    tags: ["Action", "Comedy", "Crime"],
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of moviesData) {
    const movie = await prisma.movie.create({
      data: u,
    });
    console.log(`Created movie with id: ${movie.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
