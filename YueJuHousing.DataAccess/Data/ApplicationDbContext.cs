using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Drawing;
using YueJuHousing.Models;

namespace YueJuHousing.DataAccess.Data
{
    public class ApplicationDbContext: IdentityDbContext<IdentityUser>
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
                new Category { Id = 3, Name = "中古屋", DisplayOrder = 3 },
                new Category { Id = 4, Name = "土地", DisplayOrder = 4 }
                );

            modelBuilder.Entity<House>().HasData(
                new House { Id = 1, CommunityName = "景安文匯", Address = "新北市中和區", Floor = 3, BedRoom = "3", LivingRoom = "2", BathRoom = "2", Balcony = "1", HouseAge = 5, HouseOrientation = "坐北朝南", SquareMeters = 20, SquareMetersUnit = "坪", IncludeCarSquareMeters = "含車位面積", CarSquareMeters = 7, CarSquareMetersUnit = "坪", MainBuildingSquareMeters = 20, SharedBuildingSquareMeters = 20, OutBuildingSquareMeters = 20, LandSquareMetersType = "土地坪數", LandSquareMeters = 20, Price = 15000000, IncludeCarSquarePrice = "含車位售價", SelfFunding =300, PercentageSelfFunding = 20, CarSquarePrice = 180, EachSquarePrice = 100, ManageCost = 2000, ManageCostType = "月繳", WithRentContract = "否", DecorationLevel = "簡易裝潢", CloseConvenienceStore = true, CloseSuperMarket = false, CloseTraditionalMarket = false, CloseDepartmentStore = false, ClosePark = true, CloseSchool = true, CloseHospital = false, CloseNightMarket = false, StationOrRoad = "林口站", StationOrRoadType = "公車站", AdTitle = "市場最低價", ControlDamper = true, ReplanArea = true, FamousSchoolArea = true, FeatureDescribe = "", ImageUrl = "", PatternImageUrl = "", VideoUrl = "", ContactPeopleType = "屋主", ContactPeopleName = "陳小明", NoIntermediaryDisturb = true, CellPhoneNumber = "0988888888", AreaCodePhoneNumber = "02", PhoneNumber = "27315698", Email = "kevin87332000@gmail.com", LineID = "h12s12bs", ProtectPhone = "啟用", CategoryId = 1 },
                new House { Id = 2, CommunityName = "大安得逸", Address = "台北市大安區", Floor = 5, BedRoom = "2", LivingRoom = "2", BathRoom = "2", Balcony = "1", HouseAge = 6, HouseOrientation = "坐南朝北", SquareMeters = 30, SquareMetersUnit = "坪", IncludeCarSquareMeters = "含車位面積", CarSquareMeters = 7, CarSquareMetersUnit = "坪", MainBuildingSquareMeters = 20, SharedBuildingSquareMeters = 20, OutBuildingSquareMeters = 20, LandSquareMetersType = "土地坪數", LandSquareMeters = 20, Price = 30000000, IncludeCarSquarePrice = "含車位售價", SelfFunding =600, PercentageSelfFunding = 20, CarSquarePrice = 180, EachSquarePrice = 100, ManageCost = 2000, ManageCostType = "月繳", WithRentContract = "否", DecorationLevel = "簡易裝潢", CloseConvenienceStore = true, CloseSuperMarket = false, CloseTraditionalMarket = false, CloseDepartmentStore = false, ClosePark = true, CloseSchool = true, CloseHospital = false, CloseNightMarket = false, StationOrRoad = "林口站", StationOrRoadType = "公車站", AdTitle = "市場最低價", ControlDamper = true, ReplanArea = true, FamousSchoolArea = true, FeatureDescribe = "", ImageUrl = "", PatternImageUrl = "", VideoUrl = "", ContactPeopleType = "屋主", ContactPeopleName = "陳小明", NoIntermediaryDisturb = true, CellPhoneNumber = "0988888888", AreaCodePhoneNumber = "02", PhoneNumber = "27315698", Email = "kevin87332000@gmail.com", LineID = "h12s12bs", ProtectPhone = "啟用", CategoryId = 2 },
                new House { Id = 3, CommunityName = "中港層峰", Address = "台中市西屯區", Floor = 7, BedRoom = "4", LivingRoom = "2", BathRoom = "3", Balcony = "2", HouseAge = 7, HouseOrientation = "坐東朝西", SquareMeters = 40, SquareMetersUnit = "坪", IncludeCarSquareMeters = "含車位面積", CarSquareMeters = 7, CarSquareMetersUnit = "坪", MainBuildingSquareMeters = 20, SharedBuildingSquareMeters = 20, OutBuildingSquareMeters = 20, LandSquareMetersType = "土地坪數", LandSquareMeters = 20, Price = 20000000, IncludeCarSquarePrice = "含車位售價", SelfFunding =400, PercentageSelfFunding = 20, CarSquarePrice = 180, EachSquarePrice = 100, ManageCost = 2000, ManageCostType = "月繳", WithRentContract = "否", DecorationLevel = "簡易裝潢", CloseConvenienceStore = true, CloseSuperMarket = false, CloseTraditionalMarket = false, CloseDepartmentStore = false, ClosePark = true, CloseSchool = true, CloseHospital = false, CloseNightMarket = false, StationOrRoad = "林口站", StationOrRoadType = "公車站", AdTitle = "市場最低價", ControlDamper = true, ReplanArea = true, FamousSchoolArea = true, FeatureDescribe = "", ImageUrl = "", PatternImageUrl = "", VideoUrl = "", ContactPeopleType = "屋主", ContactPeopleName = "陳小明", NoIntermediaryDisturb = true, CellPhoneNumber = "0988888888", AreaCodePhoneNumber = "02", PhoneNumber = "27315698", Email = "kevin87332000@gmail.com", LineID = "h12s12bs", ProtectPhone = "啟用", CategoryId = 3 }
                );
        }
    }
}
