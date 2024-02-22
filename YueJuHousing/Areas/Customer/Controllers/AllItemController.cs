using Microsoft.AspNetCore.Mvc;

namespace YueJuHousing.Areas.Customer.Controllers
{
    [Area("Customer")]
    public class AllItemController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
