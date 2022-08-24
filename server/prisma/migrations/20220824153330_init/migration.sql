-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "trailer" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "totalRatings" TEXT NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "popularity" DOUBLE PRECISION NOT NULL,
    "popularityChange" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);
