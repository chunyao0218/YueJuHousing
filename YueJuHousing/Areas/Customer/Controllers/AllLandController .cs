using Microsoft.AspNetCore.Mvc;
using YueJuHousing.DataAccess.Repository;
using YueJuHousing.DataAccess.Repository.IRepository;
using YueJuHousing.Models;
using System.Linq;

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
            IEnumerable<Land> landList = _unitOfWork.Land.GetAll().ToList();

            Dictionary<int, int> imageCounts = new Dictionary<int, int>();

            // 遍历每个 Land 对象，计算图片数量
            foreach (var land in landList)
            {
                int imageCount = 0;

                // 将图片URL属性放入数组中
                string[] imageUrls = {
                    land.ImageUrl,
                    land.ImageUrl2,
                    land.ImageUrl3,
                    land.ImageUrl4,
                    land.ImageUrl5,
                    land.ImageUrl6,
                    land.ImageUrl7,
                    land.ImageUrl8,
                    land.ImageUrl9
                };

                // 使用循环检查每个URL是否非空
                foreach (var url in imageUrls)
                {
                    if (!string.IsNullOrEmpty(url))
                    {
                        imageCount++;
                    }
                }

                // 将图片数量与 Land Id 关联起来，存入字典
                imageCounts[land.Id] = imageCount;
            }

            // 将 Land 列表和图片数量字典一起传递给视图
            ViewBag.ImageCountIndex = imageCounts;

            return View(landList);
        }

        public IActionResult Details(int landId)
        {
            Land land = _unitOfWork.Land.Get(u => u.Id == landId);

            // 初始化图片数量计数器
            int imageCount = 0;

            // 将图片URL属性放入数组中
            string[] imageUrls = {
                land.ImageUrl,
                land.ImageUrl2,
                land.ImageUrl3,
                land.ImageUrl4,
                land.ImageUrl5,
                land.ImageUrl6,
                land.ImageUrl7,
                land.ImageUrl8,
                land.ImageUrl9
            };

            // 使用循环检查每个URL是否非空
            foreach (var url in imageUrls)
            {
                if (!string.IsNullOrEmpty(url))
                {
                    imageCount++;
                }
            }

            // 将图片数量传递给视图
            ViewBag.ImageCountDetail = imageCount;

            return View(land);
        }
    }
}
