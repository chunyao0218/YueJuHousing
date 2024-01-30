using Microsoft.AspNetCore.Mvc;

namespace YueJuHousing.Areas.Customer.Controllers
{
    [Area("Customer")]
    public class BuyAllHouse : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

    }
}
