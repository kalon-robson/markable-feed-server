-- CreateEnum
CREATE TYPE "StreamStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "StreamTag" AS ENUM ('NEWS');

-- CreateTable
CREATE TABLE "Stream" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "excerpt" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "marketingTitle" TEXT NOT NULL,
    "bulletPoints" TEXT[],
    "imageUrl" TEXT NOT NULL,
    "tags" "StreamTag"[],
    "status" "StreamStatus" NOT NULL DEFAULT 'ACTIVE',
    "availability" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Stream_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StreamSubscription" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "streamId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "selectedDays" INTEGER[],
    "startDate" TIMESTAMP(3) NOT NULL,
    "cancelledAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StreamSubscription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StreamSubscription" ADD CONSTRAINT "StreamSubscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StreamSubscription" ADD CONSTRAINT "StreamSubscription_streamId_fkey" FOREIGN KEY ("streamId") REFERENCES "Stream"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
