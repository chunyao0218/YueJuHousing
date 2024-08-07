﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using YueJuHousing.Models;

namespace YueJuHousing.DataAccess.Repository.IRepository
{
    public interface ILandRepository : IRepository<Land>
    {
        void Update(Land obj);
        //void Save();
        IEnumerable<Land> GetLandsByUserId(string userId);
    }
}
