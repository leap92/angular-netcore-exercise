﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using backend.Models;

namespace backend.Migrations
{
    [DbContext(typeof(InsuranceContext))]
    [Migration("20201123001301_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.10");

            modelBuilder.Entity("backend.Models.Insurance", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("BusinessDescription")
                        .HasColumnType("TEXT")
                        .HasMaxLength(50);

                    b.Property<string>("BusinessName")
                        .IsRequired()
                        .HasColumnType("TEXT")
                        .HasMaxLength(50);

                    b.Property<int>("PowerUnits")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("ProposedEffectiveDate")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("ProposedExpirationDate")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Insurances");
                });
#pragma warning restore 612, 618
        }
    }
}