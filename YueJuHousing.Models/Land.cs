﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;

namespace YueJuHousing.Models
{
    public class Land
    {
        public int Id { get; set; }

        /*基本資料*/

        [DisplayName("*地址:")]
        [Required(ErrorMessage = "請填寫地址")]
        public string? Address { get; set; }

        [DisplayName("*地號:")]
        [Required(ErrorMessage = "請填寫地號")]
        public string? LandSerialNumber { get; set; }

        [DisplayName("*所有權(權屬類型):")]
        [Required]
        public string? OwnerShipType { get; set; }

        /*物件面積*/

        [DisplayName("*基地面積:")]
        [Required]
        public double SquareMeters { get; set; }
        [Required]
        public string? SquareMetersUnit { get; set; }

        [DisplayName("規格:")]
        [Required]
        public double LandWidth { get; set; }
        public double LandDepth { get; set; }

        [DisplayName("臨路:")]
        [Required]
        public double CloseRoad { get; set; }

        [DisplayName("*土地使用分區：")]
        [Required]
        public string? LandUseZone { get; set; }
        public string? LandUseZoneType { get; set; }
        [AllowNull]
        public string? LandUseZoneTypeDetail { get; set; }

        [DisplayName("*土地類別：")]
        [Required]
        public string? LandType { get; set; }

        [DisplayName("建蔽率：")]
        [Required]
        public double BuildingCoverageRate { get; set; }

        [DisplayName("容積率：")]
        [Required]
        public double BuildingBulkRate { get; set; }

        [DisplayName("適合用途：")]
        [Required]
        public bool Farming { get; set; }
        public bool Housing { get; set; }
        public bool ProcessingPlant { get; set; }
        public bool SMEnterprise { get; set; }
        public bool HighTechIndustry { get; set; }
        public bool Factory { get; set; }
        public bool StoreHouse { get; set; }
        public bool Advertise { get; set; }
        public bool OpenStore { get; set; }

        [DisplayName("基礎設施：")]
        [Required]
        public bool HaveElectricity { get; set; }
        public bool HaveWater { get; set; }
        public bool PathWay { get; set; }
        public bool SmoothGround { get; set; }

        [DisplayName("*土地現況：")]
        [Required(ErrorMessage = "請說明現況")]
        public string? LandStatus { get; set; }

        [DisplayName("投報率:")]
        [Required]
        public double ROI { get; set; }

        [DisplayName("可分割出售：")]
        [Required]
        public string? SaleBySplit { get; set; }

        [DisplayName("建築限高：")]
        [Required]
        public double MaximumHeightRestriction { get; set; }

        /*物件售價*/

        [DisplayName("*總價:")]
        [Required(ErrorMessage = "請填寫土地總價")]
        [Range(1, 100000000000)]
        public double Price { get; set; }
        
        [DisplayName("*自備款:")]
        [Required(ErrorMessage = "請填寫自備款")]
        [Range(1, 100000000000)]
        public double SelfFunding { get; set; }

        [DisplayName("*自備款成數:")]
        [Range(1, 100)]
        [Required(ErrorMessage = "請填寫自備款成數")]
        public double PercentageSelfFunding { get; set; }

        [DisplayName("*單坪售價:")]
        [Required]
        [Range(1, 100000000000)]
        public double EachSquarePrice { get; set; }

        /*特色描述*/

        [DisplayName("*廣告標題：")]
        [Required(ErrorMessage = "請填寫廣告標題")]
        public string? AdTitle { get; set; }

        [DisplayName("*現況特色描述：")]
        [Required(ErrorMessage = "請填寫特色描述")]
        public string? FeatureDescribe { get; set; }

        /*照片&影片*/

        [DisplayName("*土地照片上傳(請至少上傳1張，最多9張)：")]
        [ValidateNever]
        public string? ImageUrl { get; set; }

        [DisplayName("土地照片2上傳：")]
        [ValidateNever]
        public string? ImageUrl2 { get; set; }

        [DisplayName("土地照片3上傳：")]
        [ValidateNever]
        public string? ImageUrl3 { get; set; }

        [DisplayName("土地照片4上傳：")]
        [ValidateNever]
        public string? ImageUrl4 { get; set; }

        [DisplayName("土地照片5上傳：")]
        [ValidateNever]
        public string? ImageUrl5 { get; set; }

        [DisplayName("土地照片6上傳：")]
        [ValidateNever]
        public string? ImageUrl6 { get; set; }

        [DisplayName("土地照片7上傳：")]
        [ValidateNever]
        public string? ImageUrl7 { get; set; }

        [DisplayName("土地照片8上傳：")]
        [ValidateNever]
        public string? ImageUrl8 { get; set; }

        [DisplayName("土地照片9上傳：")]
        [ValidateNever]
        public string? ImageUrl9 { get; set; }

        [DisplayName("影片網址上傳：")]
        [ValidateNever]
        public string? VideoUrl { get; set; }

        /*聯絡資料*/

        [DisplayName("*聯絡人：")]
        [Required]
        public string? ContactPeopleType { get; set; }
        public string? ContactPeopleName { get; set; }

        [ValidateNever]
        public bool NoIntermediaryDisturb { get; set; }

        [DisplayName("*行動電話：")]
        [Required(ErrorMessage = "請填寫行動電話")]
        [RegularExpression(@"^09\d{8}$", ErrorMessage = "行動電話格式不正確，請輸入正確的台灣手機號碼")]
        public string? CellPhoneNumber { get; set; }

        [DisplayName("固定電話：")]
        public string? AreaCodePhoneNumber { get; set; }
        public string? PhoneNumber { get; set; }
        

        [DisplayName("*Email：")]
        [Required(ErrorMessage = "請填寫Email")]
        [EmailAddress]
        public string? Email { get; set; }

        [DisplayName("*LineID：")]
        [Required(ErrorMessage = "請填寫LineID")]
        public string? LineID { get; set; }

        [DisplayName("*保護電話：")]
        [Required]
        public string? ProtectPhone { get; set; }

        [ValidateNever]
        public string? UserId { get; set; }

        [ValidateNever]
        public DateTime CreateDate { get; set; }

        public DateTime ModifyDate { get; set; }

        //[DisplayName("類別:")]
        //public int CategoryId { get; set; }

        //[ForeignKey("CategoryId")]
        //[ValidateNever]
        //public Category Category { get; set; }


    }
}
