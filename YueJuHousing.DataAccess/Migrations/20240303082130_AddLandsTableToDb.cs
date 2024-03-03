using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace YueJuHousing.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class AddLandsTableToDb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
           
            migrationBuilder.CreateTable(
                name: "Lands",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LandSerialNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OwnerShipType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SquareMeters = table.Column<double>(type: "float", nullable: false),
                    SquareMetersUnit = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LandWidth = table.Column<double>(type: "float", nullable: false),
                    LandDepth = table.Column<double>(type: "float", nullable: false),
                    CloseRoad = table.Column<double>(type: "float", nullable: false),
                    LandUseZone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LandUseZoneType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LandUseZoneTypeDetail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LandType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BuildingCoverageRate = table.Column<double>(type: "float", nullable: false),
                    BuildingBulkRate = table.Column<double>(type: "float", nullable: false),
                    Farming = table.Column<bool>(type: "bit", nullable: false),
                    Housing = table.Column<bool>(type: "bit", nullable: false),
                    ProcessingPlant = table.Column<bool>(type: "bit", nullable: false),
                    SMEnterprise = table.Column<bool>(type: "bit", nullable: false),
                    HighTechIndustry = table.Column<bool>(type: "bit", nullable: false),
                    Factory = table.Column<bool>(type: "bit", nullable: false),
                    StoreHouse = table.Column<bool>(type: "bit", nullable: false),
                    Advertise = table.Column<bool>(type: "bit", nullable: false),
                    OpenStore = table.Column<bool>(type: "bit", nullable: false),
                    HaveElectricity = table.Column<bool>(type: "bit", nullable: false),
                    HaveWater = table.Column<bool>(type: "bit", nullable: false),
                    PathWay = table.Column<bool>(type: "bit", nullable: false),
                    SmoothGround = table.Column<bool>(type: "bit", nullable: false),
                    LandStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ROI = table.Column<double>(type: "float", nullable: false),
                    SaleBySplit = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MaximumHeightRestriction = table.Column<double>(type: "float", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    SelfFunding = table.Column<double>(type: "float", nullable: false),
                    PercentageSelfFunding = table.Column<double>(type: "float", nullable: false),
                    EachSquarePrice = table.Column<double>(type: "float", nullable: false),
                    AdTitle = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FeatureDescribe = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VideoUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactPeopleType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactPeopleName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NoIntermediaryDisturb = table.Column<bool>(type: "bit", nullable: false),
                    CellPhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AreaCodePhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LineID = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProtectPhone = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lands", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Lands",
                columns: new[] { "Id", "AdTitle", "Address", "Advertise", "AreaCodePhoneNumber", "BuildingBulkRate", "BuildingCoverageRate", "CellPhoneNumber", "CloseRoad", "ContactPeopleName", "ContactPeopleType", "EachSquarePrice", "Email", "Factory", "Farming", "FeatureDescribe", "HaveElectricity", "HaveWater", "HighTechIndustry", "Housing", "ImageUrl", "LandDepth", "LandSerialNumber", "LandStatus", "LandType", "LandUseZone", "LandUseZoneType", "LandUseZoneTypeDetail", "LandWidth", "LineID", "MaximumHeightRestriction", "NoIntermediaryDisturb", "OpenStore", "OwnerShipType", "PathWay", "PercentageSelfFunding", "PhoneNumber", "Price", "ProcessingPlant", "ProtectPhone", "ROI", "SMEnterprise", "SaleBySplit", "SelfFunding", "SmoothGround", "SquareMeters", "SquareMetersUnit", "StoreHouse", "VideoUrl" },
                values: new object[,]
                {
                    { 1, "市場最低價", "新北市中和區", false, "02", 20.0, 20.0, "0988888888", 15.0, "陳小明", "屋主", 100.0, "kevin87332000@gmail.com", false, false, "", true, true, false, true, "", 15.0, "板橋區篤行段0063-0000", "自用中", "住宅用地", "都市土地", "住宅區", "住1", 15.0, "h12s12bs", 30.0, true, false, "民有土地", true, 20.0, "27315698", 15000000.0, false, "啟用", 10.0, false, "視情況而定", 300.0, true, 20.0, "坪", false, "" },
                    { 2, "市場最低價", "台北市大安區", false, "02", 20.0, 20.0, "0988888888", 15.0, "陳小明", "屋主", 100.0, "kevin87332000@gmail.com", false, false, "", true, true, false, true, "", 15.0, "板橋區篤行段0063-0000", "自用中", "住宅用地", "都市土地", "住宅區", "住1", 15.0, "h12s12bs", 30.0, true, false, "民有土地", true, 30.0, "27315698", 30000000.0, false, "啟用", 10.0, false, "視情況而定", 600.0, true, 30.0, "坪", false, "" },
                    { 3, "市場最低價", "台中市西屯區", false, "02", 20.0, 20.0, "0988888888", 15.0, "陳小明", "屋主", 100.0, "kevin87332000@gmail.com", false, false, "", true, true, false, true, "", 15.0, "板橋區篤行段0063-0000", "自用中", "住宅用地", "都市土地", "住宅區", "住1", 15.0, "h12s12bs", 30.0, true, false, "民有土地", true, 40.0, "27315698", 20000000.0, false, "啟用", 10.0, false, "視情況而定", 400.0, true, 40.0, "坪", false, "" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Lands");
        }
    }
}
