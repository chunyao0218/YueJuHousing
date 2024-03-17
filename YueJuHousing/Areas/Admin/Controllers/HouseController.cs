using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.IdentityModel.Tokens;
using System.Collections.Generic;
using System.Reflection.Metadata;
using YueJuHousing.DataAccess.Data;
using YueJuHousing.DataAccess.Repository.IRepository;
using YueJuHousing.Models;
using YueJuHousing.Models.ViewModels;

namespace YueJuHousing.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class HouseController : Controller
    {
        //
        //private readonly ICategoryRepository _categoryRepo;
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly IUnitOfWork _unitOfWork;
        //private readonly ApplicationDbContext _db;
        public HouseController(IUnitOfWork unitOfWork, IWebHostEnvironment webHostEnvironment)
        {
            _unitOfWork = unitOfWork;
            _webHostEnvironment = webHostEnvironment;
        }

        public IActionResult Index()
        {
            List<House> objCategoryList = _unitOfWork.House.GetAll(includeProperties: "Category").ToList();
            return View(objCategoryList);
        }

        public IActionResult Upsert(int? id)
        {
            HouseVM houseVM = new()
            {
                CategoryList = _unitOfWork.Category.GetAll().Select(u => new SelectListItem
                {
                    Text = u.Name,
                    Value = u.Id.ToString()
                }),
                House = new House()
            };
            //
            if (id == null || id == 0)
            {
                //執行新增
                return View(houseVM);
            }
            else
            {
                //執行編輯
                houseVM.House = _unitOfWork.House.Get(u => u.Id == id);
                return View(houseVM);
            }
        }

        [HttpPost]
        public IActionResult Upsert(HouseVM houseVM, List<IFormFile>? files)
        {
            if (ModelState.IsValid)
            {
                //
                string wwwRootPath = _webHostEnvironment.WebRootPath;
                
                if(files != null && files.Count > 0)
                {
                    List<string> imageUrls = new List<string>();
                    for (int i = 0; i < files.Count; i++)
                    {
                        string fileName = Guid.NewGuid().ToString() + Path.GetExtension(files[i].FileName);
                        string housePath = Path.Combine(wwwRootPath, @"images\house");

                        //有新圖片上傳，刪除舊照片
                        if (!string.IsNullOrEmpty(houseVM.House.ImageUrl))
                        {
                            var oldImagePath = Path.Combine(wwwRootPath, houseVM.House.ImageUrl.TrimStart('\\'));
                            if (System.IO.File.Exists(oldImagePath))
                            {
                                System.IO.File.Delete(oldImagePath);
                            }
                        }

                        using (var fileStream = new FileStream(Path.Combine(housePath, fileName), FileMode.Create))
                        {
                            files[i].CopyTo(fileStream);
                        }
                        imageUrls.Add(@"\images\house\" + fileName);
                    }

                    // 設置圖片URL時，使用動態的屬性名稱
                    for (int i = 0; i < imageUrls.Count; i++)
                    {
                        switch (i)
                        {
                            case 0:
                                houseVM.House.ImageUrl = imageUrls[i];
                                break;
                            case 1:
                                houseVM.House.ImageUrl2 = imageUrls[i];
                                break;
                            case 2:
                                houseVM.House.ImageUrl3 = imageUrls[i];
                                break;
                            case 3:
                                houseVM.House.ImageUrl4 = imageUrls[i];
                                break;
                            case 4:
                                houseVM.House.ImageUrl5 = imageUrls[i];
                                break;
                            case 5:
                                houseVM.House.ImageUrl6 = imageUrls[i];
                                break;
                            case 6:
                                houseVM.House.ImageUrl7 = imageUrls[i];
                                break;
                            case 7:
                                houseVM.House.ImageUrl8 = imageUrls[i];
                                break;
                            case 8:
                                houseVM.House.ImageUrl9 = imageUrls[i];
                                break;
                            case 9:
                                houseVM.House.PatternImageUrl = imageUrls[9];
                                break;
                            default:
                                break;
                        }
                    }

                    houseVM.House.ImageUrl = houseVM.House.ImageUrl ?? string.Empty;
                    houseVM.House.ImageUrl2 = houseVM.House.ImageUrl2 ?? string.Empty;
                    houseVM.House.ImageUrl3 = houseVM.House.ImageUrl3 ?? string.Empty;
                    houseVM.House.ImageUrl4 = houseVM.House.ImageUrl4 ?? string.Empty;
                    houseVM.House.ImageUrl5 = houseVM.House.ImageUrl5 ?? string.Empty;
                    houseVM.House.ImageUrl6 = houseVM.House.ImageUrl6 ?? string.Empty;
                    houseVM.House.ImageUrl7 = houseVM.House.ImageUrl7 ?? string.Empty;
                    houseVM.House.ImageUrl8 = houseVM.House.ImageUrl8 ?? string.Empty;
                    houseVM.House.ImageUrl9 = houseVM.House.ImageUrl9 ?? string.Empty;

                }

                if (houseVM.House.Id == 0)
                {
                    houseVM.House.PatternImageUrl = houseVM.House.PatternImageUrl ?? string.Empty;
                    //刊登物件
                    _unitOfWork.House.Add(houseVM.House);
                }
                else
                {
                    //更新物件
                    _unitOfWork.House.Update(houseVM.House);
                }
                _unitOfWork.Save();
                TempData["success"] = "物件新增成功！";
                return RedirectToAction("Index");
            }
            else
            {
                houseVM.CategoryList = _unitOfWork.Category.GetAll().Select(u => new SelectListItem
                {
                    Text = u.Name,
                    Value = u.Id.ToString()
                });
                return View(houseVM);
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

