-- CreateTable
CREATE TABLE "cost" (
    "id" TEXT NOT NULL,
    "description" TEXT,
    "amount" DECIMAL NOT NULL DEFAULT 0,
    "user" UUID NOT NULL,

    CONSTRAINT "cost_pkey" PRIMARY KEY ("id")
);
