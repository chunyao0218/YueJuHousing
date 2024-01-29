using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace YueJuHousing.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class addForeignKeyForCategoryHouseRelation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "floor",
                table: "Houses",
                newName: "Floor");

            migrationBuilder.AddColumn<int>(
                name: "CategoryId",
                table: "Houses",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Houses",
                keyColumn: "Id",
                keyValue: 1,
                column: "CategoryId",
                value: 1);

            migrationBuilder.UpdateData(
                table: "Houses",
                keyColumn: "Id",
                keyValue: 2,
                column: "CategoryId",
                value: 2);

            migrationBuilder.UpdateData(
                table: "Houses",
                keyColumn: "Id",
                keyValue: 3,
                column: "CategoryId",
                value: 3);

            migrationBuilder.CreateIndex(
                name: "IX_Houses_CategoryId",
                table: "Houses",
                column: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Houses_Categories_CategoryId",
                table: "Houses",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Houses_Categories_CategoryId",
                table: "Houses");

            migrationBuilder.DropIndex(
                name: "IX_Houses_CategoryId",
                table: "Houses");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "Houses");

            migrationBuilder.RenameColumn(
                name: "Floor",
                table: "Houses",
                newName: "floor");
        }
    }
}
