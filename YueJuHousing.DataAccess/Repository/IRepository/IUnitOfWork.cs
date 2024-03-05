using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace YueJuHousing.DataAccess.Repository.IRepository
{
    public interface IUnitOfWork
    {
        ICategoryRepository Category { get; }
        //
        IHouseRepository House { get; }
        ILandRepository Land { get; }
        void Save();
    }
}
