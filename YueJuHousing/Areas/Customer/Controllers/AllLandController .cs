using Microsoft.AspNetCore.Mvc;
using YueJuHousing.DataAccess.Repository;
using YueJuHousing.DataAccess.Repository.IRepository;
using YueJuHousing.Models;
using System.Linq;
using YueJuHousing.Models.ViewModels;
using Microsoft.IdentityModel.Tokens;

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

        public IActionResult Index(LandSearchVM landSearchVM)
        {
            IEnumerable<Land> landList = _unitOfWork.Land.GetAll().ToList();
            // 篩選縣市
            if (!string.IsNullOrEmpty(landSearchVM.City))
            {
                landList = landList.Where(l => l.Address.Contains(landSearchVM.City));
            }
            // 篩選地區
            if (!string.IsNullOrEmpty(landSearchVM.District))
            {
                landList = landList.Where(l => l.Address.Contains(landSearchVM.District));
            }
            // 篩選價格區間
            if (landSearchVM.MinPrice.Any())
            {
                foreach (var minPrice in landSearchVM.MinPrice)
                {
                    double min = Convert.ToDouble(minPrice);

                    landList = landList.Where(l => l.Price >= min);
                }
            }

            if (landSearchVM.MaxPrice.Any())
            {
                foreach (var maxPrice in landSearchVM.MaxPrice)
                {
                    double max = Convert.ToDouble(maxPrice);

                    landList = landList.Where(l => l.Price <= max);
                }
            }
            // 篩選坪數（考慮單位轉換）
            if (landSearchVM.Area.Any())
            {
                foreach (var areaRange in landSearchVM.Area)
                {
                    switch (areaRange)
                    {
                        case "50":
                            landList = landList.Where(l =>
                                l.SquareMetersUnit == "坪" && l.SquareMeters < 50 ||
                                l.SquareMetersUnit == "平方公尺" && (l.SquareMeters / 3.305785) < 50);
                            break;
                        case "100":
                            landList = landList.Where(l =>
                                l.SquareMetersUnit == "坪" && l.SquareMeters >= 50 && l.SquareMeters < 100 ||
                                l.SquareMetersUnit == "平方公尺" && (l.SquareMeters / 3.305785) >= 50 && (l.SquareMeters / 3.305785) < 100);
                            break;
                        case "200":
                            landList = landList.Where(l =>
                                l.SquareMetersUnit == "坪" && l.SquareMeters >= 100 && l.SquareMeters < 200 ||
                                l.SquareMetersUnit == "平方公尺" && (l.SquareMeters / 3.305785) >= 100 && (l.SquareMeters / 3.305785) < 200);
                            break;
                        case "400":
                            landList = landList.Where(l =>
                                l.SquareMetersUnit == "坪" && l.SquareMeters >= 200 && l.SquareMeters < 400 ||
                                l.SquareMetersUnit == "平方公尺" && (l.SquareMeters / 3.305785) >= 200 && (l.SquareMeters / 3.305785) < 400);
                            break;
                        case "700":
                            landList = landList.Where(l =>
                                l.SquareMetersUnit == "坪" && l.SquareMeters >= 400 && l.SquareMeters < 700 ||
                                l.SquareMetersUnit == "平方公尺" && (l.SquareMeters / 3.305785) >= 400 && (l.SquareMeters / 3.305785) < 700);
                            break;
                        case "1000":
                            landList = landList.Where(l =>
                                l.SquareMetersUnit == "坪" && l.SquareMeters >= 700 && l.SquareMeters < 1000 ||
                                l.SquareMetersUnit == "平方公尺" && (l.SquareMeters / 3.305785) >= 700 && (l.SquareMeters / 3.305785) < 1000);
                            break;
                        case "1000+":
                            landList = landList.Where(l =>
                                l.SquareMetersUnit == "坪" && l.SquareMeters >= 1000 ||
                                l.SquareMetersUnit == "平方公尺" && (l.SquareMeters / 3.305785) >= 1000);
                            break;
                    }
                }
            }
            // 篩選類型
            if (landSearchVM.LandType.Any())
            {
                landList = landList.Where(l => landSearchVM.LandType.Contains(l.LandType));
            }
            // 篩選使用分區（獨立處理）
            if (!string.IsNullOrEmpty(landSearchVM.LandUseZone))
            {
                landList = landList.Where(l => l.LandUseZone == landSearchVM.LandUseZone);
            }

            // 篩選使用分區 LandUseZone
            if (!string.IsNullOrEmpty(landSearchVM.LandUseZone))
            {
                landList = landList.Where(l => l.LandUseZone == landSearchVM.LandUseZone);
            }

            // 篩選 LandUseZoneType
            if (landSearchVM.LandUseZoneType.Any())
            {
                landList = landList.Where(l => landSearchVM.LandUseZoneType.Contains(l.LandUseZoneType));
            }



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
