using Microsoft.AspNetCore.Mvc;
using YueJuHousing.DataAccess.Repository;
using YueJuHousing.DataAccess.Repository.IRepository;
using YueJuHousing.Models;

namespace YueJuHousing.Areas.Customer.Controllers
{
    [Area("Customer")]
    public class AllHouseController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public AllHouseController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IActionResult Index()
        {
            IEnumerable<House> houseList = _unitOfWork.House.GetAll(includeProperties:"Category");

            return View(houseList);
        }

        public IActionResult Details(int houseId)
        {
            House house= _unitOfWork.House.Get(u => u.Id == houseId, includeProperties: "Category");

            return View(house);
        }
    }
}
