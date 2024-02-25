using Microsoft.EntityFrameworkCore.Migrations;
using System.Drawing;
using System.Net;
using YueJuHousing.Models;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace YueJuHousing.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class addProductsToDb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Houses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),

                    CommunityName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Floor = table.Column<double>(type: "float", nullable: false),
                    BedRoom = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LivingRoom = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BathRoom = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Balcony = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HouseAge = table.Column<double>(type: "float", nullable: false),
                    HouseOrientation = table.Column<string>(type: "nvarchar(max)", nullable: false),


                    SquareMeters = table.Column<double>(type: "float", nullable: false),
                    SquareMetersUnit = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IncludeCarSquareMeters = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CarSquareMeters = table.Column<double>(type: "float", nullable: false),
                    CarSquareMetersUnit = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MainBuildingSquareMeters = table.Column<double>(type: "float", nullable: false),
                    SharedBuildingSquareMeters = table.Column<double>(type: "float", nullable: false),
                    OutBuildingSquareMeters = table.Column<double>(type: "float", nullable: false),
                    LandSquareMetersType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LandSquareMeters = table.Column<double>(type: "float", nullable: false),
                    

                    Price = table.Column<double>(type: "float", nullable: false),
                    IncludeCarSquarePrice = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SelfFunding = table.Column<double>(type: "float", nullable: false),
                    PercentageSelfFunding = table.Column<double>(type: "float", nullable: false),
                    CarSquarePrice = table.Column<double>(type: "float", nullable: false),
                    EachSquarePrice = table.Column<double>(type: "float", nullable: false),
                    ManageCost = table.Column<double>(type: "float", nullable: false),
                    ManageCostType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WithRentContract = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DecorationLevel = table.Column<string>(type: "nvarchar(max)", nullable: false),


                    CloseConvenienceStore = table.Column<bool>(type: "bit", nullable: false),
                    CloseSuperMarket = table.Column<bool>(type: "bit", nullable: false),
                    CloseTraditionalMarket = table.Column<bool>(type: "bit", nullable: false),
                    CloseDepartmentStore = table.Column<bool>(type: "bit", nullable: false),
                    ClosePark = table.Column<bool>(type: "bit", nullable: false),
                    CloseSchool = table.Column<bool>(type: "bit", nullable: false),
                    CloseHospital = table.Column<bool>(type: "bit", nullable: false),
                    CloseNightMarket = table.Column<bool>(type: "bit", nullable: false),
                    StationOrRoad = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StationOrRoadType = table.Column<string>(type: "nvarchar(max)", nullable: false),

                    AdTitle = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ControlDamper = table.Column<bool>(type: "bit", nullable: false),
                    ReplanArea = table.Column<bool>(type: "bit", nullable: false),
                    FamousSchoolArea = table.Column<bool>(type: "bit", nullable: false),
                    FeatureDescribe = table.Column<string>(type: "nvarchar(max)", nullable: false),

                    ImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PatternImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VideoUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),

                    ContactPeopleType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactPeopleName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NoIntermediaryDisturb = table.Column<bool>(type: "bit", nullable: false),
                    CellPhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AreaCodePhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LineID = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProtectPhone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    

                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Houses", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Houses",
                columns: new[] { "Id", "CommunityName", "Address", "Floor", "BedRoom", "LivingRoom", "BathRoom", "Balcony", "HouseAge", "HouseOrientation", "SquareMeters", "SquareMetersUnit", "IncludeCarSquareMeters", "CarSquareMeters", "CarSquareMetersUnit", "MainBuildingSquareMeters", "SharedBuildingSquareMeters", "OutBuildingSquareMeters", "LandSquareMetersType", "LandSquareMeters", "Price", "IncludeCarSquarePrice", "SelfFunding", "PercentageSelfFunding", "CarSquarePrice", "EachSquarePrice", "ManageCost", "ManageCostType", "WithRentContract", "DecorationLevel", "CloseConvenienceStore", "CloseSuperMarket", "CloseTraditionalMarket", "CloseDepartmentStore", "ClosePark", "CloseSchool", "CloseHospital", "CloseNightMarket", "StationOrRoad", "StationOrRoadType", "AdTitle", "ControlDamper", "ReplanArea", "FamousSchoolArea", "FeatureDescribe", "ImageUrl", "PatternImageUrl", "VideoUrl", "ContactPeopleType", "ContactPeopleName", "NoIntermediaryDisturb", "CellPhoneNumber", "AreaCodePhoneNumber", "PhoneNumber", "Email", "LineID", "ProtectPhone" },
                values: new object[,]
                {
                    { 1, "景安文匯", "新北市中和區", 3, "3", "2", "2", "1", 5, "坐北朝南", 20, "坪", "含車位面積", 7, "坪", 20, 7, 3, "土地坪數", 5, 15000000, "含車位售價", 300, 20, 180, 100, 2000, "月繳", "否", "簡易裝潢", true, false, false, false, true, true, false, false, "林口站", "公車站", "市場最低價",true,true,true,"","","","","屋主","陳小明",true,"0988888888","02","27315698","kevin87332000@gmail.com","h12s12bs","啟用" },
                    { 2, "大安得逸", "台北市大安區", 5, "2", "2", "2", "1", 6, "坐南朝北", 30, "坪", "含車位面積", 7, "坪", 20, 7, 3, "土地坪數", 5, 30000000, "含車位售價", 600, 20, 180, 100, 2000, "月繳", "否", "簡易裝潢", true, false, false, false, true, true, false, false, "林口站", "公車站", "市場最低價",true,true,true,"","","","","屋主","陳小明",true,"0988888888","02","27315698","kevin87332000@gmail.com","h12s12bs","啟用" },
                    { 3, "中港層峰", "台中市西屯區", 7, "4", "2", "3", "2", 7, "坐東朝西", 40, "坪", "含車位面積", 7, "坪", 20, 7, 3, "土地坪數", 5, 20000000, "含車位售價", 400, 20, 180, 100, 2000, "月繳", "否", "簡易裝潢", true, false, false, false, true, true, false, false, "林口站", "公車站", "市場最低價",true,true,true,"","","","","屋主","陳小明",true,"0988888888","02","27315698","kevin87332000@gmail.com","h12s12bs","啟用" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Houses");
        }
    }
}
