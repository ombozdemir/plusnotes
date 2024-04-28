-- RedefineTables
PRAGMA foreign_keys=OFF;
ALTER TABLE "Post" ADD COLUMN "createdAt" DateTime NOT NULL DEFAULT CURRENT_TIMESTAMP;
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
