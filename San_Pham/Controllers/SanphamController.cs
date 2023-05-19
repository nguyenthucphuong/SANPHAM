using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;

namespace San_Pham.Controllers
{
    public class SanphamController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
       

    }
}
