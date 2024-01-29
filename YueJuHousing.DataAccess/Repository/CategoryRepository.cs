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
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        private ApplicationDbContext _db;
        public CategoryRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        //public void Save()
        //{
        //    _db.SaveChanges();
        //}

        public void Update(Category obj)
        {
            _db.Categories.Update(obj);
        }
    }
}
