using Microsoft.AspNetCore.Mvc;
using YueJuHousing.DataAccess.Repository;
using YueJuHousing.DataAccess.Repository.IRepository;
using YueJuHousing.Models;

namespace YueJuHousing.Areas.Customer.Controllers
{
    [Area("Customer")]
    public class AllLandController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public AllLandController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IActionResult Index()
        {
            IEnumerable<Land> landList = _unitOfWork.Land.GetAll(includeProperties:"Category");

            return View(landList);
        }

        public IActionResult Details(int landId)
        {
            Land land= _unitOfWork.Land.Get(u => u.Id == landId, includeProperties: "Category");

            return View(land);
        }
    }
}
