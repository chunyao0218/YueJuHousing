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
    public class LandRepository : Repository<Land>, ILandRepository
    {
        private ApplicationDbContext _db;
        public LandRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        //public void Save()
        //{
        //    _db.SaveChanges();
        //}

        public void Update(Land obj)
        {
            var objFromDb = _db.Lands.FirstOrDefault(u => u.Id == obj.Id);
            if (objFromDb != null)
            {
                
                objFromDb.Address = obj.Address;
                objFromDb.LandSerialNumber = obj.LandSerialNumber;
                objFromDb.OwnerShipType = obj.OwnerShipType;
                

                objFromDb.SquareMeters = obj.SquareMeters;
                objFromDb.SquareMetersUnit = obj.SquareMetersUnit;
                objFromDb.LandWidth = obj.LandWidth;
                objFromDb.LandDepth = obj.LandDepth;
                objFromDb.CloseRoad = obj.CloseRoad;
                objFromDb.LandUseZone = obj.LandUseZone;
                objFromDb.LandUseZoneType = obj.LandUseZoneType;
                objFromDb.LandUseZoneTypeDetail = obj.LandUseZoneTypeDetail;
                objFromDb.LandType = obj.LandType;
                objFromDb.BuildingCoverageRate = obj.BuildingCoverageRate;
                objFromDb.BuildingBulkRate = obj.BuildingBulkRate;
                objFromDb.Farming = obj.Farming;
                objFromDb.Housing = obj.Housing;
                objFromDb.ProcessingPlant = obj.ProcessingPlant;
                objFromDb.SMEnterprise = obj.SMEnterprise;
                objFromDb.HighTechIndustry = obj.HighTechIndustry;
                objFromDb.Factory = obj.Factory;
                objFromDb.StoreHouse = obj.StoreHouse;
                objFromDb.Advertise = obj.Advertise;
                objFromDb.OpenStore = obj.OpenStore;
                objFromDb.HaveElectricity = obj.HaveElectricity;
                objFromDb.HaveWater = obj.HaveWater;
                objFromDb.PathWay = obj.PathWay;
                objFromDb.SmoothGround = obj.SmoothGround;
                objFromDb.LandStatus = obj.LandStatus;
                objFromDb.ROI = obj.ROI;
                objFromDb.SaleBySplit = obj.SaleBySplit;
                objFromDb.MaximumHeightRestriction = obj.MaximumHeightRestriction;

                
                objFromDb.Price = obj.Price;
                objFromDb.SelfFunding = obj.SelfFunding;
                objFromDb.PercentageSelfFunding = obj.PercentageSelfFunding;
                objFromDb.EachSquarePrice = obj.EachSquarePrice;
               

                objFromDb.AdTitle = obj.AdTitle;
                objFromDb.FeatureDescribe = obj.FeatureDescribe;

                objFromDb.ImageUrl = obj.ImageUrl;
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

                //objFromDb.CategoryId = obj.CategoryId;

                if (objFromDb.ImageUrl != null)
                {
                    objFromDb.ImageUrl = obj.ImageUrl;
                }
                objFromDb.ModifyDate = obj.ModifyDate;
            }
        }
    }
}
