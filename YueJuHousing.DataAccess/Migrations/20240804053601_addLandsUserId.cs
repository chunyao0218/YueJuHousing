using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace YueJuHousing.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class addLandsUserId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Lands",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Lands",
                keyColumn: "Id",
                keyValue: 1,
                column: "UserId",
                value: "");

            migrationBuilder.UpdateData(
                table: "Lands",
                keyColumn: "Id",
                keyValue: 2,
                column: "UserId",
                value: "");

            migrationBuilder.UpdateData(
                table: "Lands",
                keyColumn: "Id",
                keyValue: 3,
                column: "UserId",
                value: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Lands");
        }
    }
}
