using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Drawing;
using YueJuHousing.Models;

namespace YueJuHousing.DataAccess.Data
{
    public class ApplicationDbContext: IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options) { 
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<House> Houses { get; set; }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Category>().HasData(
                new Category { Id = 1, Name = "預售屋", DisplayOrder = 1 },
                new Category { Id = 2, Name = "新成屋", DisplayOrder = 2 },
                new Category { Id = 3, Name = "中古屋", DisplayOrder = 3 }
                );

            modelBuilder.Entity<House>().HasData(
                new House { Id = 1, HouseName = "景安文匯", Address = "新北市中和區", HouseAge = "", SquareMeters = 20, Floor = "3F", Price = 15000000, CategoryId = 1, ImageUrl = "" },
                new House { Id = 2, HouseName = "大安得逸", Address = "台北市大安區", HouseAge = "", SquareMeters = 30, Floor = "5F", Price = 30000000, CategoryId = 2, ImageUrl = "" },
                new House { Id = 3, HouseName = "中港層峰", Address = "台中市西屯區", HouseAge = "", SquareMeters = 40, Floor = "7F", Price = 20000000, CategoryId = 3, ImageUrl = "" }
                );
        }
    }
}
