using Microsoft.EntityFrameworkCore.Migrations;

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
                    HouseName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HouseAge = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SquareMeters = table.Column<double>(type: "float", nullable: false),
                    Floor = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Houses", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Houses",
                columns: new[] { "Id", "Address", "HouseAge", "HouseName", "Price", "SquareMeters", "floor" },
                values: new object[,]
                {
                    { 1, "新北市中和區", "", "景安文匯", 15000000.0, 20.0, "3F" },
                    { 2, "台北市大安區", "", "大安得逸", 30000000.0, 30.0, "5F" },
                    { 3, "台中市西屯區", "", "中港層峰", 20000000.0, 40.0, "7F" }
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
