-- CreateTable
CREATE TABLE "User" (
    "uuid" TEXT NOT NULL,
    "contact_name" TEXT NOT NULL,
    "business_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "business_state" TEXT NOT NULL,
    "business_street" TEXT NOT NULL,
    "business_zip" TEXT NOT NULL,
    "url" TEXT,
    "phone_number" TEXT NOT NULL,
    "personal_number" TEXT,
    "shipping_state" TEXT,
    "shipping_street" TEXT,
    "shipping_zip" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Request" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_expires" TIMESTAMP(3) NOT NULL,
    "isbn" TEXT,
    "condition" TEXT,
    "format" TEXT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Listing" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "date_listed" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sku" TEXT,
    "title" TEXT NOT NULL,
    "isbn" TEXT,
    "author" TEXT NOT NULL,
    "condition" TEXT,
    "format" TEXT,
    "notes" TEXT,
    "price" MONEY NOT NULL,
    "free_shipping" BOOLEAN NOT NULL,
    "shipping_price" MONEY NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offer" (
    "id" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "listingId" TEXT,
    "requestId" TEXT,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" MONEY,
    "condition" TEXT,
    "format" TEXT,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_business_name_idx" ON "User"("email", "business_name");

-- CreateIndex
CREATE INDEX "User_business_state_business_zip_idx" ON "User"("business_state", "business_zip");

-- CreateIndex
CREATE INDEX "Request_date_expires_idx" ON "Request"("date_expires");

-- CreateIndex
CREATE INDEX "Request_date_created_idx" ON "Request"("date_created");

-- CreateIndex
CREATE INDEX "Request_title_author_idx" ON "Request"("title", "author");

-- CreateIndex
CREATE INDEX "Request_isbn_idx" ON "Request"("isbn");

-- CreateIndex
CREATE INDEX "Listing_date_listed_idx" ON "Listing"("date_listed");

-- CreateIndex
CREATE INDEX "Listing_title_author_idx" ON "Listing"("title", "author");

-- CreateIndex
CREATE INDEX "Listing_isbn_idx" ON "Listing"("isbn");

-- CreateIndex
CREATE INDEX "Offer_senderId_idx" ON "Offer"("senderId");

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "Request"("id") ON DELETE SET NULL ON UPDATE CASCADE;
