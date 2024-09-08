using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Reflection.Metadata;
using YueJuHousing.DataAccess.Data;
using YueJuHousing.DataAccess.Repository.IRepository;
using YueJuHousing.Models;
using YueJuHousing.Models.ViewModels;

namespace YueJuHousing.Areas.Customer.Controllers
{
    [Area("Customer")]
    public class LandController : Controller
    {
        //
        //private readonly ICategoryRepository _categoryRepo;
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly IUnitOfWork _unitOfWork;
        private readonly UserManager<IdentityUser> _userManager;
        //private readonly ApplicationDbContext _db;
        public LandController(IUnitOfWork unitOfWork, IWebHostEnvironment webHostEnvironment, UserManager<IdentityUser> userManager)
        {
            _unitOfWork = unitOfWork;
            _webHostEnvironment = webHostEnvironment;
            _userManager = userManager;
        }

        public IActionResult Index()
        {
            // 設定目前登入者的 UserId
            var userId = _userManager.GetUserId(User);

            IEnumerable<Land> landList = _unitOfWork.Land.GetLandsByUserId(userId);
            //List<Land> objCategoryList = _unitOfWork.Land.GetAll().ToList();
            return View(landList);
        }

        public IActionResult Upsert(int? id)
        {
            LandVM landVM = new()
            {
                CategoryList = _unitOfWork.Category.GetAll().Select(u => new SelectListItem
                {
                    Text = u.Name,
                    Value = u.Id.ToString()
                }),
                Land = new Land()
            };
            //
            if (id == null || id == 0)
            {
                //執行新增
                return View(landVM);
            }
            else
            {
                //執行編輯
                landVM.Land = _unitOfWork.Land.Get(u => u.Id == id);
                return View(landVM);
            }
        }

        [HttpPost]
        public IActionResult Upsert(LandVM landVM, List<IFormFile> files)
        {
            if (landVM.Land.AreaCodePhoneNumber == "無")
            {
                landVM.Land.PhoneNumber = null;
            }

            // 如果選擇了非都市土地，將 LandUseZoneTypeDetail 設為 null
            if (landVM.Land.LandUseZone == "非都市土地")
            {
                landVM.Land.LandUseZoneTypeDetail = null;
            }

            // 如果仍然遇到驗證錯誤，您可以明確移除對 VideoUrl 的檢查
            ModelState.Remove("Land.VideoUrl");

            if (ModelState.IsValid)
            {
                //
                string wwwRootPath = _webHostEnvironment.WebRootPath;

                if (files != null && files.Count > 0)
                {
                    List<string> imageUrls = new List<string>();

                    foreach (var uploadedFile in files)
                    {
                        string fileName = Guid.NewGuid().ToString() + Path.GetExtension(uploadedFile.FileName);
                        string landPath = Path.Combine(wwwRootPath, @"images\land");

                        using (var fileStream = new FileStream(Path.Combine(landPath, fileName), FileMode.Create))
                        {
                            uploadedFile.CopyTo(fileStream);
                        }
                        imageUrls.Add(@"\images\land\" + fileName);
                    }

                    // 清空之前的图片链接
                    landVM.Land.ImageUrl = string.Empty;
                    landVM.Land.ImageUrl2 = string.Empty;
                    landVM.Land.ImageUrl3 = string.Empty;
                    landVM.Land.ImageUrl4 = string.Empty;
                    landVM.Land.ImageUrl5 = string.Empty;
                    landVM.Land.ImageUrl6 = string.Empty;
                    landVM.Land.ImageUrl7 = string.Empty;
                    landVM.Land.ImageUrl8 = string.Empty;
                    landVM.Land.ImageUrl9 = string.Empty;

                    // 将新的图片链接填充到对象中
                    for (int i = 0; i < imageUrls.Count; i++)
                    {
                        switch (i)
                        {
                            case 0:
                                landVM.Land.ImageUrl = imageUrls[i];
                                break;
                            case 1:
                                landVM.Land.ImageUrl2 = imageUrls[i];
                                break;
                            case 2:
                                landVM.Land.ImageUrl3 = imageUrls[i];
                                break;
                            case 3:
                                landVM.Land.ImageUrl4 = imageUrls[i];
                                break;
                            case 4:
                                landVM.Land.ImageUrl5 = imageUrls[i];
                                break;
                            case 5:
                                landVM.Land.ImageUrl6 = imageUrls[i];
                                break;
                            case 6:
                                landVM.Land.ImageUrl7 = imageUrls[i];
                                break;
                            case 7:
                                landVM.Land.ImageUrl8 = imageUrls[i];
                                break;
                            case 8:
                                landVM.Land.ImageUrl9 = imageUrls[i];
                                break;
                            default:
                                break;
                        }
                    }
                }

                // 設定目前登入者的 UserId
                var userId = _userManager.GetUserId(User);
                landVM.Land.UserId = userId;

                if (landVM.Land.Id == 0)
                {
                    // to do
                    landVM.Land.CreateDate = DateTime.Now;
                    _unitOfWork.Land.Add(landVM.Land);
                }
                else
                {
                    TimeZoneInfo taiwanTimeZone = TimeZoneInfo.FindSystemTimeZoneById("Taipei Standard Time");
                    landVM.Land.ModifyDate = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, taiwanTimeZone);
                    _unitOfWork.Land.Update(landVM.Land);
                }
                _unitOfWork.Save();
                TempData["success"] = "物件新增成功！";
                return RedirectToAction("Index");
            }
            else
            {
                landVM.CategoryList = _unitOfWork.Category.GetAll().Select(u => new SelectListItem
                {
                    Text = u.Name,
                    Value = u.Id.ToString()
                });

                // 檢查 ModelState 中的錯誤
                var errors = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage).ToList();
                foreach (var error in errors)
                {
                    Console.WriteLine(error); // 或者使用其他方式輸出錯誤信息
                }
                return View(landVM);
            }
        }

        #region 新增功能
        //新增畫面
        //public IActionResult Create()
        //{
        //    //
        //    HouseVM houseVM = new()
        //    {
        //        CategoryList = _unitOfWork.Category.GetAll().Select(u => new SelectListItem
        //        {
        //            Text = u.Name,
        //            Value = u.Id.ToString()
        //        }),
        //        House = new House()
        //    };

        //    return View(houseVM);
        //}

        //[HttpPost]
        //public IActionResult Create(HouseVM houseVM)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        _unitOfWork.House.Add(houseVM.House);
        //        _unitOfWork.Save();
        //        TempData["success"] = "物件新增成功！";
        //        return RedirectToAction("Index");
        //    }
        //    else
        //    {
        //        houseVM.CategoryList = _unitOfWork.Category.GetAll().Select(u => new SelectListItem
        //        {
        //            Text = u.Name,
        //            Value = u.Id.ToString()
        //        });
        //        return View(houseVM);
        //    }
        //}
        #endregion

        #region 編輯功能
        //編輯功能
        //public IActionResult Edit(int? id)
        //{
        //    if (id == null || id == 0)
        //    {
        //        return NotFound();
        //    }
        //    House? houseFromDb = _unitOfWork.House.Get(u => u.Id == id);
        //    if (houseFromDb == null)
        //    {
        //        return NotFound();
        //    }
        //    return View(houseFromDb);
        //}

        //[HttpPost]
        //public IActionResult Edit(House obj)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        _unitOfWork.House.Update(obj);
        //        _unitOfWork.Save();
        //        TempData["success"] = "物件編輯成功！";
        //        return RedirectToAction("Index");
        //    }
        //    return View();
        //}
        #endregion

        #region 刪除功能
        //刪除
        //public IActionResult Delete(int? id)
        //{
        //    if (id == null || id == 0)
        //    {
        //        return NotFound();
        //    }
        //    House houseFromDb = _unitOfWork.House.Get(u => u.Id == id);
        //    if (houseFromDb == null)
        //    {
        //        return NotFound();
        //    }
        //    return View(houseFromDb);
        //}
        //[HttpPost, ActionName("Delete")]
        //public IActionResult DeletePOST(int? id)
        //{
        //    House? obj = _unitOfWork.House.Get(u => u.Id == id);
        //    if (obj == null)
        //    {
        //        return NotFound();
        //    }
        //    _unitOfWork.House.Remove(obj);
        //    _unitOfWork.Save();
        //    TempData["success"] = "物件刪除成功！";
        //    return RedirectToAction("Index");
        //}
        #endregion 刪除

        #region API CALLS
        [HttpGet]
        public IActionResult GetAll()
        {
            List<House> objHouseList = _unitOfWork.House.GetAll(includeProperties: "Category").ToList();
            return Json(new { data = objHouseList });
        }

        [HttpDelete]
        public IActionResult Delete(int? id)
        {
            var houdrToBeDeleted = _unitOfWork.House.Get(u => u.Id == id);
            if (houdrToBeDeleted == null)
            {
                return Json(new { success = false, message = "刪除失敗" });
            }

            var oldImagePath = Path.Combine(_webHostEnvironment.WebRootPath, houdrToBeDeleted.ImageUrl.TrimStart('\\'));
            if (System.IO.File.Exists(oldImagePath))
            {
                System.IO.File.Delete(oldImagePath);
            }

            _unitOfWork.House.Remove(houdrToBeDeleted);
            _unitOfWork.Save();

            return Json(new { success = true, message = "刪除成功" });
        }
        #endregion
    }
}

