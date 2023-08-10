/*
  Warnings:

  - Added the required column `status` to the `invoices` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "InvoiceStatus" AS ENUM ('Complete', 'Pending', 'Cancel');

-- AlterTable
ALTER TABLE "invoices" ADD COLUMN     "status" TEXT NOT NULL;
