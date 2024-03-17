﻿using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
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
        //private readonly ApplicationDbContext _db;
        public LandController(IUnitOfWork unitOfWork, IWebHostEnvironment webHostEnvironment)
        {
            _unitOfWork = unitOfWork;
            _webHostEnvironment = webHostEnvironment;
        }

        public IActionResult Index()
        {
            List<Land> objCategoryList = _unitOfWork.Land.GetAll().ToList();
            return View(objCategoryList);
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
        // 本次修改部分
        public IActionResult Upsert(LandVM landVM, IFormFile? file)
        {
            if (ModelState.IsValid)
            {
                //
                string wwwRootPath = _webHostEnvironment.WebRootPath;
                
                if(file != null)
                {
                    string fileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
                    string landPath= Path.Combine(wwwRootPath, @"images\land");

                    //有新圖片上傳，刪除舊照片
                    if (!string.IsNullOrEmpty(landVM.Land.ImageUrl))
                    {
                        var oldImagePath = Path.Combine(wwwRootPath, landVM.Land.ImageUrl.TrimStart('\\'));
                        if (System.IO.File.Exists(oldImagePath))
                        {
                            System.IO.File.Delete(oldImagePath);
                        }
                    }

                    using (var fileStream = new FileStream(Path.Combine(landPath, fileName), FileMode.Create))
                    {
                        file.CopyTo(fileStream);
                    }
                    landVM.Land.ImageUrl = @"\images\land\" + fileName;



                    
                }


                if (landVM.Land.Id == 0)
                {
                    _unitOfWork.Land.Add(landVM.Land);
                }
                else
                {
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

