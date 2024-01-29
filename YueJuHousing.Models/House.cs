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

        [DisplayName("物件名稱")]
        [Required]
        public string HouseName { get; set; }

        [DisplayName("地址")]
        [Required]
        public string Address { get; set; }

        [DisplayName("屋齡")]
        [Required]
        public string HouseAge { get; set; }

        [DisplayName("坪數")]
        [Required]
        public double SquareMeters { get; set; }

        [DisplayName("樓層")]
        [Required]
        public string Floor { get; set; }

        [DisplayName("價格")]
        [Range(1, 1000000000)]
        public double Price { get; set; }

        [DisplayName("類別")]
        public int CategoryId { get; set; }

        [ForeignKey("CategoryId")]
        [ValidateNever]
        public Category Category { get; set; }

        [ValidateNever]
        public string ImageUrl { get; set; }
    }
}
