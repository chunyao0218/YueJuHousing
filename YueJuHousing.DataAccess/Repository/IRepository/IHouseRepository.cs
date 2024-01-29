using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using YueJuHousing.Models;

namespace YueJuHousing.DataAccess.Repository.IRepository
{
    public interface IHouseRepository : IRepository<House>
    {
        void Update(House obj);
        //void Save();
    }
}
