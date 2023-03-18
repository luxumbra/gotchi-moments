-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT,
    "address" TEXT,
    "locale" TEXT,
    "email" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "mfa_enabled" BOOLEAN,
    "imageSrc" TEXT,
    "country" TEXT,
    "banned" BOOLEAN NOT NULL DEFAULT false,
    "blocked" BOOLEAN,
    "betaAccess" BOOLEAN NOT NULL DEFAULT false,
    "refreshToken" TEXT,
    "accessToken" TEXT
);

-- CreateTable
CREATE TABLE "OAuth" (
    "state" TEXT NOT NULL PRIMARY KEY,
    "codeChallenge" TEXT NOT NULL,
    "codeVerifier" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    CONSTRAINT "OAuth_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OAuthConnection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "revoked" BOOLEAN NOT NULL DEFAULT false,
    "refreshToken" TEXT,
    "accessToken" TEXT NOT NULL,
    "expiration" DATETIME,
    CONSTRAINT "OAuthConnection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");
