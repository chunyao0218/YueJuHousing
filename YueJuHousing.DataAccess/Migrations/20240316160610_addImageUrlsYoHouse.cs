using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace YueJuHousing.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class addImageUrlsYoHouse : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrl2",
                table: "Houses",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl3",
                table: "Houses",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl4",
                table: "Houses",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl5",
                table: "Houses",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl6",
                table: "Houses",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl7",
                table: "Houses",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl8",
                table: "Houses",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl9",
                table: "Houses",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Houses",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "ImageUrl2", "ImageUrl3", "ImageUrl4", "ImageUrl5", "ImageUrl6", "ImageUrl7", "ImageUrl8", "ImageUrl9" },
                values: new object[] { "", "", "", "", "", "", "", "" });

            migrationBuilder.UpdateData(
                table: "Houses",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "ImageUrl2", "ImageUrl3", "ImageUrl4", "ImageUrl5", "ImageUrl6", "ImageUrl7", "ImageUrl8", "ImageUrl9" },
                values: new object[] { "", "", "", "", "", "", "", "" });

            migrationBuilder.UpdateData(
                table: "Houses",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "ImageUrl2", "ImageUrl3", "ImageUrl4", "ImageUrl5", "ImageUrl6", "ImageUrl7", "ImageUrl8", "ImageUrl9" },
                values: new object[] { "", "", "", "", "", "", "", "" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl2",
                table: "Houses");

            migrationBuilder.DropColumn(
                name: "ImageUrl3",
                table: "Houses");

            migrationBuilder.DropColumn(
                name: "ImageUrl4",
                table: "Houses");

            migrationBuilder.DropColumn(
                name: "ImageUrl5",
                table: "Houses");

            migrationBuilder.DropColumn(
                name: "ImageUrl6",
                table: "Houses");

            migrationBuilder.DropColumn(
                name: "ImageUrl7",
                table: "Houses");

            migrationBuilder.DropColumn(
                name: "ImageUrl8",
                table: "Houses");

            migrationBuilder.DropColumn(
                name: "ImageUrl9",
                table: "Houses");
        }
    }
}
