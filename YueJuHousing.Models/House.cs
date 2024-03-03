using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System.ComponentModel;

namespace YueJuHousing.Models
{
    public class House
    {
        public int Id { get; set; }

        /*基本資料*/

        [DisplayName("社區名稱:")]
        [Required]
        public string CommunityName { get; set; }

        [DisplayName("物件地址:")]
        [Required]
        public string Address { get; set; }

        [DisplayName("總樓層:")]
        [Required]
        public double Floor { get; set; }

        [DisplayName("格局(現況):")]
        [Required]
        public string BedRoom { get; set; }
        public string LivingRoom { get; set; }
        public string BathRoom { get; set; }
        public string Balcony { get; set; }

        [DisplayName("屋齡:")]
        [Required]
        public double HouseAge { get; set; }

        [DisplayName("房屋坐向:")]
        [Required]
        public string HouseOrientation { get; set; }


        /*物件面積*/

        [DisplayName("權狀面積:")]
        [Required]
        public double SquareMeters { get; set; }
        public string SquareMetersUnit { get; set; }
        public string IncludeCarSquareMeters { get; set; }

        [DisplayName("車位面積:")]
        [Required]
        public double CarSquareMeters { get; set; }
        public string CarSquareMetersUnit { get; set; }

        [DisplayName("主建物:")]
        [Required]
        public double MainBuildingSquareMeters { get; set; }

        [DisplayName("共有部分:")]
        [Required]
        public double SharedBuildingSquareMeters { get; set; }

        [DisplayName("附屬建物:")]
        [Required]
        public double OutBuildingSquareMeters { get; set; }

        [DisplayName("土地坪數:")]
        [Required]
        public double LandSquareMeters { get; set; }
        public string LandSquareMetersType { get; set; }

        /*物件售價*/

        [DisplayName("總價:")]
        [Required]
        [Range(1, 100000000000)]
        public double Price { get; set; }
        public string IncludeCarSquarePrice { get; set; }

        [DisplayName("自備款:")]
        [Required]
        [Range(1, 100000000000)]
        public double SelfFunding { get; set; }

        [DisplayName("自備款成數:")]
        [Range(1, 100)]
        [Required]
        public double PercentageSelfFunding { get; set; }

        [DisplayName("車位售價:")]
        [Required]
        [Range(1, 100000000000)]
        public double CarSquarePrice { get; set; }

        [DisplayName("單坪售價:")]
        [Required]
        [Range(1, 100000000000)]
        public double EachSquarePrice { get; set; }

        [DisplayName("管理費：")]
        [Required]
        [Range(0, 100000000000)]
        public double ManageCost { get; set; }
        public string ManageCostType { get; set; }

        [DisplayName("帶租約：")]
        [Required]
        public string WithRentContract { get; set; }

        [DisplayName("裝潢程度：")]
        [Required]
        public string DecorationLevel { get; set; }

        /*生活機能*/

        [DisplayName("生活機能：")]
        public bool CloseConvenienceStore { get; set; }
        public bool CloseSuperMarket { get; set; }
        public bool CloseTraditionalMarket { get; set; }
        public bool CloseDepartmentStore { get; set; }
        public bool ClosePark { get; set; }
        public bool CloseSchool { get; set; }
        public bool CloseHospital { get; set; }
        public bool CloseNightMarket { get; set; }

        [DisplayName("附近交通：")]
        public string StationOrRoad { get; set; }
        public string StationOrRoadType { get; set; }

        /*特色描述*/

        [DisplayName("廣告標題：")]
        [Required]
        public string AdTitle { get; set; }

        [DisplayName("特色標籤：")]
        public bool ControlDamper { get; set; }
        public bool ReplanArea { get; set; }
        public bool FamousSchoolArea { get; set; }

        [DisplayName("現況特色描述：")]
        [Required]
        public string FeatureDescribe { get; set; }

        /*照片&影片*/

        [DisplayName("房屋照片上傳：")]
        [ValidateNever]
        public string ImageUrl { get; set; }

        [DisplayName("格局圖上傳：")]
        [ValidateNever]
        public string PatternImageUrl { get; set; }

        [DisplayName("影片網址上傳：")]
        [ValidateNever]
        public string VideoUrl { get; set; }

        /*聯絡資料*/

        [DisplayName("聯絡人：")]
        [Required]
        public string ContactPeopleType { get; set; }
        public string ContactPeopleName { get; set; }
        public bool NoIntermediaryDisturb { get; set; }

        [DisplayName("行動電話：")]
        [Required]
        public string CellPhoneNumber { get; set; }

        [DisplayName("固定電話：")]
        public string PhoneNumber { get; set; }
        public string AreaCodePhoneNumber { get; set; }

        [DisplayName("Email：")]
        [Required]
        public string Email { get; set; }

        [DisplayName("LineID：")]
        [Required]
        public string LineID { get; set; }

        [DisplayName("保護電話：")]
        [Required]
        public string ProtectPhone { get; set; }




        [DisplayName("類別:")]
        public int CategoryId { get; set; }

        [ForeignKey("CategoryId")]
        [ValidateNever]
        public Category Category { get; set; }

        
    }
}
