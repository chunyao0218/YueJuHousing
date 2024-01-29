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
                objFromDb.HouseName = obj.HouseName;
                objFromDb.Address = obj.Address;
                objFromDb.HouseAge = obj.HouseAge;
                objFromDb.SquareMeters = obj.SquareMeters;
                objFromDb.Floor = obj.Floor;
                objFromDb.Price = obj.Price;
                objFromDb.CategoryId = obj.CategoryId;
                if (objFromDb.ImageUrl != null)
                {
                    objFromDb.ImageUrl = obj.ImageUrl;
                }
            }
        }
    }
}
