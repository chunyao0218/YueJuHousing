using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace YueJuHousing.Models.ViewModels
{
    public class LandSearchVM
    {
        public string City { get; set; }
        public string District { get; set; }
        public List<decimal> MinPrice { get; set; } = new List<decimal>();
        public List<decimal> MaxPrice { get; set; } = new List<decimal>();
        public List<string> Area { get; set; } = new List<string>();
        public List<string> LandType { get; set; } = new List<string>();
        public string LandUseZone { get; set; } // "都市土地", "非都市土地", "不限"
        public List<string> LandUseZoneType { get; set; } = new List<string>(); // "住宅區", "商業區", etc.
    }
}
