using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using YueJuHousing.DataAccess.Data;
using YueJuHousing.DataAccess.Repository.IRepository;
using YueJuHousing.Models;

namespace YueJuHousing.DataAccess.Repository
{
    public class HouseRepository : Repository<House>, IHouseRepository
    {
        private ApplicationDbContext _db;
        public HouseRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        //public void Save()
        //{
        //    _db.SaveChanges();
        //}

        public void Update(House obj)
        {
            var objFromDb = _db.Houses.FirstOrDefault(u => u.Id == obj.Id);
            if (objFromDb != null)
            {
                objFromDb.CommunityName = obj.CommunityName;
                objFromDb.Address = obj.Address;
                objFromDb.Floor = obj.Floor;
                objFromDb.BedRoom = obj.BedRoom;
                objFromDb.LivingRoom = obj.LivingRoom;
                objFromDb.BathRoom = obj.BathRoom;
                objFromDb.Balcony = obj.Balcony;
                objFromDb.HouseAge = obj.HouseAge;
                objFromDb.HouseOrientation = obj.HouseOrientation;

                objFromDb.SquareMeters = obj.SquareMeters;
                objFromDb.SquareMetersUnit = obj.SquareMetersUnit;
                objFromDb.IncludeCarSquareMeters = obj.IncludeCarSquareMeters;
                objFromDb.CarSquareMeters = obj.CarSquareMeters;
                objFromDb.CarSquareMetersUnit = obj.CarSquareMetersUnit;
                objFromDb.MainBuildingSquareMeters = obj.MainBuildingSquareMeters;
                objFromDb.SharedBuildingSquareMeters = obj.SharedBuildingSquareMeters;
                objFromDb.OutBuildingSquareMeters = obj.OutBuildingSquareMeters;
                objFromDb.LandSquareMetersType = obj.LandSquareMetersType;
                objFromDb.LandSquareMeters = obj.LandSquareMeters;
                
                objFromDb.Price = obj.Price;
                objFromDb.IncludeCarSquarePrice = obj.IncludeCarSquarePrice;
                objFromDb.SelfFunding = obj.SelfFunding;
                objFromDb.PercentageSelfFunding = obj.PercentageSelfFunding;
                objFromDb.CarSquarePrice = obj.CarSquarePrice;
                objFromDb.EachSquarePrice = obj.EachSquarePrice;
                objFromDb.ManageCost = obj.ManageCost;
                objFromDb.ManageCostType = obj.ManageCostType;
                objFromDb.WithRentContract = obj.WithRentContract;
                objFromDb.DecorationLevel = obj.DecorationLevel;



                objFromDb.CloseConvenienceStore = obj.CloseConvenienceStore;
                objFromDb.CloseSuperMarket = obj.CloseSuperMarket;
                objFromDb.CloseTraditionalMarket = obj.CloseTraditionalMarket;
                objFromDb.CloseDepartmentStore = obj.CloseDepartmentStore;
                objFromDb.ClosePark = obj.ClosePark;
                objFromDb.CloseSchool = obj.CloseSchool;
                objFromDb.CloseHospital = obj.CloseHospital;
                objFromDb.CloseNightMarket = obj.CloseNightMarket;
                objFromDb.StationOrRoad = obj.StationOrRoad;
                objFromDb.StationOrRoadType = obj.StationOrRoadType;


                objFromDb.AdTitle = obj.AdTitle;
                objFromDb.ControlDamper = obj.ControlDamper;
                objFromDb.ReplanArea = obj.ReplanArea;
                objFromDb.FamousSchoolArea = obj.FamousSchoolArea;
                objFromDb.FeatureDescribe = obj.FeatureDescribe;

                objFromDb.ImageUrl = obj.ImageUrl;
                objFromDb.PatternImageUrl = obj.PatternImageUrl;
                objFromDb.VideoUrl = obj.VideoUrl;

                objFromDb.ContactPeopleType = obj.ContactPeopleType;
                objFromDb.ContactPeopleName = obj.ContactPeopleName;
                objFromDb.NoIntermediaryDisturb = obj.NoIntermediaryDisturb;
                objFromDb.CellPhoneNumber = obj.CellPhoneNumber;
                objFromDb.AreaCodePhoneNumber = obj.AreaCodePhoneNumber;
                objFromDb.PhoneNumber = obj.PhoneNumber;
                objFromDb.Email = obj.Email;
                objFromDb.LineID = obj.LineID;
                objFromDb.ProtectPhone = obj.ProtectPhone;

                objFromDb.CategoryId = obj.CategoryId;

                if (objFromDb.ImageUrl != null)
                {
                    objFromDb.ImageUrl = obj.ImageUrl;
                }
            }
        }
    }
}
